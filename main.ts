import path from "path";
import {
  IDocumentRootFactory,
  Generator,
  FsFileWriter,
  Watcher,
  MdxFileCache,
  ConsoleLogger
} from "@webiny/docs-generator";

import { HandbookDocumentRoot } from "./plugins/handbook/HandbookDocumentRoot";
import { DocsDocumentRoot } from "./plugins/docs/DocsDocumentRoot";

const outputRoot = path.resolve("src");

export class Main {
  private readonly mdxFileCache: MdxFileCache;
  private readonly logger: ConsoleLogger;

  constructor() {
    this.logger = new ConsoleLogger();
    this.mdxFileCache = new MdxFileCache();
  }

  async generate() {
    const generator = new GeneratorWithTiming(
      this.logger,
      new Generator(
        new DocumentRootFactory(this.mdxFileCache),
        new FsFileWriter(outputRoot, this.logger)
      )
    );
    await generator.execute();
  }

  async watch() {
    const watcher = new Watcher(
      new DocumentRootFactory(this.mdxFileCache).getDocumentRootWatchers(),
      new FsFileWriter(outputRoot, this.logger)
    );
    await watcher.execute();
  }
}

class DocumentRootFactory implements IDocumentRootFactory {
  private readonly mdxFileCache: MdxFileCache;

  constructor(mdxFileCache: MdxFileCache) {
    this.mdxFileCache = mdxFileCache;
  }

  getDocumentRoots() {
    return this.getDocumentRootFactories().map(factory => factory.getDocumentRoot());
  }

  getDocumentRootWatchers() {
    return this.getDocumentRootFactories().map(factory => factory.getDocumentRootWatcher());
  }

  getDocumentRootFactories() {
    return [
      new HandbookDocumentRoot(this.mdxFileCache, path.resolve("library/handbook")),
      new DocsDocumentRoot(this.mdxFileCache, path.resolve("library/docs"))
    ];
  }
}

class GeneratorWithTiming {
  private logger: ConsoleLogger;
  private generator: Generator;
  constructor(logger: ConsoleLogger, generator: Generator) {
    this.logger = logger;
    this.generator = generator;
  }

  async execute() {
    const start = Date.now();
    this.logger.info(`Generating files...`);
    await this.generator.execute();
    const duration = (Date.now() - start) / 1000;

    this.logger.success(`Finished generating files in %s seconds!`, duration);
  }
}
