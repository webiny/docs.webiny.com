import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { IFile } from "../abstractions/IFile";
import { MdxFile } from "./MdxFile";
import { File } from "./File";
import { MdxCompiler } from "./MdxCompiler";

export class CompiledMdxFileWriter implements IMdxFileWriter {
  private readonly relativeOutputPath: string;
  private readonly mdxCompiler: MdxCompiler;

  constructor(relativeOutputPath: string, mdxCompiler: MdxCompiler) {
    this.relativeOutputPath = relativeOutputPath;
    this.mdxCompiler = mdxCompiler;
  }

  async output(mdxFile: MdxFile): Promise<IFile[]> {
    const filePath = `${this.relativeOutputPath}/${mdxFile.getOutputPath().withExtension("js")}`;

    return [
      new File({
        path: filePath,
        contents: await this.mdxCompiler.compile(mdxFile.getVFile())
      })
    ];
  }
}
