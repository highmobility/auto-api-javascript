import ts from 'typescript';

export function createConstructorDeclaration(
  statements: readonly ts.Statement[] = [],
  parameters: ts.ParameterDeclaration[] = [],
) {
  return ts.factory.createConstructorDeclaration(
    undefined,
    undefined,
    parameters,
    ts.factory.createBlock(statements, true),
  );
}

export function createExportDeclaration(source: string, identifier: string) {
  return ts.factory.createExportDeclaration(
    undefined,
    undefined,
    false,
    ts.factory.createNamedExports([
      ts.factory.createExportSpecifier(undefined, ts.factory.createIdentifier(identifier)),
    ]),
    ts.factory.createStringLiteral(source),
  );
}

export function createImportDeclaration(source: string, identifier: string) {
  return ts.factory.createImportDeclaration(
    undefined,
    undefined,
    ts.factory.createImportClause(
      false,
      undefined,
      ts.factory.createNamedImports([
        ts.factory.createImportSpecifier(undefined, ts.factory.createIdentifier(identifier)),
      ]),
    ),
    ts.factory.createStringLiteral(source),
  );
}

export function createPrinter(filename: string) {
  const sourceFile = ts.createSourceFile(
    filename,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS,
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  return function (node: ts.Node) {
    return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
  };
}

export function createTemplateLiteralType(identifier: string) {
  return ts.factory.createTemplateLiteralType(ts.factory.createTemplateHead('', ''), [
    ts.factory.createTemplateLiteralTypeSpan(
      ts.factory.createTypeReferenceNode(ts.factory.createIdentifier(identifier), undefined),
      ts.factory.createTemplateTail('', ''),
    ),
  ]);
}
