import React from "react";
import { Navigation as BaseNavigation } from "../5.33.x/navigation";
import { Page, Section, Collapsable, NavGroup, Draft } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.33.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <NavGroup type={"docs"}>
                <Collapsable title={"Webiny Overview"}>
                    <Section title={"Features"}>
                        <Page link={"overview/features/sso-and-custom-authenticators"} />
                    </Section>
                </Collapsable>
                <Collapsable title={"Headless CMS"}>
                    <Section title={"Basics"}>
                        <Page link={"headless-cms/basics/using-graphql-api-filtering"} remove/>
                        <Page link={"headless-cms/basics/using-graphql-api-advanced-filtering"} />
                    </Section>
                    <Section title={"Extending functionality"}>
                        <Page link={"headless-cms/extending/custom-sorting"} />
                    </Section>
                </Collapsable>
                <Collapsable title={"Webiny Enterprise"}>
                    <Draft>
                        <Page link={"enterprise/auth0-integration"} />
                    </Draft>
                </Collapsable>
                <Collapsable title={"Core Development Concepts"}>
                    <Section title={"Extending and Customizing"}>
                        <Page
                            link={
                                "core-development-concepts/extending-and-customizing/customizing-the-error-output"
                            }
                        />
                        <Page
                            link={
                                "core-development-concepts/extending-and-customizing/intercepting-the-request"
                            }
                        />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
