import React, { useState, useCallback } from "react";
import Lightbox from "react-image-lightbox";
import classNames from "classnames";

export default props => {
    const [isOpen, setState] = useState(false);
    const openLightbox = useCallback(() => {
        if (props.lightbox === false) {
            return;
        }

        setState(true);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px 0",
                flexDirection: "column"
            }}
        >
            <img
                onClick={openLightbox}
                style={{ display: "block", cursor: "pointer", margin: "auto", ...props.style }}
                className={classNames(props.className, {
                    ["no-shadow"]: props.shadow === false
                })}
                alt={props.alt || props.title}
                src={props.src}
            />
            {props.canEnlarge !== false && (
                <div
                    onClick={openLightbox}
                    style={{
                        textAlign: "center",
                        marginTop: 5,
                        fontSize: "80%",
                        color: "var(--ifm-toc-link-color)"
                    }}
                >
                    (click to enlarge)
                </div>
            )}
            {isOpen && (
                <Lightbox
                    mainSrc={props.src}
                    onCloseRequest={() => setState(false)}
                    imageTitle={props.title || props.alt}
                />
            )}
        </div>
    );
};
