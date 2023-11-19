import md5 from "md5";
import fs from "fs-extra";

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
  CompositeDocumentRootWatcher
} from "@webiny/docs-generator";
import { DocsMdxFileFactory } from "./DocsMdxFileFactory";
import { remarkResolveAssets } from "./remarkResolveAssets";
import { VersionedMdxFileLoader } from "./VersionedMdxFileLoader";
import { VersionedAssetResolverFactory } from "./VersionedAssetResolverFactory";
import { VersionedDocumentRoot } from "./VersionedDocumentRoot";
import { VersionsFile } from "./VersionsFile";
import { Config } from "../Config";
import { DocsMdxFile } from "./DocsMdxFile";
import { VariableProcessor } from "./VariableProcessor";
import { VersionedMdxLinkResolver } from "./VersionedMdxLinkResolver";

export class DocsDocumentRoot {
  private readonly rootDir: string;
  private readonly documentRoot: IDocumentRoot;
  private readonly config: Config;
  private readonly documentRootWatcher: IDocumentRootWatcher;
  private readonly versions: DocumentRootVersions;

  constructor(config: Config, rootDir: string) {
    this.config = config;
    this.rootDir = rootDir;
    this.versions = this.detectVersions();

    const documentRoots = this.versions
      .getVersions()
      .filter(version => this.shouldProcessVersion(version))
      .map(version => this.createDocumentRoot(this.rootDir, version));

    this.documentRoot = new VersionedDocumentRoot(
      this.getVersionsFile(),
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

  private detectVersions() {
    const allVersions = fs.readdirSync(this.rootDir);

    return new DocumentRootVersions(allVersions);
  }

  private createDocumentRoot(rootDir: string, version: Version) {
    const outputDir = "pages";
    const versionedRootDir = `${rootDir}/${version}`;
    const linkPrefix = version.isLatest() ? "/docs" : `/docs/${version}`;
    const navigationSourcePath = `${versionedRootDir}/navigation`;
    const navigationOutputPath = `data/navigation.${md5(versionedRootDir).slice(-6)}.json`;

    const mdxProcessor = new CompositeMdxProcessor<DocsMdxFile>([
      // Add a separator before code generated via processors.
      new CodeSeparatorProcessor(),
      // Inject layout component import.
      new LayoutProcessor("@/layouts/DocumentationLayout"),
      // Inject pageData into the page contents.
      new PageDataProcessor(),
      // Inject Algolia indexing data.
      new DocsearchProcessor(),
      // Inject navigation file import.
      new PageNavigationProcessor(`@/${navigationOutputPath}`),
      // Inject variable values (`{version}`, `{exact:...}`).
      new VariableProcessor(this.versions)
    ]);

    const mdxFileLoader = new VersionedMdxFileLoader<DocsMdxFile>(
      version,
      this.versions,
      // We need this loader to point to the versioned docs root, and not a specific version.
      new MdxFileLoader<DocsMdxFile>(mdxProcessor, new DocsMdxFileFactory(version))
    );

    const mdxFileWriter = new CompositeMdxFileWriter([
      // In dev mode, we write the processed MDX file for debugging purposes.
      this.config.isDevMode() ? new MdxFileWriter(outputDir) : new PassthroughFileWriter(),
      // Write sitemap XML file for each MDX file.
      new SitemapFileWriter(outputDir),
      // Write a JS file compiled from the MDX file.
      new CompiledMdxFileWriter(
        outputDir,
        new MdxCompiler([
          remarkResolveAssets(new VersionedAssetResolverFactory(rootDir, version, this.versions)),
          withNextLinks(new VersionedMdxLinkResolver(versionedRootDir, linkPrefix))
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
    if (this.config.isDevMode()) {
      return this.config.getVersionsToOutput().includes(version.getValue()) || version.isLatest();
    }
    return true;
  }

  private getVersionsFile() {
    const toOutput = this.config.getVersionsToOutput();
    const filteredVersions = this.config.isDevMode()
      ? this.versions.createWithFilter(v => toOutput.includes(v.getValue()))
      : this.versions;

    return VersionsFile.create(filteredVersions, `data/docs.versions.json`);
  }
}
