import "./Rightbar.css"

const experiences=[
    {
        companyNmae:"Acciojob",
        duration:"1yr 4months",
        points:[
            "Proficiency in server-side JavaScript frameworks such as Node.js or Express.js.",
            "Experience in building RESTful APIs and microservices.",
            "Knowledge of database systems like MongoDB, MySQL, or PostgreSQL.",
            "Understanding of asynchronous programming and handling of callbacks, promises, and async/await.",
            "Familiarity with authentication and authorization mechanisms like JWT.",
            "Experience with testing frameworks such as Mocha, Chai, or Jest for backend testing.",
            "Knowledge of Docker and containerization for deployment.",
            "Understanding of cloud platforms like AWS, Azure, or Google Cloud Platform.",
            "Familiarity with caching strategies and performance optimization techniques.",
            "Strong debugging and troubleshooting skills for backend systems."
        ],
        role:"Front-end Devl",
        skills:[
            "javascript",
            "react",
            "redux",
            "legendstate"
        ]
    },
    {
        companyNmae:"abc",
        duration:"1yr 3months",
        points:[
            "Proficiency in React.js library and its ecosystem.",
            "Experience in building responsive web applications using React.",
            "Strong understanding of JavaScript fundamentals and ES6+ features.",
            "Knowledge of state management libraries like Redux or Context API.",
            "Familiarity with modern frontend build tools such as Webpack, Babel, and npm/yarn.",
            "Understanding of component-based architecture and design patterns.",
            "Experience with testing frameworks such as Jest, Enzyme, or React Testing Library.",
            "Ability to work with RESTful APIs and asynchronous JavaScript.",
            "Familiarity with version control systems like Git.",
            "Strong problem-solving skills and attention to detail."
        ],
        skills:[
            "Spring Boot",
            "Java",
            "Jpa",
            "AWS",
            "Devops"
        ],
        role:"Backend Devl",
    }
]


const ExperienceCard= ({details})=>{
    return (
        <div className="experience-card">
            <div className="header">
            <p className="company-name">{details.companyNmae+" - "+details.role}</p>
            <span>{details.duration}</span>
            </div>
            <ul>
                {
                    details.points.map(point=><li>{point}</li>)
                }

            </ul>

            <div className="skills">
                {
                    details.skills.map(skill=><span>{skill}</span>)
                }
            </div>
        </div>
    )
}
export const Rightbar=()=>{
    return (
        <div className="rightbar-container">
            <h2>Experience</h2>
            {
                experiences.map(exp=><ExperienceCard details={exp}/>)
            }
        </div>
    );
}