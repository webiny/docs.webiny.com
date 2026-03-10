import { forwardRef } from "react";
import { HorizontalLine } from "./HorizontalLine";
import { PageLink } from "./PageLink";
import { SectionLabel } from "./SectionLabel";
import { DevDocsHomepage } from "./DevDocsHomepage";
import { DevDocsContent } from "./DevDocsContent";
import { AccordionSection } from "./AccordionSection";

/**
 * Resolves which component key to use for a group at a given depth.
 * @returns {"icon" | "content" | "accordion" | "label"}
 */
function resolveGroupKey(depth, mode, depthOverrides) {
    // URL override takes precedence
    if (depthOverrides && depthOverrides[depth]) {
        return depthOverrides[depth];
    }

    // Default behavior per mode
    if (mode === "dev-homepage") return "icon";
    if (mode === "dev-content") {
        return depth === 0 ? "content" : "accordion";
    }
    return "accordion";
}

/**
 * Renders a single NavTreeElement based on the element's type and the rendering mode.
 * @param {object} props
 * @param {"dev-homepage" | "dev-content" | "accordion"} props.mode
 * @param {string[] | null} props.depthOverrides
 */
export const NavTreeElement = forwardRef(({ element, depth = 0, mode, depthOverrides }, ref) => {
    const { type, title, link, icon, items, isActive, isActiveChild } = element;

    // Helper to render child elements (passed down to components that render children)
    const renderElement = (navElement, index, ref, childDepth) => (
        <NavTreeElement
            key={index}
            element={navElement}
            ref={ref}
            depth={childDepth}
            mode={mode}
            depthOverrides={depthOverrides}
        />
    );

    if (type === "separator") {
        return <HorizontalLine />;
    }

    if (type === "page") {
        return <PageLink title={title} link={link} isActive={isActive} ref={ref} depth={depth} />;
    }

    if (type === "group") {
        const groupKey = resolveGroupKey(depth, mode, depthOverrides);

        switch (groupKey) {
            case "icon":
                return <DevDocsHomepage title={title} link={link} icon={icon} items={items} />;

            case "content":
                // Only show active section on content pages
                if (!isActiveChild) {
                    return null;
                }
                return (
                    <DevDocsContent
                        isActiveChild={isActiveChild}
                        link={link}
                        icon={icon}
                        title={title}
                        subElements={items}
                        depth={depth}
                        ref={ref}
                        renderElement={renderElement}
                    />
                );

            case "label":
                return (
                    <SectionLabel
                        title={title}
                        subElements={items}
                        isActiveChild={isActiveChild}
                        ref={ref}
                        depth={depth}
                        renderElement={renderElement}
                    />
                );

            case "accordion":
            default:
                return (
                    <AccordionSection
                        depth={depth}
                        isActiveChild={isActiveChild}
                        title={title}
                        subElements={items}
                        ref={ref}
                        renderElement={renderElement}
                    />
                );
        }
    }

    return null;
});
