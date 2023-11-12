import React from "react";
import { NavGroup, Collapsable, Page, Section } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.30.x/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.30.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <Collapsable title={"Core Development Concepts"}>
                <Section title={"Basics"}>
                    <Page link={"core-development-concepts/basics/routes-and-events"} />
                </Section>
                <Section title={"Extending and Customizing"}>
                    <Page
                        link={
                            "core-development-concepts/extending-and-customizing/add-custom-route-to-existing-lambda"
                        }
                    />
                </Section>
            </Collapsable>
        </>
    );
};
