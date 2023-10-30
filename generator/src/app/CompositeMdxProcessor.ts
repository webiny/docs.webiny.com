import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { MdxFile } from "./MdxFile";

export class CompositeMdxProcessor implements IMdxProcessor {
  private processors: IMdxProcessor[];
  constructor(processors: IMdxProcessor[]) {
    this.processors = processors;
  }

  async processMdx(mdxFile: MdxFile) {
    return this.processors.reduce((mdxFile, processor) => {
      return mdxFile.then(mdxFile => processor.processMdx(mdxFile));
    }, Promise.resolve(mdxFile));
  }
}
