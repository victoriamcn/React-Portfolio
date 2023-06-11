//a single Header component that appears on multiple pages
//with a Navigation component within it
import React from 'react'
import Navigation from "./Navigation"


const Header = () => {
    return (
        <header>
            <Navigation />
        </header>
    )

}

export default Header;