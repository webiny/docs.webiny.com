import fs from "fs-extra";
import path from "path";
import {
  Version,
  MdxData,
  NonVersionedDocumentRootConfig,
  VersionedDocumentRootConfig,
  LinkValidator,
  MdxFileFilter
} from "@webiny/docs-generator";
import { DeveloperDocsMdxFile } from "./docs/developer-docs/DeveloperDocsMdxFile";
import { HandbookMdxFile } from "./docs/handbook/HandbookMdxFile";
import { UserGuideMdxFile } from "./docs/user-guides/UserGuideMdxFile";
import { UserGuidesVersionProvider } from "./docs/user-guides/UserGuidesVersionProvider";
import { ReleaseNotesMdxFile } from "./docs/release-notes/ReleaseNotesMdxFile";

const preview = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";

/**
 * If you want to only build specific versions in the Vercel preview deployment,
 * whitelist them by adding version numbers to this array. Example: "5.35.x"
 */
const whitelistedVersions: string[] = [];

const filterByEnvironment = (version: Version) => {
  // In `preview`, if there are specific versions whitelisted for deployment, those are the only ones we'll output.
  if (preview && whitelistedVersions.length > 0) {
    return whitelistedVersions.includes(version.getValue());
  }

  // Build everything.
  return true;
};

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
      mdxFileFactory: (data: MdxData, version: Version) => new DeveloperDocsMdxFile(data, version),
      mdxFileOutputFilter: new MdxFileFilter<DeveloperDocsMdxFile>(mdxFile => {
        return filterByEnvironment(mdxFile.getVersion());
      })
    }),

    /* User Guides */
    new VersionedDocumentRootConfig({
      rootDir: path.resolve("docs/user-guides"),
      linkPrefix: "/docs",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/DocumentationLayout",
      mdxFileFactory: (data: MdxData, version: Version) => new UserGuideMdxFile(data, version),
      mdxFileOutputFilter: new MdxFileFilter<UserGuideMdxFile>(mdxFile => {
        return filterByEnvironment(mdxFile.getVersion());
      }),
      versionsProvider: new UserGuidesVersionProvider(
        path.resolve("docs/developer-docs"),
        path.resolve("docs/user-guides")
      )
    }),

    /* Release Notes */
    new NonVersionedDocumentRootConfig({
      rootDir: path.resolve("docs/release-notes"),
      linkPrefix: "/docs",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/ReleaseNotesLayout",
      mdxFileFactory: (data: MdxData) => new ReleaseNotesMdxFile(data)
    }),

    /* Handbook */
    (!process.env.VERCEL_ENV || preview) &&
      new NonVersionedDocumentRootConfig({
        rootDir: path.resolve("docs/handbook"),
        linkPrefix: "/docs/handbook",
        outputDir: path.resolve("src/pages"),
        pageLayout: "@/layouts/HandbookLayout",
        mdxFileFactory: (data: MdxData) => new HandbookMdxFile(data)
      })
  ]
};
