import { factory, Identifier, SyntaxKind } from 'typescript';

import { BaseTypeSpec, Registry } from './Registry';
import { CustomTypeRef } from './types/CustomType';
import { Module } from './Module';
import { UnitTypeRef } from './types/UnitType';

export type PropertySpec = {
  id: number;
  name: string;
  multiple?: boolean;
  deprecated?: {
    new_name: string;
    reason: string;
  };
} & (BaseTypeSpec | CustomTypeRef | UnitTypeRef);

export class Property extends Module {
  protected registry = Registry.getInstance();

  public constructor(basePath: string, name: string, spec: PropertySpec) {
    super(basePath, name, 'Property');

    this.createNodes(spec);
  }

  protected createNodes(spec: PropertySpec) {
    this.addNodes([
      [
        this.createClassDeclaration(
          this.createExportedIdentifier(this.stringToPascalCase(spec.name)),
          spec,
        ),
      ],
    ]);
  }

  protected createClassDeclaration(
    classIdentifier: Identifier,
    { id, multiple, ...spec }: PropertySpec,
  ) {
    const value = this.registry.createTypeDeclaration(this, spec);

    return factory.createClassDeclaration(
      [
        this.registry.modules.Decorators.descriptor(
          this,
          factory.createObjectLiteralExpression(
            [
              factory.createPropertyAssignment(
                factory.createIdentifier('id'),
                factory.createNumericLiteral(`${id}`),
              ),
              ...(multiple
                ? [
                    factory.createPropertyAssignment(
                      factory.createIdentifier('multiple'),
                      factory.createTrue(),
                    ),
                  ]
                : []),
              factory.createPropertyAssignment(
                factory.createIdentifier('name'),
                factory.createStringLiteral(spec.name),
              ),
              factory.createPropertyAssignment(factory.createIdentifier('value'), value),
            ],
            true,
          ),
        ),
      ],
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      classIdentifier,
      undefined,
      [
        factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
          factory.createExpressionWithTypeArguments(
            this.import(this.registry.modules.Property, 'Property'),
            [factory.createTypeQueryNode(value)],
          ),
        ]),
      ],
      [],
    );
  }
}
