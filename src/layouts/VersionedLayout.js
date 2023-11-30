import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import { mdxComponents } from "@/components/mdxComponents";
import { Footer } from "@/components/page/Footer";
import { SourceFile } from "@/components/SourceFile";
import { PageHeader } from "@/components/page/PageHeader";
import { TableOfContents, TableOfContentsProvider } from "@/components/page/TableOfContents";
import { VersionSelector } from "@/components/page/VersionSelector";
import { ViewLatestVersion } from "@/components/page/ViewLatestVersion";
import { Title } from "@/components/Title";
import { usePage } from "@/hooks/usePage";
import { usePrevNext } from "@/hooks/usePrevNext";
import { VersionedSidebarLayout } from "@/layouts/SidebarLayout";

export function VersionedLayout({ titleSuffix, children, ...props }) {
    const { page } = usePage();
    const { prev, next } = usePrevNext();

    return (
        <>
            <Title suffix={titleSuffix} />
            <VersionedSidebarLayout nav={page.navigation} {...props}>
                <TableOfContentsProvider tableOfContents={page.tableOfContents}>
                    <div className="container max-w-3xl mx-auto mt-[5.25rem] md:mt-[5.875rem] mb-[1.875rem] md:mb-[3.75rem] xl:pt-10 xl:max-w-[100%] xl:mr-0 xl:w-[calc(100%-245px)] xl:ml-0 xl:px-10 xl:border 2xl:max-w-[53.6875rem] border-neutral-200 dark:border-dark-grey rounded-[0.625rem]">
                        <div className={"flex lg:hidden w-full pb-5"}>
                            <VersionSelector />
                        </div>
                        <article className={"DocSearch-content prose md:prose-md prose-slate"}>
                            <ViewLatestVersion />
                            <PageHeader title={page.title} description={page.description} />
                            <div className={"relative z-20 mt-8 dark:prose-dark"}>
                                <MDXProvider components={mdxComponents}>{children}</MDXProvider>
                            </div>

                            <SourceFile />
                        </article>

                        <Footer previous={prev} next={next}>
                            <Link href={`https://github.com/webiny/docs.webiny.com`}>
                                <a className="hover:text-slate-900 dark:hover:text-slate-400">
                                    Edit this page on GitHub
                                </a>
                            </Link>
                        </Footer>

                        {page.tableOfContents.length > 0 && <TableOfContents />}
                    </div>
                </TableOfContentsProvider>
            </VersionedSidebarLayout>
        </>
    );
}
