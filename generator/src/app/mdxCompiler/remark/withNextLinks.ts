import visit from "unist-util-visit";
import { Node } from "unist";
import { VFileOptions } from "vfile";
import { IMdxLinkResolver } from "../../../abstractions/IMdxLinkResolver";
import { addDefaultImport } from "./utils";

function isInternalHref(href: string) {
  return ["/", "../", "./"].some(prefix => href.startsWith(prefix));
}

type JSXNode = Node & { value: string };
type LinkNode = Node & { url: string; children: Node[] };
type NodeWithChildren = Node & { children: Array<Node | JSXNode> };

export const withNextLinks = (linkResolver: IMdxLinkResolver) => {
  return () => (tree: NodeWithChildren, file: VFileOptions) => {
    const component = addDefaultImport(tree, "next/link", "Link");
    const currentFilePath = file.history[0];

    visit<LinkNode>(tree, "link", (node, _, parent) => {
      if (!parent) {
        return;
      }

      if (isInternalHref(node.url)) {
        const index = parent.children.findIndex(child => child === node);
        node.url = linkResolver.resolve(file, currentFilePath, node.url);

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
  };
};
