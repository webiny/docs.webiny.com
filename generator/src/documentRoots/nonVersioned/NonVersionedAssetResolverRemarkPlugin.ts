import visit from "unist-util-visit";
import { Node } from "unist";
import { VFileOptions } from "vfile";
import path from "path";
import { parse } from "@babel/parser";
import { ImportDeclaration } from "@babel/types";
import { IMdxRemarkPlugin } from "../../abstractions/IMdxRemarkPlugin";

type ImportNode = Node & { value?: string };

/**
 * This visitor looks for `import` statements, and resolves the import paths to the actual location of the asset.
 */
export class NonVersionedAssetResolverRemarkPlugin implements IMdxRemarkPlugin {
  process(tree: Node, file: VFileOptions): void {
    this.traverse(tree, file);
  }

  private traverse(tree: Node, file: VFileOptions) {
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
