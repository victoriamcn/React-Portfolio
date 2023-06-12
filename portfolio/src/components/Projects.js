import React from 'react';
import ProjectsList from './ProjectsList'

export default function Projects() {
    return (
        <section id="projects" className="flexcards content">
            <p className="title box">Projects</p>    
                <ProjectsList />
        </section >
    )
}