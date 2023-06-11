import React from 'react'

import ResumePDF from '../images/resume/LINKEDINVictoriaMcNorrillResume2023.pdf'
//portfolio/src/images/resume/LINKEDINVictoriaMcNorrillResume2023.pdf
import SoftSkillsList from './softSkillsList'
import TechSkillsList from './techSkillsList'

const Resume = () => {
    return (
        <section id="resume" className="content container is-fluid" >
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Click Below to View my Resume</p>
                        <div className="content">
                            <a href={ResumePDF} target="_blank" rel="noreferrer"><button className="button subtitle">My Resume</button></a>
                        </div>
                    </article>
                </div>
                <div className="tile is-parent is-8">
                    <article className="tile is-child box">
                        <div className="content">
                            <div className="columns">
                            <div className="column">
                            <p className="subtitle">Proficiencies</p>

                            <p>{TechSkillsList}</p>
                            </div>
                            <div className="column">
                            <p className="subtitle">Soft Skills</p>
                            <p>{SoftSkillsList}</p>
                            </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Resume