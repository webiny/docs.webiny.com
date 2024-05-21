const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
    experimental: {
        optimizeUniversalDefaults: true
    },
    content: ["./src/**/*.{js,jsx,mdx,html}", "./remark/**/*.js"],
    darkMode: "class",
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
            "3xl": "1536px"
        },
        extend: {
            colors: {
                "dark-blue": "#334155",
                "dark-theme": "#1F2227",
                gray: "#000E1A",
                blue: "#01579B",
                nordic: "#002D39",
                orange: "#FA5A28",
                "light-orange": "#FEEEE9",
                "dark-orange": "#352827",
                burgundy: "#D14343",
                purple: "#F3F6FF",
                "dark-grey": "#4E4E4E",
                "dark-grey-2": "#33363B",
                "dark-grey-3": "#1F2227",
                "dark-grey-4": "#2A2C31",
                "dark-grey-5": '#25282E',
                "light-grey": "#CBCBCB",
                "light-grey-2": "#959595",
                "light-grey-3": "#6D738A",
                "light-grey-4": "#798099",
                "light-grey-5": "#8F9093",
                "light-grey-6": "#FAFAFA",
                "light-grey-7": "#EFEFEF",
                "dark-purple": "#696F8C",
                "dark-theme-purple": "#003762",
                "blue-icon": "#3366FF",
                green: "#DFF1F1",
                "dark-theme-green": "#007044",
                "green-icon": "#52BD94",
                yellow: "#FFFAF1",
                "dark-theme-yellow": "#935F00",
                "yellow-icon": "#FFB020",
                peach: "#FCE8E6",
                "dark-theme-peach": "#490000",
                smoke: "#F8F8F8",
                border: "#E5E5E5",
                white: "#ffffff",
                black: "#000000",
                code: {
                    filename: "#D9DAE1",
                    bar: "#434468",
                    tab: "#7979f7",
                    highlight: "rgb(125 211 252 / 0.1)"
                }
            },
            typography: theme => ({
                DEFAULT: {
                    css: {
                        maxWidth: "none",
                        color: "#334155",
                        fontSize: "16px",
                        overflowWrap: "break-word",
                        hr: {
                            borderColor: "#E5E5E5",
                            marginTop: "3em",
                            marginBottom: "3em"
                        },
                        "h1, h2, h3, h4": {
                            fontWeight: 700,
                            marginTop: "1.875rem"
                        },
                        h1: {
                            fontSize: "2.125rem",
                            lineHeight: "2.5rem"
                        },
                        h2: {
                            fontSize: "1.75rem",
                            lineHeight: "2.0625rem"
                        },
                        h3: {
                            fontSize: "1.5rem",
                            lineHeight: "1.75rem"
                        },
                        h4: {
                            fontSize: "1.375rem",
                            lineHeight: "1.625rem"
                        },
                        h5: {
                            fontWeight: 700,
                            fontSize: "1rem",
                        },
                        "h1 *, h2 *, h3 *, h4 *": {
                            fontSize: "inherit !important"
                        },
                        p: {
                            fontSize: "0.875rem",
                            lineHeight: "1.75rem",
                            marginTop: "1.25rem"
                        },
                        ul: {
                            listStyleType: "none",
                            paddingLeft: 0,
                            marginBottom: "1.3em",
                            marginTop: "1.3em"
                        },
                        "li > ul": {
                            marginBottom: "0em",
                            marginTop: "0em"
                        },
                        "ul > li": {
                            position: "relative",
                            fontSize: "1rem",
                            lineHeight: "2.25rem",
                            paddingLeft: "1.5em",
                            marginBottom: "0em",
                            marginTop: "0em"
                        },
                        "ul > li::before": {
                            content: '""',
                            width: "0.63em",
                            height: "0.125em",
                            position: "absolute",
                            top: "1em",
                            left: 0,
                            borderRadius: "999px",
                            backgroundColor: "#FA5A28"
                        },
                        "diagram-letter": {
                            background: "#000000",
                            borderRadius: "50%",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "11px",
                            width: "20px",
                            height: "20px",
                            textAlign: "center",
                            display: "inline-block",
                            verticalAlign: "middle",
                            textTransform: "uppercase",
                            lineHeight: "20px"
                        },
                        ".success-box li::before": {
                            backgroundColor: "#52BD94"
                        },
                        ".info-box li::before": {
                            backgroundColor: "#01579B"
                        },
                        ".warning-box li::before": {
                            backgroundColor: "#FFB020"
                        },
                        ".danger-box li::before": {
                            backgroundColor: "#D14343"
                        },
                        ol: {
                            counterReset: "cupcake calc(var(--start) - 1)",
                            paddingLeft: "27px",
                            marginBottom: "20px",
                            marginTop: "20px"
                        },
                        "ol > li": {
                            counterIncrement: "cupcake",
                            listStyle: "none",
                            position: "relative"
                        },
                        "ol>li::before": {
                            content: "counter(cupcake)",
                            backgroundColor: "#fff",
                            position: "absolute",
                            color: "#000",
                            border: "1px solid #E5E5E5",
                            padding: "1px 7px 0px 8px",
                            borderRadius: "999px",
                            left: "-2.3em",
                            top: "0.2em",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "12px"
                        },
                        a: {
                            color: "#FA5A28",
                            textDecoration: "none",
                            borderBottom: `1px solid #FA5A28`,
                            fontSize: "0.875rem",
                            lineHeight: "1.75rem"
                        },
                        "a:hover": {
                            borderBottomWidth: "2px"
                        },
                        "a code": {
                            color: "inherit",
                            fontWeight: "inherit",
                            textDecoration: "underline"
                        },
                        strong: {
                            color: theme("colors.slate.900"),
                            fontWeight: theme("fontWeight.bold")
                        },
                        "a strong": {
                            color: "inherit",
                            fontWeight: "inherit"
                        },
                        code: {
                            fontWeight: theme("fontWeight.medium"),
                            fontVariantLigatures: "none",
                            fontFamily: "Source Code Pro, monospace",
                            color: "#FA5A28",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            paddingLeft: "0.625rem",
                            paddingRight: "0.625rem",
                            borderRadius: "0.25rem",
                            boxShadow: "inset 0 0 0 1px #E8E8E8",
                            backgroundColor: "#F8F8F8"
                        },
                        "code::before": {
                            content: "none"
                        },
                        "code::after": {
                            content: "none"
                        },
                        pre: {
                            color: theme("colors.slate.50"),
                            borderRadius: theme("borderRadius.xl"),
                            padding: theme("padding.5"),
                            boxShadow: theme("boxShadow.md"),
                            display: "flex",
                            marginTop: `${20 / 14}em`,
                            marginBottom: `${32 / 14}em`
                        },
                        "p + pre": {
                            marginTop: `${-4 / 14}em`
                        },
                        "pre + pre": {
                            marginTop: `${-16 / 14}em`
                        },
                        "pre code": {
                            flex: "none",
                            minWidth: "100%",
                            boxShadow: "none",
                            fontFamily: "Source Code Pro, monospace"
                        },
                        table: {
                            fontSize: theme("fontSize.sm")[0],
                            lineHeight: "2rem",
                            display: "block",
                            overflowX: "auto"
                        },
                        thead: {
                            color: theme("colors.slate.700"),
                            borderBottomColor: theme("colors.slate.200")
                        },
                        "thead th": {
                            paddingTop: 0,
                            fontWeight: theme("fontWeight.semibold")
                        },
                        "tbody tr": {
                            borderBottomColor: theme("colors.slate.100")
                        },
                        "tbody tr:last-child": {
                            borderBottomWidth: "1px"
                        },
                        "tbody code": {
                            fontSize: theme("fontSize.xs")[0]
                        },
                        figure: {
                            padding: "0.875rem",
                            borderRadius: "0.625rem",
                            backgroundColor: "#F8F8F8"
                        },
                        "figure > img": {
                            margin: 0
                        },
                        "figure figcaption": {
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "0.875rem",
                            lineHeight: "1.625rem",
                            textAlign: "center",
                            marginTop: "0.625rem",
                            color: "#6F7886"
                        }
                    }
                },
                dark: {
                    css: {
                        color: theme("colors.white"),
                        "h1, h2, h3, h4, thead th": {
                            color: theme("colors.white")
                        },
                        "h2 small, h3 small, h4 small": {
                            color: "#FFF"
                        },
                        code: {
                            color: theme("colors.slate.200"),
                            boxShadow: "none",
                            backgroundColor: theme("colors.dark-grey")
                        },
                        blockquote: {
                            color: theme("colors.white")
                        },
                        pre: {
                            boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.1)",
                            code: {
                                backgroundColor: "transparent"
                            }
                        },
                        ".success-box li::before": {
                            backgroundColor: "#FFF"
                        },
                        ".info-box li::before": {
                            backgroundColor: "#FFF"
                        },
                        ".warning-box li::before": {
                            backgroundColor: "#FFF"
                        },
                        ".danger-box li::before": {
                            backgroundColor: "#FFF"
                        },
                        a: {
                            color: "#FA5A28",
                            borderBottomColor: "#FA5A28"
                        },
                        strong: {
                            color: theme("colors.slate.200")
                        },
                        thead: {
                            color: theme("colors.slate.300"),
                            borderBottomColor: "rgb(148 163 184 / 0.2)"
                        },
                        "tbody tr": {
                            borderBottomColor: "rgb(148 163 184 / 0.1)"
                        },
                        figure: {
                            backgroundColor: "#33363B"
                        },
                        "figure figcaption": {
                            color: "#C1C2C4"
                        }
                    }
                },
                md: {
                    css: {
                        "h1, h2, h3, h4": {
                            fontWeight: 700,
                            marginTop: "3.75rem"
                        },
                        h1: {
                            fontSize: "2.8rem",
                            lineHeight: "3.5rem",
                            marginTop: "0"
                        },
                        h2: {
                            fontSize: "2.25rem",
                            lineHeight: "2.625rem"
                        },
                        h3: {
                            fontSize: "1.5rem",
                            lineHeight: "2.375rem"
                        },
                        h4: {
                            fontSize: "1.25rem",
                            lineHeight: "2.0625rem"
                        },
                        "h1 *, h2 *, h3 *, h4 *": {
                            fontSize: "inherit !important"
                        },
                        p: {
                            fontSize: "1rem",
                            lineHeight: "1.75rem",
                            marginTop: "1.25rem"
                        },
                        a: {
                            fontSize: "1rem",
                            lineHeight: "1.75rem",
                            marginTop: "1.25rem"
                        },
                        figure: {
                            paddingTop: "1.875rem",
                            paddingBottom: "1.875rem",
                            paddingLeft: "3rem",
                            paddingRight: "3rem"
                        },
                        "figure figcaption": {
                            marginTop: "0.75rem"
                        }
                    }
                }
            }),
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                "source-sans-pro": ["Source Sans Pro", "sans-serif"]
            },
            fontSize: {
                "nav-directory": [
                    "1rem",
                    {
                        lineHeight: "1.3125rem"
                    }
                ],
                "nav-subdirectory": [
                    "0.85rem",
                    {
                        lineHeight: "1.1875rem",
                        fontWeight: 500
                    }
                ],
                "nav-link": [
                    "0.875rem",
                    {
                        lineHeight: "1rem"
                    }
                ],
                "button-text": [
                    "0.875rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                "sidebar-right-title": [
                    "1rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                "burger-menu-link": [
                    "0.75rem",
                    {
                        lineHeight: "1.625rem"
                    }
                ]
            },
            spacing: {
                18: "4.5rem",
                full: "100%"
            },
            maxWidth: {
                "8xl": "90rem"
            }
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
        function ({ addVariant }) {
            addVariant("children", "& > *");
        },
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    highlight: value => ({ boxShadow: `inset 0 1px 0 0 ${value}` })
                },
                { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
            );
        }
    ]
};
