import React from 'react'

import SoftSkillsList from './softSkillsList'
import TechSkillsList from './techSkillsList'

const Resume = () => {
    return (
        <section id="#resume" className="content container is-fluid" >
            <h2 className="title">Resume</h2>
            <div className="pike">

                <div className="georgiatech">
                    <h3 >Georgia Tech: Full Stack Coding Certification</h3>
                    <p></p>
                </div>
                <h3>Current Position:</h3>
                <p>As a Project Analyst at Pike Engineering, I analyze project data, identify environmental concerns, ensure accurate customer billing information, and assign all new work orders to the team.</p>
                <p>I am also part of the Decorative Mercury Vapor Upgrade project. Duke Energy choose Pike Engineering's Lighting Team in 2020 to upgrade all existing Mercury Vapor lights to LED lights by the end of 2023.
                    I played a pivotal role the initial set-up of the project: creating 661 individual work orders based on raw customer billing data across fourteen counties in South Carolina.
                    As the baton passed to the engineers to replace the lights, I manage the comprehensive reporting along the way. Despite challenges like the COVID-19 pandemic and material shortages, my efforts and collaboration with my Pike and Duke managers enabled the Upstate Pike Lighting team stay ahead of schedule by several months. This experience continues to strengthen my ability to adapt, overcome obstacles and deliver outstanding results in a fast-paced environment.</p>
            </div>
            <div className="skills">
                <h3>Web Development Proficiencies</h3>
                {TechSkillsList}
                <h3>Soft Skills</h3>
                {SoftSkillsList}
            </div>
        </section>
    )
}

export default Resume