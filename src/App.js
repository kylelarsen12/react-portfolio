import './App.css';
import NavBar from "./components/NavBar.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"



function App() {
  return (
    <div className="App text-gray-400 bg-gray-900 body-font">
      <NavBar/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}


export default App;
