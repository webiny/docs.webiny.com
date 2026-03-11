import { useRouter } from "next/router";
import { useHomepage } from "@/hooks/useHomepage";
import { IconHeader } from "./IconHeader";

export const DevDocsHomepage = ({ title, link, icon, items }) => {
    const router = useRouter();
    const { homepageUrl } = useHomepage();
    const menuIcon = icon ? <img src={icon} title={title} alt="" /> : null;

    // If the group links to the homepage itself, use the first child page instead
    // so clicking navigates into the section rather than reloading the homepage.
    let effectiveLink = link;
    if (link === homepageUrl && items && items.length > 0) {
        const firstPage = items.find(item => item.type === "page");
        if (firstPage) {
            effectiveLink = firstPage.link;
        }
    }

    const applyActiveClass = router.pathname === link;

    return (
        <IconHeader
            link={effectiveLink}
            title={title}
            menuIcon={menuIcon}
            isActive={applyActiveClass}
            isHomepage={true}
        />
    );
};
