import React from "react";
import Link from "next/link";
import { CopyButton } from "./CopyButton";

const watchTargets = {
    admin: "admin",
    api: "api"
};

export const ExtensionsGettingStartedV6 = ({ type = "admin", fullExampleDownloadLink }) => {
    const watchTarget = watchTargets[type] || type;
    const watchCommand = `yarn webiny watch ${watchTarget}`;
    const downloadCommand = fullExampleDownloadLink
        ? `yarn webiny extension ${fullExampleDownloadLink}`
        : null;

    return (
        <div>
            {downloadCommand && (
                <>
                    <h2>Quick Setup</h2>
                    <p>
                        Run the following command to quickly set up the extension in your Webiny
                        project:
                    </p>
                    <pre className={"language-bash relative"}>
                        <CopyButton text={downloadCommand} />
                        {downloadCommand}
                    </pre>
                    <p>
                        Once the extension is in place, start the{" "}
                        <code>
                            <Link href={`/docs/cli/watch`}>webiny watch</Link>
                        </code>{" "}
                        command:
                    </p>
                    <pre className={"language-bash relative"}>
                        <CopyButton text={watchCommand} />
                        {watchCommand}
                    </pre>
                    <p>
                        Alternatively, continue reading this article to learn how to create this
                        extension from scratch.
                    </p>
                </>
            )}
        </div>
    );
};
