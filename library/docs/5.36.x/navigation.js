import React from "react";
import { Collapsable, Page, Section, NavigationRoot } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.35.x/navigation";

export const Navigation = () => {
    return (
        <NavigationRoot directory={__dirname}>
            <BaseNavigation />
            <Collapsable title={"File Manager"}>
                <Section title={"Integrations"}>
                    <Page link={"file-manager/integrations/programmatic-file-upload"} />
                </Section>
            </Collapsable>
        </NavigationRoot>
    );
};
