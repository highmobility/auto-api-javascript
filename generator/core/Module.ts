import { factory, Identifier, Node } from 'typescript';
import { join } from 'path';
import { readFileSync } from 'fs';
import YAML from 'yamljs';

import { ModuleTree } from './ModuleTree';
import { Printer } from './Printer';

type ImportDeclaration = { path: string; imports: (string | string[])[] };
type ImportDeclarationMap = Record<string, { path: string; imports: (string | string[])[] }>;
type ImportDeclarationGroup = ImportDeclaration[];
type ImportDeclarationGroups = ImportDeclarationGroup[];

export class Module {
  public constructor(
    public basePath: string,
    public name: string,
    public alias: string,
    public imports: Record<string, [Module, string]> = {},
    public exports: Record<string, Identifier> = {},
    public nodes: Node[][] = [],
  ) {}

  public addNodes(nodes: Node[][]) {
    this.nodes = this.nodes.concat(nodes);
  }

  public createExportedIdentifier(identifier: string) {
    return (this.exports[identifier] ||= factory.createIdentifier(identifier));
  }

  public emit(rootDir: string, nodes = this.importsToImportNodes().concat(this.nodes)) {
    this.print(rootDir, nodes);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public export(identifier: string) {
    return this;
  }

  public getRelativePath(moduleB: Module, moduleA: Module = this) {
    return `${ModuleTree.findPath(moduleA.basePath, moduleB.basePath)}${
      moduleB.name === 'index' ? '' : `/${moduleB.name}`
    }`.replace(/\/\//g, '/');
  }

  public getSortedImports() {
    const importsByModule = Object.entries(this.imports).reduce<ImportDeclarationMap>(
      (grouped, [uniqueIdentifier, [module, identifier]]) => {
        const path = this.getRelativePath(module);

        grouped[path] ||= {
          path,
          imports: [],
        };

        grouped[path].imports.push(
          uniqueIdentifier === identifier ? identifier : [uniqueIdentifier, identifier],
        );

        return grouped;
      },
      {},
    );

    const importsByGroup = Object.values(importsByModule).reduce<ImportDeclarationGroups>(
      (grouped, imports) => {
        grouped[imports.path.startsWith('..') ? 0 : 1].push(imports);
        return grouped;
      },
      [[], []],
    );

    return importsByGroup.map((group) =>
      group
        .map((module) => {
          module.imports.sort((a, b) =>
            (Array.isArray(a) ? a[0] : a).localeCompare(Array.isArray(b) ? b[0] : b),
          );
          return module;
        })
        .sort((a, b) =>
          (Array.isArray(a.imports[0]) ? a.imports[0][0] : a.imports[0]).localeCompare(
            Array.isArray(b.imports[0]) ? b.imports[0][0] : b.imports[0],
          ),
        ),
    );
  }

  public identifierConflictsExports(identifier: string) {
    return !!this.exports[identifier];
  }

  public identifierConflictsImports(module: Module, identifier: string) {
    return this.imports[identifier] && this.imports[identifier][0] !== module;
  }

  public import(module: Module, identifier: string) {
    let uniqueIdentifier = identifier;

    if (
      this.identifierConflictsExports(identifier) ||
      this.identifierConflictsImports(module, identifier)
    ) {
      uniqueIdentifier = this.stringToPascalCase(`${identifier}_${module.alias}`);
    }
    this.imports[uniqueIdentifier] = [module.export(identifier), identifier];

    return factory.createIdentifier(uniqueIdentifier);
  }

  public importYAML<T>(path: string): T {
    return YAML.parse(readFileSync(path, 'utf8'));
  }

  public importsToImportNodes(): Node[][] {
    return this.getSortedImports().reduce<Node[][]>((nodes, group) => {
      return [
        ...nodes,
        group.map(({ path, imports }) =>
          factory.createImportDeclaration(
            undefined,
            undefined,
            factory.createImportClause(
              false,
              undefined,
              factory.createNamedImports(
                imports.map((identifier) =>
                  Array.isArray(identifier)
                    ? factory.createImportSpecifier(
                        false,
                        factory.createIdentifier(identifier[1]),
                        factory.createIdentifier(identifier[0]),
                      )
                    : factory.createImportSpecifier(
                        false,
                        undefined,
                        factory.createIdentifier(identifier),
                      ),
                ),
              ),
            ),
            factory.createStringLiteral(path),
            undefined,
          ),
        ),
      ];
    }, []);
  }

  public importsToExportNodes(exportAsStar = true): Node[][] {
    return this.getSortedImports().reduce<Node[][]>((nodes, group) => {
      return [
        ...nodes,
        group.map(({ path, imports }) =>
          factory.createExportDeclaration(
            undefined,
            undefined,
            false,
            exportAsStar
              ? undefined
              : factory.createNamedExports(
                  imports.map((identifier) =>
                    Array.isArray(identifier)
                      ? factory.createExportSpecifier(
                          false,
                          factory.createIdentifier(identifier[1]),
                          factory.createIdentifier(identifier[0]),
                        )
                      : factory.createExportSpecifier(
                          false,
                          undefined,
                          factory.createIdentifier(identifier),
                        ),
                  ),
                ),
            factory.createStringLiteral(path),
            undefined,
          ),
        ),
      ];
    }, []);
  }

  public merge(module: Module) {
    for (const [uniqueIdentifier, imports] of Object.entries(module.imports)) {
      this.imports[uniqueIdentifier] = imports;
    }
    this.addNodes(module.nodes);
  }

  public print(rootDir: string, nodes: Node[][]) {
    if (nodes.length) {
      const printer = new Printer(join(rootDir, this.basePath, `${this.name}.ts`));
      for (const group of nodes) {
        printer.addNodes(group);
      }
      printer.print();
    }
  }

  public stringToCamelCase(identifier: string) {
    return this.stringToPascalCase(identifier).replace(/^(.)/g, (c) => c.toLowerCase());
  }

  public stringToPascalCase(identifier: string) {
    return identifier
      .split('_')
      .map((word) => word.replace(/^(.)/g, (c) => c.toUpperCase()))
      .join('');
  }
}
