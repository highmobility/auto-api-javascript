import { factory, Identifier, SyntaxKind } from 'typescript';

import { Module } from '../Module';
import { Registry } from '../Registry';

export interface StringSpec {
  name: string;
  type: 'string';
}

export class String extends Module {
  public static TypeName = 'String';

  public constructor(basePath: string, name: string, spec: StringSpec) {
    super(basePath, name, String.TypeName);

    this.createNodes(spec);
  }

  protected createNodes({ name }: StringSpec) {
    this.addNodes([
      [
        this.createClassDeclaration(
          factory.createIdentifier(this.stringToPascalCase(this.name || name)),
        ),
      ],
    ]);
  }

  protected createClassDeclaration(classIdentifier: Identifier) {
    return factory.createClassDeclaration(
      undefined,
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      classIdentifier,
      undefined,
      [
        factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
          factory.createExpressionWithTypeArguments(
            this.import(Registry.getInstance().modules.Values.String, String.TypeName),
            undefined,
          ),
        ]),
      ],
      [],
    );
  }
}
