import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { IFile } from "../abstractions/IFile";
import { MdxFile } from "./MdxFile";
import { IMdxFileFilter } from "../abstractions/IMdxFileFilter";

const defaultFilter: IMdxFileFilter = () => true;

export class FilteredMdxFileWriter implements IMdxFileWriter {
  private filters: IMdxFileFilter[];
  private mdxFileWriter: IMdxFileWriter;

  constructor(filters: IMdxFileFilter[], mdxFileWriter: IMdxFileWriter) {
    this.filters = filters.length ? filters : [defaultFilter];
    this.mdxFileWriter = mdxFileWriter;
  }

  async output(mdxFile: MdxFile): Promise<IFile[]> {
    if (this.filters.some(filter => filter(mdxFile))) {
      return this.mdxFileWriter.output(mdxFile);
    }

    return [];
  }
}
