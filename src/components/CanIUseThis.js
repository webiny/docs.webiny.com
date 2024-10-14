import React from "react";
import { Alert } from "@/components/Alert";

const LicenseMessage = ({ enterprise, business }) => {
    if (enterprise) {
        return (
            <p>
                Webiny Enterprise license is required to use this feature.
            </p>
        );
    }

    if (business) {
        return (
            <p>
                Webiny Business license is required to use this feature. To get started, create
                a&nbsp;
                <a href={"https://app.webiny.com"}>Webiny Control Panel (WCP)</a> account and{" "}
                <a href={"/docs/wcp/link-a-project"}>link your Webiny project</a>.
            </p>
        );
    }
};

export const CanIUseThis = ({ since, enterprise = false, business = false, children }) => {
    return (
        <Alert type="info" title="Can I use this?">
            <LicenseMessage enterprise={enterprise} business={business} />
            {since ? (
                <p>
                    This feature is available since Webiny <strong>v{since}</strong>.
                </p>
            ) : null}
            {children}
        </Alert>
    );
};
