import React from "react";
import { Handbook, Page, Collapsable, Section } from "generator/src/components/navigation";

// TODO: DO NOT INCLUDE `handbook` PREFIX IN THE LINKS!!

export const Navigation = () => {
    return (
        <Handbook>
            <Collapsable title={"Welcome!"}>
                <Section title={"Introduction"}>
                    <Page link={"introduction"} />
                    <Page file={"cypress.mdx"} link={"i-really-want-this-specific-slug"}/>
                </Section>
            </Collapsable>
        </Handbook>
    );
};
