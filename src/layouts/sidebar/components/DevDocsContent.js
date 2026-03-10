import { forwardRef } from "react";
import clsx from "clsx";
import { BackToHome } from "./BackToHome";
import { IconHeader } from "./IconHeader";

export const DevDocsContent = forwardRef(
    ({ isActiveChild, link, icon, title, subElements, depth, renderElement }, ref) => {
        const menuIcon = icon ? <img src={icon} title={title} alt="" /> : null;

        return (
            <>
                <BackToHome />
                <IconHeader
                    link={link}
                    title={title}
                    menuIcon={menuIcon}
                    isActive={isActiveChild}
                    isHomepage={false}
                />
                {subElements.length ? (
                    <ul
                        className={
                            "transition-all duration-300 transform opacity-1 overflow-visible " +
                            clsx({
                                "ml-[18px] ": depth > 0
                            })
                        }
                    >
                        {subElements.map((navElement, index) =>
                            renderElement(navElement, index, ref, depth + 1)
                        )}
                    </ul>
                ) : null}
            </>
        );
    }
);
