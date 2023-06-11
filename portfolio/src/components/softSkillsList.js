import React from 'react'

const softSkills = [
    "Empathy",
    "Patience",
    "Open-mindedness",
    "Autodidactic or experimental learner",
    "Problem solving",
    "Accountability",
    "Creativity",
    "Time management",
    "Adaptability"
]

function softSkillsList(props) {
    return (
        <ul className="list-group">
          {props.map((softSkills) => (
            <li className="list-group-item" >
                {softSkills}
            </li>
            ))}
        </ul>
    );
}


export default softSkillsList;