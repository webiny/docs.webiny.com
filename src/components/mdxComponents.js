import { forwardRef } from "react";
import Link from "next/link";
import { Heading } from "./Heading";
import { Gallery, Image } from "./Image";
import { Alert } from "./Alert";
import { WhatYouWillLearn } from "./WhatYouWillLearn";
import { CanIUseThis } from "./CanIUseThis";
import { Video } from "./Video";
import { Editor } from "./Editor";
import { ExternalLink } from "./ExternalLink";
import { GithubRelease } from "./GithubRelease";
import { ExtensionsGettingStarted } from "./ExtensionsGettingStarted";
import { EnterpriseFeaturesNotice } from "./EnterpriseFeaturesNotice";
import { BetaTag } from "./BetaTag";

export const mdxComponents = {
    Heading,
    Alert,
    WhatYouWillLearn,
    CanIUseThis,
    Image,
    Editor,
    Gallery,
    Video,
    ExternalLink,
    GithubRelease,
    EnterpriseFeaturesNotice,
    ExtensionsGettingStarted,
    ol: props => <ol {...props} style={{ "--start": props.start ?? 1 }} />,
    code: props => {
        if (props.children === "beta-feature-tag") {
            return <BetaTag/>;
        }
        return <code {...props}></code>;
    },
    a: forwardRef((props, _) => {
        if (props.href.startsWith("http")) {
            return <ExternalLink {...props} />;
        } else {
            if (typeof props.children === "object") {
                if (props?.children?.props?.originalType === "inlineCode") {
                    return (
                        <code>
                            <Link href={props.href} legacyBehavior>
                                {props.children.props.children}
                            </Link>
                        </code>
                    );
                } else {
                    return (
                        <Link href={props.href} legacyBehavior>
                            {props.children}
                        </Link>
                    );
                }
            } else {
                return (
                    <Link href={props.href} legacyBehavior>
                        {props.children}
                    </Link>
                );
            }
        }
    })
};
