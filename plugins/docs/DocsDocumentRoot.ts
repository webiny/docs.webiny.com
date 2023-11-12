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
import {VersionsFile} from "./VersionsFile";

export class DocsDocumentRoot {
  private readonly rootDir: string;
  private readonly mdxFileCache: MdxFileCache;
  private readonly documentRoot: IDocumentRoot;
  private readonly documentRootWatcher: IDocumentRootWatcher;
  private readonly versions: DocumentRootVersions;

  constructor(cache: MdxFileCache, rootDir: string) {
    this.mdxFileCache = cache;
    this.rootDir = rootDir;
    this.versions = this.detectVersions();

    this.documentRoot = new VersionedDocumentRoot(
      VersionsFile.create(this.versions, `data/docs.versions.json`),
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
      new PageNavigationProcessor(`@/${navigationOutputPath}`)
    ]);

    const mdxFileLoader = new VersionedMdxFileLoader(
      rootDir,
      version,
      this.versions,
      // We need this loader to point to the versioned docs root, and not a specific version.
      new MdxFileLoader(rootDir, this.mdxFileCache, mdxProcessor, new DocsMdxFileFactory(version))
    );

    const mdxFileWriter = new CompositeMdxFileWriter([
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
    ]);

    const navigationLoader = new NavigationLoader(navigationPath, linkPrefix, mdxFileLoader);
    const navigationWriter = new NavigationWriter(navigationOutputPath, mdxFileWriter);

    return new DocumentRoot(navigationLoader, navigationWriter);
  }
}
