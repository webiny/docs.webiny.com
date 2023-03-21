var walk = require("walk");
const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });

// get the redirects
const rawdata = fs.readFileSync("redirects.json");
const rawRedirects = JSON.parse(rawdata);
const redirects = [];
rawRedirects.forEach(redirect => {
    redirects[redirect.source] = redirect.destination;
});

// Get the MDX files
var files = [];
var walker = walk.walk("./src/pages/docs", { followLinks: false });

walker.on("file", function (root, stat, next) {
    // Add this file to the list of files
    if (stat.name.endsWith("mdx")) {
        files.push(root + "/" + stat.name);
    }
    next();
});

walker.on("end", function () {
    // loop over the mdx files and update the location based on the matching redirect
    files.forEach(file => {
        // open the mdx file
        let contents = fs.readFileSync(file, "utf-8");

        // detect internal urls
        // eslint-disable-next-line no-useless-escape
        let links = [...contents.matchAll(/\[([^\[]+)]\(\/docs(.*?)\)/gm)];

        if (links && links.length > 0) {
            // now let's replace the links
            let replacements = findLinkReplacements(file, links);

            prompt("Press ENTER to confirm the changes and move to the next file!");

            for (const r in replacements) {
                console.log(r + " -> " + replacements[r]);
                let regex = new RegExp("(" + r + ")", "gm");
                contents = contents.replace(regex, replacements[r]);
            }

            fs.writeFileSync(file, contents);

            //process.exit(1)
        }
    });
});

function findLinkReplacements(page, links) {
    const replacements = [];

    console.log(" ");
    console.log("=========");
    console.log("Page: " + page);
    console.log(
        "URL: http://localhost:3000/" + page.replace("./src/pages/", "").replace(".mdx", "")
    );
    // calculate the depth or the current page, so we know how many levels up we need to go to reach the root
    let pageParts = page.split("/");
    //console.log('page parts:'+pageParts.length);
    const toRootLadder = {
        5: 0,
        6: 1,
        7: 2,
        8: 3
    };
    let toRoot = "";
    for (var i = 0; i < toRootLadder[pageParts.length]; i++) {
        toRoot = toRoot + "../";
    }
    //console.log('to root:'+toRoot);

    links.forEach(link => {
        // clean the link and extract the path from the hash
        let linkParts = link[2].split("#");
        let fullLink = "/docs" + linkParts[0];
        let hash = "";
        if (linkParts.length > 1) {
            hash = "#" + linkParts[1];
        }

        //console.log(fullLink);
        if (redirects[fullLink]) {
            replacements[fullLink + hash] =
                toRoot + redirects[fullLink].replace("/docs/", "") + hash;
        }
    });
    console.log("Links to be replaced:");
    console.log(replacements);
    console.log(" ");
    return replacements;
}
