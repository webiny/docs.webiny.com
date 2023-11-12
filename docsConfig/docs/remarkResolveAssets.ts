import visit from "unist-util-visit";
import { Node } from "unist";
import { VFile } from "vfile";
import { parse } from "@babel/parser";
import { ImportDeclaration } from "@babel/types";
import { VersionedAssetResolverFactory } from "./VersionedAssetResolverFactory";

type ImportNode = Node & { value?: string };

/**
 * This visitor looks for `import` statements, and resolves the import paths to the actual location of the asset.
 */
export const remarkResolveAssets = (resolver: VersionedAssetResolverFactory) => {
  const resolveImport = (node: ImportNode, file: VFile) => {
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
      resolver.create().resolvePath(file, source.value)
    );

    return node;
  };

  return () => (tree: Node, file: VFile) => {
    visit<ImportNode>(tree, "import", (node, _, parent) => {
      if (!node.value) {
        return;
      }

      const index = parent.children.findIndex(child => child === node);

      const importNodes = node.value.split("\n").map(line => {
        return resolveImport(
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
  };
};

const firstNode = (ast: ReturnType<typeof parse>) => {
  return ast.program.body.pop() as ImportDeclaration;
};
