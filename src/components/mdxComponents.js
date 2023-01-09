import { forwardRef } from "react";
import { Heading } from "./Heading";
import { Gallery, Image } from "./Image";
import { Alert } from "./Alert";
import { WhatYouWillLearn } from "./WhatYouWillLearn";
import { Video } from "./Video";
import externalLinkIcon from "@/img/external-link.svg";
import Link from "next/link";

export const mdxComponents = {
    Heading,
    Alert,
    WhatYouWillLearn,
    Image,
    Gallery,
    Video,
    ol: props => <ol {...props} style={{ "--start": props.start ?? 1 }} />,
    a: forwardRef((props, _) => {
        if (props.href.startsWith("http")) {
            return (
                <a target="_blank" href={props.href} rel={"noreferrer"}>
                    {props.children} <img className="inline w-[12px] m-0" src={externalLinkIcon} alt="external link"/>
                </a>
            );
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
