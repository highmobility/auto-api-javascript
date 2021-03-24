import path from 'path';
import ts from 'typescript';

import { Capability, Properties } from '@/types';
import { configuration } from '@/configuration';
import { snakeCaseToPascalCase } from '@/utils/strings';

import {
  CapabilityBaseClassName,
  CapabilityClassesPath,
  ConfigurationClassName,
} from './shared/constants';
import { cleanOrCreateDirectory, printSourceFile } from './shared/utils';
import * as tsUtils from './shared/typescript';

/*
 * Constants
 */

const ClassTypeIdentifier = 'CapabilityClass';
const IdentifierToken = 'Identifier';
const NameToken = 'Name';
const PropertiesToken = 'Properties';
const UniversalPropertiesFileName = 'properties';
const UniversalPropertiesToken = 'UniversalProperties';

/*
 * Code generation utilities
 */

function createConstructorDeclaration(className: string) {
  return tsUtils.createConstructorDeclaration([
    ts.factory.createExpressionStatement(
      ts.factory.createCallExpression(ts.factory.createSuper(), undefined, [
        ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(
            ts.factory.createIdentifier(ConfigurationClassName),
            'getCapabilityDefinition',
          ),
          undefined,
          [
            ts.factory.createPropertyAccessExpression(
              ts.factory.createIdentifier(className),
              ts.factory.createIdentifier(NameToken),
            ),
          ],
        ),
        ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(
            ts.factory.createIdentifier(ConfigurationClassName),
            'getUniversalProperties',
          ),
          undefined,
          [],
        ),
      ]),
    ),
  ]);
}

function createIdentifierDeclaration({ identifier }: Capability) {
  return ts.factory.createPropertyDeclaration(
    undefined,
    [
      ts.factory.createModifier(ts.SyntaxKind.StaticKeyword),
      ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword),
    ],
    ts.factory.createIdentifier(IdentifierToken),
    undefined,
    undefined,
    ts.factory.createObjectLiteralExpression(
      [
        ts.factory.createPropertyAssignment(
          ts.factory.createIdentifier('msb'),
          ts.factory.createNumericLiteral(identifier.msb),
        ),
        ts.factory.createPropertyAssignment(
          ts.factory.createIdentifier('lsb'),
          ts.factory.createNumericLiteral(identifier.lsb),
        ),
      ],
      true,
    ),
  );
}

function createNameDeclaration(name: string) {
  return ts.factory.createPropertyDeclaration(
    undefined,
    [
      ts.factory.createModifier(ts.SyntaxKind.StaticKeyword),
      ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword),
    ],
    ts.factory.createIdentifier(NameToken),
    undefined,
    undefined,
    ts.factory.createStringLiteral(name),
  );
}

function createPropertiesDeclaration() {
  return [PropertiesToken, UniversalPropertiesToken].map((token) =>
    ts.factory.createPropertyDeclaration(
      undefined,
      [
        ts.factory.createModifier(ts.SyntaxKind.StaticKeyword),
        ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword),
      ],
      ts.factory.createIdentifier(token),
      undefined,
      undefined,
      ts.factory.createIdentifier(token),
    ),
  );
}

function createPropertiesEnumDeclaration(
  properties: Properties,
  token = PropertiesToken,
  exportDeclaration = false,
) {
  return ts.factory.createEnumDeclaration(
    undefined,
    exportDeclaration ? [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)] : undefined,
    ts.factory.createIdentifier(token),
    properties
      .map(({ name }) => name)
      .sort()
      .map((name) =>
        ts.factory.createEnumMember(
          ts.factory.createIdentifier(snakeCaseToPascalCase(name)),
          ts.factory.createStringLiteral(name),
        ),
      ),
  );
}

function createCapabilityClassDefinition(className: string, capability: Capability) {
  return ts.factory.createClassDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    className,
    undefined,
    [
      ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.factory.createExpressionWithTypeArguments(
          ts.factory.createIdentifier(CapabilityBaseClassName),
          [
            ts.factory.createUnionTypeNode([
              tsUtils.createTemplateLiteralType(PropertiesToken),
              tsUtils.createTemplateLiteralType(UniversalPropertiesToken),
            ]),
          ],
        ),
      ]),
    ],
    [
      createIdentifierDeclaration(capability),
      createNameDeclaration(capability.name),
      ...createPropertiesDeclaration(),
      createConstructorDeclaration(className),
    ],
  );
}

