import React from "react";
import { NavigationRoot, Page } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname} linkPrefix={"messages"}>
      <Page file={"./lambda-edge-warning"} hidden={true} />
      <Page file={"./cloudwatch"} hidden={true} />
    </NavigationRoot>
  );
};
