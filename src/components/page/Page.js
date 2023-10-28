import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "@/components/page/Header";
import { SearchProvider } from "@/components/page/Search";
import { usePage } from "@/hooks/usePage";
import { Title } from "@/components/Title";
import socialCardLarge from "@/img/webiny-social-share.jpg";

export const Page = () => {
    const { MdxPage, Layout, page } = usePage();
    const router = useRouter();

    const socialShareCard = page.shareCard
        ? `https://www.webiny.com/images/${page.shareCard}`
        : `https://www.webiny.com${socialCardLarge}`;

    return (
        <>
            <Title suffix="Webiny Docs">{page.title}</Title>
            <Head>
                <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
                <meta key="twitter:site" name="twitter:site" content="@WebinyCMS" />
                <meta
                    key="twitter:description"
                    name="twitter:description"
                    content={page.description}
                />
                <meta name="description" content={page.description} />
                <meta key="twitter:image" name="twitter:image" content={socialShareCard} />
                <meta key="twitter:creator" name="twitter:creator" content="@WebinyCMS" />
                <meta
                    key="og:url"
                    property="og:url"
                    content={`https://www.webiny.com${router.pathname}`}
                />
                <meta key="og:type" property="og:type" content="article" />
                <meta key="og:description" property="og:description" content={page.description} />
                <meta key="og:image" property="og:image" content={socialShareCard} />
                <meta name="docsearch:language" content="en" />
                <meta name="docsearch:version" content={page.docsearch.versions} />
                <meta name="docsearch:articleType" content={page.docsearch.type} />
                <meta name="docsearch:articleWeight" content={page.docsearch.weight} />
                {page.robots ? <meta name="robots" content={page.robots} /> : null}
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title="RSS 2.0"
                    href="/feeds/feed.xml"
                />
                <link
                    rel="alternate"
                    type="application/atom+xml"
                    title="Atom 1.0"
                    href="/feeds/atom.xml"
                />
                <link
                    rel="alternate"
                    type="application/json"
                    title="JSON Feed"
                    href="/feeds/feed.json"
                />
                {/* TODO: this is not generated anywhere?! */}
                {page.canonicalPath ? (
                    <link rel="canonical" href={"https://docs.webiny.com" + page.canonicalPath} />
                ) : null}
            </Head>
            <SearchProvider>
                <Header />
                <Layout>
                    <MdxPage />
                </Layout>
            </SearchProvider>
        </>
    );
};
