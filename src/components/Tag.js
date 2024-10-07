// This component can only be used within the H3 HTML element. It is not a standalone component.
// I had some trouble with the CSS here, so I left it as is. If needed, we can revisit.
export const Tag = (props) => {
    return (
        <span
            className={
                "not-prose bg-orange inline-block rounded px-1.5 py-0 mr-1 leading-none"
            }
        >
            <div className={'inline-block text-white font-black text-[12px] align-[4px] uppercase'}>{props.text}</div>
        </span>
    );
};
