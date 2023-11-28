export function useEnvironment() {
    const isDevelopment = process && process.env.NODE_ENV === "development";
    return { isDevelopment };
}
