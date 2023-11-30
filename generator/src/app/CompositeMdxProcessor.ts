import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { MdxFile } from "./MdxFile";

export class CompositeMdxProcessor<T extends MdxFile = MdxFile> implements IMdxProcessor {
  private processors: IMdxProcessor[];

  constructor(processors: IMdxProcessor[]) {
    this.processors = processors;
  }

  async processMdx(mdxFile: MdxFile): Promise<T> {
    return (await this.processors.reduce((mdxFile, processor) => {
      return mdxFile.then(mdxFile => Promise.resolve(processor.processMdx(mdxFile)));
    }, Promise.resolve(mdxFile))) as T;
  }
}
