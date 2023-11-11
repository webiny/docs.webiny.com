import React from "react";
import { Handbook, Page, Collapsable, Section } from "@webiny/docs-generator";

// TODO: DO NOT INCLUDE `handbook` PREFIX IN THE LINKS!!

export const Navigation = () => {
    return (
        <Handbook>
            <Collapsable title={"Welcome!"}>
                <Section title={"Introduction"}>
                    <Page link={"introduction"} />
                    <Page file={"cypress.mdx"} link={"testing/cypress"}/>
                </Section>
            </Collapsable>
        </Handbook>
    );
};
