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
  process(tree: Node, file: VFileOptions) {
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

  private resolveImport(node: ImportNode, file: VFileOptions) {
    if (!node.value) {
      return node;
    }

    const ast = parse(node.value, { sourceType: "module" });
    const importNode = this.firstNode(ast);

    if (!importNode) {
      return node;
    }

    const { source } = importNode;
    if (!source.value.startsWith("./") && !source.value.startsWith("../")) {
      return node;
    }

    const resolvedPath = path.join(String(file.dirname), source.value);
    node.value = node.value.replace(source.value, resolvedPath);
    return node;
  }

  private firstNode(ast: ReturnType<typeof parse>) {
    return ast.program.body.pop() as ImportDeclaration;
  }
}
