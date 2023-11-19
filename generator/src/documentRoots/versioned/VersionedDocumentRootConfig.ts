import { MdxData } from "../../abstractions/IMdxFileFactory";
import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { IMdxCompilerPlugin } from "../../abstractions/IMdxCompilerPlugin";
import { IDocumentRootFactory } from "../../abstractions/IDocumentRootFactory";
import { IDocumentRootConfig } from "../../abstractions/IDocumentRootConfig";
import { IVersionsProvider } from "../../abstractions/IVersionsProvider";
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
  mdxCompilerPlugins?: IMdxCompilerPlugin[];
}

export class VersionedDocumentRootConfig implements IDocumentRootConfig {
  private readonly config: Required<VersionedDocumentRootConfigParams>;

  constructor(config: VersionedDocumentRootConfigParams) {
    this.config = {
      ...config,
      versionsProvider: config.versionsProvider ?? new VersionsProvider(config.rootDir),
      mdxCompilerPlugins: config.mdxCompilerPlugins ?? [],
      mdxFileProcessors: config.mdxFileProcessors ?? []
    };
  }

  getDocumentRootFactory(appConfig: AppConfig): IDocumentRootFactory {
    return new VersionedDocumentRootFactory(appConfig, this.config);
  }
}
