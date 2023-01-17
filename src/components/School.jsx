import React from "react"
import "../styles/School.css"
import { restrictInput } from "../utils/utils"

export function School(props) {
    const { school, handleUpdate } = props
    let { degreeName, schoolName, dateCompleted, schoolDescription } = school

    return (
        <div className="school">
            <div
                className="school-degree"
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={(e) => {
                    degreeName = e.target.innerText
                    handleUpdate(school.key, { degreeName })
                }}
            >
                {degreeName}
            </div>
            <div className="school-info">
                <div
                    className="school-title"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => {
                        schoolName = e.target.innerText
                        handleUpdate(school.key, { schoolName })
                    }}
                >
                    {schoolName}
                </div>
                {", "}
                <div
                    className="school-date"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => {
                        dateCompleted = e.target.innerText
                        handleUpdate(school.key, { dateCompleted })
                    }}
                >
                    {dateCompleted}
                </div>
            </div>
            <textarea
                className="school-description"
                rows={3}
                cols={99}
                defaultValue={schoolDescription}
                onBlur={(e) => {
                    schoolDescription = e.target.value
                    handleUpdate(school.key, { schoolDescription })
                }}
                onKeyDown={(e) => {
                    restrictInput(e, 3, 95)
                }}
            />
        </div>
    )
}
