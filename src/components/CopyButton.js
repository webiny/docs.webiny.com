import React, { useCallback, useMemo, useState } from "react";
import cn from "classnames";

const ClipboardIcon = (props = {}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-clipboard"
        {...props}
    >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
);

const ClipboardCheckIcon = (props = {}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-clipboard-check"
        {...props}
    >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
    </svg>
);

export const CopyButton = ({ text }) => {
    const canCopy = useMemo(() => {
        try {
            return "clipboard" in navigator;
        } catch {
            return false;
        }
    }, []);

    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);

        if (!canCopy) {
            alert("Cannot copy to clipboard. Only works when deployed.");
            console.log("Cannot copy to clipboard. Only works when deployed.");
            console.log(text);
            return;
        }

        navigator.clipboard.writeText(text);
    }, [text, canCopy]);

    let IconComponent = ClipboardIcon;
    if (copied) {
        IconComponent = ClipboardCheckIcon;
    }
    return (
        <button
            onClick={handleCopy}
            className={"absolute top-0 right-0 py-[22px] px-4 cursor-pointer"}
            title={"Copy to clipboard"}
        >
            <IconComponent
                className={cn("w-[18px] h-[18px]", {
                    "text-[#28a745]": copied,
                    "text-[#adb5bd] hover:opacity-80": !copied
                })}
            />
        </button>
    );
};
