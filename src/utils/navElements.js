import allPages from "@/data/pages.json";

export { allPages };

export function createNavUtils(version = undefined) {
    const page = mdxPath => {
        const pages = allPages[version];
        const path = version === "latest" ? `/docs/${mdxPath}` : `/docs/${version}/${mdxPath}`;
        const page = pages.find(p => p.path === path);

        return {
            type: "page",
            link: page?.path || "/",
            title: page?.title || "missing page"
        };
    };

    // const link = (title, externalLink) => {
    //   return { type: 'link', link: externalLink, title }
    // }

    const section = (title, links) => {
        return {
            type: "section",
            title,
            links
        };
    };

    const collapsable = (title, links) => {
        return {
            type: "collapsable",
            title,
            links
        };
    };

    const horizontalLine = () => {
        return {
            type: "horizontal-line"
        };
    };

    return { page, section, collapsable, horizontalLine };
}
