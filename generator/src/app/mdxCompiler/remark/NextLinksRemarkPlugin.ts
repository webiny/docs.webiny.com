import visit from "unist-util-visit";
import { Node } from "unist";
import { addDefaultImport } from "./utils";
import { IMdxRemarkPlugin } from "../../../abstractions/IMdxRemarkPlugin";

type JSXNode = Node & { value: string };
type LinkNode = Node & { url: string; children: Node[] };
type NodeWithChildren = Node & { children: Array<Node | JSXNode> };

export class NextLinksRemarkPlugin implements IMdxRemarkPlugin<NodeWithChildren> {
  process(tree: NodeWithChildren): void {
    const component = addDefaultImport(tree, "next/link", "Link");

    visit<LinkNode>(tree, "link", (node, _, parent) => {
      if (!parent) {
        return;
      }

      if (this.isInternalHref(node.url)) {
        const index = parent.children.findIndex(child => child === node);

        parent.children = [
          ...parent.children.slice(0, index),
          { type: "jsx", value: `<${component} href="${node.url}" passHref><a>` } as JSXNode,
          ...node.children,
          { type: "jsx", value: `</a></${component}>` },
          ...parent.children.slice(index + 1)
        ];

        return [visit.CONTINUE, index + 2 + node.children.length];
      }

      return visit.CONTINUE;
    });
  }

  private isInternalHref(href: string) {
    return href.startsWith("/");
  }
}
