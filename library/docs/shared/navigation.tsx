import React from "react";
import { Page, Collapsable, Section, NavigationRoot } from "@webiny/docs-generator";
import { Navigation as ReleaseNotes } from "../../release-notes/navigation";
import { Navigation as Messages } from "../../messages/navigation";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname}>
      <Collapsable title={"Infrastructure"} after={"Core Development Concepts"}>
        <Page link={"infrastructure/additional-resources/reset-state-without-redeploy"} />
      </Collapsable>
      <Collapsable title={"Performance & Load Benchmark"} after={"Architecture"}>
        <Page link={"performance-and-load-benchmark/introduction"} />
        <Page link={"performance-and-load-benchmark/code"} />
        <Section title={"Headless CMS"}>
          <Page link={"performance-and-load-benchmark/headless-cms/write-benchmark"} />
          <Page link={"performance-and-load-benchmark/headless-cms/read-benchmark"} />
        </Section>
        <Section title={"Page Builder"}>
          <Page link={"performance-and-load-benchmark/page-builder/deliver-a-page"} />
        </Section>
      </Collapsable>
      <ReleaseNotes />
      <Collapsable title={"Release Management"}>
        <Page link={"release-management/branching-strategy"} />
        <Page link={"release-management/unstable-releases"} />
      </Collapsable>
      <Collapsable title={"Community Plugins"}>
        <Page link={"community-plugins/introduction"} />
      </Collapsable>
      <Collapsable title={"Webiny Telemetry"}>
        <Page link={"webiny-telemetry/webiny-telemetry"} />
      </Collapsable>
      <Collapsable title={"Write with Webiny"}>
        <Page link={"write-with-webiny/write-with-webiny"} />
      </Collapsable>
      <Messages />
    </NavigationRoot>
  );
};
