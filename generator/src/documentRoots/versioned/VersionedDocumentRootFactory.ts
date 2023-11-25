import md5 from "md5";

import {
  IDocumentRoot,
  IDocumentRootWatcher,
  CompositeMdxProcessor,
  CodeSeparatorProcessor,
  LayoutProcessor,
  PageDataProcessor,
  DocsearchProcessor,
  PageNavigationProcessor,
  MdxFileLoader,
  CompositeMdxFileWriter,
  MdxFileWriter,
  SitemapFileWriter,
  CompiledMdxFileWriter,
  MdxCompiler,
  NavigationLoader,
  NavigationWriter,
  DocumentRoot,
  DocumentRootWatcher,
  CompositeDocumentRoot,
  DocumentRootVersions,
  Version,
  withNextLinks,
  NavigationCache,
  PassthroughFileWriter,
  CompositeDocumentRootWatcher,
  IDocumentRootFactory,
  AppConfig,
  IMdxProcessor,
  IVersionsProvider
} from "@webiny/docs-generator";
import { VersionedMdxFileFactory } from "./VersionedMdxFileFactory";
import { VersionedAssetResolver } from "./VersionedAssetResolver";
import { VersionedMdxFileLoader } from "./VersionedMdxFileLoader";
import { VersionedAssetResolverFactory } from "./VersionedAssetResolverFactory";
import { VersionedDocumentRoot } from "./VersionedDocumentRoot";
import { VersionsFile } from "./VersionsFile";
import { VersionedMdxFile } from "./VersionedMdxFile";
import { VariableProcessor } from "./VariableProcessor";
import { VersionedMdxLinkResolver } from "./VersionedMdxLinkResolver";
import { IMdxCompilerPlugin } from "../../abstractions/IMdxCompilerPlugin";
import { VersionedMdxFileFactoryCallable } from "./VersionedDocumentRootConfig";
import { VersionsProcessor } from "./VersionsProcessor";

interface Config {
  rootDir: string;
  linkPrefix: `/${string}`;
  outputDir: string;
  pageLayout: string;
  versionsProvider: IVersionsProvider;
  mdxFileProcessors: IMdxProcessor[];
  mdxFileFactory: VersionedMdxFileFactoryCallable;
  mdxCompilerPlugins: IMdxCompilerPlugin[];
}

export class VersionedDocumentRootFactory implements IDocumentRootFactory {
  private readonly documentRoot: IDocumentRoot;
  private readonly appConfig: AppConfig;
  private readonly config: Config;
  private readonly documentRootWatcher: IDocumentRootWatcher;
  private readonly versions: DocumentRootVersions;

  constructor(appConfig: AppConfig, config: Config) {
    this.appConfig = appConfig;

    const versionsFileOutputPath = `data/versions.${md5(config.rootDir).slice(-6)}.json`;

    this.config = {
      ...config,
      mdxFileProcessors: [
        ...config.mdxFileProcessors,
        // Inject versions file import.
        new VersionsProcessor(`@/${versionsFileOutputPath}`)
      ]
    };

    this.versions = config.versionsProvider.getVersions();

    const documentRoots = this.versions
      .getVersions()
      .filter(version => this.shouldProcessVersion(version))
      .map(version => this.createDocumentRoot(version));

    this.documentRoot = new VersionedDocumentRoot(
      this.getVersionsFile(versionsFileOutputPath),
      new CompositeDocumentRoot(documentRoots)
    );

    this.documentRootWatcher = new CompositeDocumentRootWatcher(
      documentRoots.map(documentRoot => new DocumentRootWatcher(documentRoot))
    );
  }

  getDocumentRoot() {
    return this.documentRoot;
  }

  getDocumentRootWatcher() {
    return this.documentRootWatcher;
  }

  private createDocumentRoot(version: Version) {
    const config = this.config;
    const outputDir = config.outputDir;
    const versionedRootDir = `${config.rootDir}/${version}`;
    const linkPrefix = version.isLatest() ? config.linkPrefix : `${config.linkPrefix}/${version}`;
    const navigationSourcePath = `${versionedRootDir}/navigation`;
    const navigationOutputPath = `data/navigation.${md5(versionedRootDir).slice(-6)}.json`;

    const mdxProcessor = new CompositeMdxProcessor<VersionedMdxFile>([
      // Add a separator before code generated via processors.
      new CodeSeparatorProcessor(),
      // Inject layout component import.
      new LayoutProcessor(config.pageLayout),
      // Inject pageData into the page contents.
      new PageDataProcessor(),
      // Inject Algolia indexing data.
      new DocsearchProcessor(),
      // Inject navigation file import.
      new PageNavigationProcessor(`@/${navigationOutputPath}`),
      // Inject variable values (`{version}`, `{exact:...}`).
      new VariableProcessor(this.versions),
      ...config.mdxFileProcessors
    ]);

    const mdxFileLoader = new VersionedMdxFileLoader<VersionedMdxFile>(
      config.rootDir,
      version,
      this.versions,
      // We need this loader to point to the versioned docs root, and not a specific version.
      new MdxFileLoader<VersionedMdxFile>(
        mdxProcessor,
        new VersionedMdxFileFactory(config.mdxFileFactory, version)
      )
    );

    const mdxFileWriter = new CompositeMdxFileWriter([
      // In dev mode, we write the processed MDX file for debugging purposes.
      this.appConfig.isDevMode() ? new MdxFileWriter(outputDir) : new PassthroughFileWriter(),
      // Write sitemap XML file for each MDX file.
      new SitemapFileWriter(outputDir),
      // Write a JS file compiled from the MDX file.
      new CompiledMdxFileWriter(
        outputDir,
        new MdxCompiler([
          VersionedAssetResolver.create(
            new VersionedAssetResolverFactory(config.rootDir, version, this.versions)
          ),
          withNextLinks(
            new VersionedMdxLinkResolver(versionedRootDir, version, this.versions, linkPrefix)
          ),
          ...config.mdxCompilerPlugins
        ])
      )
    ]);

    const navigationLoader = new NavigationLoader(
      navigationSourcePath,
      linkPrefix,
      mdxFileLoader,
      new NavigationCache()
    );
    const navigationWriter = new NavigationWriter(
      navigationSourcePath,
      navigationOutputPath,
      mdxFileWriter
    );

    return new DocumentRoot(navigationLoader, navigationWriter);
  }

  private shouldProcessVersion(version: Version) {
    if (this.appConfig.isDevMode()) {
      return (
        this.appConfig.getVersionsToOutput().includes(version.getValue()) || version.isLatest()
      );
    }
    return true;
  }

  private getVersionsFile(versionsFileOutputPath: string) {
    const toOutput = this.appConfig.getVersionsToOutput();
    const filteredVersions = this.appConfig.isDevMode()
      ? this.versions.createWithFilter(v => toOutput.includes(v.getValue()))
      : this.versions;

    return VersionsFile.create(filteredVersions, versionsFileOutputPath);
  }
}
