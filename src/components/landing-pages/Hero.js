import webinyLogo from './assets/webiny-logo.svg';

export const Hero = () => {
    return <section className="bg-white dark:bg-dark-theme">
        <div className="grid max-w-screen-xl p-2 md:px-4 md:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12 items-center">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl my-4 text-4xl md:text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white">
                    <span className="text-orange">Webiny</span> Documentation
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Learn how to install, use and customize Webiny through a set of guides and tutorials.
                </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-end">
                <img src={webinyLogo} alt="Webiny Logo" className="h-[150px] m-0" />
            </div>                
        </div>
    </section>
}