import { createContext, useState } from "react";

const LanguageContext = createContext();
const inicialLanguage = "es";
const translations = {
    es: {
      aboutTitle: "Hola! Soy Yairys",
      aboutSubtitle: " Y Soy Desarrolladora Full-Stack",
      aboutText: "Enfocada en la productividad y construir codigo de calidad. Soy una persona ordenada y resolutiva, interesada en todos los aspectos de la programación, siempre retandome a mi misma a ir un paso mas allá.   ",
      mySkills: "Mis Habilidades",
      download: "Descarga mi CV",
      contact: "Contactame",
      projectsTitle: "Algunos de mis Proyectos",
      skills: "Mis Habilidades"
    
    },
    en: {
      aboutTitle: "Hi! I'm Yairys ",
      aboutSubtitle: "and I'm a Full-Stack Developer",
      aboutText:"Focused on Productivity and building quality code. Well organized, problem solver, interested in the whole spectrum of the programming, im always challenging myself to go one step further.",
      mySkills: "My Skills",
      download: "Download my CV",
      contact: "Contact Me",
      projectsTitle: "My Projects",
      skills: "My Skills"
    }, 
  };

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(inicialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const data = { language, texts, handleLanguage};

  return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>;
};
export { LanguageProvider };
export default LanguageContext;
