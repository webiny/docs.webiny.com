import Link from "next/link";

export const IconHeader = ({ link, title, menuIcon, isActive, isHomepage }) => {
    return (
        <li
            className={
                "root-element relative flex items-center cursor-pointer " +
                (isActive && !isHomepage
                    ? "h-[40px] mt-[-5px] mb-4"
                    : "h-[30px] mt-[10px] mb-[10px]")
            }
        >
            {link ? (
                <Link href={link}>
                    <div
                        className={
                            "flex justify-items-start text-dark-grey dark:text-light-grey dark:hover:text-orange hover:text-orange no-underline items-center group " +
                            (isActive ? "text-orange font-semibold" : "")
                        }
                    >
                        <div
                            className={
                                "flex duration-200 justify-self-center mr-2 w-[24px] h-[24px] rounded justify-center items-center group-hover:grayscale-0 group-hover:bg-light-orange dark:group-hover:bg-dark-orange" +
                                (isActive
                                    ? " bg-light-orange dark:bg-dark-orange"
                                    : " grayscale")
                            }
                        >
                            {menuIcon}
                        </div>
                        <span
                            className={
                                isActive
                                    ? "leading-5 mb-0 text-orange text-base font-semibold"
                                    : "leading-5 mb-0 text-sm font-base"
                            }
                        >
                            {title}
                        </span>
                    </div>
                </Link>
            ) : (
                title
            )}
        </li>
    );
};
