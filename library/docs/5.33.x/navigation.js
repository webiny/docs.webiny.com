import React from "react";
import { Group, Page } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.32.x/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.32.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <Group title={"File Manager"}>
                <Group title={"Extending functionality"}>
                    <Page link={"file-manager/extending/create-a-custom-file-manager-renderer"} />
                </Group>
            </Group>
            <Group title={"Headless CMS"}>
                <Group title={"Extending functionality"}>
                    <Page link={"headless-cms/extending/content-models-via-code-storage-id"} />
                </Group>
            </Group>
            <Group title={"Performance & Load Benchmark"}>
                <Group title={"Headless CMS"}>
                    <Page link={"performance-and-load-benchmark/headless-cms/performance-tuning"} />
                </Group>
            </Group>
        </>
    );
};
