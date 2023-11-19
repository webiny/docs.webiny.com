import { MdxData } from "../../abstractions/IMdxFileFactory";
import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { IMdxCompilerPlugin } from "../../abstractions/IMdxCompilerPlugin";
import { IDocumentRootFactory } from "../../abstractions/IDocumentRootFactory";
import { IDocumentRootConfig } from "../../abstractions/IDocumentRootConfig";
import { AppConfig } from "../../app/AppConfig";
import { VersionedDocumentRootFactory } from "./VersionedDocumentRootFactory";
import { Version } from "../../app/DocumentRootVersions";
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
  mdxFileProcessors?: IMdxProcessor[];
  mdxCompilerPlugins?: IMdxCompilerPlugin[];
}

export class VersionedDocumentRootConfig implements IDocumentRootConfig {
  private readonly config: Required<VersionedDocumentRootConfigParams>;

  constructor(config: VersionedDocumentRootConfigParams) {
    this.config = {
      ...config,
      mdxCompilerPlugins: config.mdxCompilerPlugins ?? [],
      mdxFileProcessors: config.mdxFileProcessors ?? []
    };
  }

  getDocumentRootFactory(appConfig: AppConfig): IDocumentRootFactory {
    return new VersionedDocumentRootFactory(appConfig, this.config);
  }
}
