import React from "react";
import { Navigation as BaseNavigation } from "../5.35.x/navigation";
import { Collapsable, Section, Page, NavGroup } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            <BaseNavigation />
            <NavGroup type={"docs"}>
                <Collapsable title={"Infrastructure"}>
                    <Section title={"Basics"}>
                        <Page link={"infrastructure/basics/modify-cloud-infrastructure"} />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
