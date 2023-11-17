import path from "path";
import {
  IDocumentRootFactory,
  Generator,
  FsFileWriter,
  Watcher,
  ConsoleLogger
} from "@webiny/docs-generator";

import { HandbookDocumentRoot } from "./handbook/HandbookDocumentRoot";
import { DocsDocumentRoot } from "./docs/DocsDocumentRoot";
import { Config } from "./Config";

const outputRoot = path.resolve("src");

export { Config };

export class App {
  private readonly logger: ConsoleLogger;
  private readonly config: Config;

  constructor(config: Config) {
    this.config = config;
    this.logger = new ConsoleLogger();
  }

  async generate() {
    const generator = new GeneratorWithTiming(
      this.logger,
      new Generator(new DocumentRootFactory(this.config), new FsFileWriter(outputRoot, this.logger))
    );
    await generator.execute();
  }

  async watch() {
    const watcher = new Watcher(
      new DocumentRootFactory(this.config).getDocumentRootWatchers(),
      new FsFileWriter(outputRoot, this.logger)
    );
    await watcher.execute();
  }
}

class DocumentRootFactory implements IDocumentRootFactory {
  private readonly config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  getDocumentRoots() {
    return this.getDocumentRootFactories().map(factory => factory.getDocumentRoot());
  }

  getDocumentRootWatchers() {
    return this.getDocumentRootFactories().map(factory => factory.getDocumentRootWatcher());
  }

  getDocumentRootFactories() {
    return [
      new HandbookDocumentRoot(this.config, path.resolve("library/handbook")),
      new DocsDocumentRoot(this.config, path.resolve("library/docs"))
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
