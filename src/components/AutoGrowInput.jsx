import React from "react"

export function AutoGrowInput(props) {
    const { className, value, onChange, onBlur } = props
    const handleLoseFocus = (e) => {
        if (e.target.value === "") {
            e.target.value = value
        } else {
            onBlur()
        }
    }
    return (
        <div
            style={{
                display: "inline-grid",
                alignItems: "center",
                justifyItems: "start",
            }}
        >
            <input
                onFocus={(e) => {
                    e.target.value = ""
                }}
                value={value}
                onChange={onChange}
                onBlur={handleLoseFocus}
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
