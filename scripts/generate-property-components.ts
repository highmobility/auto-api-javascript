import path from 'path';
import ts from 'typescript';

import { configuration } from '@/configuration';
import { PropertyComponent, PropertyComponents } from '@/types';
import { snakeCaseToPascalCase } from '@/utils/strings';

import { cleanOrCreateDirectory, printSourceFile } from './shared/utils';
import {
  ConfigurationClassName,
  PropertyClassName,
  PropertyComponentsClassesPath,
} from './shared/constants';
import * as tsUtils from './shared/typescript';

/*
 * Constants
 */

const BaseClassName = 'PropertyComponent';
const ClassMapName = 'ClassMap';
const ComponentMapName = 'ComponentMap';
const ComponentNameTypeName = 'ComponentName';

/*
 * Code generation utilities
 */

function createConstructorDeclaration({ name }: PropertyComponent) {
  return tsUtils.createConstructorDeclaration(
    [
      ts.factory.createExpressionStatement(
        ts.factory.createCallExpression(ts.factory.createSuper(), undefined, [
          ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(
              ts.factory.createIdentifier(ConfigurationClassName),
              'getPropertyComponentDefinition',
            ),
            undefined,
            [ts.factory.createStringLiteral(name)],
          ),
          ts.factory.createIdentifier('property'),
        ]),
      ),
    ],
    [
      ts.factory.createParameterDeclaration(
        undefined,
        [ts.factory.createModifier(ts.SyntaxKind.PublicKeyword)],
        undefined,
        ts.factory.createIdentifier('property'),
        undefined,
        ts.factory.createTypeReferenceNode(ts.factory.createIdentifier('Readonly'), [
          ts.factory.createTypeReferenceNode(
            ts.factory.createIdentifier(PropertyClassName),
            undefined,
          ),
        ]),
        undefined,
      ),
    ],
  );
}

function createDataComponentValueTypeDefinitionOverride() {
  return ts.factory.createMethodDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ProtectedKeyword)],
    undefined,
    ts.factory.createIdentifier('getTypeDefinitionForValueConstructor'),
    undefined,
    undefined,
    [],
    undefined,
    ts.factory.createBlock(
      [
        ts.factory.createReturnStatement(
          ts.factory.createPropertyAccessExpression(
            ts.factory.createPropertyAccessExpression(
              ts.factory.createThis(),
              ts.factory.createIdentifier('property'),
            ),
            ts.factory.createIdentifier('definition'),
          ),
        ),
      ],
      true,
    ),
  );
}

function createPropertyComponentClassDefinition(className: string, component: PropertyComponent) {
  return ts.factory.createClassDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    className,
    undefined,
    [
      ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.factory.createExpressionWithTypeArguments(
          ts.factory.createIdentifier(BaseClassName),
          undefined,
        ),
      ]),
    ],
    [
      createConstructorDeclaration(component),
      ...(component.name === 'data' ? [createDataComponentValueTypeDefinitionOverride()] : []),
    ],
  );
}

function createPropertyComponentNameDeclaration(components: PropertyComponents) {
  return ts.factory.createTypeAliasDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(ComponentNameTypeName),
    undefined,
    ts.factory.createUnionTypeNode(
      components.map(({ name }) =>
        ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(name)),
      ),
    ),
  );
}

function createPropertyComponentClassMapDefinition(components: PropertyComponents) {
  return ts.factory.createVariableStatement(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          ts.factory.createIdentifier(ClassMapName),
          undefined,
          undefined,
          ts.factory.createObjectLiteralExpression(
            components.map(({ name }) =>
              ts.factory.createPropertyAssignment(
                ts.factory.createIdentifier(name),
                ts.factory.createIdentifier(snakeCaseToPascalCase(name)),
              ),
            ),
            true,
          ),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  );
}

function createPropertyComponentMapDefinition(components: PropertyComponents) {
  return ts.factory.createVariableStatement(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          ts.factory.createIdentifier(ComponentMapName),
          undefined,
          ts.factory.createTypeReferenceNode(ts.factory.createIdentifier('Record'), [
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier(ComponentNameTypeName),
              undefined,
            ),
          ]),
          ts.factory.createObjectLiteralExpression(
            components.map(({ id, name }) =>
              ts.factory.createPropertyAssignment(
                ts.factory.createNumericLiteral(id),
                ts.factory.createStringLiteral(name),
              ),
            ),
            true,
          ),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  );
}

/*
 * Print class definition files
 */

function printPropertyComponentClassDefinition(filename: string, classDeclaration: ts.Node) {
  const printer = tsUtils.createPrinter(filename);

  const nodes = [
    [
      printer(
        tsUtils.createImportDeclaration(
          `../core/${ConfigurationClassName}`,
          ConfigurationClassName,
        ),
      ),
      printer(tsUtils.createImportDeclaration(`../core/${PropertyClassName}`, PropertyClassName)),
      printer(tsUtils.createImportDeclaration(`../core/${BaseClassName}`, BaseClassName)),
    ]
      .join('\n')
      .concat('\n'),
    printer(classDeclaration),
  ];

  printSourceFile(filename, nodes);
}

function printPropertyComponentsMetaData(classNames: string[], components: PropertyComponents) {
  const filename = path.join(PropertyComponentsClassesPath, `classes.ts`);
  const printer = tsUtils.createPrinter(filename);

  const nodes = [
    classNames
      .map((className) => printer(tsUtils.createImportDeclaration(`./${className}`, className)))
      .join('\n')
      .concat('\n'),
    printer(createPropertyComponentClassMapDefinition(components)).concat('\n'),
    printer(createPropertyComponentMapDefinition(components)).concat('\n'),
    printer(createPropertyComponentNameDeclaration(components)),
  ];

  printSourceFile(filename, nodes);
}

function printExportDefinitionsForPropertyComponents(classNames: string[]) {
  const filename = path.join(PropertyComponentsClassesPath, `index.ts`);
  const printer = tsUtils.createPrinter(filename);

  const nodes = classNames.map((className) =>
    printer(tsUtils.createExportDeclaration(`./${className}`, className)),
  );

  printSourceFile(filename, nodes);
}

function generatePropertyComponents() {
  // Clean or create destination dir
  cleanOrCreateDirectory(PropertyComponentsClassesPath);

  // Generate files
  const components = Object.values(configuration.property_components);

  const classNames = components
    .map((component) => {
      const { name } = component;

      const className = snakeCaseToPascalCase(name);
      const node = createPropertyComponentClassDefinition(className, component);

      printPropertyComponentClassDefinition(
        path.join(PropertyComponentsClassesPath, `${className}.ts`),
        node,
      );

      return className;
    })
    .sort();

  printExportDefinitionsForPropertyComponents(classNames);
  printPropertyComponentsMetaData(classNames, components);

  console.log('Successfully generated property components.');
}

generatePropertyComponents();
