import React from "react";
import { Page, Group, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname}>
        <Group title={"About the company"} linkPrefix={"company"}>
          <Page file={"./company/why-webiny-exists"} />
          <Page file={"./company/our-values"} />
          <Page file={"./company/how-we-got-here"} />
          <Page file={"./company/who-are-we-building-for"} />
          <Page file={"./company/how-we-make-users-happy"} />
          <Page file={"./company/how-we-make-money"} />
          <Page file={"./company/deciding-what-features-to-build"} />
          <Page file={"./company/how-we-ensure-quality"} />
          <Page file={"./company/why-we-chose-serverless"} />
        </Group>
    </NavigationRoot>
  );
};
