import { factory, Identifier, NodeFlags, SyntaxKind } from 'typescript';

import { Module } from '../Module';
import { Registry } from '../Registry';

export interface UnitTypeRef {
  name: string;
  size?: number;
  type: `unit.${string}`;
}

export interface UnitTypeSpec {
  id: number;
  name: string;
  unit_types: {
    id: number;
    name: string;
  }[];
  type: 'unit';
  size?: number;
}

export class UnitType extends Module {
  protected registry = Registry.getInstance();

  public static isUnitTypeRef(type: string) {
    return type.startsWith('unit.');
  }

  public constructor(name: string, spec: UnitTypeSpec) {
    super('/values/units', name, 'Unit');

    this.createNodes(spec);
  }

  protected createNodes({ name, unit_types: units, size }: UnitTypeSpec) {
    const classIdentifier = factory.createIdentifier(this.stringToPascalCase(name));
    const descriptorIdentifier = factory.createIdentifier(
      this.stringToPascalCase(`${name}_descriptor`),
    );
    this.addNodes([
      [this.createDescriptor(descriptorIdentifier, units, size)],
      [this.createClassDeclaration(classIdentifier, descriptorIdentifier)],
    ]);
  }

  protected createDescriptor(
    descriptorIdentifier: Identifier,
    units: UnitTypeSpec['unit_types'],
    size = 10,
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
                  factory.createIdentifier('size'),
                  factory.createNumericLiteral(`${size}`),
                ),
                factory.createPropertyAssignment(
                  factory.createIdentifier('units'),
                  factory.createObjectLiteralExpression(
                    units.map((unit) =>
                      factory.createPropertyAssignment(
                        factory.createIdentifier(unit.name),
                        factory.createNumericLiteral(`${unit.id}`),
                      ),
                    ),
                    true,
                  ),
                ),
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
            this.import(this.registry.modules.Values.UnitType, 'UnitType'),
            [
              factory.createTypeOperatorNode(
                SyntaxKind.KeyOfKeyword,
                factory.createTypeQueryNode(
                  factory.createQualifiedName(
                    descriptorIdentifier,
                    factory.createIdentifier('units'),
                  ),
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
