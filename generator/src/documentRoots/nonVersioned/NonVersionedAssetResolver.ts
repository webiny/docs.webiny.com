import visit from "unist-util-visit";
import { Node } from "unist";
import { VFile } from "vfile";
import { parse } from "@babel/parser";
import { ImportDeclaration } from "@babel/types";
import path from "path";

type ImportNode = Node & { value?: string };

/**
 * This visitor looks for `import` statements, and resolves the import paths to the actual location of the asset.
 */
export class NonVersionedAssetResolver {
  private constructor() {}

  static create() {
    const assetResolver = new NonVersionedAssetResolver();
    return () => (tree: Node, file: VFile) => {
      assetResolver.traverse(tree, file);
    };
  }

  private traverse(tree: Node, file: VFile) {
    visit<ImportNode>(tree, "import", node => {
      if (!node.value) {
        return;
      }

      const ast = parse(node.value, { sourceType: "module" });
      const importNode = this.firstNode(ast);

      if (!importNode) {
        return;
      }

      const { source } = importNode;
      if (!source.value.startsWith("./") && !source.value.startsWith("../")) {
        return;
      }

      const resolvedPath = path.join(String(file.dirname), source.value);
      node.value = node.value.replace(source.value, resolvedPath);
    });
  }

  private firstNode(ast: ReturnType<typeof parse>) {
    return ast.program.body.pop() as ImportDeclaration;
  }
}
