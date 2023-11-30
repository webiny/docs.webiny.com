import {
  IDocumentRootFactory,
  Generator,
  FsFileWriter,
  ConsoleLogger,
  AppConfig,
  IDocumentRoot,
  IDocumentRootWatcher,
  CompositeDocumentRoot,
  CompositeDocumentRootWatcher,
  LinkValidationConsoleReporter,
  IFile
} from "../index";
import { SitemapGenerator } from "./SitemapGenerator";

export class App {
  private readonly logger: ConsoleLogger;
  private readonly config: AppConfig;

  constructor(config: AppConfig) {
    this.logger = new ConsoleLogger();
    this.config = this.withDefaultConfig(config);
  }

  async generate() {
    const generator = new GeneratorWithTiming(
      this.logger,
      new Generator(
        new DocumentRootFactory(this.config).getDocumentRoot(),
        new FsFileWriter(this.logger)
      )
    );

    try {
      await generator.execute();
      await this.checkBrokenLinks();
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }

  async watch() {
    const watcher = new DocumentRootFactory(this.config).getDocumentRootWatcher();
    const fileWriter = new FsFileWriter(this.logger);

    await watcher.watch(
      async file => {
        await fileWriter.write(file);
        const filePath = file.getSourcePath();
        if (filePath) {
          this.checkBrokenLinks(filePath.replace(process.cwd(), ""));
        }
      },
      // `onEvent` callback is executed whenever there's an event fired by `chokidar`.
      () => {
        this.config.getLinkValidator().reset();
      }
    );

    return new Promise(() => {
      // This promise will never resolve until we stop the process.
    });
  }

  private withDefaultConfig(appConfig: AppConfig) {
    return appConfig.modify(config => {
      return {
        ...config,
        mdxRemarkPlugins: [
          appConfig.getLinkValidator().getRemarkPlugin(),
          ...(config.mdxRemarkPlugins || [])
        ]
      };
    });
  }

  private async checkBrokenLinks(match?: string) {
    const validationResult = await this.config.getLinkValidator().validate(match);
    this.config.getLinkValidator().reset();
    if (validationResult.hasErrors()) {
      new LinkValidationConsoleReporter(this.logger).report(validationResult);
      if (!this.config.isDevMode()) {
        throw Error(`Invalid links detected!`);
      }
    }
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
    const files = await this.generator.execute();

    const duration = (Date.now() - start) / 1000;
    const jsFilesCount = files.filter(file => file.getOutputPath().endsWith(".js")).length;

    this.logger.success(`Finished generating files in %s seconds!`, duration);
    this.logger.info(`Generated %s page files.`, jsFilesCount);
  }
}
