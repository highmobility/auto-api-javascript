import { factory, Identifier, NodeFlags, SyntaxKind } from 'typescript';

import { BaseTypeSpec, Registry } from './Registry';
import { CustomType, CustomTypeRef } from './types/CustomType';
import { Module } from './Module';

export interface PropertyComponentSpec {
  id: number;
  name: string;
  type: (BaseTypeSpec | CustomTypeRef)['type'];
}

export class PropertyComponents extends Module {
  protected registry = Registry.getInstance();
  protected spec!: Record<string, PropertyComponentSpec>;

  public constructor() {
    super('/', 'components', 'Component');

    this.createNodes();
  }

  protected createNodes() {
    this.spec = this.importSpec();

    this.addNodes([
      [
        this.createComponents(
          this.createExportedIdentifier(this.stringToPascalCase('PropertyComponents')),
        ),
      ],
    ]);
  }

  protected createComponents(identifier: Identifier) {
    return factory.createVariableStatement(
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            identifier,
            undefined,
            undefined,
            factory.createObjectLiteralExpression(
              Object.values(this.spec).map((spec) => {
                const { id, name } = spec;

                return factory.createPropertyAssignment(
                  factory.createIdentifier(name),
                  factory.createObjectLiteralExpression(
                    [
                      factory.createPropertyAssignment(
                        factory.createIdentifier('id'),
                        factory.createNumericLiteral(`${id}`),
                      ),
                      factory.createPropertyAssignment(
                        factory.createIdentifier('value'),
                        this.getTypeIdentifier(spec),
                      ),
                    ],
                    true,
                  ),
                );
              }),
              true,
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    );
  }

  protected importSpec(): Record<string, PropertyComponentSpec> {
    return this.importYAML<{ property_components: PropertyComponentSpec[] }>(
      this.registry.getAutoAPIPath('misc', 'property_components.yml'),
    ).property_components.reduce(
      (spec, component) => ({
        ...spec,
        [component.name]: component,
      }),
      {},
    );
  }

  protected getTypeIdentifier(spec: PropertyComponentSpec) {
    if (spec.name === 'data') {
      return this.import(this.registry.modules.Values.Value, 'Value');
    }

    if (CustomType.isCustomTypeRef(spec.type)) {
      return this.registry.importCustomType(this, spec as CustomTypeRef);
    }

    const Type = this.registry.getBaseTypeConstructor(spec as BaseTypeSpec);
    return this.import(
      this.registry.modules.Values[Type.TypeName as keyof typeof this.registry.modules.Values],
      Type.TypeName,
    );
  }
}
