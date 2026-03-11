import fs from "fs-extra";
import path from "path";
import {
  Version,
  MdxData,
  NonVersionedDocumentRootConfig,
  VersionedDocumentRootConfig,
  LinkValidator,
  MdxFileFilter,
  VersionsProvider,
  NonVersionedVariableProcessor
} from "@webiny/docs-generator";
import { DeveloperDocsMdxFile } from "./docs/developer-docs/DeveloperDocsMdxFile";
import { HandbookMdxFile } from "./docs/handbook/HandbookMdxFile";
import { UserGuideMdxFile } from "./docs/user-guides/UserGuideMdxFile";
import { UserGuidesVersionProvider } from "./docs/user-guides/UserGuidesVersionProvider";
import { ReleaseNotesMdxFile } from "./docs/release-notes/ReleaseNotesMdxFile";

// @ts-expect-error
import { redirects } from "./vercel.json";

const preview = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";

/**
 * Sometimes, we want to use links unknown to the LinkValidator, but which are located under the same domain.
 * Use this array to whitelist such links.
 * We also whitelist all links that are defined in `vercel.json` redirects.
 */
const linkWhitelist: string[] = [...redirects.map(r => r.source), "/forms/product-demo", "/slack"];

/**
 * If you want to only build specific versions in the Vercel preview deployment,
 * whitelist them by adding version numbers to this array. Example: "5.35.x"
 */
const whitelistedVersions: string[] = [];

/**
 * Only build versions at or above this version (e.g., "5.40.x").
 * Set via MIN_VERSION environment variable or modify here.
 * Set to empty string to build all versions.
 */
const minVersionToBuild = process.env.MIN_VERSION || "";

const filterByEnvironment = (version: Version) => {
  // In `preview`, if there are specific versions whitelisted for deployment, those are the only ones we'll output.
  if (preview && whitelistedVersions.length > 0) {
    return whitelistedVersions.includes(version.getValue());
  }

  // If minVersionToBuild is set, only build versions >= minVersion or `latest`.
  if (minVersionToBuild) {
    if (minVersionToBuild === "latest") {
      return version.isLatest();
    }
    const versionNum = parseFloat(version.getValue().replace(/[^\d.]/g, ""));
    const minVersionNum = parseFloat(minVersionToBuild.replace(/[^\d.]/g, ""));
    return versionNum >= minVersionNum;
  }

  // Build everything.
  return true;
};

const filterFilePathByVersion = (filePath: string): boolean => {
  // Extract version from file path (e.g., /docs/developer-docs/5.40.x/... or /docs/user-guides/5.40.x/...)
  const versionMatch = filePath.match(/\/(\d+(?:\.\d+)?\.x)\//);

  if (!versionMatch) {
    // If no version in path, include the file (e.g., non-versioned docs)
    return true;
  }

  const versionString = versionMatch[1];

  // Use the same filtering logic as filterByEnvironment
  if (preview && whitelistedVersions.length > 0) {
    return whitelistedVersions.includes(versionString);
  }

  if (minVersionToBuild) {
    if (minVersionToBuild === "latest") {
      // For file paths, we can't determine if it's "latest" without more context
      // So we'll include all versioned files when minVersionToBuild is "latest"
      return true;
    }
    const versionNum = parseFloat(versionString.replace(/[^\d.]/g, ""));
    const minVersionNum = parseFloat(minVersionToBuild.replace(/[^\d.]/g, ""));
    return versionNum >= minVersionNum;
  }

  return true;
};

const existsInDocs = (link: string) => {
  // With basePath: "/docs", generated pages are at src/pages/{slug}.js (no /docs/ prefix in filesystem).
  // Links from MDX source files may still contain /docs/ prefix (absolute links).
  // Strip it before checking the filesystem.
  const stripped = link.startsWith("/docs/") ? link.slice("/docs".length) : link;
  return fs.pathExists(path.join(__dirname, `src/pages${stripped}.js`));
};

export default {
  projectRootDir: __dirname,
  cleanOutputDir: [
    // Clean the old src/pages/docs directory (pre-basePath migration) and any
    // generated directories that the generator creates at the src/pages root.
    // Next.js internal files (_app.js, _document.js, _error.js) are not in subdirectories.
    path.resolve("src/pages/docs"),
    ...["admin", "build-with-ai", "cli", "core-concepts", "get-started",
      "handbook", "infrastructure", "overview", "reference", "release-notes",
      "user-guides", "website-builder"
    ].map(dir => path.resolve(`src/pages/${dir}`)),
    path.resolve("public/docs-static/raw")
  ],
  sitemapOutputPath: path.resolve("public/algolia/sitemap.xml"),
  linkValidator: new LinkValidator(
    linkWhitelist,
    link => {
      return existsInDocs(link);
    },
    filterFilePathByVersion
  ),
  documentRoots: [
    /* Developer Docs */
    new VersionedDocumentRootConfig({
      rootDir: path.resolve("docs/developer-docs"),
      linkPrefix: "",
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
      linkPrefix: "",
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
      linkPrefix: "",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/ReleaseNotesLayout",
      mdxFileFactory: (data: MdxData) => new ReleaseNotesMdxFile(data),
      mdxFileProcessors: [
        new NonVersionedVariableProcessor(
          new VersionsProvider(path.resolve("docs/developer-docs")).getVersions()
        )
      ]
    }),

    /* Handbook */
    new NonVersionedDocumentRootConfig({
      rootDir: path.resolve("docs/handbook"),
      linkPrefix: "/handbook",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/HandbookLayout",
      mdxFileFactory: (data: MdxData) => new HandbookMdxFile(data)
    })
  ]
};
