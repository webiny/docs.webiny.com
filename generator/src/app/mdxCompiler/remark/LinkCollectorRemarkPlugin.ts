import visit from "unist-util-visit";
import { Node } from "unist";
import { VFileOptions } from "vfile";
import { IMdxRemarkPlugin } from "../../../abstractions/IMdxRemarkPlugin";

type JSXNode = Node & { value: string };
type LinkNode = Node & { url: string; children: Node[] };
type NodeWithChildren = Node & { children: Array<Node | JSXNode> };

interface OnLink {
  (file: string, link: string): void;
}

export class LinkCollectorRemarkPlugin implements IMdxRemarkPlugin<NodeWithChildren> {
  private readonly onLink: OnLink;

  constructor(onLink: OnLink) {
    this.onLink = onLink;
  }

  process(tree: NodeWithChildren, file: VFileOptions): void {
    const filePath = file.history[0];

    visit<LinkNode>(tree, "link", node => {
      this.onLink(filePath, node.url);
    });
  }
}
