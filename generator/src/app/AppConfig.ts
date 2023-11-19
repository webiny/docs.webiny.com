import { IDocumentRootConfig } from "../abstractions/IDocumentRootConfig";

export interface AppConfigProps {
  devMode: boolean;
  outputRoot: string;
  documentRootConfigs: IDocumentRootConfig[];
  outputVersions?: string[];
}

export class AppConfig {
  private props: AppConfigProps;

  private constructor(props: AppConfigProps) {
    this.props = props;
  }

  isDevMode() {
    return this.props.devMode;
  }

  getOutputRoot() {
    return this.props.outputRoot;
  }

  getDocumentRootConfigs() {
    return this.props.documentRootConfigs;
  }

  getVersionsToOutput() {
    return this.props.outputVersions ?? [];
  }

  static create(props: AppConfigProps) {
    return new AppConfig(props);
  }
}
