import React from 'react';

const techSkillsList = [
    "Agile",
    "Separation of concerns",
    "Object-Oriented Programming (OOP)",
    "Model-View-Controller (MVC)",
    "Object Relational Mapping (ORM)",
    "React",
    "Node.js",
    "npm",
    "dotenv",
    "MySQL",
    "Sequelize",
    "Express.js",
    "NoSQL",
    "MongoDB",
    "Mongoose",
    "Document Object Model (DOM)",
    "localStorage",
    "JavaScript",
    "jQuery",
    "Third Party API",
    "Handlebars.js",
    "day.js",
    "User Experience (UX)",
    "Cascading Style Sheets (CSS)",
    "Spectre.css",
    "Bootstrap",
    "Bulma",
    "HTML",
];

let TechSkills = (props) => {
    props.techSkillsList.map((skill, i) => {
        return (
            <span key={i} data-value={skill} className="tag">
                {skill}
            </span>
        );
    });

    return <div>{techSkills}</div>;

}
export default TechSkills;