import React from 'react'
import MeOne from '../../assets/photos/me1b.jpeg'

//portfolio/src/images/photos/me1b.jpeg
//import MeTwo from '../images/photos/me 2.png'////

const About = () => {
    return (
        <section id="about" className="content">
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                    <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child box">

                                <div className="content">
                                    <figure className="image is-5by4 has-ratio">
                                        <img src={MeOne} alt="A woman wearing a beanie and coat stands smiling with the Cliffs of Moher." />
                                    </figure>
                                    <p className="title">About</p>
                                    <p className="abouttext">I'm a full-stack web developer with a background in graphic design, allowing me to offer unique perspectives on user interaction with websites and software platforms. I recently earned a professional certificate in Full Stack Web Development from the <a href="https://pe.gatech.edu/courses/georgia-tech-coding-boot-camp">Georgia Institute of Technology's Certification program</a>. My strengths lie in creativity, teamwork, and debugging.</p>
                                    <p className="abouttext">Beyond my professional life, I enjoy thrifting and upcycling furniture, appreciating art, architecture and interior design, and watching Wes Anderson movies with my lovely calico cat, Birdie. I'm also an avid traveler, having visited Peru, Belize, Italy, Ireland, Sweden, the Czech Republic, the Bahamas, Aruba, and various parts of the United States. Currently, I reside in South Carolina.</p>

                                </div>                               
                    </article>
                </div>
            </div>
        </div>
            </div >



        </section >
    )

}

export default About