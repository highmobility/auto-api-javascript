import { factory, Identifier, SyntaxKind } from 'typescript';

import { Module } from '../Module';
import { Registry } from '../Registry';

export interface BytesSpec {
  name: string;
  type: 'bytes';
}

export class Bytes extends Module {
  public static TypeName = 'Bytes';

  public constructor(basePath: string, name: string, spec: BytesSpec) {
    super(basePath, name, Bytes.TypeName);

    this.createNodes(spec);
  }

  protected createNodes({ name }: BytesSpec) {
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
            this.import(Registry.getInstance().modules.Values.Bytes, Bytes.TypeName),
            undefined,
          ),
        ]),
      ],
      [],
    );
  }
}
