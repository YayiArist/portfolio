import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import "./technologies.css"

export default function Technologies(props) {
  const { theme } = useContext(ThemeContext);
  const { texts, language, handleLanguage } = useContext(LanguageContext);
 

  return (
    <div className="techCont">
     <img className='techLogo' src = { require(  `./logos/tech-${props.logo}.png`) } alt={props.name}/>
    <label htmlFor="" className="techName">
      {props.name}
    </label> 
  </div>
  )
}
