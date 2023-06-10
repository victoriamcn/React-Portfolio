//router
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// styling
import './App.css';

//components
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route component={Home} path="/" exact/>
          <Route component={Projects} path="/Projects" />
          <Route component={About} path="/About" />
          <Route component={Contact} path="/Contact" />
          <Route component={Resume} path="/Resume" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
