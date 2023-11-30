import { IDocumentRoot } from "../abstractions/IDocumentRoot";
import { IFile } from "../abstractions/IFile";
import { File } from "./File";

export class SitemapGenerator implements IDocumentRoot {
  private readonly sitemapOutputPath: string;
  private readonly documentRoot: IDocumentRoot;

  constructor(sitemapOutputPath: string, documentRoot: IDocumentRoot) {
    this.sitemapOutputPath = sitemapOutputPath;
    this.documentRoot = documentRoot;
  }

  async generate(): Promise<IFile[]> {
    const files = await this.documentRoot.generate();
    const sitemapFile = await this.generateSitemapFile(files);
    return [...files, sitemapFile];
  }

  private async generateSitemapFile(files: IFile[]) {
    const sitemap = [
      `<?xml version="1.0" encoding="UTF-8"?>`,
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
      ...(await Promise.all(
        files
          .filter(file => file.getOutputPath().endsWith(".sitemap"))
          .map(file => file.getContents())
      )),
      `</urlset>`
    ];

    return new File({
      path: this.sitemapOutputPath,
      contents: sitemap.join("\n")
    });
  }
}
