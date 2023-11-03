import { IFile } from "../abstractions/IFile";
import { IDocumentRoot } from "../abstractions/IDocumentRoot";
import { INavigationLoader } from "../abstractions/INavigationLoader";
import { INavigationWriter } from "../abstractions/INavigationWriter";

export class SimpleDocumentRoot implements IDocumentRoot {
  private navigationLoader: INavigationLoader;
  private navigationWriter: INavigationWriter;

  constructor(navigationLoader: INavigationLoader, navigationWriter: INavigationWriter) {
    this.navigationLoader = navigationLoader;
    this.navigationWriter = navigationWriter;
  }

  async generate(): Promise<IFile[]> {
    const navigation = await this.navigationLoader.load();

    return this.navigationWriter.output(navigation);
  }
}
