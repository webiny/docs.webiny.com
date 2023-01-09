import React, { useState, useCallback } from "react";
import Lightbox from "react-image-lightbox";
import classNames from "classnames";

export const Image = props => {
    const [isOpen, setState] = useState(false);

    const openLightbox = useCallback(() => {
        if (!props.canEnlarge === false) {
            return;
        }

        setState(true);
    }, [props.canEnlarge]);

    const imgStyle = {
        display: "block",
        cursor: props.canEnlarge !== false ? "pointer" : "initial",
        margin: "auto",
        ...props.style
    };

    return (
        <div className={"image-container"}>
            <img
                onClick={openLightbox}
                style={imgStyle}
                className={classNames(props.className, {
                    "no-shadow": props.shadow === false
                })}
                alt={props.alt || props.title}
                src={props.src}
            />
            <span className={"caption"}>{props.alt || props.title}</span>

            {props.canEnlarge !== false && (
                <>
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
                    {isOpen && (
                        <Lightbox
                            mainSrc={props.src}
                            onCloseRequest={() => setState(false)}
                            imageTitle={props.title || props.alt}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export const Gallery = props => {
  return <div className={"webiny-gallery"}>{props.children}</div>;
};
