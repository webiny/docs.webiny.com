export const SymbolList = ({ symbols }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                columnGap: "8px",
                rowGap: "1px",
                margin: "-10px 0 12px"
            }}
        >
            {symbols.map(({ name, anchor }) => (
                <a
                    key={name}
                    href={`#${anchor}`}
                    style={{
                        marginTop: 10,
                        display: "inline-block",
                        borderRadius: "4px",
                        border: "1px solid #e97132",
                        background: "rgba(233, 113, 50, 0.1)",
                        padding: "3px 10px",
                        fontSize: "13px",
                        fontFamily: "monospace",
                        color: "#e97132",
                        textDecoration: "none"
                    }}
                >
                    {name}
                </a>
            ))}
        </div>
    );
};
