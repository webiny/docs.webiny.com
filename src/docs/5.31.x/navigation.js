import React from "react";
import { NavGroup, Collapsable, Page, Section } from "@/docs/utils/navigation";
import { Navigation as BaseNavigation } from "../5.30.x/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.30.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <NavGroup type={"docs"}>
                <Collapsable title={"Core Development Concepts"}>
                    <Section title={"Basics"}>
                        <Page link={"core-development-concepts/basics/routes-and-events"} />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
