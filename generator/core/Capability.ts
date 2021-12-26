import { factory, Identifier, Node, NodeFlags, SyntaxKind } from 'typescript';

import { Module } from './Module';
import { Property, PropertySpec } from './Property';
import { Registry } from './Registry';

export interface CapabilitySpec {
  name: string;
  name_pretty: string;
  category: string;
  identifier: {
    msb: number;
    lsb: number;
  };
  properties: PropertySpec[];
  state: 'all' | number[] | undefined;
}

export class Capability extends Module {
  public properties!: Record<string, [Identifier, Property]>;

  protected registry = Registry.getInstance();

  public constructor(basePath: string, name: string, spec: CapabilitySpec) {
    super(basePath, name, 'Capability');

    this.nodes = this.createNodes(spec);
  }

  protected createNodes(spec: CapabilitySpec): Node[][] {
    const classIdentifier = this.createExportedIdentifier(this.stringToPascalCase(spec.name));
    const descriptorIdentifier = factory.createIdentifier(
      this.stringToPascalCase(`${spec.name}_descriptor`),
    );
    const propertiesEnumIdentifier = factory.createIdentifier(
      this.stringToPascalCase('Properties'),
    );

    this.properties = this.createProperties(spec);

    return [
      [this.createPropertiesEnumDeclaration(propertiesEnumIdentifier)],
      [this.createDescriptor(descriptorIdentifier, spec)],
      [
        this.createClassDeclaration(
          classIdentifier,
          descriptorIdentifier,
          propertiesEnumIdentifier,
        ),
      ],
    ];
  }

  protected createDescriptor(
    descriptorIdentifier: Identifier,
    { category, identifier: { msb, lsb }, name, name_pretty: prettyName, ...spec }: CapabilitySpec,
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
                  factory.createIdentifier('category'),
                  factory.createStringLiteral(category),
                ),
                factory.createPropertyAssignment(
                  factory.createIdentifier('identifier'),
                  factory.createArrayLiteralExpression(
                    [
                      factory.createNumericLiteral(`${msb}`),
                      factory.createNumericLiteral(`${lsb}`),
                    ],
                    false,
                  ),
                ),
                factory.createPropertyAssignment(
                  factory.createIdentifier('name'),
                  factory.createStringLiteral(name),
                ),
                factory.createPropertyAssignment(
                  factory.createIdentifier('prettyName'),
                  factory.createStringLiteral(prettyName),
                ),
                factory.createPropertyAssignment(
                  factory.createIdentifier('properties'),
                  factory.createObjectLiteralExpression(
                    Object.entries(this.properties).map(([name, [identifier]]) =>
                      factory.createPropertyAssignment(factory.createIdentifier(name), identifier),
                    ),
                    true,
                  ),
                ),
                factory.createPropertyAssignment(
                  factory.createIdentifier('state'),
                  factory.createArrayLiteralExpression(this.getStateProperties(spec), true),
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

  protected createClassDeclaration(
    classIdentifier: Identifier,
    descriptorIdentifier: Identifier,
    propertiesEnumIdentifier: Identifier,
  ) {
    return factory.createClassDeclaration(
      [this.registry.modules.Decorators.descriptor(this, descriptorIdentifier)],
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      classIdentifier,
      undefined,
      [
        factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
          factory.createExpressionWithTypeArguments(
            this.import(this.registry.modules.Capability, 'Capability'),
            [
              factory.createTypeQueryNode(
                factory.createQualifiedName(
                  descriptorIdentifier,
                  factory.createIdentifier('properties'),
                ),
              ),
            ],
          ),
        ]),
      ],
      [
        factory.createPropertyDeclaration(
          undefined,
          [
            factory.createModifier(SyntaxKind.PublicKeyword),
            factory.createModifier(SyntaxKind.StaticKeyword),
          ],
          factory.createIdentifier('Name'),
          undefined,
          undefined,
          factory.createPropertyAccessExpression(
            descriptorIdentifier,
            factory.createIdentifier('name'),
          ),
        ),
        factory.createPropertyDeclaration(
          undefined,
          [
            factory.createModifier(SyntaxKind.PublicKeyword),
            factory.createModifier(SyntaxKind.StaticKeyword),
          ],
          factory.createIdentifier('Properties'),
          undefined,
          undefined,
          propertiesEnumIdentifier,
        ),
      ],
    );
  }

  protected createProperties({ properties }: CapabilitySpec) {
    return this.getNonDeprecatedProperties(properties).reduce((all, spec) => {
      const name = this.stringToPascalCase(spec.name);
      const module = new Property(`${this.basePath}/properties`, name, spec);
      const identifier = this.import(module, name);

      return {
        ...all,
        [spec.name]: [identifier, module],
      };
    }, {});
  }

  protected createPropertiesEnumDeclaration(propertiesEnumIdentifier: Identifier) {
    return factory.createEnumDeclaration(
      undefined,
      undefined,
      propertiesEnumIdentifier,
      Object.entries(this.properties).map(([name, [identifier]]) =>
        factory.createEnumMember(identifier, factory.createStringLiteral(name)),
      ),
    );
  }

  public emit(rootDir: string): void {
    for (const [, property] of Object.values(this.properties)) {
      property.emit(rootDir);
    }

    super.emit(rootDir);
  }

  protected getNonDeprecatedProperties(properties: PropertySpec[]) {
    return properties
      .filter(({ deprecated }) => !deprecated)
      .sort((a, b) => a.name.localeCompare(b.name)) as PropertySpec[];
  }

  protected getStateProperties({
    state,
    properties,
  }: Pick<CapabilitySpec, 'properties' | 'state'>): Identifier[] {
    const stateProperties = (
      state ? (state === 'all' ? properties.map(({ id }) => id) : state) : []
    ).map((id) => properties.find((property) => property.id === id)) as PropertySpec[];

    return this.getNonDeprecatedProperties(stateProperties).map(
      ({ name }) => this.properties[name][0],
    );
  }
}
