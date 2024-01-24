import { DocumentRootVersions, Version } from "../../app/DocumentRootVersions";
import { VersionedFiles } from "./VersionedFiles";
import { VersionedMdxFile } from "./VersionedMdxFile";

export class FilesByVersion {
  private readonly files: VersionedFiles[];
  private versions: DocumentRootVersions;

  constructor(files: VersionedFiles[]) {
    this.files = files;
    this.versions = new DocumentRootVersions(
      files.map(collection => collection.getVersion().getValue())
    );
  }

  withCanonicalVersions() {
    const versions = this.versions.getVersions();

    // Process all version roots in parallel.
    return this.files.map(versionedFiles => {
      // Process all files within the version root in parallel.
      return new VersionedFiles(
        versionedFiles.getVersion(),
        versionedFiles.getFiles().map(file => {
          if (file.getVersion().isLatest()) {
            file.setCanonicalVersion(file.getVersion());
            return file;
          }

          // Find the latest version which contains the given file (versions are ordered in descending order).
          for (const version of versions) {
            if (this.fileExistsInVersion(file, version)) {
              file.setCanonicalVersion(version);
              break;
            }
          }
          return file;
        })
      );
    });
  }

  private fileExistsInVersion(file: VersionedMdxFile, version: Version) {
    const versionedFiles = this.files.find(files => files.getVersion().equals(version));
    if (!versionedFiles) {
      return false;
    }

    const filePath = file.getOutputPath().withoutExtension();
    const replacement = version.isLatest() ? "/" : `/${version.getValue()}/`;
    const canonicalPath = filePath.replace(`/${file.getVersion()}/`, replacement);

    if (versionedFiles.findFileByAbsolutePath(canonicalPath)) {
      return true;
    }

    return false;
  }
}
