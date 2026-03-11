import { useNavigation } from "@/components/page/Navigation";
import { VersionSelector } from "@/components/page/VersionSelector";
import { usePage } from "@/hooks/usePage";
import { SearchButton } from "@/components/page/Search";
import { scroll } from "@/css/scroll.module.css";
import { SidebarContext } from "./SidebarContext";
import { Nav } from "./Nav";
import { MobileDrawer } from "./MobileDrawer";

function Wrapper({ allowOverflow, children }) {
    return <div className={allowOverflow ? undefined : "overflow-hidden"}>{children}</div>;
}

export function SidebarLayout({ children, showVersionSelector = false }) {
    const navigation = useNavigation();
    const { page } = usePage();
    const nav = page.navigation;

    return (
        <SidebarContext.Provider value={{ nav }}>
            <Wrapper allowOverflow={true}>
                <div className="max-w-[96.993rem] 3xl:max-w-[104rem] mx-auto pl-4 sm:pl-6 md:pl-8 3xl:pl-[5.43rem] pr-4 sm:pr-6 md:pr-8">
                    <div
                        className={`hidden lg:block fixed z-20 inset-0 top-[4.15rem] right-auto w-[20.875rem] pb-10 pl-[18px] overflow-y-auto border-r border-neutral-200 dark:border-[#36383a] ${scroll}`}
                    >
                        {showVersionSelector && (
                            <div className={"flex w-full pt-5 pr-5 pb-1"}>
                                <VersionSelector />
                            </div>
                        )}
                        <SearchButton />
                        <Nav nav={nav} />
                    </div>
                    <div className="lg:pl-[20.875rem]">{children}</div>
                </div>
            </Wrapper>
            <MobileDrawer
                isOpen={navigation.isOpen}
                onClose={navigation.closeNavigation}
                nav={nav}
            />
        </SidebarContext.Provider>
    );
}
