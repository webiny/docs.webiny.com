import { SidebarLayout } from "@/layouts/SidebarLayout";
import { getParentNav } from "@/utils/getParentNav";
import { useRouter } from "next/router";

import { Title } from "@/components/Title";
import { documentationNav } from "@/navs/documentation";

export function DocumentationLayout(props) {
    let router = useRouter();

    const parents = getParentNav(props.layoutProps.Layout.nav);

    let parent = "";
    if (parents !== null) {
        parent = (parents[0] ? parents[0].title + " - " : "") + parents[1].title;
    }

    let suffix = router.pathname === "/" ? parent : parent + " | Webiny Docs";

    return (
        <>
            <Title
                suffix={suffix}
                title={props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}
                description={props.layoutProps.description}
            />
            <SidebarLayout nav={documentationNav} {...props} />
        </>
    );
}

DocumentationLayout.nav = documentationNav;
