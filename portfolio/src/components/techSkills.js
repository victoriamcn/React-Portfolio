import React from 'react';

const techSkillsList = [
    "Agile",
    "Separation of concerns",
    "Object-Oriented Programming (OOP)",
    "Model-View-Controller (MVC)",
    "Object Relational Mapping (ORM)",
    "User Experience (UX)",
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
    "JavaScript",
    "jQuery",
    "DOM",
    "localStorage",
    "Third Party APIs",
    "Handlebars.js",
    "day.js",
    "CSS",
    "Spectre.css",
    "Bootstrap",
    "Bulma",
    "HTML",
];

let TechSkills = () => {
    return <div>
        {techSkillsList.map((skill, i) => (
            <span key={i} data-value={skill} className="tag m-1">
                {skill}
            </span>
        ))}
    </div>;
}

export default TechSkills;