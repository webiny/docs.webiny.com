import { MdxFile } from "./MdxFile";

export class SitemapUrl {
  static create(mdxFile: MdxFile) {
    const relativePath = mdxFile.getRelativePath().replace(".mdx", "");
    const lastMod = mdxFile.getStats().mtime.toISOString();

    return [
      "<url>",
      `\t<loc>https://www.webiny.com/docs/${relativePath}</loc>`,
      `\t<lastmod>${lastMod}</lastmod>`,
      `</url>`
    ].join("\n");
  }
}
