import React from "react";
import { Heading } from "./Heading";
import Link from "next/link";

export const ExtensionsGettingStarted = ({ type = "", name, location, dependencies }) => {
    const ucFirstType = type.charAt(0).toUpperCase() + type.slice(1);
    let scaffoldCommand = `yarn webiny scaffold new-extension --type ${type} --name ${name}`;
    if (location) {
        scaffoldCommand += ` --location ${location}`;
    }

    if (dependencies) {
        const commaSeparatedDependencies = Array.isArray(dependencies)
            ? dependencies.join(",")
            : dependencies;
        scaffoldCommand += ` --dependencies ${commaSeparatedDependencies}`;
    }

    const watchCommand = `yarn webiny watch ${type} --env ENVIRONMENT_NAME`;

    return (
        <>
            <Heading level={2}>Getting Started</Heading>
            <p>
                To get started, we first scaffold a new <strong>{ucFirstType} extension</strong> in
                the <code>extensions/customFilePreview</code> folder, via the following command:
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
