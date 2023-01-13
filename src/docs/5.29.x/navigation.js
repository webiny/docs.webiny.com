import React from "react";
import { Navigation as BaseNavigation } from "../5.28.x/navigation";
import { Collapsable, Section, Page, NavGroup } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.28.x. */}
            <BaseNavigation />
            {/* Add new items here. */}

            <NavGroup type={"docs"}>
                <Collapsable title={"Infrastructure"}>
                    <Section title={"Basics"}>
                        <Page
                            link={"infrastructure/basics/modify-cloud-infrastructure"}
                            after={"infrastructure/basics/destroy-cloud-infrastructure"}
                        />
                    </Section>
                </Collapsable>

                <Collapsable title={"Core Development Concepts"}>
                    <Section title={"Scaffolding"}>
                        <Page
                            link={"core-development-concepts/scaffolding/full-stack-application"}
                            remove
                        />
                    </Section>
                </Collapsable>

                <Collapsable title={"Architecture"}>
                    <Section title={"Core Architecture"} before={"API Architecture"}>
                        <Page link={"architecture/core/overview"} />
                    </Section>
                    <Section title={"Admin Area Architecture"}>
                        <Page link={"architecture/admin/introduction"} remove />
                    </Section>
                    <Section title={"Website Architecture"}>
                        <Page link={"architecture/website/introduction"} remove />
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
                <Collapsable title={"Core Development Concepts"}>
                    <Section title={"Scaffolding"}>
                        <Page
                            link={"core-development-concepts/scaffolding/full-stack-application"}
                            remove
                        />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
