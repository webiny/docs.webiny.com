import React from "react";
import { Navigation as BaseNavigation } from "../5.36.x/navigation";
import { Page, Section, Collapsable, NavGroup } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.36.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <NavGroup type={"docs"}>
              <Collapsable title={"Headless CMS"}>
                <Section title={"Extending functionality"}>
                  <Page link={"headless-cms/extending/render-rich-text-content"} remove />
                </Section>
                <Section title={"Integrations"}>
                  <Page link={"headless-cms/integrations/legacy-render-rich-text-content"} />
                  <Page link={"headless-cms/integrations/render-lexical-rich-text-content"} />
                </Section>
              </Collapsable>
              <Collapsable title={"File Manager"}>
                <Section title={"Extending functionality"}>
                  <Page link={"file-manager/extending/customizing-file-filters"} />
                </Section>
              </Collapsable>
            </NavGroup>
        </>
    );
};
