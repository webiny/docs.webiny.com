import React from "react";
import { Collapsable, Page, Section } from "@/docs/utils/navigation";
import { Navigation as BaseNavigation } from "../5.29.x/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.29.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <Collapsable title={"Webiny Overview"}>
                <Section title={"Features"}>
                    <Page link={"overview/features/mailer"} />
                </Section>
            </Collapsable>
        </>
    );
};
