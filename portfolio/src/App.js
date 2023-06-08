import './App.css';

//components
import Header from "./components/Header";
import Navigation from "./components/Navigation"
import Projects from "./components/Projects";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
