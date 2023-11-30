import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { MdxFile } from "./MdxFile";
import { IFile } from "../abstractions/IFile";
import { IMdxFileFilter } from "../abstractions/IMdxFileFilter";

export class FilteredMdxFileWriter implements IMdxFileWriter {
  private readonly filter: IMdxFileFilter;
  private readonly writer: IMdxFileWriter;

  constructor(filter: IMdxFileFilter, writer: IMdxFileWriter) {
    this.filter = filter;
    this.writer = writer;
  }

  async output(mdxFile: MdxFile): Promise<IFile[]> {
    if (this.filter.filter(mdxFile)) {
      return this.writer.output(mdxFile);
    }

    return [];
  }
}
