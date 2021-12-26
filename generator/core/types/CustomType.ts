import { factory, Identifier, NodeFlags, SyntaxKind } from 'typescript';

import { BaseTypeSpec, Registry } from '../Registry';
import { Module } from '../Module';

import { UnitTypeRef } from './UnitType';

export interface CustomTypeRef {
  name: string;
  type: `events.${string}` | `types.${string}`;
}

export interface CustomTypeSpec {
  name: string;
  size?: number;
  type: 'custom';
  items: (BaseTypeSpec | CustomTypeRef | UnitTypeRef)[];
}

export class CustomType extends Module {
  protected registry = Registry.getInstance();

  public static isCustomTypeRef(type: string) {
    return type.startsWith('events.') || type.startsWith('types.');
  }

  public constructor(name: string, spec: CustomTypeSpec) {
    super('/values/custom', name, 'Type');

    this.createNodes(spec);
  }

  protected createNodes({ name, ...spec }: CustomTypeSpec) {
    const classIdentifier = this.createExportedIdentifier(this.stringToPascalCase(name));
    const descriptorIdentifier = factory.createIdentifier(
      this.stringToPascalCase(`${name}_descriptor`),
    );

    this.addNodes([
      [this.createDescriptor(descriptorIdentifier, spec)],
      [this.createClassDeclaration(classIdentifier, descriptorIdentifier)],
    ]);
  }

  protected createDescriptor(
    descriptorIdentifier: Identifier,
    { items, size }: Pick<CustomTypeSpec, 'items' | 'size'>,
  ) {
    return factory.createVariableStatement(
      undefined,
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            descriptorIdentifier,
            undefined,
            undefined,
            factory.createObjectLiteralExpression(
              [
                factory.createPropertyAssignment(
                  factory.createIdentifier('items'),
                  factory.createObjectLiteralExpression(
                    [...items]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((spec) =>
                        factory.createPropertyAssignment(
                          factory.createIdentifier(spec.name),
                          this.registry.createTypeDeclaration(this, spec),
                        ),
                      ),
                    true,
                  ),
                ),
                factory.createPropertyAssignment(
                  factory.createIdentifier('order'),
                  factory.createArrayLiteralExpression(
                    items.map(({ name }) => factory.createStringLiteral(name), false),
                  ),
                ),
                ...(size
                  ? [
                      factory.createPropertyAssignment(
                        factory.createIdentifier('size'),
                        factory.createNumericLiteral(`${size}`),
                      ),
                    ]
                  : []),
              ],
              true,
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    );
  }

  protected createClassDeclaration(classIdentifier: Identifier, descriptorIdentifier: Identifier) {
    return factory.createClassDeclaration(
      [this.registry.modules.Decorators.descriptor(this, descriptorIdentifier)],
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      classIdentifier,
      undefined,
      [
        factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
          factory.createExpressionWithTypeArguments(
            this.import(this.registry.modules.Values.CustomType, 'CustomType'),
            [
              factory.createTypeQueryNode(
                factory.createQualifiedName(
                  descriptorIdentifier,
                  factory.createIdentifier('items'),
                ),
              ),
            ],
          ),
        ]),
      ],
      [],
    );
  }
}
