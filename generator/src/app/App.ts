import {
  IDocumentRootFactory,
  Generator,
  FsFileWriter,
  Watcher,
  ConsoleLogger,
  AppConfig,
  IDocumentRoot,
  IDocumentRootWatcher,
  CompositeDocumentRoot,
  CompositeDocumentRootWatcher
} from "../index";
import { SitemapGenerator } from "./SitemapGenerator";

export class App {
  private readonly logger: ConsoleLogger;
  private readonly config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
    this.logger = new ConsoleLogger();
  }

  async generate() {
    const generator = new GeneratorWithTiming(
      this.logger,
      new Generator(
        new DocumentRootFactory(this.config).getDocumentRoot(),
        new FsFileWriter(this.logger)
      )
    );

    await generator.execute();
  }

  async watch() {
    const watcher = new Watcher(
      new DocumentRootFactory(this.config).getDocumentRootWatcher(),
      new FsFileWriter(this.logger)
    );
    await watcher.execute();
  }
}

class DocumentRootFactory implements IDocumentRootFactory {
  private readonly config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
  }

  getDocumentRoot(): IDocumentRoot {
    const documentRoot = new CompositeDocumentRoot(
      this.config.getDocumentRootConfigs().map(documentRootConfig => {
        return documentRootConfig.getDocumentRootFactory(this.config).getDocumentRoot();
      })
    );

    const sitemapOutputPath = this.config.getSitemapOutputPath();
    if (sitemapOutputPath) {
      return new SitemapGenerator(sitemapOutputPath, documentRoot);
    }

    return documentRoot;
  }

  getDocumentRootWatcher(): IDocumentRootWatcher {
    return new CompositeDocumentRootWatcher(
      this.config.getDocumentRootConfigs().map(documentRootConfig => {
        return documentRootConfig.getDocumentRootFactory(this.config).getDocumentRootWatcher();
      })
    );
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
