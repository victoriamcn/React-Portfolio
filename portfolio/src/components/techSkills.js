import React from 'react'

export default function techSkills({techSkillsList}) {
    return (

          techSkillsList.map((tech) => (
            <a className="list-item" href="#/">
                {tech}
            </a>
            ))

    );
};
