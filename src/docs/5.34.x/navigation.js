import React from "react";
import { Navigation as BaseNavigation } from "../5.33.x/navigation";
import { Page, Section, Collapsable, NavGroup } from "@/docs/utils/navigation";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.33.x. */}
      <BaseNavigation />
      {/* Add new items. */}
      <NavGroup type={"docs"}>
        <Collapsable title={"Infrastructure"}>
          <Section title={"Basics"}>
            <Page
              link={"infrastructure/basics/best-practices"}
              after={"infrastructure/basics/build-and-deploy-hooks"}
            />
          </Section>
        </Collapsable>
        <Collapsable title={"Page Builder"}>
          <Section title={"Extending functionality"}>
            <Page
              link={"page-builder/extending/customize-an-existing-element"}
              remove
            />
          </Section>
        </Collapsable>
        <Collapsable title={"Webiny Overview"}>
          <Section title={"Features"}>
            <Page link={"overview/features/sso-and-custom-authenticators"} />
          </Section>
        </Collapsable>
        <Collapsable title={"Headless CMS"}>
          <Section title={"Basics"}>
            <Page link={"headless-cms/basics/using-graphql-api-filtering"} remove />
            <Page link={"headless-cms/basics/using-graphql-api-advanced-filtering"} />
          </Section>
          <Section title={"Extending functionality"}>
            <Page link={"headless-cms/extending/custom-sorting"} />
          </Section>
        </Collapsable>
        <Collapsable title={"Webiny Enterprise"}>
          <Page link={"enterprise/auth0-integration"} />
          <Page link={"enterprise/use-existing-amazon-vpc"} />
        </Collapsable>
        <Collapsable title={"Core Development Concepts"}>
          <Section title={"Development"} after={"Project Organization"}>
            <Page link={"core-development-concepts/development/local-development"} />
          </Section>
          <Section title={"Extending and Customizing"}>
            <Page
              link={
                "core-development-concepts/extending-and-customizing/customizing-the-error-output"
              }
            />
            <Page
              link={
                "core-development-concepts/extending-and-customizing/intercepting-the-request"
              }
            />
          </Section>
        </Collapsable>
      </NavGroup>
    </>
  );
};
