export interface IVersionable {
  getVersion(): Version;
  setVersion(version: Version): void;
}

/**
 * Why this type?
 * Very often, we do comparisons between versions, like gt/lt, we do parsing, validation, etc.
 * It's helpful to have all that logic encapsulated in a dedicated type, instead of using helper functions
 * scattered across the project. Think of this as a project-level scalar type.
 */
export class Version {
  private readonly version: string;

  constructor(version: string) {
    this.version = version;
  }

  getVersion() {
    return this.version;
  }
}
