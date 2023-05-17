import React from "react";
import { Navigation as BaseNavigation } from "../5.33.x/navigation";
import { Page, Section, Collapsable, NavGroup, Separator } from "@/docs/utils/navigation";

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
          <Section title={"Theming"}>
            <Page link={"page-builder/theming/theme-object"} after={"page-builder/theming/introduction"}/>
            <Page link={"page-builder/theming/page-layouts"} />
            <Page link={"page-builder/theming/best-practices"} />
            <Page link={"page-builder/theming/colors"} remove />
            <Page link={"page-builder/theming/elements"} remove />
            <Page link={"page-builder/theming/layouts"} remove />
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

      <NavGroup type={"user-guides"}>
        <Collapsable title={"Get Started"}>
          <Page link={"user-guides/overview"} />
        </Collapsable>
        <Separator />
        <Collapsable title={"Headless CMS"}>
          <Section title={"Essentials"}>
            <Page title={"Glossary"} link={"user-guides/headless-cms/essentials/glossary"} />
            <Page link={"user-guides/headless-cms/essentials/create-content-model"} />
            <Page link={"user-guides/headless-cms/essentials/create-content-entry"} />
            <Page link={"user-guides/headless-cms/essentials/create-content-model-group"} />
            <Page link={"user-guides/headless-cms/essentials/content-entry-revisions"} />
            <Page link={"user-guides/headless-cms/essentials/clone-content-model"} />
            <Page link={"user-guides/headless-cms/essentials/manage-content-model-settings"} />
            <Page link={"user-guides/headless-cms/essentials/add-validator-to-fields"} />
            <Page link={"user-guides/headless-cms/essentials/reference-field"} />
          </Section>
          <Section title={"Advanced"}>
            <Page link={"user-guides/headless-cms/advanced/content-localization"} />
            <Page link={"user-guides/headless-cms/advanced/user-creation"} />
          </Section>
        </Collapsable>
        <Separator />
        <Collapsable title={"Page Builder"}>
          <Section title={"Essentials"}>
            <Page title={"Glossary"} link={"user-guides/page-builder/essentials/glossary"} />
            <Page title={"Overview"} link={"user-guides/page-builder/essentials/overview"} />
            <Page link={"user-guides/page-builder/essentials/create-page"} />
            <Page link={"user-guides/page-builder/essentials/navigation-menu"} />
            <Page link={"user-guides/page-builder/essentials/seo-and-social-sharing"} />
          </Section>
        </Collapsable>
      </NavGroup>
    </>
  );
};
