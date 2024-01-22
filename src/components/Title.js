import { usePage } from "@/hooks/usePage";
import Head from "next/head";

export function Title({ suffix }) {
    const { page } = usePage();
    const version = page.version && !page.isLatest ? page.version : undefined;
    const breadcrumbs = [...page.breadcrumbs].reverse();
    const parts = [page.title, ...breadcrumbs, version, suffix];
    const titleWithSuffix = parts.filter(Boolean).join(" | ");

    return (
        <Head>
            <title key="title">{titleWithSuffix}</title>
            <meta key="twitter:title" name="twitter:title" content={titleWithSuffix} />
            <meta key="og:title" property="og:title" content={titleWithSuffix} />
        </Head>
    );
}
