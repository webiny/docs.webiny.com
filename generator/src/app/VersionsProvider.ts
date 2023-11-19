import { IVersionsProvider } from "../abstractions/IVersionsProvider";
import { DocumentRootVersions } from "./DocumentRootVersions";
import fs from "fs-extra";

export class VersionsProvider implements IVersionsProvider {
  private readonly rootDir: string;

  constructor(rootDir: string) {
    this.rootDir = rootDir;
  }

  getVersions(): DocumentRootVersions {
    const allVersions = fs.readdirSync(this.rootDir);

    return new DocumentRootVersions(allVersions);
  }
}
