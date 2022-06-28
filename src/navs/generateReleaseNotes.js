import { collapsable, page, section } from "@/utils/navElements";
import { createPageList } from "@/utils/createPageList";
import { valid, rcompare } from "semver";

export const generateReleaseNotes = () => {
    const pages = createPageList(
        require.context(`../pages/docs/release-notes?meta=title`, true, /\.mdx$/),
        "docs/release-notes"
    );

    const releases = Object.keys(pages).reduce((acc, slug) => {
        const [version, type] = slug.split("/");
        if (valid(version)) {
            return {
                ...acc,
                [version]: {
                    ...(acc[version] || {}),
                    [type]: {
                        title: pages[slug].title,
                        link: pages[slug].link
                    }
                }
            };
        }
        return acc;
    }, []);

    const versions = Object.keys(releases).sort((a, b) => {
        return rcompare(a, b);
    });

    function generateMenuItems(version) {
        const changeLog = releases[version].changelog;
        const upgrade = releases[version]["upgrade-guide"];

        return collapsable(
            version,
            [
                changeLog
                    ? { type: "page", title: changeLog.title, link: changeLog.link }
                    : undefined,
                upgrade ? { type: "page", title: upgrade.title, link: upgrade.link } : undefined
            ].filter(Boolean)
        );
    }

    return collapsable("Release Notes", [
        page("release-notes/upgrade-webiny"),
        section("Release Notes", [
            ...versions.slice(0, 5).map(generateMenuItems),
            collapsable("Older Releases", [...versions.slice(5).map(generateMenuItems)])
        ])
    ]);
};
