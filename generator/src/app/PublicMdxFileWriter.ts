import { IFile } from "../abstractions/IFile";
import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { MdxFile } from "./MdxFile";
import { File } from "./File";

const marker = "<!-- ================== AUTO-GENERATED ================== -->";

export class PublicMdxFileWriter implements IMdxFileWriter {
  private readonly relativeOutputPath: string;

  constructor(relativeOutputPath: string) {
    this.relativeOutputPath = relativeOutputPath;
  }

  async output(mdxFile: MdxFile): Promise<IFile[]> {
    const mdxPath = `${this.relativeOutputPath}/${mdxFile.getOutputPath().withExtension("mdx")}`;

    const content = mdxFile.getContents();
    const markerIndex = content.indexOf(marker);
    const cleanContent = content.substring(0, markerIndex);

    return [
      // Output an MDX file.
      new File({
        path: mdxPath,
        contents: cleanContent,
        sourcePath: mdxFile.getAbsolutePath()
      })
    ];
  }
}
