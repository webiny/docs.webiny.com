import { HandbookArticle } from "@/layouts/HandbookArticle";
import { SidebarLayout } from "@/layouts/SidebarLayout";
import { useRouter } from "next/router";
import { usePage } from "@/hooks/usePage";
import { getParentNav } from "@/utils/getParentNav";
import { Title } from "@/components/Title";

export function Layout({ children }) {
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
            <SidebarLayout nav={page.navigation}>
                <HandbookArticle>{children}</HandbookArticle>
            </SidebarLayout>
        </>
    );
}
