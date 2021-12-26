import {
  createPrinter,
  createSourceFile,
  EmitHint,
  NewLineKind,
  Node,
  ScriptKind,
  ScriptTarget,
  SourceFile,
  Printer as TSPrinter,
} from 'typescript';
import { ensureFileSync, writeFileSync } from 'fs-extra';

export class Printer {
  protected printer!: TSPrinter;
  protected source!: SourceFile;
  protected nodes: string[] = [];

  public constructor(public filename: string) {
    this.printer = createPrinter({ newLine: NewLineKind.LineFeed });
    this.source = createSourceFile(filename, '', ScriptTarget.Latest, false, ScriptKind.TS);
  }

  public addNodes(nodes: Node[]) {
    if (nodes.length) {
      this.nodes.push(
        nodes
          .map((node) => this.printer.printNode(EmitHint.Unspecified, node, this.source))
          .join('\n')
          .concat('\n'),
      );
    }

    return this;
  }

  public print() {
    ensureFileSync(this.filename);
    writeFileSync(this.filename, this.nodes.join('\n').concat('\n'));
  }
}
