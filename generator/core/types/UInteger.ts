import { factory, Identifier, SyntaxKind } from 'typescript';

import { Module } from '../Module';
import { Registry } from '../Registry';

export interface UIntegerSpec {
  name: string;
  size: number;
  type: 'uinteger';
}

export class UInteger extends Module {
  public static TypeName = 'UInteger';

  protected registry = Registry.getInstance();

  public constructor(
    basePath: string,
    name: string,
    spec: UIntegerSpec,
    exports?: Record<string, Identifier>,
  ) {
    super(basePath, name, UInteger.TypeName, undefined, exports);

    this.createNodes(spec);
  }

  protected createNodes({ name, size }: UIntegerSpec) {
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
            this.import(this.registry.modules.Values.UInteger, UInteger.TypeName),
            undefined,
          ),
        ]),
      ],
      [],
    );
  }
}
