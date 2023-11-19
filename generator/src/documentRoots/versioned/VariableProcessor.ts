import { DocumentRootVersions, IMdxProcessor, MdxFile } from "@webiny/docs-generator";
import { VersionedMdxFile } from "./VersionedMdxFile";

interface Replacement {
  find: string | RegExp;
  replaceWith: string | ((substring: string, ...args: any[]) => string);
}

export class VariableProcessor implements IMdxProcessor {
  private versions: DocumentRootVersions;

  constructor(versions: DocumentRootVersions) {
    this.versions = versions;
  }

  processMdx(mdxFile: VersionedMdxFile): MdxFile | Promise<MdxFile> {
    const version = mdxFile.getVersion();

    const replacements: Replacement[] = [
      {
        find: "/{version}/",
        replaceWith: version.isLatest() ? "/" : `/${version}/`
      },
      {
        find: /\{exact:(.+?)\}\//g,
        replaceWith: (_: string, value: string) => {
          return value !== this.versions.getLatest().getValue() ? `${value}/` : "";
        }
      }
    ];

    return mdxFile.withContents(contents => {
      for (const replacement of replacements) {
        const findRegex =
          typeof replacement.find === "string"
            ? new RegExp(replacement.find, "g")
            : replacement.find;

        if (typeof replacement.replaceWith === "string") {
          contents = contents.replace(findRegex, replacement.replaceWith);
        } else {
          contents = contents.replace(findRegex, replacement.replaceWith);
        }
      }

      return contents;
    });
  }
}
