import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { IPageProcessorFactory } from "../../abstractions/IPageProcessorFactory";
import { MdxFile } from "../../app/MdxFile";
import { HandbookPage } from "./HandbookPage";

export class HandbookMdxProcessor implements IMdxProcessor {
  private readonly processorFactory: IPageProcessorFactory;

  constructor(processorFactory: IPageProcessorFactory) {
    this.processorFactory = processorFactory;
  }

  async processMdx(mdxFile: MdxFile): Promise<MdxFile> {
    const page = new HandbookPage(mdxFile);

    const processor = this.processorFactory.createPageProcessor(page);

    return processor.processMdx(mdxFile);
  }
}
