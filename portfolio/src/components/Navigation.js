//with a Navigation component within it that’s used to conditionally render 
//About Me, Portfolio, Contact, and Resume sections.
import React from 'react'

const Navigation = () => {
    <div>
        <section className="hero is-primary is-medium">
            {/* Hero head: will stick at the top -->*/}
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a href="/#" className="navbar-item">
                                <img src="portfolio/src/images/VMlogo-bright.png" alt="VM logo with bright pinks" />
                            </a>
                            <span className="navbar-burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <a href="/#" className="navbar-item is-active">
                                    Projects
                                </a>
                                <a href="/#" className="navbar-item">
                                    About
                                </a>
                                <a href="/#" className="navbar-item">
                                    Resume
                                </a>
                                <a href="/#" className="navbar-item">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

           { /*<!-- Hero content: will be in the middle -->*/}
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title">
                        Victoria McNorrill
                    </p>
                    <p className="subtitle">
                        Full Stack Web Developer
                    </p>
                </div>
            </div>

            {/*<!-- Hero footer: will stick at the bottom -->*/}
            <div className="hero-foot">
                <nav className="tabs">
                    <div className="container">
                        <ul>
                            <li className="is-active"><a href="/#">Overview</a></li>
                            <li><a href="/#" >Projects</a></li>
                            <li><a href="/#" >About</a></li>
                            <li><a href="/#" >Resume</a></li>
                            <li><a href="/#" >Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    </div>
}

export default Navigation;