import React from "react";
import { Navigation as BaseNavigation } from "../5.35.x/navigation";
import {Collapsable, NavGroup, Page, Section} from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            <BaseNavigation />
            <NavGroup type={"docs"}>
              <Collapsable title={"Headless CMS"}>
                <Section title={"Extending functionality"}>
                  <Page
                    link={"headless-cms/extending/render-lexical-rich-text-content"}
                    after={"headless-cms/extending/render-rich-text-content"}/>
                </Section>
              </Collapsable>
            </NavGroup>
        </>
    );
};
