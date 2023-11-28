import { MdxData } from "../../abstractions/IMdxFileFactory";
import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { IDocumentRootFactory } from "../../abstractions/IDocumentRootFactory";
import { IDocumentRootConfig } from "../../abstractions/IDocumentRootConfig";
import { IVersionsProvider } from "../../abstractions/IVersionsProvider";
import {IMdxRemarkPlugin} from "../../abstractions/IMdxRemarkPlugin";
import { AppConfig } from "../../app/AppConfig";
import { Version } from "../../app/DocumentRootVersions";
import { VersionsProvider } from "../../app/VersionsProvider";
import { VersionedDocumentRootFactory } from "./VersionedDocumentRootFactory";
import { VersionedMdxFile } from "./VersionedMdxFile";

export interface VersionedMdxFileFactoryCallable {
  (data: MdxData, version: Version): VersionedMdxFile;
}

interface VersionedDocumentRootConfigParams {
  rootDir: string;
  linkPrefix: `/${string}`;
  outputDir: string;
  pageLayout: string;
  mdxFileFactory: VersionedMdxFileFactoryCallable;
  versionsProvider?: IVersionsProvider;
  mdxFileProcessors?: IMdxProcessor[];
  mdxRemarkPlugins?: IMdxRemarkPlugin[];
}

export class VersionedDocumentRootConfig implements IDocumentRootConfig {
  private readonly config: Required<VersionedDocumentRootConfigParams>;

  constructor(config: VersionedDocumentRootConfigParams) {
    this.config = {
      ...config,
      versionsProvider: config.versionsProvider ?? new VersionsProvider(config.rootDir),
      mdxRemarkPlugins: config.mdxRemarkPlugins ?? [],
      mdxFileProcessors: config.mdxFileProcessors ?? []
    };
  }

  getDocumentRootFactory(appConfig: AppConfig): IDocumentRootFactory {
    return new VersionedDocumentRootFactory(appConfig, this.config);
  }
}
