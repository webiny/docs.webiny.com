import React, { useMemo } from "react";
import mdxFiles from "@/data/mdxFiles.json";
import { Page, Collapsable, Section, useVersion } from "@/docs/utils/navigation";
import { rcompare, valid } from "semver";

export const Navigation = () => {
    return (
        <>
            <Collapsable title={"Infrastructure"} after={"Core Development Concepts"}>
                <Page link={"infrastructure/additional-resources/reset-state-without-redeploy"} />
            </Collapsable>
            <Collapsable title={"Performance & Load Benchmark"} after={"Architecture"}>
                <Page link={"performance-and-load-benchmark/introduction"} />
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
        </>
    );
};

const ReleaseNotes = () => {
    const version = useVersion();

    const releases = useMemo(() => {
        return mdxFiles
            .filter(page => page.path.includes("release-notes/"))
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
    }, [version]);

    const versions = useMemo(() => {
        return Object.keys(releases).sort((a, b) => {
            return rcompare(a, b);
        });
    }, []);

    function MenuItem({ version }) {
        const changeLog = releases[version].changelog;
        const upgrade = releases[version]["upgrade-guide"];

        return (
            <Collapsable title={version}>
                {changeLog ? <Page title={changeLog.title} link={changeLog.link} /> : null}
                {upgrade ? <Page title={upgrade.title} link={upgrade.link} /> : null}
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
