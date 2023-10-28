import { IFileProcessor } from "../../abstractions/IFileProcessor";
import { CompositePageProcessor } from "./CompositePageProcessor";

class TestProcessor1 implements IFileProcessor {
  process(contents: string) {
    return [contents, "TestProcessor1"].join("\n");
  }
}

class TestProcessor2 implements IFileProcessor {
  process(contents: string) {
    return [contents, "TestProcessor2"].join("\n");
  }
}

describe("CompositePageProcessor", () => {
  test("should process page contents", () => {
    const processor = new CompositePageProcessor([new TestProcessor1(), new TestProcessor2()]);

    expect(processor.process("")).toEqual(`\nTestProcessor1\nTestProcessor2`);
    expect(processor.process("some contents")).toEqual(
      `some contents\nTestProcessor1\nTestProcessor2`
    );
  });
});
