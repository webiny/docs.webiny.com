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
