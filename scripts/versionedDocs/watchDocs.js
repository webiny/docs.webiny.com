import { generateNavigation, info, writeJsonAndLog } from "./prepareDocs";
import { blue } from "chalk";
import { watch } from "chokidar";
import fs from "fs-extra";
import path from "path";
import { replaceInPath } from "replace-in-path";
import loadJsonFile from "load-json-file";
import frontMatter from "front-matter";
import writeJsonFile from "write-json-file";
import versions from "../detectVersions";

const root = process.cwd();
const pagesDataJson = path.join(root, "src/data/pages.json");

export function watchDocs() {
    // Watch all .mdx files for changes and copy them to `/pages/docs/*` accordingly.
    const watcher = watch([
        path.join(root, "src/docs/**/*.mdx"),
        path.join(root, "src/docs/**/navigation.js")
    ]);

    watcher.on("change", onFileChanged).on("error", error => {
        console.log(`Watcher error: ${error}`);
    });
}

async function onFileChanged(changedPath) {
    info(`File changed ${blue(changedPath.replace(root, ""))}`);
    if (changedPath.endsWith("navigation.js")) {
        await handleNavigationChange(changedPath);
        return;
    }

    const fileVersion = getFileVersion(changedPath);

    if (fileVersion === "shared") {
        for (const version of versions.allVersions) {
            await promoteFileToVersion(changedPath, version);
        }

        return;
    }

    await promoteFileToVersion(changedPath, fileVersion);
}

async function handleNavigationChange() {
    // We need to clear `require` cache so the JS files get re-imported from the file system.
    Object.keys(require.cache)
        .filter(file => file.includes("/src/docs/") && file.endsWith("navigation.js"))
        .forEach(key => delete require.cache[key]);

    const { generateNavigation } = await import("./prepareDocs");
    const navigation = {};
    for (const realVersion of versions.allVersions) {
        // nav = { version, navigation, pages }
        const nav = await generateNavigation(realVersion);
        navigation[nav.version] = nav.navigation;
    }
    await writeJsonAndLog("src/data/navigation.json", navigation);
}

function injectVersion(filePath, version) {
    const codeReplacements = [
        {
            find: "/{version}/",
            replaceWith: version === "latest" ? "/" : `/${version}/`
        }
    ];
    replaceInPath(filePath, codeReplacements);
}

function fromSourceToTarget(source, version) {
    const isLatest = version === "latest" || version === versions.latestVersion;
    const target = source.split("/src/docs/")[1].split("/");
    return ["/src/pages/docs", isLatest ? null : version, ...target.slice(1)]
        .filter(Boolean)
        .join("/");
}

async function promoteFileToVersion(file, version) {
    const targetPath = fromSourceToTarget(file, version);
    const fullTargetPath = await copySourceToTarget(file, targetPath);
    injectVersion(fullTargetPath, version);
    await updateFrontMatter(fullTargetPath, version);
}

const urlRegExp = new RegExp("(/docs/.*).mdx");

async function updateFrontMatter(file, version) {
    const pages = await loadJsonFile(pagesDataJson);
    const pagePath = file.match(urlRegExp)[1];
    const pageIndex = pages[version].findIndex(p => p.path === pagePath);
    if (pageIndex < 0) {
        console.log("Failed to update page data! Page was not found in the catalog.");
        return;
    }

    const { attributes } = await frontMatter(await fs.readFile(file, "utf8"));

    pages[version][pageIndex] = { ...pages[version][pageIndex], ...attributes };
    await writeJsonFile(pagesDataJson, pages);
}

async function copySourceToTarget(source, target) {
    console.log("Copying to", target);
    const fullTargetPath = path.join(root, target);
    await fs.copy(source, fullTargetPath);
    return fullTargetPath;
}

function getFileVersion(file) {
    const prefix = file.split("/src/docs/")[1].split("/")[0];
    if (prefix === "shared") {
        return "shared";
    }

    return prefix === versions.latestVersion ? "latest" : prefix;
}
