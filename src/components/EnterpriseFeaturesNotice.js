import React from "react";
import { Alert } from "@/components/Alert";

export const EnterpriseFeaturesNotice = () => {
    return (
        <Alert type="info" title="Enterprise License Only">
            The following features are only available to <strong>Enterprise License</strong> users.
            If interested, <a href={"https://www.webiny.com/call/demo"}>book a call</a> to find out
            more.
        </Alert>
    );
};
