const { join } = require("path");
const fs = require("fs-extra");
const { blue } = require("chalk");
const vercel = require("../vercel.json");

// https://unifiedjs.com/explore/package/vfile/#vfileoptions

const logMethod = process.env.NODE_ENV === "development" ? "info" : "fail";

module.exports.checkBrokenLink = function checkBrokenLink(file, href) {
    const [cleanHref] = href.split("#");

    let referencedFile;
    if (cleanHref.startsWith("../") || cleanHref.startsWith("./")) {
        referencedFile = join(file.dirname, cleanHref);
    } else {
        // Check if the requested URL is handled by vercel redirects.
        const hasRedirect = vercel.redirects.some(item => item.source === cleanHref);
        if (hasRedirect) {
            return;
        }

        referencedFile = join(process.cwd(), "src/pages", cleanHref);
    }

    // Remove the trailing slash
    referencedFile = referencedFile.replace(/\/$/, "") + ".mdx";

    if (!fs.pathExistsSync(referencedFile)) {
        console.error(file[logMethod](`-> Broken link to ${blue(href)}`).reason);
    }
};
