import React from 'react'

const techSkills = [
    "React",
    "Back-End Development",
    "Node.js",
    "npm",
    "Object Oriented Programming (OOP)",
    "dotenv",
    "MySQL",
    "Sequelize",
    "Express.js",
    "NoSQL",
    "MongoDB",
    "Mongoose",
    "Document Object Model (DOM) ",
    "localStorage",
    "JavaScript",
    "jQuery",
    "Front-End Development",
    "Third Party API",
    "Handlebars.js",
    "day.js",
    "User Experience (UX)",
    "Cascading Style Sheets (CSS)",
    "Spectre.css",
    "Bootstrap",
    "Bulma",
    
    "",
    "",
    "",
    "HTML",

]

function techSkillsList(props) {
    return (
        <ul className="list-group">
          {props.map((techSkills) => (
            <li className="list-group-item" >
                {techSkills}
            </li>
            ))}
        </ul>
    );
}


export default techSkillsList;