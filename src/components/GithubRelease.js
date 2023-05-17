import React from "react";
import { Alert } from "@/components/Alert";
import { ExternalLink } from "@/components/ExternalLink";

export const GithubRelease = ({ version }) => {
    return (
        <Alert type={"info"}>
            For the full list of changes, check out the{" "}
            <ExternalLink href={`https://github.com/webiny/webiny-js/releases/tag/v${version}`}>
                Webiny {version}
            </ExternalLink>{" "}
            release on GitHub.
        </Alert>
    );
};
