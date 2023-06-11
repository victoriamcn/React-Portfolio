import React from 'react'

// import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";

function MainContent() {
    return (
      <main className="meat">
        < Projects />
        < About />
        < Resume />
        < Contact />
      </main>
    );
  }
  
  export default MainContent;