import Project from "./composant/Project"
import Navigation from "./composant/Navigation"
import './App.css';
import About from "./composant/About";
import Footer from "./composant/Footer";
import Contacts from "./composant/Contacts";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <About/>
      <section id="projects">
          <h2 className="text-important">Projects</h2>
          <div className="projects-container">
              <Project/>
          </div>
      </section>
      <Contacts/>
      <Footer/>  
    </div>
  );
}

export default App;
