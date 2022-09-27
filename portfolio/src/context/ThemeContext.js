import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();


const themeStyles = {
  light: {
    
    navBgc: "#fff",
    title: "#ff847c",
    bgc: "#fff",
    text: "#374151",
    selectLang: "#000000",
   /*  boxShadow: "10px 10px 5px #0b0b118c", */
    socialBgc: "#99b89894",
    buttonAbout: "#ff847c",
   buttonText: "#374151",
   buttonHover:  "#374151",
   buttonHoverText: "#ff847c",
   social:"#fdfdfd",
   socialHover: "#ff857c8c",
   projectsBg: "#fff",
  modalBg: "#fff"


  },

  dark:{
    
    navBgc:"#062f4f",
    title: "#FA9E14",
    bgc: "#062f4f",
    text: "#ffffffc0",
    selectLang: "#fff",
    boxShadow: "15px 15px 50px #0b0b118c",
    socialBgc: "#ffffffc0",
    buttonAbout: "rgba(255, 255, 255, 0.185)",
    buttonText: "#FA9E14",
    buttonHover:  "rgba(15, 15, 15, 0.39)",
    buttonHoverText: "#FA9E14",
    social: "#FA9E14",
    socialHover: "rgba(0, 0, 0, 0.5)",
    projectsBg: "#3F6B8C",
    modalBg: "#062f4f"
   
  }
}


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
     
    } else {
      setTheme("light");
     
    }
   
  };


  const data = { theme: themeStyles[theme], handleTheme};

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
