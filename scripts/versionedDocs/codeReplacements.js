import { latestVersion } from "../detectVersions";

export const codeReplacements = version => {
    return [
        {
            find: "/{version}/",
            replaceWith: version === "latest" ? "/" : `/${version}/`
        },
        {
            find: /\{exact:(.+?)\}\//g,
            replaceWith: (match, p1) => {
                return p1 !== latestVersion ? `${p1}/` : "";
            }
        }
    ];
};
