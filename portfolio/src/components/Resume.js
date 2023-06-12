import React from 'react'
import ResumePDF from '../images/resume/LINKEDINVictoriaMcNorrillResume2023.pdf'
//portfolio/src/images/resume/LINKEDINVictoriaMcNorrillResume2023.pdf
import TechSkills from './TechSkills'

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
                            <p className="subtitle">Proficiencies</p>
                            <TechSkills techSkillsList={techSkillsList}/>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Resume;