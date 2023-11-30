import { Alert } from "@/components/Alert";
import { useEnvironment } from "@/hooks/useEnvironment";
import { usePage } from "@/hooks/usePage";

export const SourceFile = () => {
    const { isDevelopment } = useEnvironment();
    const { page } = usePage();

    if (!isDevelopment) {
        return null;
    }

    return (
        <Alert type={"warning"} title={"Development Mode Only"}>
            Source file: <strong>{page.sourceFile}</strong>
        </Alert>
    );
};
