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

  private static toSemver(version: string): string {
    if (/^\d+\.x$/.test(version)) {
      return version.replace(".x", ".0.0");
    }
    return version.replace(".x", ".0");
  }

  gt(version: Version | undefined) {
    if (version === undefined) {
      return true;
    }

    if (version.getValue() === "0.0.0") {
      return this._version !== "0.0.0";
    }

    return semver.gt(Version.toSemver(this.getValue()), Version.toSemver(version.getValue()));
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
    const originalMap = new Map<string, string>();
    const normalized: string[] = [];

    for (const v of versions) {
      let semverVersion: string;
      if (/^\d+\.x$/.test(v)) {
        // 2-part: "5.x" → "5.0.0"
        semverVersion = v.replace(".x", ".0.0");
      } else {
        // 3-part: "5.44.x" → "5.44.0"
        semverVersion = v.replace(".x", ".0");
      }
      if (semver.valid(semverVersion)) {
        originalMap.set(semverVersion, v);
        normalized.push(semverVersion);
      }
    }

    return semver.rsort(normalized).map(v => originalMap.get(v)!);
  }
}
