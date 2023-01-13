import React from "react";
import { Navigation as BaseNavigation } from "../5.33.x/navigation";
import { Page, Section, Collapsable, NavGroup } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.33.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <NavGroup type={"docs"}>
                <Collapsable title={"Headless CMS"}>
                    <Section title={"Basics"}>
                        <Page link={"headless-cms/basics/using-graphql-api-advanced-filtering"} />
                    </Section>
                </Collapsable>
                <Collapsable title={"Webiny Enterprise"}>
                    <Page link={"enterprise/auth0-integration"} />
                </Collapsable>
                <Collapsable title={"Core Development Concepts"}>
                    <Section title={"Extending and Customizing"}>
                        <Page
                            link={
                                "core-development-concepts/extending-and-customizing/customizing-the-error-output"
                            }
                        />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
