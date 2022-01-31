import { factory, Identifier, SyntaxKind } from 'typescript';

import { Module } from '../Module';
import { Registry } from '../Registry';

export interface TimestampSpec {
  name: string;
  size?: number;
  type: 'timestamp';
}

export class Timestamp extends Module {
  public static TypeName = 'Timestamp';

  protected registry = Registry.getInstance();

  public constructor(
    basePath: string,
    name: string,
    spec: TimestampSpec,
    exports?: Record<string, Identifier>,
  ) {
    super(basePath, name, Timestamp.TypeName, undefined, exports);

    this.createNodes(spec);
  }

  protected createNodes({ name }: TimestampSpec) {
    this.addNodes([
      [
        this.createClassDeclaration(
          factory.createIdentifier(this.stringToPascalCase(this.name || name)),
        ),
      ],
    ]);
  }

  protected createClassDeclaration(classIdentifier: Identifier, size = 8) {
    return factory.createClassDeclaration(
      [this.registry.modules.Decorators.size(this, size)],
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      classIdentifier,
      undefined,
      [
        factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
          factory.createExpressionWithTypeArguments(
            this.import(this.registry.modules.Values.Timestamp, Timestamp.TypeName),
            undefined,
          ),
        ]),
      ],
      [],
    );
  }
}
