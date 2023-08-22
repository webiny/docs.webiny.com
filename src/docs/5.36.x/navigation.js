import { Collapsable, NavGroup, Page, Section } from "@/docs/utils/navigation";
import React from "react";
import { Navigation as BaseNavigation } from "../5.35.x/navigation";

export const Navigation = () => {
    return (
        <>
            <BaseNavigation />
            <NavGroup type={"docs"}>
                <Collapsable title={"File Manager"}>
                    <Section title={"Integrations"}>
                        <Page link={"file-manager/integrations/programmatic-file-upload"} />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
