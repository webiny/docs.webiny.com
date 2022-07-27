import React from "react";

export const Video = ({ src, type = "video/mp4", controls = false }) => {
    return (
        <video autoPlay muted loop controls={controls}>
            <source src={src} type={type} />
        </video>
    );
};
