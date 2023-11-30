import { IVersionsProvider } from "../abstractions/IVersionsProvider";
import { DocumentRootVersions, Version } from "./DocumentRootVersions";

export class FilteredVersionsProvider implements IVersionsProvider {
  private readonly filter: (v: Version) => boolean;
  private versionsProvider: IVersionsProvider;

  constructor(filter: (v: Version) => boolean, versionsProvider: IVersionsProvider) {
    this.filter = filter;
    this.versionsProvider = versionsProvider;
  }

  getVersions(): DocumentRootVersions {
    const allVersions = this.versionsProvider.getVersions();

    return allVersions.createWithFilter(this.filter);
  }
}
