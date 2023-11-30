import { IFile } from "../abstractions/IFile";
import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { MdxFile } from "./MdxFile";
import { File } from "./File";

export class MdxFileWriter implements IMdxFileWriter {
  private readonly relativeOutputPath: string;

  constructor(relativeOutputPath: string) {
    this.relativeOutputPath = relativeOutputPath;
  }

  async output(mdxFile: MdxFile): Promise<IFile[]> {
    const mdxPath = `${this.relativeOutputPath}/${mdxFile.getOutputPath().withExtension("mdx")}`;

    return [
      // Output an MDX file.
      new File({
        path: mdxPath,
        contents: mdxFile.getContents(),
        sourcePath: mdxFile.getAbsolutePath()
      })
    ];
  }
}
