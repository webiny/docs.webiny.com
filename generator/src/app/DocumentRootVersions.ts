import semver from "semver";

export class Version {
  private readonly _version: string;
  private readonly _isLatest: boolean;
  private readonly _isOldest: boolean;

  constructor(version: string, isLatest?: boolean, isOldest?: boolean) {
    this._version = version;
    this._isLatest = isLatest ?? false;
    this._isOldest = isOldest ?? false;
  }

  getValue() {
    return this._version;
  }

  isLatest() {
    return this._isLatest;
  }

  isOldest() {
    return this._isOldest;
  }

  equals(version: Version) {
    return this._version === version.getValue();
  }

  gt(version: Version | undefined) {
    if (version === undefined) {
      return true;
    }

    if (version.getValue() === "0.0.0") {
      return this._version !== "0.0.0";
    }

    return semver.gt(this.getValue().replace(".x", ".0"), version.getValue().replace(".x", ".0"));
  }

  toString() {
    return this._version;
  }
}

export interface DocumentRootVersionFilter {
  (v: Version): boolean;
}

export class DocumentRootVersions {
  private readonly versions: Version[];

  constructor(versions: string[]) {
    this.versions = this.validateAndSortVersions(versions).map((version, index, parent) => {
      const isLatest = index === 0;
      const isOldest = parent.length - 1 === index;

      return new Version(version, isLatest, isOldest);
    });
  }

  createWithFilter(filter: DocumentRootVersionFilter) {
    const filteredVersions = new Set(this.versions.filter(filter).map(v => v.getValue()));

    // We always include the "latest" version.
    filteredVersions.add(this.getLatest().getValue());

    return new DocumentRootVersions(Array.from(filteredVersions.values()));
  }

  getLatest() {
    // There will always be at least one version, so there will always be a "latest" version.
    return this.versions.find(version => version.isLatest()) as Version;
  }

  getOldest() {
    // There will always be at least one version, so there will always be an "oldest" version.
    return this.versions.find(version => version.isOldest()) as Version;
  }

  getVersions() {
    return this.versions;
  }

  getOlderVersion(version: Version) {
    if (version.isOldest()) {
      return undefined;
    }

    const currentIndex = this.versions.indexOf(version);
    return this.versions[currentIndex + 1];
  }

  private validateAndSortVersions(versions: string[]) {
    /**
     * `.x` is not a valid semver character, so we need to temporarily replace it to perform validation and sorting.
     */
    return semver
      .rsort(versions.map(p => p.replace(".x", ".0")).filter(version => semver.valid(version)))
      .map(v => {
        // Restore the `.x` character in the patch position.
        return v.split(".").slice(0, 2).join(".") + ".x";
      });
  }
}
