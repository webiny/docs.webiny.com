import fs from "fs-extra";
import path from "path";
import {
  Version,
  MdxData,
  NonVersionedDocumentRootConfig,
  VersionedDocumentRootConfig,
  LinkValidator
} from "@webiny/docs-generator";
import { DeveloperDocsMdxFile } from "./docs/developer-docs/DeveloperDocsMdxFile";
import { HandbookMdxFile } from "./docs/handbook/HandbookMdxFile";
import { UserGuideMdxFile } from "./docs/user-guides/UserGuideMdxFile";
import { UserGuidesVersionProvider } from "./docs/user-guides/UserGuidesVersionProvider";

export default {
  projectRootDir: __dirname,
  cleanOutputDir: path.resolve("src/pages/docs"),
  sitemapOutputPath: path.resolve("public/algolia/sitemap.xml"),
  linkValidator: new LinkValidator(link => {
    return fs.pathExists(path.join(__dirname, `src/pages/${link}.js`));
  }),
  documentRoots: [
    /* Developer Docs */
    new VersionedDocumentRootConfig({
      rootDir: path.resolve("docs/developer-docs"),
      linkPrefix: "/docs",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/DocumentationLayout",
      mdxFileFactory: (data: MdxData, version: Version) => new DeveloperDocsMdxFile(data, version)
    }),

    /* User Guides */
    new VersionedDocumentRootConfig({
      rootDir: path.resolve("docs/user-guides"),
      linkPrefix: "/docs",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/DocumentationLayout",
      mdxFileFactory: (data: MdxData, version: Version) => new UserGuideMdxFile(data, version),
      versionsProvider: new UserGuidesVersionProvider(
        path.resolve("docs/developer-docs"),
        path.resolve("docs/user-guides")
      )
    }),

    /* Handbook */
    process.env.NODE_ENV === "development" &&
      new NonVersionedDocumentRootConfig({
        rootDir: path.resolve("docs/handbook"),
        linkPrefix: "/docs/handbook",
        outputDir: path.resolve("src/pages"),
        pageLayout: "@/layouts/HandbookLayout",
        mdxFileFactory: (data: MdxData) => new HandbookMdxFile(data)
      })
  ]
};
