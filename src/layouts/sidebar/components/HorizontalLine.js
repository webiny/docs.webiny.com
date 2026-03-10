import { useRouter } from "next/router";
import { useHomepage } from "@/hooks/useHomepage";

export const HorizontalLine = () => {
    const router = useRouter();
    const { homepageUrl } = useHomepage();
    const showFullMenu = router.pathname === homepageUrl;

    if (!showFullMenu) {
        return null;
    }

    return (
        <div className="pr-[10px] my-[20px]">
            <div className="border-b-[1px] border-neutral-200 dark:border-dark-grey-2 w-full -ml-[10px]"></div>
        </div>
    );
};
