import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import Technologies from "../Technologies/Technologies";
import "./modal.css";
import { IoClose } from "react-icons/io5";

export default function Modal({ modalState, setModalState }) {
  const { theme } = useContext(ThemeContext);
  const { texts, language } = useContext(LanguageContext);

  return (
    <>
      {modalState && (
        <div className="overlay">
          <div
            className="modalContainer"
            style={{ backgroundColor: theme.modalCont, border: theme.border }}
          >
            <div className="modalHeader">
              <h3 style={{ color: theme.title }}>{texts.skills}</h3>
              <div className="buttonM">
                {" "}
                <button onClick={() => setModalState(!modalState)}>
                  <IoClose className="closeModal" />
                </button>
              </div>
            </div>

            <div
              className="technologies"
              style={{ backgroundColor: theme.modalBg }}
            >
              <div className="tech">
                <Technologies logo="html" name="html" />
              </div>
              <div className="tech">
                <Technologies logo="css" name="css" />
              </div>
              <div className="tech">
                <Technologies logo="js" name="JavaScript" />
              </div>
              <div className="tech">
                <Technologies logo="react" name="react" />
              </div>
              <div className="tech">
                <Technologies logo="redux" name="redux" />
              </div>
              <div className="tech">
                <Technologies logo="node" name="nodeJs" />
              </div>
              <div className="tech">
                <Technologies logo="sql" name="sql" />
              </div>
              <div className="tech">
                <Technologies logo="sequelize" name="sequelize" />
              </div>
              <div className="tech">
                <Technologies logo="mongo" name="mongo" />
              </div>
              <div className="tech">
                <Technologies logo="git" name="gitHub" />
              </div>
               <div className="tech">
                <Technologies logo="docker" name="docker" />
              </div>
              <div className="tech">
                <Technologies logo="mysql" name="mysql" />
              </div>
              <div className="tech">
                <Technologies logo="python" name="python" />
              </div>
              <div className="tech">
                <Technologies logo="typescript" name="typescript" />
              </div>
            </div>

            <div className="soft">
              <ul>
                {texts.soft?.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
