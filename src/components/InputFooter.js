import React, { useState, useRef } from "react";
import clsx from "clsx";
import { inputFooterButton, inputFooterInput, inputFooterForm } from "./InputFooter.module.css";

export function InputFooter({ className }) {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const inputRef = useRef(null);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                fetch(
                    "https://app.mailerlite.com/webforms/submit/g9f1i1?fields%5Bemail%5D=" +
                        encodeURIComponent(inputRef.current.value) +
                        "&ml-submit=1&ajax=1",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                );

                setIsFormSubmitted(true);
                inputRef.current.value = "Thanks, you're on the list!";
            }}
            className={clsx(inputFooterForm, className)}
        >
            <button type="Submit" disabled={isFormSubmitted} className={inputFooterButton}></button>
            <input
                ref={inputRef}
                disabled={isFormSubmitted}
                id="email"
                name="email"
                type="email"
                placeholder={"Your e-mail..."}
                title="Please, Provide A Valid Email Address!"
                className={clsx(inputFooterInput, "dark:border-0")}
            />
        </form>
    );
}
