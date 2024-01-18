import { MdxFile } from "./MdxFile";
import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { IFile } from "../abstractions/IFile";

export class ProcessedFileWriter implements IMdxFileWriter {
  private mdxFileProcessor: IMdxProcessor;
  private mdxFileWriter: IMdxFileWriter;

  constructor(mdxFileProcessor: IMdxProcessor, mdxFileWriter: IMdxFileWriter) {
    this.mdxFileProcessor = mdxFileProcessor;
    this.mdxFileWriter = mdxFileWriter;
  }

  async output(mdxFile: MdxFile): Promise<IFile[]> {
    const processedFile = await this.mdxFileProcessor.processMdx(mdxFile);
    return this.mdxFileWriter.output(processedFile);
  }
}
