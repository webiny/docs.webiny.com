import visit from "unist-util-visit";
import { Node } from "unist";
import { VFile } from "vfile";
import { parse } from "@babel/parser";
import { ImportDeclaration } from "@babel/types";

type ImportNode = Node & { value?: string };

/**
 * This visitor looks for `import` statements, and resolves the import paths to the actual location of the asset.
 */
export const remarkResolveAssets = () => {
  return () => (tree: Node, file: VFile) => {
    visit<ImportNode>(tree, "import", node => {
      if (!node.value) {
        return;
      }

      const ast = parse(node.value, { sourceType: "module" });
      const importNode = firstNode(ast);

      if (!importNode) {
        return;
      }

      const { source } = importNode;
      if (!source.value.startsWith("./")) {
        return;
      }

      node.value = node.value.replace(source.value, `${file.dirname}/${source.value}`);
    });
  };
};

const firstNode = (ast: ReturnType<typeof parse>) => {
  return ast.program.body.pop() as ImportDeclaration;
};
