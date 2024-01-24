import { Navigation } from "./Navigation";
import { INavigationWriter } from "../abstractions/INavigationWriter";
import { IFile } from "../abstractions/IFile";
import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { File } from "./File";
import { MdxFile } from "./MdxFile";

export class NavigationWriter implements INavigationWriter {
  private readonly navigationOutputPath: string;
  private readonly navigationSourcePath: string;
  private mdxFileWriter: IMdxFileWriter;

  constructor(
    navigationSourcePath: string,
    navigationOutputPath: string,
    mdxFileWriter: IMdxFileWriter
  ) {
    this.navigationSourcePath = navigationSourcePath;
    this.navigationOutputPath = navigationOutputPath;
    this.mdxFileWriter = mdxFileWriter;
  }
  async output(navigation: Navigation, files?: MdxFile[]): Promise<IFile[]> {
    const mdxFiles = Array.isArray(files) ? files : await navigation.getMdxFiles();
    const rawFiles = await Promise.all(mdxFiles.map(mdxFile => this.mdxFileWriter.output(mdxFile)));

    const navigationFile = new File({
      sourcePath: this.navigationSourcePath,
      contents: JSON.stringify(navigation.getNavigationData(), null, 2),
      path: this.navigationOutputPath
    });

    return [...rawFiles.flat(), navigationFile];
  }
}
