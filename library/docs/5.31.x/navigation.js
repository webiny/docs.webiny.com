import React from "react";
import { Group, Page } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.30.x/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.30.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <Group title={"Core Development Concepts"}>
                <Group title={"Basics"}>
                    <Page link={"core-development-concepts/basics/routes-and-events"} />
                </Group>
                <Group title={"Extending and Customizing"}>
                    <Page
                        link={
                            "core-development-concepts/extending-and-customizing/add-custom-route-to-existing-lambda"
                        }
                    />
                </Group>
            </Group>
        </>
    );
};
