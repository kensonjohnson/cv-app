export const exampleCV = {
    titleInfo: {
        fullName: "Full Name",
        location: "Anytown, AnyState",
        phone: "123-456-7890",
        email: "anyone@anysite.com",
    },
    objective:
        "Create an objective tailored to the employer you're applying at. \nEach line has a maximum character length of 95. \nAttempt to keep it within three lines.",
    experience: [
        {
            key: "job1",
            jobTitle: "Job Title",
            location: { city: "AnyCity", state: "AnyState" },
            dateStart: "Jan 2020",
            dateEnd: "Present",
            jobDescription:
                "Describe why your time at this company is benefit a potential employer. \nEach line has a maximum character length of 95. \nUse up to 4 lines",
        },
        {
            key: "job2",
            jobTitle: "Job Title",
            location: { city: "AnyCity", state: "AnyState" },
            dateStart: "Jan 2018",
            dateEnd: "Jan 2020",
            jobDescription:
                "Describe why your time at this company is benefit a potential employer. \nEach line has a maximum character length of 95. \nUse up to 4 lines",
        },
        {
            key: "job3",
            jobTitle: "Job Title",
            location: { city: "AnyCity", state: "AnyState" },
            dateStart: "Jan 2016",
            dateEnd: "Jan 2018",
            jobDescription:
                "Describe why your time at this company is benefit a potential employer. \nEach line has a maximum character length of 95. \nUse up to 4 lines",
        },
    ],
    education: [
        {
            key: "school1",
            schoolName: "Some School",
            degreeName: "BS of Applied Science",
            dateCompleted: "Jan 2016",
            schoolDescription:
                "Add a short description of the school. \nEach line has a maximum character length of 95. Use up to 2 lines",
        },
        {
            key: "school2",
            schoolName: "Some School",
            degreeName: "AS of Applied Science",
            dateCompleted: "Jan 2014",
            schoolDescription:
                "Add a short description of the school. \nEach line has a maximum character length of 95. Use up to 2 lines",
        },
    ],
}
