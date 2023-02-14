import { mdxComponents } from "@/components/mdxComponents";
import { usePage } from "@/hooks/usePage";
import { VersionSelector } from "@/components/page/VersionSelector";
import { ViewLatestVersion } from "@/components/page/ViewLatestVersion";
import { PageHeader } from "@/components/page/PageHeader";
import { MDXProvider } from "@mdx-js/react";

export function PageLayout({ children }) {
    const { page } = usePage();

    return (
        <div className="container max-w-3xl mx-auto mt-[5.25rem] md:mt-[5.875rem] mb-[1.875rem] md:mb-[3.75rem] xl:pt-10 xl:max-w-[100%] xl:mr-0 xl:w-[calc(100%-245px)] xl:ml-0 xl:px-10 xl:border 2xl:max-w-[53.6875rem] border-neutral-200 dark:border-dark-grey rounded-[0.625rem]">
            <div className={"flex lg:hidden w-full pb-5"}>
                <VersionSelector />
            </div>
            <article className={"prose md:prose-md prose-slate"}>
                <ViewLatestVersion />
              <PageHeader title={page.title} description={page.description} />
                <div className={"relative z-20 mt-8 dark:prose-dark pb-10"}>
                    <MDXProvider components={mdxComponents}>{children}</MDXProvider>
                </div>
            </article>
        </div>
    );
}
