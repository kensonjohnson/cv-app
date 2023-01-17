import React from "react"
import { School } from "./School"

export function Education(props) {
    const { education, setEducation } = props

    const handleUpdate = (key, newData) => {
        const indexOfSchool = education.findIndex((school) => {
            if (school.key === key) return true
        })
        const newEducation = [...education]
        newEducation[indexOfSchool] = {
            ...newEducation[indexOfSchool],
            ...newData,
        }
        setEducation(newEducation)
    }
    return (
        <>
            <h2>Education</h2>
            {education.map((school) => {
                return (
                    <School
                        school={school}
                        key={school.key}
                        handleUpdate={handleUpdate}
                    />
                )
            })}
        </>
    )
}
