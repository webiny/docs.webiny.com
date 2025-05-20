import React from "react";
import { NavigationRoot, Page } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname} linkPrefix={"messages"}>
      <Page link={"./cloudwatch"} hidden={true} />
      <Page link={"./lambda-edge-warning"} hidden={true} />
      <Page link={"./missing-stack-output"} hidden={true} />
      <Page link={"./webiny-package-versions-check"} hidden={true} />
    </NavigationRoot>
  );
};
