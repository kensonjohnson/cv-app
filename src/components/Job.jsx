import React, { useEffect, useState } from "react"
import "../styles/Job.css"
import { restrictInput } from "../utils/utils"
import { AutoGrowInput } from "./AutoGrowInput"

export function Job(props) {
    const { job, handleUpdate, experience } = props
    const [jobTitle, setJobTitle] = useState(job.jobTitle)
    const [location, setLocation] = useState(job.location)
    const [dateStart, setDateStart] = useState(job.dateStart)
    const [dateEnd, setDateEnd] = useState(job.dateEnd)
    const [jobDescription, setJobDescription] = useState(job.jobDescription)

    useEffect(() => {
        const findUpdatedJob = experience.filter((updatedJob) => {
            if (job.key === updatedJob.key) {
                return true
            }
            return false
        })
        if (findUpdatedJob.length === 1) {
            const newJob = findUpdatedJob[0]
            setJobTitle(newJob.jobTitle)
            setLocation(newJob.location)
            setDateStart(newJob.dateStart)
            setDateEnd(newJob.dateEnd)
            setJobDescription(newJob.jobDescription)
        }
    }, [experience])

    return (
        <div className="job">
            <div className="job-header">
                <div>
                    <AutoGrowInput
                        value={jobTitle}
                        className="job-title-field"
                        onBlur={() => {
                            handleUpdate(job.key, { jobTitle })
                        }}
                        onChange={(e) => {
                            setJobTitle(e.target.value)
                        }}
                    />{" "}
                </div>
                <div className="job-location">
                    <AutoGrowInput
                        className="job-location-city"
                        value={location.city}
                        onBlur={() => {
                            handleUpdate(job.key, { location })
                        }}
                        onChange={(e) => {
                            setLocation({
                                city: e.target.value,
                                state: location.state,
                            })
                        }}
                    />
                    {", "}
                    <AutoGrowInput
                        className="job-location-state"
                        value={location.state}
                        onBlur={() => {
                            handleUpdate(job.key, { location })
                        }}
                        onChange={(e) => {
                            setLocation({
                                city: location.city,
                                state: e.target.value,
                            })
                        }}
                    />
                </div>
            </div>

            <div className="job-dates">
                <AutoGrowInput
                    className="notUsed"
                    value={dateStart}
                    onBlur={() => {
                        handleUpdate(job.key, { dateStart })
                    }}
                    onChange={(e) => {
                        setDateStart(e.target.value)
                    }}
                />
                {" - "}
                <AutoGrowInput
                    className="notUsed"
                    value={dateEnd}
                    onBlur={() => {
                        handleUpdate(job.key, { dateStart })
                    }}
                    onChange={(e) => {
                        setDateEnd(e.target.value)
                    }}
                />
            </div>
            <textarea
                className="job-description"
                rows={4}
                cols={99}
                value={jobDescription}
                onBlur={() => {
                    handleUpdate(job.key, { jobDescription })
                }}
                onKeyDown={(e) => {
                    restrictInput(e, 4, 95)
                }}
                onChange={(e) => {
                    setJobDescription(e.target.value)
                }}
            />
        </div>
    )
}
