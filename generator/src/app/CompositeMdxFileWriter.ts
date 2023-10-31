import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { MdxFile } from "./MdxFile";
import { IFile } from "../abstractions/IFile";

export class CompositeMdxFileWriter implements IMdxFileWriter {
  private writers: IMdxFileWriter[];
  constructor(writers: IMdxFileWriter[]) {
    this.writers = writers;
  }

  output(mdxFile: MdxFile) {
    return this.writers.reduce((output, writer) => {
      return output.then(files =>
        writer.output(mdxFile).then(nextFiles => [...files, ...nextFiles])
      );
    }, Promise.resolve<IFile[]>([]));
  }
}
