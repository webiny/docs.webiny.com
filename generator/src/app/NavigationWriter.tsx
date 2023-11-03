import { Navigation } from "./Navigation";
import { INavigationWriter } from "../abstractions/INavigationWriter";
import { IFile } from "../abstractions/IFile";
import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { File } from "./File";

export class NavigationWriter implements INavigationWriter {
  private readonly navigationOutputPath: string;
  private mdxFileWriter: IMdxFileWriter;

  constructor(navigationOutputPath: string, mdxFileWriter: IMdxFileWriter) {
    this.navigationOutputPath = navigationOutputPath;
    this.mdxFileWriter = mdxFileWriter;
  }
  async output(navigation: Navigation): Promise<IFile[]> {
    const mdxFiles = await navigation.getMdxFiles();
    const rawFiles = await Promise.all(mdxFiles.map(mdxFile => this.mdxFileWriter.output(mdxFile)));

    const navigationFile = new File({
      contents: JSON.stringify(navigation.getNavigationData(), null, 2),
      path: this.navigationOutputPath
    });

    return [...rawFiles.flat(), navigationFile];
  }
}
