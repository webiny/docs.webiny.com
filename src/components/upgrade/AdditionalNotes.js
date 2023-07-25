import React from "react";
import { Alert } from "../Alert";

export const AdditionalNotes = () => {
    return (
        <>
            <Alert type="warning">
                Make sure you deploy the entire system using the command shown above! You have to
                deploy all apps before using the system. Partial deploys will cause the upgrade to
                be applied incorrectly.
            </Alert>

            <Alert type="warning">
                As stated in the{" "}
                <a href={"../upgrade-webiny#pre-production-environments-first"}>Upgrade Webiny</a>{" "}
                section, we recommend that you first deploy your changes into one of your
                pre-production environments, like <code>dev</code> or <code>staging</code>.
            </Alert>

            <Alert type="info">
                Learn more about different deployment environments in the{" "}
                <a href={"../../core-development-concepts/ci-cd/environments"}>
                    CI/CD / Environments
                </a>{" "}
                key topic.
            </Alert>
        </>
    );
};
