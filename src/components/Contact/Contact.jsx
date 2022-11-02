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
        <h2>{texts.contactTitle}</h2>
        
          <form name="contact-form" netlify>
            <div className="form-control">
              <input maxLength="30" type="value" required />
            <label htmlFor="">
              {texts.name?.map(e=><span>{e}</span>)}
            </label>
            </div>
            <div className="form-control">
              <input maxLength="30" type="value" required />
              <label>
                <span>E</span>
                <span>m</span>
                <span>a</span>
                <span>i</span>
                <span>l</span>
              </label>
            </div>
            <div className="form-control">
              <textarea maxLength="350" type="value" required />
              <label>
              {texts.message?.map(e=><span>{e}</span>)}
              </label>
            </div>

        
        <input className="submitButton" type="submit" value={texts.sendButton} /> 
          </form>

          
       
      </div>
    </div>
  );
}
