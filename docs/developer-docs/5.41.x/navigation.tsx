import React from "react";
import { Navigation as BaseNavigation } from "../5.40.x/navigation";
import { Group, NavigationRoot, Page } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.40.x. */}
      <BaseNavigation />
      {/* Add new items. */}
      <NavigationRoot directory={__dirname}>
        <Group
          title={"Security"}
          after={"File Manager"}
          icon={"/docs-menu-icons/wcp.svg"}
          link={"security/overview"}
        >
          <Page link={"security/overview"} hidden={true} />
          <Group title={"Security Framework"}>
            <Page link={"security/security-framework/introduction"} />
            <Page link={"security/security-framework/api-security"} />
            <Page link={"security/security-framework/react-security"} />
          </Group>
          <Group title={"Extensions"}>
            <Page link={"security/extensions/programmatically-create-roles-and-teams"} />
          </Group>
        </Group>
        <Group title={"Core Development Concepts"}>
          <Group title={"Basics"}>
            <Page link={"core-development-concepts/basics/webiny-cli"} />
          </Group>
          <Group title={"Security Framework"} remove>
            <Page link={"security/security-framework/introduction"} remove />
            <Page link={"security/security-framework/api-security"} remove />
            <Page link={"security/security-framework/react-security"} remove />
          </Group>
          <Group title={"Extending and Customizing"}>
            <Page
              link={
                "core-development-concepts/extending-and-customizing/how-to-customize-elasticsearch-index"
              }
            />
          </Group>
        </Group>
        <Group title={"Webiny Enterprise"}>
          <Group title={"Advanced Access Control Layer (AACL)"}>
            <Page link={"enterprise/aacl/teams"} />
          </Group>
        </Group>
        <Group title={"Headless CMS"}>
          <Group title={"Artificial intelligence (AI)"} after={"Basics"}>
            <Page title={"Smart SEO - Open AI"} link={"headless-cms/ai/smart-seo-open-ai"} />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
