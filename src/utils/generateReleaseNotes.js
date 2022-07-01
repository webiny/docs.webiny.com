import { allPages, createNavUtils } from "@/utils/navElements";
import { valid, rcompare } from "semver";

export const generateReleaseNotes = version => {
    const { collapsable, page, section } = createNavUtils(version);

    const pages = allPages[version];

    const releases = pages
        .filter(page => page.path.includes("/release-notes/"))
        .reduce((acc, page) => {
            const [version, type] = page.path.split("release-notes/").pop().split("/");
            if (valid(version)) {
                return {
                    ...acc,
                    [version]: {
                        ...(acc[version] || {}),
                        [type]: {
                            title: page.title,
                            link: page.path
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
