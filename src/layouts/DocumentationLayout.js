import { DocumentationArticle } from "@/layouts/DocumentationArticle";
import { useRouter } from "next/router";
import { usePage } from "@/hooks/usePage";
import { VersionedSidebarLayout } from "@/layouts/SidebarLayout";
import { getParentNav } from "@/utils/getParentNav";
import { Title } from "@/components/Title";

export function Layout({ children, ...props }) {
    let router = useRouter();
    const { page } = usePage();

    const parents = getParentNav(page.navigation);

    // TODO: verify this is working
    let parent = "";
    if (parents !== null) {
        parent = (parents[0] ? parents[0].title + " - " : "") + parents[1].title;
    }

    let suffix = router.pathname === "/" ? parent : parent + " | Webiny Docs";

    return (
        <>
            <Title suffix={suffix} />
            <VersionedSidebarLayout nav={page.navigation} {...props}>
                <DocumentationArticle>{children}</DocumentationArticle>
            </VersionedSidebarLayout>
        </>
    );
}
