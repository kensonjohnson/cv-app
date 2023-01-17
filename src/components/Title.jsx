import React, { useState, useEffect } from "react"
import "../styles/Title.css"
import { AutoGrowInput } from "./AutoGrowInput"

export function Title(props) {
    const { titleInfo, setTitleInfo } = props
   

    const [fullName, setFullName] = useState(titleInfo.fullName)
    const [location, setLocation] = useState(titleInfo.location)
    const [phone, setPhone] = useState(titleInfo.phone)
    const [email, setEmail] = useState(titleInfo.email)

    useEffect(() => {
        setFullName(titleInfo.fullName)
        setLocation(titleInfo.location)
        setPhone(titleInfo.phone)
        setEmail(titleInfo.email)
    }, [titleInfo])

    return (
        <div className="title">
            <div className="left-title">
                <AutoGrowInput
                    className="title-name"
                    value={fullName}
                    onBlur={(e) => {
                        setTitleInfo({
                            fullName: e.target.value,
                            location,
                            phone,
                            email,
                        })
                    }}
                    onChange={(e) => {
                        setFullName(e.target.value)
                    }}
                />

                <AutoGrowInput
                    className="title-location"
                    value={location}
                    onBlur={(e) => {
                        setTitleInfo({
                            fullName,
                            location: e.target.value,
                            phone,
                            email,
                        })
                    }}
                    onChange={(e) => {
                        setLocation(e.target.value)
                    }}
                />
            </div>
            <div className="right-title">
                <AutoGrowInput
                    className="title-phone"
                    value={phone}
                    onBlur={(e) => {
                        setTitleInfo({
                            fullName,
                            location,
                            phone: e.target.value,
                            email,
                        })
                    }}
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />

                <AutoGrowInput
                    className="title-email"
                    value={email}
                    onBlur={(e) => {
                        setTitleInfo({
                            fullName,
                            location,
                            phone,
                            email: e.target.value,
                        })
                    }}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
            </div>
        </div>
    )
}
