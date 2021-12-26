import { factory, Identifier, NodeFlags, SyntaxKind } from 'typescript';

import { Module } from '../Module';
import { Registry } from '../Registry';

export interface EnumSpec {
  name: string;
  size: number;
  enum_values: { id: number; name: string; verb?: string }[];
  type: 'enum';
}

export class Enum extends Module {
  public static TypeName = 'Enum';

  protected registry = Registry.getInstance();

  public constructor(basePath: string, name: string, spec: EnumSpec) {
    super(basePath, name, Enum.TypeName);

    this.createNodes(spec);
  }

  protected createNodes({ name, enum_values: values, size }: EnumSpec) {
    const classIdentifier = factory.createIdentifier(this.stringToPascalCase(this.name || name));
    const descriptorIdentifier = factory.createIdentifier(
      this.stringToPascalCase(`${this.name || name}_descriptor`),
    );

    this.addNodes([
      [this.createDescriptor(descriptorIdentifier, values, size)],
      [this.createClassDeclaration(classIdentifier, descriptorIdentifier, values)],
    ]);
  }

  protected createDescriptor(
    descriptorIdentifier: Identifier,
    values: EnumSpec['enum_values'],
    size = 1,
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
                  factory.createIdentifier('values'),
                  factory.createObjectLiteralExpression(
                    values
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map(({ name, id }) =>
                        factory.createPropertyAssignment(
                          factory.createIdentifier(name),
                          factory.createNumericLiteral(`${id}`),
                        ),
                      ),
                    true,
                  ),
                ),
                factory.createPropertyAssignment(
                  factory.createIdentifier('size'),
                  factory.createNumericLiteral(`${size}`),
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
    values: EnumSpec['enum_values'],
  ) {
    return factory.createClassDeclaration(
      [this.registry.modules.Decorators.descriptor(this, descriptorIdentifier)],
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      classIdentifier,
      undefined,
      [
        factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
          factory.createExpressionWithTypeArguments(
            this.import(this.registry.modules.Values.Enum, Enum.TypeName),
            [
              factory.createTypeOperatorNode(
                SyntaxKind.KeyOfKeyword,
                factory.createTypeQueryNode(
                  factory.createQualifiedName(
                    descriptorIdentifier,
                    factory.createIdentifier('values'),
                  ),
                ),
              ),
            ],
          ),
        ]),
      ],
      values
        .filter((v) => !!v.verb)
        .sort((a, b) => a.verb!.localeCompare(b.verb!))
        .map(({ name, verb }) => this.createVerbMethodDeclaration(name, verb as string)),
    );
  }

  protected createVerbMethodDeclaration(value: string, verb: string) {
    return factory.createMethodDeclaration(
      undefined,
      [factory.createModifier(SyntaxKind.PublicKeyword)],
      undefined,
      factory.createIdentifier(this.stringToCamelCase(verb)),
      undefined,
      undefined,
      [],
      undefined,
      factory.createBlock(
        [
          factory.createExpressionStatement(
            factory.createCallExpression(
              factory.createPropertyAccessExpression(
                factory.createThis(),
                factory.createIdentifier('setValue'),
              ),
              undefined,
              [factory.createStringLiteral(value)],
            ),
          ),
          factory.createReturnStatement(factory.createThis()),
        ],
        true,
      ),
    );
  }
}
