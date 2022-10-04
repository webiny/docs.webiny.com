import React from "react";
import { Collapsable, Page, Section } from "@/docs/utils/navigation";
import { Navigation as BaseNavigation } from "../5.32.x/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.32.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <Collapsable title={"Headless CMS"}>
                <Section title={"Extending functionality"}>
                    <Page link={"headless-cms/extending/content-models-via-code-storage-id"} />
                </Section>
            </Collapsable>
        </>
    );
};
