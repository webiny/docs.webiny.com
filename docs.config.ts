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

export default {
  outputRoot: path.resolve("src"),
  documentRoots: [
    // new VersionedDocumentRootConfig({
    //   rootDir: path.resolve("library/docs"),
    //   linkPrefix: "/docs",
    //   outputDir: path.resolve("src/pages"),
    //   pageLayout: "@/layouts/DocumentationLayout",
    //   mdxFileFactory: (data: MdxData, version: Version) => new DocsMdxFile(data, version)
    // }),

    new VersionedDocumentRootConfig({
      rootDir: path.resolve("library/user-guides"),
      linkPrefix: "/docs",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/DocumentationLayout",
      mdxFileFactory: (data: MdxData, version: Version) => new UserGuideMdxFile(data, version)
    }),

    new NonVersionedDocumentRootConfig({
      rootDir: path.resolve("library/handbook"),
      linkPrefix: "/docs",
      outputDir: path.resolve("src/pages"),
      pageLayout: "@/layouts/HandbookLayout",
      mdxFileFactory: (data: MdxData) => new HandbookMdxFile(data)
    })
  ]
};
