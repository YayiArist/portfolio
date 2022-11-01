import React, { useContext, Component } from "react";
import "./navBar.css";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import { GiEarthAmerica } from "react-icons/gi";
import Select from "react-select";

import { GiUbisoftSun } from "react-icons/gi";
import { RiMoonLine } from "react-icons/ri";

/* const options = [
  { value: "es", label:"ES" },
  { value: "en", label: "EN"}
]; */

const NavBar = () => {
  const { texts, language, handleLanguage } = useContext(LanguageContext);
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div
      className="light"
      style={{ backgroundColor: theme.navBgc, color: theme.text }}
    >
      <div className="selectLang">
        <select  style={{ color: theme.selectLang}} name="language" onChange={handleLanguage}>
          <option className="opt"value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>

      <div className="checkWrapper">
        <label>
          <input
            onChange={handleTheme}
            type="checkbox"
            name="checkbox"
            className="toggle-checkbox"
          />
          <div className="toggle-slot">
            <div className="sun-icon-wrapper">
              <GiUbisoftSun className="sun-icon" />
            </div>
            <div className="toggle-button"></div>
            <div className="moon-icon-wrapper">
              <RiMoonLine className="moon-icon" />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
