import { green, gray, blue } from "chalk";
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

export async function prepareDocs() {
    info(`Generating versioned docs...`);
    const [latestVersion, ...versions] = allVersions;

    await writeJsonAndLog("src/data/versions.json", {
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

    await writeJsonAndLog("src/data/mdxFiles.json", allPages);

    // Generate navigation
    const navigation = {};
    let catalog = [];
    for (const realVersion of allVersions) {
        // nav = { version, navigation, pages }
        const nav = await generateNavigation(realVersion);
        navigation[nav.version] = nav.navigation;
        catalog = catalog.concat(...nav.pages);
    }

    await writeJsonAndLog("src/data/navigation.json", navigation);

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

    // Copy pages for all the other versions
    for (const version of versions) {
        const versionPages = catalog.filter(p => p.version === version);
        const targetPath = targetDocsPath(version);
        // Copy shared pages first
        for (const page of versionPages) {
            await fs.copy(page.sourceFile, targetDocsPath(page.relativePath + ".mdx"));
        }
        injectVersion(targetPath, version);
    }

    // Save pages catalog
    const pages = catalog.reduce((acc, page) => {
        return { ...acc, [page.version]: [...(acc[page.version] || []), page] };
    }, {});

    await writeJsonAndLog("src/data/pages.json", pages);

    // Save sitemap
    await writeAlgoliaSitemap(catalog);

    info(`Generated docs for the following versions:`);
    allVersions.forEach(version => {
        const latest = version === latestVersion ? ` (${blue("latest")})` : "";
        console.log(`     ${version}${latest}`);
    });

    info(`Docs are ready for building!`);
}

export async function generateNavigation(realVersion) {
    const { Version } = await import("@/docs/utils/navigation");
    const { latestVersion } = await import("@/data/versions.json");
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

    const navigation = data.items.reduce((acc, item, index) => {
        // Deduplicate separators
        if (item.type === "separator" && data.items[index - 1].type === "separator") {
            return acc;
        }
        return [...acc, item];
    }, []);

    return { version, navigation, pages: data.catalog };
}

export async function writeAlgoliaSitemap(catalog) {
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
    await writeAndLog("public/algolia/sitemap.xml", xml);
}

export function logFileWrite(file) {
    info(`Writing ${green(file.replace(process.cwd(), ""))}`);
}

export function info(text) {
    console.log(`${gray("INFO")} ${text}`);
}

export async function writeAndLog(file, data) {
    const targetFile = file?.startsWith(process.cwd()) ? file : path.join(process.cwd(), file);
    logFileWrite(targetFile);
    await fs.writeFile(file, data);
}

export async function writeJsonAndLog(file, data) {
    const targetFile = file.startsWith(process.cwd()) ? file : path.join(process.cwd(), file);
    logFileWrite(targetFile);
    await writeJsonFile(targetFile, data);
}
