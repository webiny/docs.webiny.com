import { MdxData } from "../../abstractions/IMdxFileFactory";
import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { IDocumentRootFactory } from "../../abstractions/IDocumentRootFactory";
import { IDocumentRootConfig } from "../../abstractions/IDocumentRootConfig";
import { IVersionsProvider } from "../../abstractions/IVersionsProvider";
import { IMdxRemarkPlugin } from "../../abstractions/IMdxRemarkPlugin";
import { AppConfig } from "../../app/AppConfig";
import { Version } from "../../app/DocumentRootVersions";
import { VersionsProvider } from "../../app/VersionsProvider";
import { VersionedDocumentRootFactory } from "./VersionedDocumentRootFactory";
import { VersionedMdxFile } from "./VersionedMdxFile";
import { IMdxFileFilter } from "../../abstractions/IMdxFileFilter";
import { MdxFileFilter } from "../../app/MdxFileFilter";

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
  mdxFileOutputFilter?: IMdxFileFilter;
  mdxFileProcessors?: IMdxProcessor[];
  mdxRemarkPlugins?: IMdxRemarkPlugin[];
}

export class VersionedDocumentRootConfig implements IDocumentRootConfig {
  private readonly config: Required<VersionedDocumentRootConfigParams>;

  constructor(config: VersionedDocumentRootConfigParams) {
    const versionsProvider = config.versionsProvider ?? new VersionsProvider(config.rootDir);

    this.config = {
      ...config,
      versionsProvider,
      mdxRemarkPlugins: config.mdxRemarkPlugins ?? [],
      mdxFileOutputFilter: config.mdxFileOutputFilter ?? new MdxFileFilter(() => true),
      mdxFileProcessors: config.mdxFileProcessors ?? []
    };
  }

  getDocumentRootFactory(appConfig: AppConfig): IDocumentRootFactory {
    return new VersionedDocumentRootFactory(appConfig, this.config);
  }
}
