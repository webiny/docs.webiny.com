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
                display: "block",
                margin: "20px auto"
            }}
        >
            <img
                onClick={openLightbox}
                style={props.style || {}}
                className={classNames(props.className, { ["no-shadow"]: props.shadow === false })}
                alt={props.alt}
                title={props.title || props.alt}
                src={props.src}
            />
            {isOpen && (
                <Lightbox
                    mainSrc={props.src}
                    onCloseRequest={() => setState(false)}
                    imageTitle={props.title}
                    imageCaption={props.alt}
                />
            )}
        </div>
    );
};
