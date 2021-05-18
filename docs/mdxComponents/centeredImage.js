import React from "react";

export default props => (
    <img
        style={{
            display: "block",
            margin: "20px auto",
            ...(props.style || {})
        }}
        className={props.className}
        alt={props.alt}
        title={props.title || props.alt}
        src={props.src}
    />
);
