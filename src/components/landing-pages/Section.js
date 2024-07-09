import {useRouter} from "next/router";
import {linkClick} from './utils';

export const Section = ({children}) => {
    return <section className="bg-white dark:bg-dark-theme border-solid mb-8">{children}</section>
}

export const SectionTitle = ({title, subText, categoryTitle}) => {

    return <div className="px-0 mt-8 mx-auto lg:py-2">
            <div className="mr-auto">
                <span className="rounded-md text-[10px] text-orange font-bold bg-light-orange px-4 py-2 dark:bg-dark-orange uppercase">{categoryTitle}</span>
                <h3 className="max-w-2xl text-2l font-extrabold tracking-tight leading-none md:mb-1 md:mt-3 xl:text-2xl dark:text-white">
                    {title}
                </h3>
                <p className="max-w-2xl mb-6 md:mt-0 text-light-grey-4 lg:mb-8 md:text-sm dark:text-light-grey">
                    {subText}
                </p>
            </div>
        </div>
}

export const SectionRow = ({children}) => {
    return <div className="flex flex-col sm:flex-row gap-x-6 m-0">
        {children}
    </div>
}

export const SectionBox = ({Icon=null, title, children, learnMoreLink})=> {
    const router = useRouter();
    return <div 
                className="flex-1 group bg-white dark:bg-dark-theme border-solid border border-light-grey rounded-xl p-2 dark:border-dark-grey-2 mb-8 md:mb-6"
                onClick={()=>{linkClick(router, learnMoreLink)}}
            >
        <div className="p-2 mx-auto lg:py-2 items-center border-light-grey rounded-xl bg-gradient-to-b from-light-grey-6 to-white dark:from-dark-grey-5 to-black">
            <div className="mr-auto md:m-2 cursor-pointer">
                {Icon && <div className="flex duration-200 mb-2 w-[48px] h-[48px] rounded bg-light-grey-7 justify-center items-center grayscale group-hover:grayscale-0 group-hover:bg-light-orange dark:bg-dark-grey-2 dark:group-hover:bg-dark-orange">
                    <Icon/>
                </div>
                }
                <h4 className="md:my-0 md:mb-2 md:text-base font-bold md:leading-6 leading-none dark:text-white">
                    {title}
                </h4>
                <div className="md:mt-0 not-prose text-light-grey-4 md:text-[0.8rem] leading-5 dark:text-light-grey">
                    {children}
                </div>
                {learnMoreLink && <div className="md:mt-4 not-prose text-orange dark:text-orange group-hover:underline font-semibold md:text-xs dark:text-light-grey-6">
                    <a href={learnMoreLink} className="pointer-events-none">Learn more →</a>
                </div>
                }
            </div>
        </div>
    </div>
}