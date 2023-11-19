import path from "path";
import {
  Version,
  MdxData,
  NonVersionedDocumentRootConfig,
  VersionedDocumentRootConfig
} from "@webiny/docs-generator";
import { DocsMdxFile } from "./library/docs/DocsMdxFile";
import { HandbookMdxFile } from "./library/handbook/HandbookMdxFile";
import { UserGuideMdxFile } from "./library/user-guides/UserGuideMdxFile";
import { UserGuidesVersionProvider } from "./library/user-guides/UserGuidesVersionProvider";

export default {
  outputRoot: path.resolve("src"),
  documentRoots: [
    /* Developer Docs */
    // new VersionedDocumentRootConfig({
    //   rootDir: path.resolve("library/docs"),
    //   linkPrefix: "/docs",
    //   outputDir: path.resolve("src/pages"),
    //   pageLayout: "@/layouts/DocumentationLayout",
    //   mdxFileFactory: (data: MdxData, version: Version) => new DocsMdxFile(data, version)
    // }),

    /* User Guides */
    new VersionedDocumentRootConfig({
      rootDir: path.resolve("library/user-guides"),
      linkPrefix: "/docs",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/DocumentationLayout",
      mdxFileFactory: (data: MdxData, version: Version) => new UserGuideMdxFile(data, version),
      versionsProvider: new UserGuidesVersionProvider(
        path.resolve("library/docs"),
        path.resolve("library/user-guides")
      )
    }),

    /* Handbook */
    new NonVersionedDocumentRootConfig({
      rootDir: path.resolve("library/handbook"),
      linkPrefix: "/docs/handbook",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/HandbookLayout",
      mdxFileFactory: (data: MdxData) => new HandbookMdxFile(data)
    })
  ]
};
