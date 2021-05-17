import React from "react";
import { ThemeProvider } from "theme-ui";

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: "inherit",
        monospace: "Menlo, monospace"
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    colors: {
        text: "--theme-ui-colors-text",
        background: "--ifm-code-background",
        primary: "var(--ifm-color-primary)",
        secondary: "#30c",
        muted: "#969faf"
    },
    badges: {
        primary: {
            color: "background",
            bg: "primary"
        },
        outline: {
            color: "muted",
            bg: "transparent",
            boxShadow: "inset 0 0 0 1px"
        }
    },
    styles: {
        root: {
            fontFamily: "body",
            lineHeight: "body",
            fontWeight: "body"
        },
        h1: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 5
        },
        h2: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 4
        },
        h3: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 3
        },
        h4: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 2
        },
        h5: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 1
        },
        h6: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 0
        },
        p: {
            color: "text",
            fontFamily: "body",
            fontWeight: "body",
            lineHeight: "body"
        },
        a: {
            color: "primary"
        },
        pre: {
            fontFamily: "monospace",
            overflowX: "auto",
            code: {
                color: "inherit"
            }
        },
        code: {
            fontFamily: "monospace",
            fontSize: "inherit"
        },
        table: {
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0
        },
        th: {
            textAlign: "left",
            borderBottomStyle: "solid"
        },
        td: {
            textAlign: "left",
            borderBottomStyle: "solid"
        },
        img: {
            maxWidth: "100%"
        }
    }
};

export default props => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
