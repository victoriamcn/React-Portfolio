import React from 'react';

import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function MainContent() {
    return (
      <main className="container">
        < Projects />
        < About />
        < Resume />
        < Contact />
      </main>
    );
  }
  
  export default MainContent;