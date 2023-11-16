import React from "react";
import { Navigation as BaseNavigation } from "../5.37.x/navigation";
import { Page, Section, Collapsable, NavGroup } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.37.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <NavGroup type={"docs"}>
                <Collapsable title={"Page Builder"}>
                    <Section title={"Extending functionality"}>
                        <Page
                            link={"page-builder/extending/customize-page-bulk-actions"}
                            before={"page-builder/extending/create-a-page-element"}
                        />
                    </Section>
                </Collapsable>
                <Collapsable title={"Headless CMS"}>
                    <Section title={"Extending functionality"}>
                        <Page
                            link={"headless-cms/extending/customize-entry-list-bulk-actions"}
                            after={"headless-cms/extending/customize-entry-list-filters"}
                        />
                    </Section>
                </Collapsable>
                <Collapsable title={"File Manager"}>
                    <Section title={"Extending functionality"}>
                        <Page
                            link={"file-manager/extending/customize-file-bulk-actions"}
                            after={"file-manager/extending/customize-file-filters"}
                        />
                    </Section>
                </Collapsable>
                <Collapsable title={"Webiny Enterprise"}>
                    <Page link={"enterprise/teams"} remove />
                    <Section title={"Advanced Access Control Layer (AACL)"}>
                        <Page link={"enterprise/aacl/introduction"} />
                        <Page link={"enterprise/aacl/teams"} />
                        <Page link={"enterprise/aacl/folder-level-permissions"} />
                    </Section>
                </Collapsable>
                <Collapsable title={"Core Development Concepts"}>
                    <Section title={"Extending and Customizing"}>
                        <Page
                            link={
                                "core-development-concepts/extending-and-customizing/lexical-tools"
                            }
                        />
                    </Section>
                </Collapsable>
            </NavGroup>
            <NavGroup type={"user-guides"}>
                <Collapsable title={"Headless CMS"}>
                    <Section title={"Advanced"}>
                        <Page
                            link={"user-guides/headless-cms/advanced/import-export-content-models"}
                        />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
