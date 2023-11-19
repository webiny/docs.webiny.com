import visit from "unist-util-visit";
import { Node } from "unist";
import { VFile } from "vfile";
import { parse } from "@babel/parser";
import { ImportDeclaration } from "@babel/types";
import { VersionedAssetResolverFactory } from "./VersionedAssetResolverFactory";

type ImportNode = Node & { value?: string };

const firstNode = (ast: ReturnType<typeof parse>) => {
  return ast.program.body.pop() as ImportDeclaration;
};

export class VersionedAssetResolver {
  private resolver: VersionedAssetResolverFactory;

  private constructor(resolver: VersionedAssetResolverFactory) {
    this.resolver = resolver;
  }

  static create(resolver: VersionedAssetResolverFactory) {
    const assetResolver = new VersionedAssetResolver(resolver);
    return () => (tree: Node, file: VFile) => assetResolver.traverse(tree, file);
  }

  private traverse(tree: Node, file: VFile) {
    visit<ImportNode>(tree, "import", (node, _, parent) => {
      if (!node.value || !parent) {
        return;
      }

      const index = parent.children.findIndex(child => child === node);

      const importNodes = node.value.split("\n").map(line => {
        return this.resolveImport(
          {
            type: "import",
            value: line
          },
          file
        );
      });

      parent.children.splice(index, 1, ...importNodes);

      return [visit.CONTINUE, index + importNodes.length];
    });
  }

  private resolveImport(node: ImportNode, file: VFile) {
    if (!node.value) {
      return node;
    }

    const ast = parse(node.value, { sourceType: "module" });
    const importNode = firstNode(ast);

    if (!importNode) {
      return node;
    }

    const { source } = importNode;
    if (!source.value.startsWith("./") && !source.value.startsWith("../")) {
      return node;
    }

    node.value = node.value.replace(
      source.value,
      this.resolver.create().resolvePath(file, source.value)
    );

    return node;
  }
}
