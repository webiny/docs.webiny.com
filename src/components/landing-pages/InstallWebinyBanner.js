import { useRouter } from "next/router";

export const InstallWebinyBanner = () => {
    const router = useRouter();

    return <section className="bg-white dark:bg-dark-theme border-solid border border-light-grey rounded-xl p-2 dark:border-dark-grey-2 my-10">
        <div className="grid max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12 items-center border-light-grey rounded-xl bg-gradient-to-b from-light-grey-6 to-white dark:from-dark-grey-5 to-black">
            <div className="mr-auto place-self-center lg:col-span-8 md:my-6">
                <h2 className="max-w-2xl mb-4 md:my-0 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">
                    New to <span className="text-orange">Webiny</span>?
                </h2>
                <p className="max-w-2xl mb-6 text-light-grey-4 md:text-md md:mb-0 lg:text-md dark:text-light-grey">
                    The getting started guide will help you setup your environment, create and then deploy your first Webiny project.
                </p>
            </div>
            <div className="lg:mt-0 lg:col-span-4 lg:flex justify-end">
                <a 
                    href="/docs/get-started/install-webiny"
                    onClick={(e) => {e.preventDefault(); router.push("/docs/get-started/install-webiny")}}
                    className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-orange rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:text-white">
                        Get Started
                </a>
            </div>
        </div>
    </section>
}