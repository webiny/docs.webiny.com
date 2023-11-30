import { Node } from "unist";
import { VFileOptions } from "vfile";

export interface IMdxRemarkPlugin<TTree = Node, TFile = VFileOptions> {
  process(tree: TTree, file: TFile): void;
}
