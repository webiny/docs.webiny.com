import fs from "fs";
import path from "path";

// Force Node.js runtime
export const config = {
    runtime: "nodejs"
};

export default function handler(req, res) {
    const slugPath = req.headers["x-mdx-path"];

    if (!slugPath) {
        return res.status(400).send("Missing path");
    }

    const mdxPath = path.join(process.cwd(), "public", "raw", `${slugPath}.mdx`);

    if (!fs.existsSync(mdxPath)) {
        return res.status(404).send("MDX file not found");
    }

    const content = fs.readFileSync(mdxPath, "utf-8");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
    res.send(content);
}
