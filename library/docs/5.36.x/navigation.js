import { Collapsable, Page, Section } from "@webiny/docs-generator";
import React from "react";
import { Navigation as BaseNavigation } from "../5.35.x/navigation";

export const Navigation = () => {
    return (
        <>
            <BaseNavigation />
            <Collapsable title={"File Manager"}>
                <Section title={"Integrations"}>
                    <Page link={"file-manager/integrations/programmatic-file-upload"} />
                </Section>
            </Collapsable>
        </>
    );
};
