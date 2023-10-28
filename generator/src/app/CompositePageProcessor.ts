import { IFileProcessor } from "../../abstractions/IFileProcessor";

export class CompositePageProcessor implements IFileProcessor {
  private processors: IFileProcessor[];
  constructor(processors: IFileProcessor[]) {
    this.processors = processors;
  }

  process(contents: string) {
    return this.processors.reduce((contents, processor) => processor.process(contents), contents);
  }
}
