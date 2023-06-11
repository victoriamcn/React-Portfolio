import React from 'react'
import MeOne from '../images/photos/me 1.png'
import MeTwo from '../images/photos/me 2.png'

const About = () => {
    return (
        <section id="#about" className="content container is-fluid">

            <h2 className="title">About</h2>
            <div className="columns">
                <div className="column">
                    <figure className="image is-128x128">
                        <img src={MeOne} className="is-rounded" alt="A woman wearing a beanie and coat stands smiling with the Cliffs of Moher." />
                    </figure>
                    <figure className="image is-128x128">
                        <img src={MeTwo} className="is-rounded" alt="A woman wearing ball cap, tank top and shorts stands facing off-camera-left at the Great Sand Dunes National Park" />
                    </figure>
                </div>
                <div className="column">
                    <p className="abouttext">I'm a full-stack web developer with a background in graphic design, allowing me to offer unique perspectives on user interaction with websites and software platforms.</p>
                    <p className="abouttext">I recently earned a professional certificate in Full Stack Web Development from the <a href="https://pe.gatech.edu/courses/georgia-tech-coding-boot-camp">Georgia Institute of Technology's Certification program</a>. My strengths lie in creativity, teamwork, and debugging.</p>
                </div>
                <div className="column">
                    <p className="abouttext">Beyond my professional life, I enjoy thrifting and upcycling furniture, appreciating art, architecture and interior design, and watching Wes Anderson movies with my lovely calico cat, Birdie. </p>
                    <p className="abouttext">I'm also an avid traveler, having visited Peru, Belize, Italy, Ireland, Sweden, the Czech Republic, the Bahamas, Aruba, and various parts of Asia. Currently, I reside in South Carolina.</p>
                </div>
            </div>
        </section >
    )

}

export default About