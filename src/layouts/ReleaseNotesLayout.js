import { NonVersionedLayout } from "@/layouts/NonVersionedLayout";

export function Layout({ children }) {
    return (
        <NonVersionedLayout titleSuffix={" | Webiny Release Notes"}>{children}</NonVersionedLayout>
    );
}
