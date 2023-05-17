import { forwardRef } from "react";
import { Heading } from "./Heading";
import { Gallery, Image } from "./Image";
import { Alert } from "./Alert";
import { WhatYouWillLearn } from "./WhatYouWillLearn";
import { CanIUseThis } from "./CanIUseThis";
import { Video } from "./Video";
import Link from "next/link";
import { ExternalLink } from "./ExternalLink";
import { GithubRelease } from "./GithubRelease";

export const mdxComponents = {
    Heading,
    Alert,
    WhatYouWillLearn,
    CanIUseThis,
    Image,
    Gallery,
    Video,
    ExternalLink,
    GithubRelease,
    ol: props => <ol {...props} style={{ "--start": props.start ?? 1 }} />,
    a: forwardRef((props, _) => {
        if (props.href.startsWith("http")) {
            return <ExternalLink {...props} />;
        } else {
            if (typeof props.children === "object") {
                if (props?.children?.props?.originalType === "inlineCode") {
                    return (
                        <code>
                            <Link href={props.href}>{props.children.props.children}</Link>
                        </code>
                    );
                } else {
                    return <Link href={props.href}>{props.children}</Link>;
                }
            } else {
                return <Link href={props.href}>{props.children}</Link>;
            }
        }
    })
};
