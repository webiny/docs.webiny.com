import React, { useState, useCallback } from "react";
import Lightbox from "react-image-lightbox";
import classNames from "classnames";

export default props => {
    const [isOpen, setState] = useState(false);

    const openLightbox = useCallback(() => {
        if (props.lightbox === false) {
            // return;
        }

        setState(true);
    }, []);

    return (
        <div className={"image-container"}>
            <img
                onClick={openLightbox}
                style={{ display: "block", cursor: "pointer", margin: "auto", ...props.style }}
                className={classNames(props.className, {
                    ["no-shadow"]: props.shadow === false
                })}
                alt={props.alt || props.title}
                src={props.src}
            />
            <span className={"caption"}>{props.alt || props.title}</span>

            {props.canEnlarge !== false && (
                <div
                    onClick={openLightbox}
                    style={{
                        textAlign: "center",
                        fontSize: "70%",
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
