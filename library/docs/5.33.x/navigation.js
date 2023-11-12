import React from "react";
import { NavGroup, Collapsable, Page, Section } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.32.x/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.32.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <Collapsable title={"File Manager"}>
                <Section title={"Extending functionality"}>
                    <Page link={"file-manager/extending/create-a-custom-file-manager-renderer"} />
                </Section>
            </Collapsable>
            <Collapsable title={"Headless CMS"}>
                <Section title={"Extending functionality"}>
                    <Page link={"headless-cms/extending/content-models-via-code-storage-id"} />
                </Section>
            </Collapsable>
            <Collapsable title={"Performance & Load Benchmark"}>
                <Section title={"Headless CMS"}>
                    <Page link={"performance-and-load-benchmark/headless-cms/performance-tuning"} />
                </Section>
            </Collapsable>
        </>
    );
};
