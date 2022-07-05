import React from "react";
import fs from "fs-extra";
import globby from "globby";
import path from "path";
import pMap from "p-map";
import frontMatter from "front-matter";
import { replaceInPath } from "replace-in-path";
import util from "util";
import _rimraf from "rimraf";
import writeJsonFile from "write-json-file";
import { allVersions } from "../detectVersions";
import { renderNavigation } from "@/docs/utils/renderNavigation";
import { Version } from "@/docs/utils/navigation";

const rimraf = util.promisify(_rimraf);

const sourceDocsPath = folder => path.join(process.cwd(), "src/docs", folder || "");
const targetDocsPath = folder => path.join(process.cwd(), "src/pages/docs", folder || "");

function injectVersion(rootPath, version) {
    const codeReplacements = [
        {
            find: "/{version}/",
            replaceWith: version === "latest" ? "/" : `/${version}/`
        }
    ];
    replaceInPath(path.join(rootPath, "/**/*.mdx"), codeReplacements);
}

(async () => {
    const [latestVersion, ...versions] = allVersions;

    console.log("Writing file " + path.join(process.cwd(), "src/data/versions.json"));
    await writeJsonFile(path.join(process.cwd(), "src/data/versions.json"), {
        latestVersion,
        allVersions
    });

    // Generate a temporary list of all mdx files
    const urlRegExp = new RegExp("/docs/(.*?)/(.*).mdx");
    const allMdxFiles = await globby(`${sourceDocsPath()}/**/*.mdx`);
    const allPages = await pMap(allMdxFiles, async file => {
        const { attributes } = await frontMatter(await fs.readFile(file, "utf8"));
        const [, folder, relativePath] = file.match(urlRegExp);
        return {
            ...attributes,
            path: relativePath,
            file,
            version: folder === latestVersion ? "latest" : folder
        };
    });
    console.log("Writing file " + path.join(process.cwd(), "src/data/mdxFiles.json"));
    await writeJsonFile(path.join(process.cwd(), "src/data/mdxFiles.json"), allPages);

    // Write navigation
    const catalog = await generateNavigation();

    // Delete everything from the target directory
    await rimraf(targetDocsPath());

    // Make sure target directory exists
    await fs.ensureDir(targetDocsPath());

    // Copy pages of the "latest" version.
    const latestPages = catalog.filter(p => p.version === "latest");
    for (const page of latestPages) {
        await fs.copy(page.sourceFile, targetDocsPath(page.relativePath + ".mdx"));
    }
    injectVersion(targetDocsPath(), "latest");
    // await addPagesToCatalog(targetDocsPath(), "latest");

    // Copy pages for all the other versions
    for (const version of versions) {
        const versionPages = catalog.filter(p => p.version === version);
        const targetPath = targetDocsPath(version);
        // Copy shared pages first
        for (const page of versionPages) {
            await fs.copy(page.sourceFile, targetDocsPath(page.relativePath + ".mdx"));
        }
        injectVersion(targetPath, version);
        // await addPagesToCatalog(targetDocsPath(version), version);
    }

    // Save pages catalog
    const pages = catalog.reduce((acc, page) => {
        return { ...acc, [page.version]: [...(acc[page.version] || []), page] };
    }, {});

    console.log("Writing file " + path.join(process.cwd(), "src/data/pages.json"));
    await writeJsonFile(path.join(process.cwd(), "src/data/pages.json"), pages);

    // Save sitemap
    await writeAlgoliaSitemap();

    async function generateNavigation() {
        let pages = [];
        const navigation = {};
        for (const realVersion of allVersions) {
            const isLatest = realVersion === latestVersion;
            const version = isLatest ? "latest" : realVersion;

            const { Navigation } = require(path.join(
                process.cwd(),
                "src/docs",
                realVersion,
                "navigation.js"
            ));

            const data = await renderNavigation(
                <Version version={version}>
                    <Navigation />
                </Version>
            );
            navigation[version] = data.items.reduce((acc, item, index) => {
                // Deduplicate separators
                if (item.type === "separator" && data.items[index - 1].type === "separator") {
                    return acc;
                }
                return [...acc, item];
            }, []);
            pages = pages.concat(...data.catalog);
        }
        console.log("Writing file " + path.join(process.cwd(), "src/data/navigation.json"));
        await writeJsonFile(path.join(process.cwd(), "src/data/navigation.json"), navigation);
        return pages;
    }

    async function writeAlgoliaSitemap() {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${catalog
        .map(
            page => `<url>
      <loc>https://www.webiny.com${page.fullPath}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>`
        )
        .join("\n    ")}
  </urlset>`;
        console.log("Writing file " + path.join(process.cwd(), "public/algolia-sitemap.xml"));
        await fs.writeFile(path.join(process.cwd(), "public/algolia-sitemap.xml"), xml);
    }
})();
