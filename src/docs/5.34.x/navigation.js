import React from "react";
import { Navigation as BaseNavigation } from "../5.33.x/navigation";
import { Page, Section, Collapsable } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.33.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <Collapsable title={"Headless CMS"}>
                <Section title={"Basics"}>
                    <Page link={"headless-cms/basics/using-graphql-api-advanced-filtering"} />
                </Section>
            </Collapsable>
        </>
    );
};
