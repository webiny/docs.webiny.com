import React from "react";
import { Page, Group, NavigationRoot } from "@webiny/docs-generator";
import { Navigation as Messages } from "../../messages/navigation";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname}>
      <Group title={"Infrastructure"} after={"Core Development Concepts"}>
        <Page link={"infrastructure/additional-resources/reset-state-without-redeploy"} />
      </Group>
      <Group 
        title={"Performance & Load Benchmark"} 
        after={"Architecture"}
        icon={"/docs-menu-icons/benchmark.svg"}
        link={"performance-and-load-benchmark/introduction"}
        >
        <Page link={"performance-and-load-benchmark/introduction"} />
        <Page link={"performance-and-load-benchmark/code"} />
        <Group title={"Headless CMS"}>
          <Page link={"performance-and-load-benchmark/headless-cms/write-benchmark"} />
          <Page link={"performance-and-load-benchmark/headless-cms/read-benchmark"} />
        </Group>
        <Group title={"Page Builder"}>
          <Page link={"performance-and-load-benchmark/page-builder/deliver-a-page"} />
        </Group>
      </Group>
      <Group 
        title={"Release Management"}
        icon={"/docs-menu-icons/release-management.svg"}
        link={"release-management/branching-strategy"}
        >
        <Page link={"release-management/branching-strategy"} />
        <Page link={"release-management/unstable-releases"} />
      </Group>
      <Group 
        title={"Community Plugins"}
        icon={"/docs-menu-icons/community-plugins.svg"}
        link={"community-plugins/introduction"}
        >
        <Page link={"community-plugins/introduction"} />
      </Group>
      <Group 
        title={"Webiny Telemetry"}
        icon={"/docs-menu-icons/telemetry.svg"}
        link={"webiny-telemetry/webiny-telemetry"}
        >
        <Page link={"webiny-telemetry/webiny-telemetry"} />
      </Group>
      <Group 
        title={"Write with Webiny"}
        icon={"/docs-menu-icons/write.svg"}
        link={"write-with-webiny/write-with-webiny"}
        >
        <Page link={"write-with-webiny/write-with-webiny"} />
      </Group>
      <Messages />
    </NavigationRoot>
  );
};
