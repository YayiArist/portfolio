import "./App.css";
import About from "./components/About/About";

import { LanguageProvider } from "./context/LanguageContext"
import { ThemeProvider } from  "./context/ThemeContext"
import {Routes ,Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {

 
  return (
    <div className="App">
       <ThemeProvider> 
         <LanguageProvider> 
          <Routes >
          <Route exact path="/" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          </Routes>
       </LanguageProvider> 
      </ThemeProvider>
     
    </div>
  );
}

export default App;
