import React from 'react'

export default function softSkills({softSkillsList}) {
    return (
          softSkillsList.map((soft) => (
            <a className="list-item" href="#/">
                {soft}
            </a>
            ))
    );
};
