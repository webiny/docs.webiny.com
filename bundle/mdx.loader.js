const { getOptions } = require("loader-utils");
const { createCompiler } = require("@mdx-js/mdx");
const withSmartQuotes = require("@silvenon/remark-smartypants");
const { withTitleCaseHeadings } = require("./remark/withTitleCaseHeadings");
const { withImages, unwrapImages } = require("./remark/withImages");
const { withTableOfContents } = require("./remark/withTableOfContents");
const { withSyntaxHighlighting } = require("./remark/withSyntaxHighlighting");
const { withNextLinks } = require("./remark/withNextLinks");

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
`;

let compiler;

const cache = new Map();

function mdxLoader(source) {
    const callback = this.async();
    const cacheKey = this.resourcePath.replace(process.cwd(), "");

    if (cache.has(cacheKey)) {
        // process.stdout.write(`\n[FROM CACHE] ${cacheKey}`);
        return callback(null, cache.get(cacheKey));
    }

    if (!compiler) {
        compiler = createCompiler({
            remarkPlugins: [
                withTitleCaseHeadings,
                withImages,
                withTableOfContents,
                withSyntaxHighlighting,
                withNextLinks,
                withSmartQuotes,
                unwrapImages
            ]
        });
    }

    const options = {
        contents: source,
        path: this.resourcePath
    };

    return compiler
        .process(options)
        .then(({ contents }) => {
            const transformedMDX = [
                `/* @jsxRuntime classic */`,
                `/* @jsx mdx */`,
                DEFAULT_RENDERER,
                contents
            ].join("\n");

            // process.stdout.write(`\n[SET CACHE] ${cacheKey}`);
            cache.set(cacheKey, transformedMDX);

            return callback(null, transformedMDX);
        })
        .catch(err => {
            return callback(err);
        });
}

module.exports = { mdxLoader };
