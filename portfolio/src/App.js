//router
import React from 'react'
//import { BrowserRouter, Routes, Route } from "react-router-dom";


// styling
import './App.css';

//components
import Header from "./components/Header";
import Main from "./components/Main"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App all-content">
        <Header />
        <Main className="container is-fluid"/>
        <Footer />
    </div>
  );
}

export default App;
