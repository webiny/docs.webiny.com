import { VersionedLayout } from "@/layouts/VersionedLayout";

export function Layout({ children, ...props }) {
    return (
        <VersionedLayout titleSuffix={" | Webiny Docs"} {...props}>
            {children}
        </VersionedLayout>
    );
}
