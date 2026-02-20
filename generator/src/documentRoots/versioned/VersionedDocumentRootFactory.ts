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
  DocumentRootWatcher,
  DocumentRootVersions,
  Version,
  NavigationCache,
  PassthroughFileWriter,
  CompositeDocumentRootWatcher,
  IDocumentRootFactory,
  AppConfig,
  IMdxProcessor,
  IVersionsProvider,
  IMdxRemarkPlugin,
  IMdxFileFilter
} from "@webiny/docs-generator";
import { VersionedMdxFileFactory } from "./VersionedMdxFileFactory";
import { VersionedAssetResolverRemarkPlugin } from "./VersionedAssetResolverRemarkPlugin";
import { VersionedMdxFileLoader } from "./VersionedMdxFileLoader";
import { VersionedAssetResolverFactory } from "./VersionedAssetResolverFactory";
import { VersionedDocumentRoot } from "./VersionedDocumentRoot";
import { VersionsFile } from "./VersionsFile";
import { VersionedMdxFile } from "./VersionedMdxFile";
import { VersionedVariableProcessor } from "./VersionedVariableProcessor";
import { VersionedMdxFileFactoryCallable } from "./VersionedDocumentRootConfig";
import { VersionsProcessor } from "./VersionsProcessor";
import { AbsolutePathProcessor } from "../../app/processors/AbsolutePathProcessor";
import { RemarkPluginsRunner } from "../../app/mdxCompiler/RemarkPluginsRunner";
import { NextLinksRemarkPlugin } from "../../app/mdxCompiler/remark/NextLinksRemarkPlugin";
import { FilteredMdxFileWriter } from "../../app/FilteredMdxFileWriter";
import { VersionRoot } from "./VersionRoot";
import { ProcessedFileWriter } from "../../app/ProcessedFileWriter";
import { PublicMdxFileWriter } from "../../app/PublicMdxFileWriter";

interface Config {
  rootDir: string;
  linkPrefix: `/${string}`;
  outputDir: string;
  pageLayout: string;
  versionsProvider: IVersionsProvider;
  mdxFileProcessors: IMdxProcessor[];
  mdxFileOutputFilter: IMdxFileFilter;
  mdxFileFactory: VersionedMdxFileFactoryCallable;
  mdxRemarkPlugins: IMdxRemarkPlugin[];
}

export class VersionedDocumentRootFactory implements IDocumentRootFactory {
  private readonly documentRoot: IDocumentRoot;
  private readonly appConfig: AppConfig;
  private readonly config: Config;
  private readonly documentRootWatcher: IDocumentRootWatcher;
  private readonly versions: DocumentRootVersions;

  constructor(appConfig: AppConfig, config: Config) {
    this.appConfig = appConfig;

    const versionsFileRelativeOutputPath = `data/versions.${md5(config.rootDir).slice(-6)}.json`;
    const versionsFileAbsoluteOutputPath = `${appConfig.getProjectRootDir()}/${versionsFileRelativeOutputPath}`;

    this.config = {
      ...config,
      mdxFileProcessors: [
        ...config.mdxFileProcessors,
        // Inject versions file import.
        new VersionsProcessor(`@/${versionsFileRelativeOutputPath}`)
      ]
    };

    this.versions = config.versionsProvider.getVersions();

    const versionRoots = this.versions
      .getVersions()
      .filter(version => this.shouldProcessVersion(version))
      .map(version => this.createVersionRoot(version));

    this.documentRoot = new VersionedDocumentRoot(
      this.getVersionsFile(versionsFileAbsoluteOutputPath),
      versionRoots
    );

    this.documentRootWatcher = new CompositeDocumentRootWatcher(
      versionRoots.map(documentRoot => new DocumentRootWatcher(documentRoot))
    );
  }

  getDocumentRoot() {
    return this.documentRoot;
  }

  getDocumentRootWatcher() {
    return this.documentRootWatcher;
  }

  private createVersionRoot(version: Version) {
    const config = this.config;
    const outputDir = config.outputDir;
    const versionedRootDir = `${config.rootDir}/${version}`;
    const linkPrefix = version.isLatest() ? config.linkPrefix : `${config.linkPrefix}/${version}`;
    const navigationSourcePath = `${versionedRootDir}/navigation`;
    const navigationRelativeOutputPath = `data/navigation.${md5(versionedRootDir).slice(-6)}.json`;
    const navigationAbsoluteOutputPath = `${this.appConfig.getProjectRootDir()}/${navigationRelativeOutputPath}`;

    const mdxFileProcessors: IMdxProcessor[] = [
      // Add a separator before code generated via processors.
      new CodeSeparatorProcessor(),
      // Inject layout component import.
      new LayoutProcessor(config.pageLayout),
      // Inject pageData into the page contents.
      new PageDataProcessor(),
      // Inject Algolia indexing data.
      new DocsearchProcessor(),
      // Inject navigation file import.
      new PageNavigationProcessor(`@/${navigationRelativeOutputPath}`),
      // Inject variable values (`{version}`, `{exact:...}`).
      new VersionedVariableProcessor(this.versions),
      ...config.mdxFileProcessors
    ];

    // if (!version.isLatest()) {
    //   mdxFileProcessors.push(new ServerSideRenderProcessor());
    // }

    if (this.appConfig.isDevMode()) {
      // Inject absolute file path for development purposes.
      mdxFileProcessors.push(new AbsolutePathProcessor(this.appConfig.getProjectRootDir()));
    }

    const mdxProcessor = new CompositeMdxProcessor<VersionedMdxFile>(mdxFileProcessors);

    const mdxFileLoader = new VersionedMdxFileLoader<VersionedMdxFile>(
      config.rootDir,
      version,
      this.versions,
      // We need this loader to point to the versioned docs root, and not a specific version.
      new MdxFileLoader<VersionedMdxFile>(
        new VersionedMdxFileFactory(config.mdxFileFactory, version)
      )
    );

    const mdxCompiler = new MdxCompiler([
      RemarkPluginsRunner.create([
        ...this.appConfig.getMdxRemarkPlugins(),
        ...config.mdxRemarkPlugins,
        new VersionedAssetResolverRemarkPlugin(
          new VersionedAssetResolverFactory(config.rootDir, version, this.versions)
        ),
        new NextLinksRemarkPlugin()
      ])
    ]);

    const mdxFileWriter = new FilteredMdxFileWriter(
      config.mdxFileOutputFilter,
      new ProcessedFileWriter(
        mdxProcessor,
        new CompositeMdxFileWriter([
          // In dev mode, we write the processed MDX file for debugging purposes.
          this.appConfig.isDevMode() ? new MdxFileWriter(outputDir) : new PassthroughFileWriter(),
          // Output `latest` files to `public/raw` for access via `.mdx` extension
          version.isLatest()
            ? new PublicMdxFileWriter(`${this.appConfig.getProjectRootDir()}/public/raw`)
            : new PassthroughFileWriter(),
          // Write sitemap XML file for each MDX file.
          new SitemapFileWriter(outputDir),
          // Write a JS file compiled from the MDX file.
          new CompiledMdxFileWriter(outputDir, mdxCompiler)
        ])
      )
    );

    const navigationLoader = new NavigationLoader(
      navigationSourcePath,
      linkPrefix,
      mdxFileLoader,
      new NavigationCache()
    );
    const navigationWriter = new NavigationWriter(
      navigationSourcePath,
      navigationAbsoluteOutputPath,
      mdxFileWriter
    );

    return new VersionRoot(version, navigationLoader, navigationWriter);
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
