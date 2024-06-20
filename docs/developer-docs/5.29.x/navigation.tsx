import React from "react";
import { Navigation as BaseNavigation } from "../5.28.x/navigation";
import { Group, Page, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.28.x. */}
      <BaseNavigation />
      <NavigationRoot directory={__dirname}>
        <Group title={"Infrastructure"}>
          <Group title={"Basics"}>
            <Page
              link={"infrastructure/basics/modify-cloud-infrastructure"}
              after={"infrastructure/basics/destroy-cloud-infrastructure"}
            />
          </Group>
        </Group>

        <Group title={"Admin Area"}>
          <Group title={"Extending Functionality"}>
            <Page link={"admin-area/extending/custom-routes"} />
          </Group>
        </Group>

        <Group title={"Core Development Concepts"}>
          <Group title={"Scaffolding"}>
            <Page link={"core-development-concepts/scaffolding/full-stack-application"} remove />
          </Group>
        </Group>

        <Group title={"Architecture"}>
          <Group title={"Core Architecture"} before={"API Architecture"}>
            <Page link={"architecture/core/overview"} />
          </Group>
          <Group title={"Admin Area Architecture"}>
            <Page link={"architecture/admin/introduction"} remove />
          </Group>
          <Group title={"Website Architecture"}>
            <Page link={"architecture/website/introduction"} remove />
          </Group>
          <Group title={"API Architecture"}>
            <Page link={"architecture/api/introduction"} remove />
            <Page link={"architecture/api/overview-vpc-default"} remove />
            <Page link={"architecture/api/overview-vpc-custom"} remove />
          </Group>
          <Group title={"Deployment Modes"} after={"Website Architecture"}>
            <Page link={"architecture/deployment-modes/introduction"} />
            <Page link={"architecture/deployment-modes/development"} />
            <Page link={"architecture/deployment-modes/production"} />
          </Group>
        </Group>
        <Group title={"Core Development Concepts"}>
          <Group title={"Scaffolding"}>
            <Page link={"core-development-concepts/scaffolding/full-stack-application"} remove />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
