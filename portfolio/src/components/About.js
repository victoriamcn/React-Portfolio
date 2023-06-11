import React from 'react'
import MeOne from '../images/photos/me 1.png'
import MeTwo from '../images/photos/me 2.png'

const About = () => {
    return (
        <section id="#about" className="content container is-fluid">
            <h2 className="title">About</h2>
            <figure className="image is-128x128">
                <img src={MeOne} alt="woman in a red beanie and khaki coat stand smiling with the Cliffs of Moher"/>
            </figure>
            <h3 className="title">Hello there!</h3>
            <p className="">I'm a full-stack web developer with a background in graphic design, allowing me to offer unique perspectives on user interaction with websites and software platforms. I recently earned a certificate in Full Stack Web Development from the <a href="https://pe.gatech.edu/courses/georgia-tech-coding-boot-camp">Georgia Institute of Technology's Coding Certification program</a>. My strengths lie in creativity, teamwork, and debugging.</p>
            <figure className="image is-128x128">
                <img src={MeTwo} alt="woman "/>
            </figure>
            <p className="">Beyond my professional life, I enjoy thrifting and upcycling furniture, appreciating art, architecture and interior design, and watching Wes Anderson movies. I'm also an avid traveler, having visited Peru, Belize, Italy, Ireland, Sweden, the Czech Republic, the Bahamas, Aruba, and various parts of Asia. Oh, and I can't forget to mention my lovely calico cat named Birdie Purtrude. Currently, I reside in South Carolina.</p>
            <p className="">I'm proud to be a recipient of the 2016 Awards For Student Work Gold Circle Award in Experimental Fiction for my piece titled "The Forgotten Case of the Phantom Lady" published in The Mountain Laurel Literary Magazine at North Greenville University.</p>

        </section >
    )

}

export default About