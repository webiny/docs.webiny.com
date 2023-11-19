import React from "react";
import { NavigationRoot } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.31.x/navigation";

export const Navigation = () => {
    return (
        <NavigationRoot directory={__dirname}>
            {/* Inherit navigation from 5.31.x. */}
            <BaseNavigation />
        </NavigationRoot>
    );
};
