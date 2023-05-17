import React from "react";
import externalLinkIcon from "@/img/external-link.svg";

const externalIcon = {
    marginLeft: 4,
    marginBottom: 4
};

export const ExternalLink = ({ href, children }) => {
    return (
        <a target="_blank" href={href} rel={"noreferrer"}>
            {children}
            <img
                className="inline w-[12px] m-0"
                src={externalLinkIcon}
                alt="external link"
                style={externalIcon}
            />
        </a>
    );
};
