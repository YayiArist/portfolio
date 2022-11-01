import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import "./contact.css";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const { texts, language, handleLanguage } = useContext(LanguageContext);
  return (
    <div className="formContainer" style={{ backgroundColor: theme.bgc }}>
      <div style={{ boxShadow: theme.boxShadow, backgroundColor: theme.contactBg }} className="formSection">
        <h2>Enviame tu Mensaje</h2>
        
          <form name="contact-form" netlify>
            <div className="form-control">
              <input maxLength="30" type="value" required />
              <label>
                <span style={{ transitionDelay: "0ms" }}>N</span>
                <span style={{ transitionDelay: "50ms" }}>o</span>
                <span style={{ transitionDelay: "100ms" }}>m</span>
                <span style={{ transitionDelay: "150ms" }}>b</span>
                <span style={{ transitionDelay: "200ms" }}>r</span>
                <span style={{ transitionDelay: "250ms" }}>e</span>
              </label>
            </div>
            <div className="form-control">
              <input maxLength="30" type="value" required />
              <label>
                <span style={{ transitionDelay: "0ms" }}>E</span>
                <span style={{ transitionDelay: "50ms" }}>m</span>
                <span style={{ transitionDelay: "100ms" }}>a</span>
                <span style={{ transitionDelay: "150ms" }}>i</span>
                <span style={{ transitionDelay: "200ms" }}>l</span>
              </label>
            </div>
            <div className="form-control">
              <textarea maxLength="350" type="value" required />
              <label>
                <span style={{ transitionDelay: "0ms" }}>M</span>
                <span style={{ transitionDelay: "50ms" }}>e</span>
                <span style={{ transitionDelay: "100ms" }}>n</span>
                <span style={{ transitionDelay: "150ms" }}>s</span>
                <span style={{ transitionDelay: "200ms" }}>a</span>
                <span style={{ transitionDelay: "250ms" }}>j</span>
                <span style={{ transitionDelay: "300ms" }}>e</span>
              </label>
            </div>

        
        <input className="submitButton" style={{ transitionDelay: "0ms" }} type="submit" /> 
          </form>
       
      </div>
    </div>
  );
}
