import path from "path";
import md5 from "md5";
import fs from "fs-extra";

import {
  IDocumentRoot,
  IDocumentRootWatcher,
  MdxFileCache,
  CompositeMdxProcessor,
  CodeSeparatorProcessor,
  LayoutProcessor,
  PageDataProcessor,
  DocsearchProcessor,
  PageNavigationProcessor,
  MdxFileLoader,
  CompositeMdxFileWriter,
  FilteredMdxFileWriter,
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
  Version
} from "@webiny/docs-generator";
import { DocsMdxFileFactory } from "./DocsMdxFileFactory";
import { remarkResolveAssets } from "./remarkResolveAssets";
import { VersionedMdxFileLoader } from "./VersionedMdxFileLoader";
import { VersionedAssetResolverFactory } from "./VersionedAssetResolverFactory";
import { VersionedDocumentRoot } from "./VersionedDocumentRoot";
import { VersionsFile } from "./VersionsFile";
import { Config } from "../Config";
import { IMdxFileFilter } from "@webiny/docs-generator/src/abstractions/IMdxFileFilter";
import { DocsMdxFile } from "./DocsMdxFile";
import { VariableProcessor } from "./VariableProcessor";

export class DocsDocumentRoot {
  private readonly rootDir: string;
  private readonly mdxFileCache: MdxFileCache;
  private readonly documentRoot: IDocumentRoot;
  private readonly config: Config;
  private readonly documentRootWatcher: IDocumentRootWatcher;
  private readonly versions: DocumentRootVersions;

  constructor(config: Config, cache: MdxFileCache, rootDir: string) {
    this.config = config;
    this.mdxFileCache = cache;
    this.rootDir = rootDir;
    this.versions = this.detectVersions();

    this.documentRoot = new VersionedDocumentRoot(
      this.getVersionsFile(),
      new CompositeDocumentRoot(
        this.versions.getVersions().map(version => {
          return this.createDocumentRoot(this.rootDir, version);
        })
      )
    );

    this.documentRootWatcher = new DocumentRootWatcher(
      path.resolve("src"),
      cache,
      this.documentRoot
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
    const navigationPath = `${versionedRootDir}/navigation`;
    const navigationOutputPath = `data/navigation.${md5(versionedRootDir).slice(-6)}.json`;

    const mdxProcessor = new CompositeMdxProcessor([
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

    const mdxFileLoader = new VersionedMdxFileLoader(
      rootDir,
      version,
      this.versions,
      // We need this loader to point to the versioned docs root, and not a specific version.
      new MdxFileLoader(rootDir, this.mdxFileCache, mdxProcessor, new DocsMdxFileFactory(version))
    );

    const mdxFileWriter = new FilteredMdxFileWriter(
      this.getMdxOutputFilters(),
      new CompositeMdxFileWriter([
        // Write the processed MDX file.
        new MdxFileWriter(outputDir),
        // Write sitemap XML file for each MDX file.
        new SitemapFileWriter(outputDir),
        // Write a JS file compiled from the MDX file.
        new CompiledMdxFileWriter(
          outputDir,
          new MdxCompiler([
            remarkResolveAssets(new VersionedAssetResolverFactory(rootDir, version, this.versions))
          ])
        )
      ])
    );

    const navigationLoader = new NavigationLoader(navigationPath, linkPrefix, mdxFileLoader);
    const navigationWriter = new NavigationWriter(navigationOutputPath, mdxFileWriter);

    return new DocumentRoot(navigationLoader, navigationWriter);
  }

  private getMdxOutputFilters(): IMdxFileFilter<DocsMdxFile>[] {
    if (this.config.isDevMode()) {
      return [
        // If specific versions were configured, make sure the file matches one of those versions.
        mdxFile => this.config.getVersionsToOutput().includes(mdxFile.getVersion().getValue()),
        // By default, in dev mode, we only want to output the latest version.
        mdxFile => mdxFile.getVersion().isLatest()
      ];
    }

    // Output all files.
    return [];
  }

  private getVersionsFile() {
    const toOutput = this.config.getVersionsToOutput();
    const filteredVersions = this.config.isDevMode()
      ? this.versions.createWithFilter(v => toOutput.includes(v.getValue()))
      : this.versions;

    return VersionsFile.create(filteredVersions, `data/docs.versions.json`);
  }
}