function createCapabilityClassTypeDefinition(classNames: string[]) {
  return ts.factory.createTypeAliasDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(ClassTypeIdentifier),
    undefined,
    ts.factory.createUnionTypeNode(
      classNames.map((className) =>
        ts.factory.createTypeQueryNode(ts.factory.createIdentifier(className)),
      ),
    ),
  );
}

function createClassListDefinition(classNames: string[]) {
  return ts.factory.createVariableStatement(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          ts.factory.createIdentifier('ClassList'),
          undefined,
          ts.factory.createTypeReferenceNode(ts.factory.createIdentifier('Array'), [
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier(ClassTypeIdentifier),
              undefined,
            ),
          ]),
          ts.factory.createArrayLiteralExpression(
            classNames.map((className) => ts.factory.createIdentifier(className)),
            false,
          ),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  );
}

/*
 * Generate class definition files and export file
 */

function printCapabilityClassDefinition(filename: string, declarations: ts.Node[]) {
  const printer = tsUtils.createPrinter(filename);

  const nodes = [
    [
      printer(
        tsUtils.createImportDeclaration(
          `../core/${CapabilityBaseClassName}`,
          CapabilityBaseClassName,
        ),
      ),
      printer(
        tsUtils.createImportDeclaration(
          `../core/${ConfigurationClassName}`,
          ConfigurationClassName,
        ),
      ),
    ]
      .join('\n')
      .concat('\n'),
    printer(
      tsUtils.createImportDeclaration(`./${UniversalPropertiesFileName}`, UniversalPropertiesToken),
    ).concat('\n'),
    ...declarations.map((declaration) => printer(declaration).concat('\n')),
  ];

  printSourceFile(filename, nodes);
}

function printExportDefinitionsForCapabilities(classNames: string[]) {
  const filename = path.join(CapabilityClassesPath, `index.ts`);
  const printer = tsUtils.createPrinter(filename);

  const nodes = classNames.map((className) =>
    printer(tsUtils.createExportDeclaration(`./${className}`, className)),
  );

  printSourceFile(filename, nodes);
}

function printCapabilitiesMetaData(classNames: string[]) {
  const filename = path.join(CapabilityClassesPath, `classes.ts`);
  const printer = tsUtils.createPrinter(filename);

  const nodes = [
    classNames
      .map((className) => printer(tsUtils.createImportDeclaration(`./${className}`, className)))
      .join('\n')
      .concat('\n'),
    printer(createCapabilityClassTypeDefinition(classNames)).concat('\n'),
    printer(createClassListDefinition(classNames)),
  ];

  printSourceFile(filename, nodes);
}

function printUniversalProperties() {
  const filename = path.join(CapabilityClassesPath, `${UniversalPropertiesFileName}.ts`);
  const printer = tsUtils.createPrinter(filename);
  const nodes = [
    printer(
      createPropertiesEnumDeclaration(
        configuration.universal_properties,
        UniversalPropertiesToken,
        true,
      ),
    ),
  ];
  printSourceFile(filename, nodes);
}

function generateClassDefinitionsForCapabilitites() {
  // Clean or create destination dir
  cleanOrCreateDirectory(CapabilityClassesPath);

  // Generate files
  const capabilities = Object.values(configuration.capabilities);

  const classNames = capabilities
    .map((capability) => {
      const { name, properties } = capability;

      const className = snakeCaseToPascalCase(name);
      const propertiesDeclaration = createPropertiesEnumDeclaration(properties);
      const classDeclaration = createCapabilityClassDefinition(className, capability);

      printCapabilityClassDefinition(path.join(CapabilityClassesPath, `${className}.ts`), [
        propertiesDeclaration,
        classDeclaration,
      ]);

      return className;
    })
    .sort();

  printExportDefinitionsForCapabilities(classNames);
  printCapabilitiesMetaData(classNames);
  printUniversalProperties();

  console.log('Successfully generated class definitions for capabilities.');
}

generateClassDefinitionsForCapabilitites();
