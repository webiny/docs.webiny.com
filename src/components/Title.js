import { usePage } from "@/hooks/usePage";
import Head from "next/head";

export function Title({ suffix }) {
    const { page } = usePage();
    let titleWithSuffix = page.title + (suffix.trim().startsWith("|") ? "" : " - ") + suffix;

    return (
        <Head>
            <title key="title">{titleWithSuffix}</title>
            <meta key="twitter:title" name="twitter:title" content={titleWithSuffix} />
            <meta key="og:title" property="og:title" content={titleWithSuffix} />
        </Head>
    );
}
