import { Node } from "unist";
import { VFileOptions } from "vfile";
// @ts-ignore
import { createCompiler } from "@mdx-js/mdx";
// @ts-ignore
import withSmartQuotes from "@silvenon/remark-smartypants";
import { withTitleCaseHeadings } from "./mdxCompiler/remark/withTitleCaseHeadings";
import { withImages, unwrapImages } from "./mdxCompiler/remark/withImages";
import { withTableOfContents } from "./mdxCompiler/remark/withTableOfContents";
import { withSyntaxHighlighting } from "./mdxCompiler/remark/withSyntaxHighlighting";
import { removeExports } from "./mdxCompiler/remark/removeExports";

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
`;

type RemarkPlugin = () => (tree: Node, file: VFileOptions) => void;

export class MdxCompiler {
  private compiler: any;
  private readonly remarkPlugins: RemarkPlugin[];

  constructor(remarkPlugins: RemarkPlugin[] = []) {
    this.remarkPlugins = [
      // TODO: fix MDX strings within JSX elements (add a new plugin)
      withTitleCaseHeadings,
      withTableOfContents,
      withImages,
      withSyntaxHighlighting,
      withSmartQuotes,
      unwrapImages,
      removeExports,
      ...remarkPlugins
    ];
  }

  async compile(file: VFileOptions) {
    const compiler = this.getCompiler();

    const { contents } = await compiler.process(file);
    return [
      `/* @jsxRuntime classic */`,
      `/* @jsx mdx */`,
      DEFAULT_RENDERER,
      contents.replace(/export const (.*?) \/\* remove \*\/ =/g, "const $1 ="),
      `MDXContent.layoutProps = layoutProps;`
    ].join("\n");
  }

  private getCompiler() {
    if (!this.compiler) {
      this.compiler = createCompiler({
        remarkPlugins: this.remarkPlugins
      });
    }

    return this.compiler;
  }
}
