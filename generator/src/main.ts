import { CompositeProvider } from "./app/CompositeProvider";
import { HandbookProvider } from "./app/HandbookProvider";
import { NextJsFsFileWriter } from "./app/NextJsFsFileWriter";
import { Generator } from "./app/Generator";

export async function main() {
  const provider = new CompositeProvider([new HandbookProvider("@/layouts/HandbookLayout")]);
  const generator = new Generator(provider, new NextJsFsFileWriter());
  await generator.execute();
}
