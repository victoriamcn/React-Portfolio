//with a Navigation component within it that’s used to conditionally render 
//About Me, Portfolio, Contact, and Resume sections.


const Navigation = () => {
    <div>
        <section class="hero is-primary is-medium">
            {/* Hero head: will stick at the top -->*/}
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a href="/#" class="navbar-item">
                                <img src="portfolio/src/images/VMlogo-bright.png" alt="VM logo with bright pinks" />
                            </a>
                            <span class="navbar-burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" class="navbar-menu">
                            <div class="navbar-end">
                                <a href="/#" class="navbar-item is-active">
                                    Projects
                                </a>
                                <a href="/#" class="navbar-item">
                                    About
                                </a>
                                <a href="/#" class="navbar-item">
                                    Resume
                                </a>
                                <a href="/#" class="navbar-item">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

           { /*<!-- Hero content: will be in the middle -->*/}
            <div class="hero-body">
                <div class="container has-text-centered">
                    <p class="title">
                        Victoria McNorrill
                    </p>
                    <p class="subtitle">
                        Full Stack Web Developer
                    </p>
                </div>
            </div>

            {/*<!-- Hero footer: will stick at the bottom -->*/}
            <div class="hero-foot">
                <nav class="tabs">
                    <div class="container">
                        <ul>
                            <li class="is-active"><a href="/#">Overview</a></li>
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