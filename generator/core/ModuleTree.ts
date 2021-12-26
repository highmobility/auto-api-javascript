class Node {
  public constructor(public value: string, public root?: Node, public children: Node[] = []) {}

  public add(paths: string[]): Node {
    if (Array.isArray(paths) && paths.length > 0) {
      const [root, ...rest] = paths;

      let node = this.children.find(({ value: path }) => path === root);
      if (!node) {
        node = new Node(root, this);
        this.children.push(node);
      }

      return node.add(rest);
    }

    return this;
  }

  pathTo(target: Node, paths: Node[] = []): Node[] {
    const path = [...paths, this];

    if (target === this || !this.root) {
      return path;
    }

    return this.root.pathTo(target, path);
  }
}

export class ModuleTree {
  public constructor(public root = new Node('')) {}

  public add(path: string) {
    const [root, ...rest] = path.split('/');

    if (root === this.root.value) {
      return this.root.add(Array.isArray(rest) ? rest.filter((path) => !!path) : rest);
    }

    return this.root;
  }

  public findLCA(a: Node, b: Node) {
    const pathA = a.pathTo(this.root);
    const pathB = b.pathTo(this.root);

    return pathA.find((path) => pathB.includes(path)) as Node;
  }

  public findPath(a: Node, b: Node) {
    const root = this.findLCA(a, b);
    const bPath = b
      .pathTo(root)
      .reverse()
      .slice(1)
      .map(({ value }) => value)
      .join('/');

    if (a === root) {
      return `./${bPath}`;
    } else {
      const aPath = a
        .pathTo(root)
        .slice(1)
        .map(() => '..')
        .join('/');

      return `${aPath}/${bPath}`;
    }
  }

  public static findPath(pathA: string, pathB: string, tree = new ModuleTree()) {
    return tree.findPath(tree.add(pathA), tree.add(pathB));
  }
}
