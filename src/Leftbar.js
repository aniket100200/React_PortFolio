const data = {
    languages: ["C++", "Javascript", "Java"],
    databases: ["MySql", "SQL Server", "MongoDB"],
    achievements: ["Attending the class", "Highest Package of the decade", "Firewall cracked adn hacked"],
    frameworks: ["Angular", "Ract", "Spring Boot"]
}

const education = [
    {
        course: "BTech",
        institute: "MIET Bhandara",
        duration: "2018-2022",
        grade: "8.82",
        branch: "Mechanical"
    },
    {
        course: "Intermediate",
        institute: "Nanaji Joshi",
        duration: "2016-2018",
        grade: "76.92%",
        branch: "Science"
    },
    {
        course: "SSC",
        institute: "Chaitanya",
        duration: "2015-2016",
        grade: "75.4%",
    }
]

const SubSection = ({ title, points }) => {
    return (
        <div className="subsection">
            <p className="title">{title}</p>
            <ul>
                {
                    points.map((point) => <li>{point}</li>)
                }
            </ul>
        </div>
    )
}

const EducationCard = ({ details }) => {
    return (
        <div className="education-card">
            <h4>{details.institute}</h4>
            <p>{details.duration}</p>
            <p>{details.grade}</p>
            {details.branch && <p>{details.branch}</p>}
            <span className="course">{details.course}</span>
        </div>);
}


export const Leftbar = () => {
    return (
        <div className="leftbar-container">
            <div className="education">
                <h2>education</h2>
                {
                    education.map(item => <EducationCard details={item} />)
                }
            </div>
            <SubSection title="Databases" points={data.databases} />
            <SubSection title="Languages" points={data.languages} />
            <SubSection title="Achievements" points={data.achievements} />
            <SubSection title="Frameworks" points={data.frameworks} />
        </div>
    );
}