import React, { useState } from "react"
import { Job } from "./Job"
import "../styles/Experience.css"

export function Experience(props) {
    const { experience, setExperience } = props

    const handleUpdate = (key, newData) => {
        const indexOfJob = experience.findIndex((job) => {
            if (job.key === key) return true
        })
        const changedExperience = [...experience]
        changedExperience[indexOfJob] = {
            ...changedExperience[indexOfJob],
            ...newData,
        }
        setExperience(changedExperience)
    }
    return (
        <div className="experience">
            <h2>Experience</h2>
            {experience.map((job) => {
                return (
                    <Job
                        job={job}
                        key={job.key}
                        handleUpdate={handleUpdate}
                        experience={experience}
                    />
                )
            })}
        </div>
    )
}
