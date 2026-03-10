/**
 * Generates a JSON manifest of docs page slugs that exist under 5.x/
 * but do NOT exist at the latest (top-level) docs level.
 *
 * These slugs need a 301 redirect from /docs/{slug} → /docs/5.x/{slug}
 * so that inbound links from v5 don't 404, and SEO authority is preserved.
 *
 * Run after `yarn generate` and before `next build`.
 */
const fs = require("fs");
const path = require("path");

const DOCS_DIR = path.resolve(__dirname, "../src/pages/docs");
const FIVE_X_DIR = path.join(DOCS_DIR, "5.x");
const OUTPUT_FILE = path.resolve(__dirname, "../src/v5-redirect-manifest.json");

/**
 * Recursively collect all .js page files under a directory,
 * returning their relative slug paths (without .js extension).
 */
function collectPageSlugs(dir, baseDir) {
    const slugs = new Set();

    if (!fs.existsSync(dir)) {
        return slugs;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            const childSlugs = collectPageSlugs(fullPath, baseDir);
            childSlugs.forEach(slug => slugs.add(slug));
        } else if (entry.isFile() && entry.name.endsWith(".js") && !entry.name.startsWith("_")) {
            const relativePath = path.relative(baseDir, fullPath);
            const slug = relativePath.replace(/\.js$/, "").replace(/\\/g, "/");
            slugs.add(slug);
        }
    }

    return slugs;
}

/**
 * Collect all latest-level page slugs (everything under src/pages/docs/ except versioned dirs).
 */
function collectLatestSlugs() {
    const slugs = new Set();
    const entries = fs.readdirSync(DOCS_DIR, { withFileTypes: true });

    for (const entry of entries) {
        // Skip versioned directories (e.g., 5.x, 6.0.x, 5.39.x)
        if (entry.isDirectory() && /^\d/.test(entry.name)) {
            continue;
        }

        const fullPath = path.join(DOCS_DIR, entry.name);

        if (entry.isDirectory()) {
            const childSlugs = collectPageSlugs(fullPath, DOCS_DIR);
            childSlugs.forEach(slug => slugs.add(slug));
        } else if (entry.isFile() && entry.name.endsWith(".js") && !entry.name.startsWith("_")) {
            const slug = entry.name.replace(/\.js$/, "");
            slugs.add(slug);
        }
    }

    return slugs;
}

// --- Main ---

console.log("Generating v5 redirect manifest...");

const latestSlugs = collectLatestSlugs();
const fiveXSlugs = collectPageSlugs(FIVE_X_DIR, FIVE_X_DIR);

console.log(`  Latest pages: ${latestSlugs.size}`);
console.log(`  5.x pages:    ${fiveXSlugs.size}`);

// Find slugs that exist in 5.x but NOT in latest
const redirectSlugs = [];
for (const slug of fiveXSlugs) {
    if (!latestSlugs.has(slug)) {
        redirectSlugs.push(slug);
    }
}

redirectSlugs.sort();

console.log(`  Redirects:    ${redirectSlugs.length} pages need /docs/{slug} → /docs/5.x/{slug}`);

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(redirectSlugs, null, 2));
console.log(`  Written to:   ${OUTPUT_FILE}`);

