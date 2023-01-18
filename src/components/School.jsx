import React, { useState, useEffect } from "react"
import "../styles/School.css"
import { restrictInput } from "../utils/utils"
import { AutoGrowInput } from "./AutoGrowInput"

export function School(props) {
    const { education, school, handleUpdate } = props

    const [degreeName, setDegreeName] = useState(school.degreeName)
    const [schoolName, setSchoolName] = useState(school.schoolName)
    const [dateCompleted, setDateCompleted] = useState(school.dateCompleted)
    const [schoolDescription, setSchoolDescription] = useState(
        school.schoolDescription,
    )
    useEffect(() => {
        const findUpdatedSchool = education.filter((updatedSchool) => {
            if (school.key === updatedSchool.key) {
                return true
            }
            return false
        })
        if (findUpdatedSchool.length === 1) {
            const newSchool = findUpdatedSchool[0]
            setDegreeName(newSchool.degreeName)
            setSchoolName(newSchool.schoolName)
            setDateCompleted(newSchool.dateCompleted)
            setSchoolDescription(newSchool.schoolDescription)
        }
    }, [education])

    return (
        <div className="school">
            <div className="school-degree">
                <AutoGrowInput
                    value={degreeName}
                    className="school-degree-field"
                    onBlur={() => {
                        handleUpdate(school.key, { degreeName })
                    }}
                    onChange={(e) => {
                        setDegreeName(e.target.value)
                    }}
                />
            </div>
            <div className="school-info">
                <AutoGrowInput
                    value={schoolName}
                    className="school-title"
                    onBlur={() => {
                        handleUpdate(school.key, { schoolName })
                    }}
                    onChange={(e) => {
                        setSchoolName(e.target.value)
                    }}
                />
                {", "}
                <AutoGrowInput
                    value={dateCompleted}
                    className="school-date"
                    onBlur={() => {
                        handleUpdate(school.key, { dateCompleted })
                    }}
                    onChange={(e) => {
                        setDateCompleted(e.target.value)
                    }}
                />
            </div>
            <textarea
                className="school-description"
                rows={2}
                cols={99}
                value={schoolDescription}
                onBlur={() => {
                    handleUpdate(school.key, { schoolDescription })
                }}
                onKeyDown={(e) => {
                    restrictInput(e, 2, 95)
                }}
                onChange={(e) => {
                    setSchoolDescription(e.target.value)
                }}
            />
        </div>
    )
}
