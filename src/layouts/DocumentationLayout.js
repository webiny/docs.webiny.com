import { usePage } from "@/hooks/usePage";
import { SidebarLayout } from "@/layouts/SidebarLayout";
import { getParentNav } from "@/utils/getParentNav";
import { useRouter } from "next/router";

import { Title } from "@/components/Title";
import { navigation } from "@/navs/navigation";

export function DocumentationLayout(props) {
    let router = useRouter();
    const { version } = usePage();
    const versionNav = navigation[version] || [];
    const parents = getParentNav(versionNav);

    let parent = "";
    if (parents !== null) {
        parent = (parents[0] ? parents[0].title + " - " : "") + parents[1].title;
    }

    let suffix = router.pathname === "/" ? parent : parent + " | Webiny Docs";

    return (
        <>
            <Title suffix={suffix} />
            <SidebarLayout nav={versionNav} {...props} />
        </>
    );
}
