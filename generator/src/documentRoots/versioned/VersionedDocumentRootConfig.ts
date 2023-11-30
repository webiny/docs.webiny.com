import { MdxData } from "../../abstractions/IMdxFileFactory";
import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { IDocumentRootFactory } from "../../abstractions/IDocumentRootFactory";
import { IDocumentRootConfig } from "../../abstractions/IDocumentRootConfig";
import { IVersionsProvider } from "../../abstractions/IVersionsProvider";
import { IMdxRemarkPlugin } from "../../abstractions/IMdxRemarkPlugin";
import { AppConfig } from "../../app/AppConfig";
import { DocumentRootVersionFilter, Version } from "../../app/DocumentRootVersions";
import { VersionsProvider } from "../../app/VersionsProvider";
import { VersionedDocumentRootFactory } from "./VersionedDocumentRootFactory";
import { VersionedMdxFile } from "./VersionedMdxFile";
import { FilteredVersionsProvider } from "../../app/FilteredVersionsProvider";

export interface VersionedMdxFileFactoryCallable {
  (data: MdxData, version: Version): VersionedMdxFile;
}

interface VersionedDocumentRootConfigParams {
  rootDir: string;
  linkPrefix: `/${string}`;
  outputDir: string;
  pageLayout: string;
  mdxFileFactory: VersionedMdxFileFactoryCallable;
  versionsFilter?: DocumentRootVersionFilter;
  versionsProvider?: IVersionsProvider;
  mdxFileProcessors?: IMdxProcessor[];
  mdxRemarkPlugins?: IMdxRemarkPlugin[];
}

export class VersionedDocumentRootConfig implements IDocumentRootConfig {
  private readonly config: Omit<Required<VersionedDocumentRootConfigParams>, "versionsFilter">;

  constructor({ versionsFilter, ...config }: VersionedDocumentRootConfigParams) {
    const baseVersionsProvider = config.versionsProvider ?? new VersionsProvider(config.rootDir);

    const versionsProvider = new FilteredVersionsProvider(
      versionsFilter ?? (() => true),
      baseVersionsProvider
    );

    this.config = {
      ...config,
      versionsProvider,
      mdxRemarkPlugins: config.mdxRemarkPlugins ?? [],
      mdxFileProcessors: config.mdxFileProcessors ?? []
    };
  }

  getDocumentRootFactory(appConfig: AppConfig): IDocumentRootFactory {
    return new VersionedDocumentRootFactory(appConfig, this.config);
  }
}
