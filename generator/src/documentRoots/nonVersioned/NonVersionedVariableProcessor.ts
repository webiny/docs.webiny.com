import { DocumentRootVersions, IMdxProcessor, MdxFile } from "@webiny/docs-generator";

interface Replacement {
  find: string | RegExp;
  replaceWith: string | ((substring: string, ...args: any[]) => string);
}

export class NonVersionedVariableProcessor implements IMdxProcessor {
  private versions: DocumentRootVersions;

  constructor(versions: DocumentRootVersions) {
    this.versions = versions;
  }

  processMdx(mdxFile: MdxFile): MdxFile | Promise<MdxFile> {
    const replacements: Replacement[] = [
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
