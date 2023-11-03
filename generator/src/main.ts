import path from "path";
import { IDocumentRootFactory } from "./abstractions/IDocumentRootFactory";
import { Generator } from "./app/Generator";
import { FsFileWriter } from "./app/FsFileWriter";
import { Watcher } from "./app/Watcher";
import { MdxFileCache } from "./app/MdxFileCache";
import { ConsoleLogger } from "./app/ConsoleLogger";
import { HandbookDocumentRoot } from "./plugins/handbook/HandbookDocumentRoot";

const outputRoot = path.resolve("src");

export class Main {
  async generate() {
    const generator = new Generator(
      new DocumentRootFactory(),
      new FsFileWriter(outputRoot, new ConsoleLogger())
    );
    await generator.execute();
  }

  async watch() {
    const watcher = new Watcher(
      new DocumentRootFactory().getDocumentRootWatchers(),
      new FsFileWriter(outputRoot, new ConsoleLogger())
    );
    await watcher.execute();
  }
}

class DocumentRootFactory implements IDocumentRootFactory {
  getDocumentRoots() {
    // We want to share the MDX file cache across all document roots.
    const cache = new MdxFileCache();

    return [new HandbookDocumentRoot(cache).getDocumentRoot()];
  }

  getDocumentRootWatchers() {
    // We want to share the MDX file cache across all document roots.
    const cache = new MdxFileCache();

    return [new HandbookDocumentRoot(cache).getDocumentRootWatcher()];
  }
}
