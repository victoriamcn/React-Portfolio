//router

import { BrowserRouter, Routes, Route } from "react-router-dom";


// styling
import './App.css';

//components
import Header from "./components/Header";
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
          <Route component={Projects} path="/Projects" exact />
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
