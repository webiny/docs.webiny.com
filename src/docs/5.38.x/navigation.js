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
                <Collapsable title={"Headless CMS"}>
                    <Section title={"Extending functionality"}>
                        <Page
                          link={"headless-cms/extending/customize-entry-list-bulk-actions"}
                          after={"headless-cms/extending/customize-entry-list-filters"}
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
            </NavGroup>
            <NavGroup type={"user-guides"}>
                <Collapsable title={"Headless CMS"}>
                    <Section title={"Advanced"}>
                        <Page link={"user-guides/headless-cms/advanced/import-export-content-models"} />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
