import { factory, Identifier, SyntaxKind } from 'typescript';

import { Module } from '../Module';
import { Registry } from '../Registry';

export interface DoubleSpec {
  name: string;
  size: number;
  type: 'double';
}

export class Double extends Module {
  public static TypeName = 'Double';

  protected registry = Registry.getInstance();

  public constructor(basePath: string, name: string, spec: DoubleSpec) {
    super(basePath, name, Double.TypeName);

    this.createNodes(spec);
  }

  protected createNodes({ name, size }: DoubleSpec) {
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
            this.import(this.registry.modules.Values.Double, Double.TypeName),
            undefined,
          ),
        ]),
      ],
      [],
    );
  }
}
