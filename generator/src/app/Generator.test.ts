import { IFileWriter } from "../abstractions/IFileWriter";
import { IProvider } from "../abstractions/IProvider";
import { IFile } from "../abstractions/IFile";
import { Generator } from "./Generator";
import { File } from "./File";

class TestFileWriter implements IFileWriter {
  private readonly spy: jest.Mock;
  constructor(spy: jest.Mock) {
    this.spy = spy;
  }
  async write(content: string, relativePath: string) {
    this.spy(content, relativePath);
  }
}

class TestPageProvider implements IProvider {
  async getFiles(): Promise<IFile[]> {
    return [
      new File({
        contents: "test content",
        path: "/test/page"
      })
    ];
  }
}

describe("docs generator", () => {
  test("should write pages to target file system", async () => {
    const spy = jest.fn();
    const generator = new Generator(new TestPageProvider(), new TestFileWriter(spy));
    await generator.execute();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith("test content", "/test/page");
  });
});
