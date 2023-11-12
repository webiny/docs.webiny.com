import semver from "semver";

export class Version {
  private readonly _version: string;
  private readonly _isLatest: boolean;
  private readonly _isOldest: boolean;

  constructor(version: string, isLatest: boolean, isOldest: boolean) {
    this._version = version;
    this._isLatest = isLatest;
    this._isOldest = isOldest;
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

  toString() {
    return this._version;
  }
}

export class DocumentRootVersions {
  private readonly versions: Version[];
  constructor(versions: string[]) {
    this.versions = this.validateAndSortVersions(versions).map((version, index) => {
      const isLatest = index === 0;
      const isOldest = versions.length - 1 === index;

      return new Version(version, isLatest, isOldest);
    });
  }

  getLatest() {
    // There will always be at least one version, so there will always be a "latest" version.
    return this.versions.find(version => version.isLatest()) as Version;
  }

  getVersions() {
    return this.versions;
  }

  getPreviousVersion(version: Version) {
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
      .map(v => v.replace(".0", ".x"));
  }
}
