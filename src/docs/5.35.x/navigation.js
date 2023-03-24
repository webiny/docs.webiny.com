import React from "react";
import { Navigation as BaseNavigation } from "../5.34.x/navigation";
import { Collapsable, NavGroup, Page, Section } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.34.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <NavGroup type={"docs"}>
                <Collapsable title={"Headless CMS"}>
                    <Section title={"Fields"}>
                        <Page link={"headless-cms/fields/reference"} />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
