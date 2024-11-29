import React from "react";
import { Heading } from "./Heading";
import { Alert } from "./Alert";
import Link from "next/link";
import { usePage } from "@/hooks/usePage";
import { gte } from "semver";

const extensionTypeLabel = {
    admin: "Admin extension",
    api: "API extension",
    pbElement: "Page Builder element"
};

export const ExtensionsGettingStarted = ({
    type = "",
    name,
    location,
    dependencies,
    scaffoldCommandExtraInfo,
    fullExampleLink,
    fullExampleDownloadLink
}) => {
    const { page } = usePage();

    const currentVersionWithPatchSetToZero = page.version.replace("x", "0");
    const showNewCommand = gte(currentVersionWithPatchSetToZero, "5.41.0");
    const command = showNewCommand ? "yarn webiny extension" : "yarn webiny scaffold extension";

    let scaffoldCommandParts = [command, `--type ${type}`, `--name ${name}`];

    if (location) {
        scaffoldCommandParts.push(`--location ${location}`);
    }

    if (dependencies) {
        const commaSeparatedDependencies = Array.isArray(dependencies)
            ? dependencies.join(",")
            : dependencies;
        scaffoldCommandParts.push(`--dependencies ${commaSeparatedDependencies}`);
    }

    const scaffoldCommand =
        scaffoldCommandParts.length > 3
            ? scaffoldCommandParts.join(" \\\n\t")
            : scaffoldCommandParts.join(" ");

    let watchCommand = `yarn webiny watch ${type} --env ENVIRONMENT_NAME`;
    if (type === "pbElement") {
        watchCommand = (
            <code className="language-bash">
                <div className="token comment"># Starts the Admin app locally.</div>
                <div className="token function">yarn webiny watch admin --env dev</div>
                <br />
                <div className="token comment"># Starts the Website app locally.</div>
                <div className="token function">yarn webiny watch website --env dev</div>
            </code>
        );
    }

    return (
        <>
            <Heading level={2}>Getting Started</Heading>
            {fullExampleDownloadLink ? (
                <Alert type={"info"}>
                    <p>
                        Run the following command to quickly set up this example directly in your
                        project:
                    </p>
                    <pre className={"language-bash"}>
                        {command} {fullExampleDownloadLink}
                    </pre>
                    {fullExampleLink && (
                        <p>
                            The complete code shown in this article can also be found in our{" "}
                            <a href={fullExampleLink} target={"_blank"} rel="noreferrer">
                                webiny-examples
                            </a>{" "}
                            repository.
                        </p>
                    )}
                </Alert>
            ) : (
                <>
                    {fullExampleLink && (
                        <Alert type={"info"}>
                            The complete code shown in this article can also be found in our{" "}
                            <a target={"_blank"} rel="noreferrer" href={fullExampleLink}>
                                webiny-examples
                            </a>{" "}
                            repository.
                        </Alert>
                    )}
                </>
            )}
            <p>
                To get started, we first scaffold a new{" "}
                <a href={"/docs/core-development-concepts/basics/extensions"}>
                    {extensionTypeLabel[type]}
                </a>{" "}
                in the <code>{location || `/extensions/${name}`}</code> folder, via the following
                command:
            </p>
            <pre className={"language-bash"}>{scaffoldCommand}</pre>
            {scaffoldCommandExtraInfo && <p>{scaffoldCommandExtraInfo}</p>}
            <p>
                Once the extension is scaffolded, in order to start developing, we run the following
                <code>
                    <Link
                        href={"/docs/core-development-concepts/basics/watch-command"}
                        legacyBehavior
                    >
                        webiny watch
                    </Link>
                </code>{" "}
                command:
            </p>
            <pre className={"language-bash"}>{watchCommand}</pre>
        </>
    );
};
