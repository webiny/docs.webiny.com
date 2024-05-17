import React from "react";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/mdxComponents";
import { Footer } from "@/components/page/Footer";
import { PageHeader } from "@/components/page/PageHeader";
import { TableOfContents, TableOfContentsProvider } from "@/components/page/TableOfContents";
import { SourceFile } from "@/components/SourceFile";
import { usePage } from "@/hooks/usePage";
import { usePrevNext } from "@/hooks/usePrevNext";
import { SidebarLayout } from "@/layouts/SidebarLayout";
import { Title } from "@/components/Title";

export function NonVersionedLayout({ titleSuffix, children }) {
    const { page } = usePage();
    const { prev, next } = usePrevNext();

    return (
        <>
            <Title suffix={titleSuffix} />
            <SidebarLayout nav={page.navigation}>
                <TableOfContentsProvider tableOfContents={page.tableOfContents}>
                <div className={"container max-w-3xl mx-auto mt-[5.25rem] md:mt-[5.875rem] mb-[1.875rem] md:mb-[3.75rem] xl:pt-10 xl:max-w-[100%] xl:mr-0 xl:w-[calc("+(page.fullWidth ? '100%' : '100%-245px')+")] xl:ml-0 xl:px-10 xl:border 2xl:max-w-["+(page.fullWidth ? '100%' : '53.6875rem')+"] border-neutral-200 dark:border-dark-grey rounded-[0.625rem]"}>
                        <article className={"DocSearch-content prose md:prose-md prose-slate"}>
                            {page.showPageHeader ? (
                                <PageHeader
                                    title={page.title}
                                    description={page.description}
                                    breadcrumbs={page.breadcrumbs}
                                />
                            ) : null}
                            <div className={"relative z-20 mt-8 dark:prose-dark"}>
                                <MDXProvider components={mdxComponents}>{children}</MDXProvider>
                            </div>
                            <SourceFile />
                        </article>

                        <Footer previous={prev} next={next}>
                            <Link href={`https://github.com/webiny/docs.webiny.com`} legacyBehavior>
                                <a className="hover:text-slate-900 dark:hover:text-slate-400">
                                    Edit this page on GitHub
                                </a>
                            </Link>
                            <SourceFile />
                        </Footer>

                        {page.tableOfContents.length > 0 && <TableOfContents />}
                    </div>
                </TableOfContentsProvider>
            </SidebarLayout>
        </>
    );
}
