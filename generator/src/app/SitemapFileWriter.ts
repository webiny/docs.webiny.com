import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { IFile } from "../abstractions/IFile";
import { MdxFile } from "./MdxFile";
import { File } from "./File";
import { SitemapUrl } from "./SitemapUrl";

export class SitemapFileWriter implements IMdxFileWriter {
  private readonly relativeOutputPath: string;

  constructor(relativeOutputPath: string) {
    this.relativeOutputPath = relativeOutputPath;
  }

  async output(mdxFile: MdxFile): Promise<IFile[]> {
    const filePath = `${this.relativeOutputPath}/${mdxFile
      .getOutputPath()
      .withExtension("sitemap")}`;

    return [
      new File({
        path: filePath,
        contents: SitemapUrl.create(mdxFile)
      })
    ];
  }
}
