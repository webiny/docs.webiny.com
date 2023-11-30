import { DocumentRootVersions } from "../app/DocumentRootVersions";

export interface IVersionsProvider {
  getVersions(): DocumentRootVersions;
}
