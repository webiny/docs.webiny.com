import React from "react";
import { Navigation as BaseNavigation } from "../5.36.x/navigation";
import { Page, Section, Collapsable, NavGroup } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.36.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <NavGroup type={"docs"}>
                <Collapsable title={"Headless CMS"}>
                    <Section title={"Extending functionality"}>
                        <Page
                            link={"headless-cms/extending/customize-entry-list-filters"}
                            after={"headless-cms/extending/custom-field-type"}
                        />
                        <Page
                            link={"headless-cms/extending/customize-entry-editor-actions"}
                            after={"headless-cms/extending/customize-entry-list-filters"}
                        />
                    </Section>
                </Collapsable>
                <Collapsable title={"File Manager"}>
                    <Section title={"Extending functionality"}>
                        <Page link={"file-manager/extending/customizing-file-filters"} />
                    </Section>
                </Collapsable>

                <Collapsable title={"Webiny Enterprise"}>
                    <Page link={"enterprise/teams"} />
                </Collapsable>
            </NavGroup>
        </>
    );
};
