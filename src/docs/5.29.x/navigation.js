import React from "react";
import { Navigation as BaseNavigation } from "../5.28.x/navigation";
import { Collapsable, Section, Page } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.28.x. */}
            <BaseNavigation />
            {/* Add new items here. */}

            <Collapsable title={"Architecture"}>
                <Section title={"Core Architecture"} before={"API Architecture"}>
                    <Page link={"architecture/core/overview"} />
                </Section>
                <Section title={"API Architecture"}>
                    <Page link={"architecture/api/introduction"} remove />
                    <Page link={"architecture/api/overview-vpc-default"} remove />
                    <Page link={"architecture/api/overview-vpc-custom"} remove />
                </Section>
                <Section title={"Deployment Modes"} after={"Website Architecture"}>
                    <Page link={"architecture/deployment-modes/introduction"} />
                    <Page link={"architecture/deployment-modes/development"} />
                    <Page link={"architecture/deployment-modes/production"} />
                </Section>
            </Collapsable>
        </>
    );
};
