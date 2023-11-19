import { DocumentRootVersions, File } from "@webiny/docs-generator";

export class VersionsFile {
  static create(versions: DocumentRootVersions, outputPath: string) {
    const allVersions = versions.getVersions().map(version => version.getValue());
    const latestVersion = versions.getLatest().getValue();

    return File.createFromObject(
      {
        latestVersion,
        allVersions
      },
      outputPath
    );
  }
}
