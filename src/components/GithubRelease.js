import React from "react";
import { Alert } from "@/components/Alert";
import { ExternalLink } from "@/components/ExternalLink";
import { ReviewPendingFilter } from "@/components/ReviewPendingFilter";

export const GithubRelease = ({ version }) => {
    return (
        <>
            <Alert type={"info"}>
                For the full list of changes, check out the{" "}
                <ExternalLink href={`https://github.com/webiny/webiny-js/releases/tag/v${version}`}>
                    Webiny {version}
                </ExternalLink>{" "}
                release on GitHub.
            </Alert>
            {process.env.NODE_ENV === "development" ? (
                <ReviewPendingFilter version={version} />
            ) : null}
        </>
    );
};
