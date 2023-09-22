import React, { useMemo } from "react";
import mdxFiles from "@/data/mdxFiles.json";
import { NavGroup, Page, Collapsable, Section, useVersion } from "@/docs/utils/navigation";
import { rcompare, valid } from "semver";

export const Navigation = () => {
    return (
        <NavGroup type={"docs"}>
            <Collapsable title={"Infrastructure"} after={"Core Development Concepts"}>
                <Page link={"infrastructure/additional-resources/reset-state-without-redeploy"} />
            </Collapsable>
            <Collapsable title={"Performance & Load Benchmark"} after={"Architecture"}>
                <Page link={"performance-and-load-benchmark/introduction"} />
                <Page link={"performance-and-load-benchmark/code"} />
                <Section title={"Headless CMS"}>
                    <Page link={"performance-and-load-benchmark/headless-cms/write-benchmark"} />
                    <Page link={"performance-and-load-benchmark/headless-cms/read-benchmark"} />
                </Section>
                <Section title={"Page Builder"}>
                    <Page link={"performance-and-load-benchmark/page-builder/deliver-a-page"} />
                </Section>
            </Collapsable>
            <ReleaseNotes />
            <Collapsable title={"Release Management"}>
                <Page link={"release-management/branching-strategy"} />
                <Page link={"release-management/unstable-releases"} />
            </Collapsable>
            <Collapsable title={"Community Plugins"}>
                <Page link={"community-plugins/introduction"} />
            </Collapsable>
            <Collapsable title={"Webiny Telemetry"}>
                <Page link={"webiny-telemetry/webiny-telemetry"} />
            </Collapsable>
            <Collapsable title={"Write with Webiny"}>
                <Page link={"write-with-webiny/write-with-webiny"} />
            </Collapsable>

          {/* Messages */}
          <Page link={"messages/lambda-edge-warning"} hidden={true}/>
          <Page link={"messages/cloudwatch"} hidden={true}/>
        </NavGroup>
    );
};

const ReleaseNotes = () => {
    const version = useVersion();

    const releases = useMemo(
        () => {
            return mdxFiles
                .filter(page => page.path.includes("release-notes/"))
                .reduce((acc, page) => {
                    const [version, type] = page.path.split("release-notes/").pop().split("/");
                    if (valid(version)) {
                        return {
                            ...acc,
                            [version]: [
                                ...(acc[version] || []),
                                { type, title: page.title, link: page.path }
                            ]
                        };
                    }
                    return acc;
                }, []);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [version]
    );

    const versions = useMemo(() => {
        return Object.keys(releases).sort((a, b) => {
            return rcompare(a, b);
        });
    }, [releases]);

    function MenuItem({ version }) {
        const predefinedTypes = ["changelog", "upgrade-guide"];
        const changeLog = releases[version].find(item => item.type === "changelog");
        const upgrade = releases[version].find(item => item.type === "upgrade-guide");
        const other = releases[version].filter(item => !predefinedTypes.includes(item.type));

        return (
            <Collapsable title={version}>
                {changeLog ? <Page title={changeLog.title} link={changeLog.link} /> : null}
                {upgrade ? <Page title={upgrade.title} link={upgrade.link} /> : null}
                {other.map(item => (
                    <Page key={item.link} title={item.title} link={item.link} />
                ))}
            </Collapsable>
        );
    }

    return (
        <Collapsable title={"Release Notes"}>
            <Page link={"release-notes/upgrade-webiny"} />
            <Section title={"Release Notes"}>
                {versions.slice(0, 5).map(version => (
                    <MenuItem key={version} version={version} />
                ))}
                <Collapsable title={"Older Releases"}>
                    {versions.slice(5).map(version => (
                        <MenuItem key={version} version={version} />
                    ))}
                </Collapsable>
            </Section>
        </Collapsable>
    );
};
