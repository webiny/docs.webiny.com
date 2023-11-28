import { IDocumentRootConfig } from "../abstractions/IDocumentRootConfig";
import { IMdxRemarkPlugin } from "../abstractions/IMdxRemarkPlugin";
import { LinkValidator } from "./LinkValidator";

export interface AppConfigProps {
  devMode: boolean;
  documentRootConfigs: IDocumentRootConfig[];
  linkValidator?: LinkValidator;
  mdxRemarkPlugins?: IMdxRemarkPlugin[];
  outputVersions?: string[];
  projectRootDir: string;
  sitemapOutputPath?: string;
}

export interface AppConfigModifier {
  (config: AppConfigProps): AppConfigProps;
}

export class AppConfig {
  private readonly props: AppConfigProps;

  private constructor(props: AppConfigProps) {
    this.props = props;
  }

  isDevMode() {
    return this.props.devMode;
  }

  getLinkValidator() {
    return this.props.linkValidator || new LinkValidator(() => true);
  }

  getMdxRemarkPlugins() {
    return this.props.mdxRemarkPlugins ?? [];
  }

  getSitemapOutputPath() {
    return this.props.sitemapOutputPath;
  }

  getDocumentRootConfigs() {
    return this.props.documentRootConfigs;
  }

  getVersionsToOutput() {
    return this.props.outputVersions ?? [];
  }

  getProjectRootDir() {
    return this.props.projectRootDir;
  }

  static create(props: AppConfigProps) {
    return new AppConfig(props);
  }

  modify(cb: AppConfigModifier) {
    return new AppConfig(cb(this.props));
  }
}
