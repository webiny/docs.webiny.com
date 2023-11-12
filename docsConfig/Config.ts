export interface ConfigProps {
  devMode: boolean;
  outputVersions?: string[];
}

export class Config {
  private props: ConfigProps;

  private constructor(props: ConfigProps) {
    this.props = props;
  }

  isDevMode() {
    return this.props.devMode;
  }

  getVersionsToOutput() {
    return this.props.outputVersions ?? [];
  }

  static create(props: ConfigProps) {
    return new Config(props);
  }
}
