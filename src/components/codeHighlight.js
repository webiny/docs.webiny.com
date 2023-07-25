import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";
import redent from "redent";

const HTML_TAG =
    /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/gi; // eslint-disable-line

const PSEUDO_CLASSES = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    "host",
    "host",
    "host-context",
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    "lang",
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    "nth-child",
    "nth-col",
    "nth-last-child",
    "nth-last-col",
    "nth-last-of-type",
    "nth-of-type",
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "picture-in-picture",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "state",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
];

const PSEUDO_CLASS_REGEX = new RegExp(`^::?(${PSEUDO_CLASSES.join("|")})`);

Prism.hooks.add("wrap", env => {
    if (env.type === "atrule") {
        const content = env.content.replace(HTML_TAG, "");
        if (content.startsWith("@apply")) {
            env.classes.push("atapply");
        }
    } else if (env.type === "pseudo-class") {
        if (!PSEUDO_CLASS_REGEX.test(env.content)) {
            env.classes = env.classes.filter(x => x !== "pseudo-class");
        }
    }
});

Prism.hooks.add("after-tokenize", ({ language, tokens }) => {
    if (language === "css") {
        fixSelectorEscapeTokens(tokens);
    }
});

function fixSelectorEscapeTokens(tokens) {
    for (let token of tokens) {
        if (typeof token === "string") continue;
        if (token.type !== "selector") continue;
        for (let i = 0; i < token.content.length; i++) {
            if (token.content[i] === "\\" && token.content[i - 1]?.type === "class") {
                token.content[i] = new Prism.Token("punctuation", token.content[i]);
                token.content[i + 1].type = "class";
            }
        }
    }
}

const reg1 = /^>/m;
const reg2 = /^[> ] /;
const reg3 = /(?:^[+\- ] |^[+-]$)/gm;

function hasLineHighlights(code) {
    if (!reg1.test(code)) {
        return false;
    }
    return code.split("\n").every(line => line === "" || reg2.test(line));
}

function stringify(line, className) {
    let empty = line.every(token => token.empty);

    if (!className && empty) {
        return "\n";
    }

    let commonTypes = [];
    for (let i = 0; i < line.length; i++) {
        let token = line[i];
        if (i === 0) {
            commonTypes.push(...token.types);
        } else {
            commonTypes = commonTypes.filter(type => token.types.includes(type));
        }
    }
    if (commonTypes.length) {
        for (let i = 0; i < line.length; i++) {
            let token = line[i];
            token.types = token.types.filter(type => !commonTypes.includes(type));
        }
    }

    const lineClassName = ["token", ...commonTypes, className].filter(Boolean).join(" ");

    if (empty) {
        return `<span class="${lineClassName}">\n</span>`;
    }

    return `<span class="${lineClassName}">${line
        .map(token =>
            token.types.length
                ? `<span class="token ${token.types.join(" ")}">${token.content}</span>`
                : token.content
        )
        .join("")}</span>`;
}

function highlightCode(code, prismLanguage) {
    const isDiff = prismLanguage.startsWith("diff-");
    const language = isDiff ? prismLanguage.substr(5) : prismLanguage;
    const grammar = Prism.languages[language];
    if (!grammar) {
        console.warn(`Unrecognised language: ${prismLanguage}`);
        return Prism.util.encode(code);
    }

    const addedLines = [];
    const removedLines = [];
    if (isDiff) {
        code = code.replace(reg3, (match, offset) => {
            let line = code.substr(0, offset).split("\n").length - 1;
            if (match.startsWith("+")) {
                addedLines.push(line);
            } else if (match.startsWith("-")) {
                removedLines.push(line);
            }
            return "";
        });
    }

    const highlightedLines = [];

    if (hasLineHighlights(code)) {
        let match;
        while ((match = reg1.exec(code)) !== null) {
            let line = code.substr(0, match.index).split("\n").length - 1;
            highlightedLines.push(line);
            code = code.substr(0, match.index) + " " + code.substr(match.index + 1);
        }
        code = redent(code);
    }

    if (isDiff || highlightedLines.length) {
        let lines = normalizeTokens(Prism.util.encode(Prism.tokenize(code, grammar)));

        if (isDiff) {
            code = lines
                .map((line, index) =>
                    stringify(
                        line,
                        `language-${language} ${
                            addedLines.includes(index)
                                ? "inserted"
                                : removedLines.includes(index)
                                ? "deleted"
                                : "unchanged"
                        }`
                    )
                )
                .join("");
        } else {
            code = lines
                .map((line, index) =>
                    stringify(
                        line,
                        `block${
                            highlightedLines.includes(index)
                                ? " -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"
                                : ""
                        }`
                    )
                )
                .join("");
        }
    } else {
        code = Prism.highlight(code, grammar, prismLanguage);
    }

    return language === "html"
        ? code.replace(
              /\*\*(.*?)\*\*/g,
              (_, text) => `<span class="code-highlight bg-code-highlight">${text}</span>`
          )
        : code;
}

// https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/utils/normalizeTokens.js

const newlineRe = /\r\n|\r|\n/;

// Empty lines need to contain a single empty token, denoted with { empty: true }
function normalizeEmptyLines(line) {
    if (line.length === 0) {
        line.push({
            types: ["plain"],
            content: "",
            empty: true
        });
    } else if (line.length === 1 && line[0].content === "") {
        line[0].empty = true;
    }
}

function appendTypes(types, add) {
    const typesSize = types.length;
    if (typesSize > 0 && types[typesSize - 1] === add) {
        return types;
    }

    return types.concat(add);
}

// Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become
function normalizeTokens(tokens) {
    const typeArrStack = [[]];
    const tokenArrStack = [tokens];
    const tokenArrIndexStack = [0];
    const tokenArrSizeStack = [tokens.length];

    let i = 0;
    let stackIndex = 0;
    let currentLine = [];

    const acc = [currentLine];

    while (stackIndex > -1) {
        while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
            let content;
            let types = typeArrStack[stackIndex];

            const tokenArr = tokenArrStack[stackIndex];
            const token = tokenArr[i];

            // Determine content and append type to types if necessary
            if (typeof token === "string") {
                types = stackIndex > 0 ? types : ["plain"];
                content = token;
            } else {
                types = appendTypes(types, token.type);
                if (token.alias) {
                    types = appendTypes(types, token.alias);
                }

                content = token.content;
            }

            // If token.content is an array, increase the stack depth and repeat this while-loop
            if (typeof content !== "string") {
                stackIndex++;
                typeArrStack.push(types);
                tokenArrStack.push(content);
                tokenArrIndexStack.push(0);
                tokenArrSizeStack.push(content.length);
                continue;
            }

            // Split by newlines
            const splitByNewlines = content.split(newlineRe);
            const newlineCount = splitByNewlines.length;

            currentLine.push({ types, content: splitByNewlines[0] });

            // Create a new line for each string on a new line
            for (let i = 1; i < newlineCount; i++) {
                normalizeEmptyLines(currentLine);
                acc.push((currentLine = []));
                currentLine.push({ types, content: splitByNewlines[i] });
            }
        }

        // Decrease the stack depth
        stackIndex--;
        typeArrStack.pop();
        tokenArrStack.pop();
        tokenArrIndexStack.pop();
        tokenArrSizeStack.pop();
    }

    normalizeEmptyLines(currentLine);
    return acc;
}

module.exports = {
    highlightCode
};
