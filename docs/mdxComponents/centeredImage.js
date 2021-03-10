import React from "react";

export default props => (
    <img
        style={{
            display: "block",
            margin: "20px auto",
            ...(props.style || {})
        }}
        alt={props.alt}
        title={props.title || props.alt}
        src={props.src}
    />
);
