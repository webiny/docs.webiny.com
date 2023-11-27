import React from "react";
import { Navigation as BaseNavigation } from "../5.38.x/navigation";
import { Collapsable, NavGroup, Page, Section } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.38.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <NavGroup type={"docs"}>
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
            </NavGroup>
        </>
    );
};
