import { factory, Identifier, SyntaxKind } from 'typescript';

import { Module } from '../Module';
import { Registry } from '../Registry';

export interface IntegerSpec {
  name: string;
  size: number;
  type: 'integer';
}

export class Integer extends Module {
  public static TypeName = 'Integer';

  protected registry = Registry.getInstance();

  public constructor(basePath: string, name: string, spec: IntegerSpec) {
    super(basePath, name, Integer.TypeName);

    this.createNodes(spec);
  }

  protected createNodes({ name, size }: IntegerSpec) {
    this.addNodes([
      [
        this.createClassDeclaration(
          factory.createIdentifier(this.stringToPascalCase(this.name || name)),
          size,
        ),
      ],
    ]);
  }

  protected createClassDeclaration(classIdentifier: Identifier, size: number) {
    return factory.createClassDeclaration(
      [this.registry.modules.Decorators.size(this, size)],
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      classIdentifier,
      undefined,
      [
        factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
          factory.createExpressionWithTypeArguments(
            this.import(this.registry.modules.Values.Integer, Integer.TypeName),
            undefined,
          ),
        ]),
      ],
      [],
    );
  }
}
