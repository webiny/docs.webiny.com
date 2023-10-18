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
                <Collapsable title={"Webiny Enterprise"}>
                    <Page link={"enterprise/teams"} remove />
                    <Section title={"Advanced Access Control Layer (AACL)"}>
                        <Page link={"enterprise/aacl/introduction"} />
                        <Page link={"enterprise/aacl/teams"} />
                        <Page link={"enterprise/aacl/folder-level-permissions"} />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
