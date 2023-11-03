import { MdxFile } from "./MdxFile";

export class SitemapUrl {
  static create(mdxFile: MdxFile) {
    const outputPath = mdxFile.getOutputPath().withoutExtension();
    const lastMod = mdxFile.getStats().mtime.toISOString();

    return [
      "<url>",
      `\t<loc>https://www.webiny.com/${outputPath}</loc>`,
      `\t<lastmod>${lastMod}</lastmod>`,
      `</url>`
    ].join("\n");
  }
}
