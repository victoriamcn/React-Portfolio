/* eslint-disable jsx-a11y/anchor-is-valid */
//with a Navigation component within it that’s used to conditionally render 
//About Me, Portfolio, Contact, and Resume sections.
import React from 'react'
//import Logo from '../images/VictoriaDesigns-BIG.png'

const Navigation = () => {
    return (
        <section class="hero is-halfheight-with-navbar herobackground">


            {/* Hero Centered */}
            <div class="hero-body">
                <div class="container has-text-centered">
                    <p class="victoria">
                        Victoria McNorrill
                    </p>
                    <p class="subtitle">
                        Full Stack Web Developer
                    </p>
                </div>
            </div>
            {/* Hero footer: will stick at the bottom */}
            <div class="hero-foot">
                <nav class="tabs is-boxed is-small">
                    <div class="container">
                        <ul>
                            <li><a class="navlink has-text-weight-semibold" href="#projects">Projects</a></li>
                            <li><a class="navlink has-text-weight-semibold is-active" href="#about">About</a></li>
                            <li><a class="navlink has-text-weight-semibold" href="#resume">Resume</a></li>
                            <li><a class="navlink has-text-weight-semibold" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </section>
    )
}

export default Navigation;