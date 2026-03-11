import { SidebarLayout as SidebarLayoutComponent } from "./SidebarLayout";

export { SidebarLayout } from "./SidebarLayout";
export { SidebarContext } from "./SidebarContext";

export function VersionedSidebarLayout({ children }) {
    return <SidebarLayoutComponent showVersionSelector>{children}</SidebarLayoutComponent>;
}
