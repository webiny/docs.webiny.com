import { useRouter } from "next/router";
import { linkClick } from "./utils";

const ListItem = ({ label, Icon, link }) => {
    const router = useRouter();

    return (
        <li className="mb-4 last:mb-0">
            <a
                className="flex justify-items-start text-dark-grey dark:text-light-grey dark:hover:text-orange hover:text-orange no-underline items-center group"
                href={link}
                onClick={e => {
                    e.preventDefault();
                    linkClick(router, link);
                }}
            >
                <div className="flex duration-200 justify-self-center mr-2 w-[48px] h-[48px] rounded bg-light-grey-7 justify-center items-center grayscale group-hover:grayscale-0 group-hover:bg-light-orange dark:bg-dark-grey-2 dark:group-hover:bg-dark-orange">
                    <Icon />
                </div>
                <span className="leading-5 text-sm font-medium">{label}</span>
            </a>
        </li>
    );
};

export const FeatureList = ({ items }) => {
    return (
        <section className="bg-white dark:bg-dark-theme border-solid mb-10">
            <div className="grid max-w-screen-xl p-0 mx-auto lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12 items-center md:justify-items-center">
                <div className="mr-auto place-self-center lg:col-span-4 py-2 md:py-10 md:pr-5">
                    <span className="rounded-md text-[10px] text-orange font-bold bg-light-orange px-4 py-2 dark:bg-dark-orange">
                        FEATURES
                    </span>
                    <h3 className="max-w-2xl text-2l font-extrabold tracking-tight leading-none md:mb-1 md:mt-3 xl:text-2xl dark:text-white">
                        About <span className="text-orange">Webiny</span>
                    </h3>
                    <p className="max-w-2xl md:mt-0 text-light-grey-4 md:text-sm dark:text-light-grey">
                        Learn more about specific features
                    </p>
                </div>
                <div className="lg:mt-0 lg:col-span-4 lg:flex justify-end">
                    <ul className="list-none not-prose sm:mb-4 lg:mb-0 mt-0">
                        {items.map((item, index) => {
                            return (
                                index % 2 === 0 && (
                                    <ListItem
                                        key={index + "-" + item.link}
                                        label={item.label}
                                        link={item.link}
                                        Icon={item.icon}
                                    />
                                )
                            );
                        })}
                    </ul>
                </div>
                <div className="lg:mt-0 lg:col-span-4 lg:flex justify-end">
                    <ul className="list-none not-prose sm:mb-4 lg:mb-0 mt-0">
                        {items.map((item, index) => {
                            return (
                                index % 2 !== 0 && (
                                    <ListItem
                                        key={index + "-" + item.link}
                                        label={item.label}
                                        link={item.link}
                                        Icon={item.icon}
                                    />
                                )
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};
