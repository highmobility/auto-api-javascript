import { factory, Identifier, SyntaxKind } from 'typescript';

import { Module } from '../Module';
import { Registry } from '../Registry';

export interface FloatSpec {
  name: string;
  size: number;
  type: 'float';
}

export class Float extends Module {
  public static TypeName = 'Float';

  protected registry = Registry.getInstance();

  public constructor(basePath: string, name: string, spec: FloatSpec) {
    super(basePath, name, Float.TypeName);

    this.createNodes(spec);
  }

  protected createNodes({ name, size }: FloatSpec) {
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
            this.import(this.registry.modules.Values.Float, Float.TypeName),
            undefined,
          ),
        ]),
      ],
      [],
    );
  }
}
