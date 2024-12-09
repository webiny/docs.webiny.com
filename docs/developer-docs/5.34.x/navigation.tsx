import React from "react";
import { Navigation as BaseNavigation } from "../5.33.x/navigation";
import { Group, Page, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.33.x. */}
      <BaseNavigation />
      {/* Add new items. */}
      <NavigationRoot directory={__dirname}>
        <Group title={"Infrastructure"}>
          <Group title={"Basics"}>
            <Page
              link={"infrastructure/basics/best-practices"}
              after={"infrastructure/basics/build-and-deploy-hooks"}
            />
          </Group>
        </Group>
        <Group title={"Page Builder"}>
          <Group title={"extensions"}>
            <Page link={"page-builder/extending/customize-an-existing-element"} remove />
            <Page link={"page-builder/extending/customize-website-settings"} />
          </Group>
          <Group title={"Theming"}>
            <Page
              link={"page-builder/theming/theme-object"}
              after={"page-builder/theming/introduction"}
            />
            <Page link={"page-builder/theming/page-layouts"} />
            <Page link={"page-builder/theming/best-practices"} />
            <Page link={"page-builder/theming/colors"} remove />
            <Page link={"page-builder/theming/elements"} remove />
            <Page link={"page-builder/theming/layouts"} remove />
          </Group>
        </Group>
        <Group title={"Webiny Overview"}>
          <Group title={"Features"}>
            <Page link={"overview/features/sso-and-custom-authenticators"} />
          </Group>
        </Group>
        <Group title={"Headless CMS"}>
          <Group title={"Basics"}>
            <Page link={"headless-cms/basics/using-graphql-api-filtering"} remove />
            <Page link={"headless-cms/basics/using-graphql-api-advanced-filtering"} />
          </Group>
          <Group title={"extensions"}>
            <Page link={"headless-cms/extending/custom-sorting"} />
          </Group>
        </Group>
        <Group title={"Webiny Enterprise"}>
          <Page link={"enterprise/auth0-integration"} />
          <Page link={"enterprise/use-existing-amazon-vpc"} />
        </Group>
        <Group title={"Core Development Concepts"}>
          <Group title={"Development"} after={"Project Organization"}>
            <Page link={"core-development-concepts/development/local-development"} />
          </Group>
          <Group title={"Extending and Customizing"}>
            <Page
              link={
                "core-development-concepts/extending-and-customizing/customizing-the-error-output"
              }
            />
            <Page
              link={"core-development-concepts/extending-and-customizing/intercepting-the-request"}
            />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
