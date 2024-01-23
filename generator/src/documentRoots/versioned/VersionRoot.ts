import { Version } from "../../app/DocumentRootVersions";
import { NavigationLoader } from "../../app/NavigationLoader";
import { NavigationWriter } from "../../app/NavigationWriter";
import { IDocumentRoot } from "../../abstractions/IDocumentRoot";
import { IFile } from "../../abstractions/IFile";
import { VersionedMdxFile } from "./VersionedMdxFile";
import { MdxFile } from "../../app/MdxFile";
import { Navigation } from "../../app/Navigation";

export class VersionRoot implements IDocumentRoot {
  private readonly version: Version;
  private navigationLoader: NavigationLoader;
  private navigationWriter: NavigationWriter;
  private navigation: Navigation | undefined = undefined;

  constructor(
    version: Version,
    navigationLoader: NavigationLoader,
    navigationWriter: NavigationWriter
  ) {
    this.version = version;
    this.navigationLoader = navigationLoader;
    this.navigationWriter = navigationWriter;
  }

  getVersion() {
    return this.version;
  }

  async getMdxFiles() {
    this.navigation = await this.navigationLoader.load();

    return this.navigation.getMdxFiles() as VersionedMdxFile[];
  }

  async output(files: MdxFile[]) {
    if (!this.navigation) {
      return [];
    }

    return this.navigationWriter.output(this.navigation, files);
  }

  /**
   * This method will be used by the watcher.
   */
  async generate(): Promise<IFile[]> {
    const navigation = await this.navigationLoader.load();

    return this.navigationWriter.output(navigation);
  }
}
