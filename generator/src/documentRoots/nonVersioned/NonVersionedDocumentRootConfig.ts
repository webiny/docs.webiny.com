import { MdxData } from "../../abstractions/IMdxFileFactory";
import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { IDocumentRootFactory } from "../../abstractions/IDocumentRootFactory";
import { IDocumentRootConfig } from "../../abstractions/IDocumentRootConfig";
import { IMdxRemarkPlugin } from "../../abstractions/IMdxRemarkPlugin";
import { MdxFile } from "../../app/MdxFile";
import { AppConfig } from "../../app/AppConfig";
import { NonVersionedDocumentRootFactory } from "./NonVersionedDocumentRootFactory";

export interface NonVersionedMdxFileFactoryCallable {
  (data: MdxData): MdxFile;
}

interface NonVersionedDocumentRootConfigParams {
  rootDir: string;
  linkPrefix: `/${string}`;
  outputDir: string;
  pageLayout: string;
  mdxFileFactory: NonVersionedMdxFileFactoryCallable;
  mdxFileProcessors?: IMdxProcessor[];
  mdxRemarkPlugins?: IMdxRemarkPlugin[];
}

export class NonVersionedDocumentRootConfig implements IDocumentRootConfig {
  private readonly config: Required<NonVersionedDocumentRootConfigParams>;

  constructor(config: NonVersionedDocumentRootConfigParams) {
    this.config = {
      ...config,
      mdxRemarkPlugins: config.mdxRemarkPlugins ?? [],
      mdxFileProcessors: config.mdxFileProcessors ?? []
    };
  }

  getDocumentRootFactory(appConfig: AppConfig): IDocumentRootFactory {
    return new NonVersionedDocumentRootFactory(appConfig, this.config);
  }
}
