import { Node } from "unist";
import { VFileOptions } from "vfile";
import { IMdxRemarkPlugin } from "../../abstractions/IMdxRemarkPlugin";

/**
 * This class abstracts running of low-level remark plugins.
 * It creates one remark plugin, which then runs all ouf our plugin classes.
 */
export class RemarkPluginsRunner {
  private readonly plugins: IMdxRemarkPlugin[];

  private constructor(plugins: IMdxRemarkPlugin[]) {
    this.plugins = plugins;
  }

  static create(plugins: IMdxRemarkPlugin[]) {
    const runner = new RemarkPluginsRunner(plugins);
    return () => (tree: Node, file: VFileOptions) => runner.process(tree, file);
  }

  private process(tree: Node, file: VFileOptions) {
    for (const plugin of this.plugins) {
      plugin.process(tree, file);
    }
  }
}
