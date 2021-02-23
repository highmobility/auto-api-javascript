import path from 'path';
import ts from 'typescript';

import { Capability } from '@/types';
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

/*
 * Code generation utilities
 */

function createConstructorDeclaration({ name }: Capability) {
  return tsUtils.createConstructorDeclaration([
    ts.factory.createExpressionStatement(
      ts.factory.createCallExpression(ts.factory.createSuper(), undefined, [
        ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(
            ts.factory.createIdentifier(ConfigurationClassName),
            'getCapabilityDefinitionByName',
          ),
          undefined,
          [ts.factory.createStringLiteral(name)],
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
          undefined,
        ),
      ]),
    ],
    [createIdentifierDeclaration(capability), createConstructorDeclaration(capability)],
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

function printCapabilityClassDefinition(filename: string, classDeclaration: ts.Node) {
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
    printer(classDeclaration),
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

function generateClassDefinitionsForCapabilitites() {
  // Clean or create destination dir
  cleanOrCreateDirectory(CapabilityClassesPath);

  // Generate files
  const capabilities = Object.values(configuration.capabilities);

  const classNames = capabilities
    .map((capability) => {
      const { name } = capability;

      const className = snakeCaseToPascalCase(name);
      const node = createCapabilityClassDefinition(className, capability);

      printCapabilityClassDefinition(path.join(CapabilityClassesPath, `${className}.ts`), node);

      return className;
    })
    .sort();

  printExportDefinitionsForCapabilities(classNames);
  printCapabilitiesMetaData(classNames);

  console.log('Successfully generated class definitions for capabilities.');
}

generateClassDefinitionsForCapabilitites();
