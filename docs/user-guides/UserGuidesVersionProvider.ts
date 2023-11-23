import fs from "fs-extra";
import { gte } from "semver";
import { DocumentRootVersions, IVersionsProvider, Version } from "@webiny/docs-generator";

/**
 * User guides behave slightly differently from other docs: while developer docs get a new version folder
 * with each release, User Guides don't necessarily need a new folder. But we still want to have versions
 * to follow the developer docs, except the "oldest" version. We want to start at the oldest version that
 * exists withing the User Guides, and continue with developer docs versions that are greater or equal.
 */

export class UserGuidesVersionProvider implements IVersionsProvider {
  private readonly docsRootDir: string;
  private readonly userGuidesRootDir: string;

  constructor(docsRootDir: string, userGuidesRootDir: string) {
    this.docsRootDir = docsRootDir;
    this.userGuidesRootDir = userGuidesRootDir;
  }

  getVersions(): DocumentRootVersions {
    const docsVersions = new DocumentRootVersions(fs.readdirSync(this.docsRootDir));
    const userGuidesVersions = new DocumentRootVersions(fs.readdirSync(this.userGuidesRootDir));

    const oldestUserGuideVersion = userGuidesVersions.getOldest();

    const versions = docsVersions.createWithFilter(version =>
      gte(this.toValidSemver(version), this.toValidSemver(oldestUserGuideVersion))
    );

    this.ensureVersionDirectoriesExist(versions);

    return versions;
  }

  private toValidSemver(version: Version) {
    return version.getValue().replace(".x", ".0");
  }

  private ensureVersionDirectoriesExist(versions: DocumentRootVersions) {
    for (const version of versions.getVersions()) {
      if (!fs.pathExistsSync(`${this.userGuidesRootDir}/${version}`)) {
        const error = [
          "CONFIGURATION ERROR: User Guides are not configured correctly!",
          `Version folder ${version} does not exist in ${this.userGuidesRootDir}.`,
          `To fix this issue, create a ${version} folder and configure a "navigation.tsx" file.`,
          ""
        ];

        console.log(error.join("\n"));
        process.exit(1);
      }
    }
  }
}
