import { NonVersionedLayout } from "@/layouts/NonVersionedLayout";

export function Layout({ children }) {
    return <NonVersionedLayout titleSuffix={"Webiny Handbook"}>{children}</NonVersionedLayout>;
}
