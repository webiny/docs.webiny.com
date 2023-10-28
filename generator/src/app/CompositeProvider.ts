import { IProvider } from "../abstractions/IProvider";
import { IFile } from "../abstractions/IFile";

export class CompositeProvider implements IProvider {
  private providers: IProvider[];
  constructor(providers: IProvider[]) {
    this.providers = providers;
  }

  async getFiles(): Promise<IFile[]> {
    return (await Promise.all(this.providers.map(provider => provider.getFiles()))).flat();
  }
}
