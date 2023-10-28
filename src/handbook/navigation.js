import React from "react";
import { Handbook, Page, Collapsable, Section } from "../../generator/src/components/navigation";

export const Navigation = () => {
    return (
        <Handbook>
            <Collapsable title={"Welcome!"}>
                <Section title={"Introduction"}>
                    <Page link={"/handbook"} />
                    <Page link={"/testing/cypress"} />
                </Section>
            </Collapsable>
        </Handbook>
    );
};
