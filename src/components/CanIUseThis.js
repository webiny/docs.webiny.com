import React from "react";
import { Alert } from "@/components/Alert";

export const CanIUseThis = ({ since, enterprise = false, children }) => {
    return (
        <Alert type="info" title="Can I use this?">
            {enterprise ? (
                <p>
                    <strong>Webiny Enterprise license is required to use this feature.</strong>
                </p>
            ) : null}
            {since ? (
                <p>
                    This feature is available since Webiny <strong>v{since}</strong>.
                </p>
            ) : null}
            {children}
        </Alert>
    );
};
