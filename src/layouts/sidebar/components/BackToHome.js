import Link from "next/link";
import { useHomepage } from "@/hooks/useHomepage";

export const BackToHome = () => {
    const { homepageUrl } = useHomepage();

    return (
        <li>
            <Link href={homepageUrl}>
                <div className="flex gap-2 items-center cursor-pointer hover:text-orange mb-4 mt-2">
                    <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 9V8.3C9 6.61984 9 5.77976 8.67302 5.13803C8.3854 4.57354 7.92646 4.1146 7.36197 3.82698C6.72024 3.5 5.88016 3.5 4.2 3.5H1"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.5 6L1 3.5L3.5 1"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Back to home
                </div>
            </Link>
        </li>
    );
};
