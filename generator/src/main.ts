import path from "path";
import { IDocumentRootFactory } from "./abstractions/IDocumentRootFactory";
import { Generator } from "./app/Generator";
import { SimpleDocumentRoot } from "./app/SimpleDocumentRoot";
import { FsFileWriter } from "./app/FsFileWriter";
import { HandbookMdxProcessor } from "./plugins/handbook/HandbookMdxProcessor";
import { HandbookPageProcessorFactory } from "./plugins/handbook/HandbookPageProcessorFactory";
import { Watcher } from "./app/Watcher";
import { MdxFileLoader } from "./app/MdxFileLoader";

export class Main {
  async generate() {
    const generator = new Generator(
      new DocumentRootFactory(),
      new FsFileWriter(path.resolve("src"))
    );
    await generator.execute();
  }

  async watch() {
    const watcher = new Watcher(new DocumentRootFactory(), new FsFileWriter(path.resolve("src")));
    await watcher.execute();
  }
}

class DocumentRootFactory implements IDocumentRootFactory {
  getDocumentRoots() {
    return [
      new SimpleDocumentRoot(
        path.resolve("src/library/handbook"),
        new HandbookMdxProcessor(new HandbookPageProcessorFactory()),
        new MdxFileLoader()
      )
      // new SimpleDocumentRoot("src/library/user-guides", new SimpleDocsParser()),
      // new VersionedDocumentRoot("src/library/docs/5.37.x", new VersionedDocsParser()),
      // new VersionedDocumentRoot("src/library/docs/5.36.x", new VersionedDocsParser()),
      // new VersionedDocumentRoot("src/library/docs/5.35.x", new VersionedDocsParser())
    ];
  }
}
