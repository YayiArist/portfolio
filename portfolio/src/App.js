import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cover from "./components/Cover/Cover";
import Modal from "./components/Modal/Modal";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import { LanguageProvider } from "./context/LanguageContext"
import { ThemeProvider } from  "./context/ThemeContext"

function App() {

 
  return (
    <div className="App">
      
       <ThemeProvider> 
         <LanguageProvider> 
          <NavBar />
         {/*  <Modal/>  */}
          <About />
          <Projects />
          <Contact />
       </LanguageProvider> 
      </ThemeProvider>  
    </div>
  );
}

export default App;
