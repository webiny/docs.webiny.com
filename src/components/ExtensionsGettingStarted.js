import React from "react";
import { Heading } from "./Heading";
import Link from "next/link";

const extensionTypeLabel = {
    admin: "Admin extension",
    api: "API extension"
};

export const ExtensionsGettingStarted = ({ type = "", name, location, dependencies }) => {
    let scaffoldCommandParts = [
        "yarn webiny scaffold new-extension",
        `--type ${type}`,
        `--name ${name}`
    ];

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

    const watchCommand = `yarn webiny watch ${type} --env ENVIRONMENT_NAME`;

    return (
        <>
            <Heading level={2}>Getting Started</Heading>
            <p>
                To get started, we first scaffold a new <strong>{extensionTypeLabel[type]}</strong>{" "}
                in the <code>{location || `/extensions/${name}`}</code> folder, via the following
                command:
            </p>
            <p>
                <pre className={"language-bash"}>{scaffoldCommand}</pre>
            </p>
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
                <p>
                    <pre className={"language-bash"}>{watchCommand}</pre>
                </p>
            </p>
        </>
    );
};
