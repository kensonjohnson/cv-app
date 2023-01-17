import React, { useEffect, useState } from "react"
import { restrictInput } from "../utils/utils"
import "../styles/Description.css"

export function Description(props) {
    const { objective, setObjective } = props
    const [newObjective, setNewObjective] = useState(objective)

    useEffect(() => {
        setNewObjective(objective)
    }, [objective])

    const handleChange = (e) => {
        setNewObjective(e.target.value)
    }

    return (
        <div className="objective">
            <div className="objective-title">Objective:</div>
            <textarea
                className="description"
                value={newObjective}
                cols="80"
                rows="3"
                onBlur={(e) => {
                    setObjective(newObjective)
                }}
                onKeyDown={(e) => {
                    restrictInput(e, 3, 95)
                }}
                onChange={handleChange}
            />
        </div>
    )
}
