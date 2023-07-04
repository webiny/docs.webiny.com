import React from "react";
import { Navigation as BaseNavigation } from "../5.35.x/navigation";
import {Collapsable, NavGroup, Page, Section} from "@/docs/utils/navigation";

export const Navigation = () => {
  return (
    <>
      <BaseNavigation />
      <NavGroup type={"docs"}>
        <Collapsable title={"Page Builder"}>
          <Section title={"Extending functionality"}>
            <Page
              link={"page-builder/extending/lexical-editor-configuration-api"}
              after={"page-builder/extending/extend-page-settings"}
            />
          </Section>
        </Collapsable>
      </NavGroup>
    </>
  );
};
