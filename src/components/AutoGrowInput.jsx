import React from "react"

export function AutoGrowInput(props) {
    const { className, value, onChange, onBlur } = props
    return (
        <div
            style={{
                display: "inline-grid",
                alignItems: "center",
                justifyItems: "start",
            }}
        >
            <input
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                style={{
                    gridArea: "1 / 1 / 2 / 2",
                    width: "100%",
                    padding: 0,
                    border: "none",
                }}
                className={
                    className ? `${className} title-input` : "title-input"
                }
            />
            <span
                className={className}
                style={{
                    gridArea: "1 / 1 / 2 / 2",
                    visibility: "hidden",
                }}
            >
                {value}
            </span>
        </div>
    )
}
