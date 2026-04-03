import { useRouter } from "next/router";
import { useHomepage } from "@/hooks/useHomepage";

export const HorizontalLine = ({ visible, title }) => {
    const router = useRouter();
    const { homepageUrl } = useHomepage();
    const showFullMenu = visible || router.pathname === homepageUrl;

    if (!showFullMenu) {
        return null;
    }

    if (title) {
        return (
            <div className="pr-[10px] mt-[24px] mb-[12px]">
                <span className="uppercase text-[11px] font-semibold tracking-wider text-neutral-400 dark:text-neutral-500">
                    {title}
                </span>
            </div>
        );
    }

    return (
        <div className="pr-[10px] my-[20px]">
            <div className="border-b-[1px] border-neutral-200 dark:border-dark-grey-2 w-full -ml-[10px]"></div>
        </div>
    );
};
