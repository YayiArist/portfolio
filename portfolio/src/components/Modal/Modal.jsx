import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import Technologies from "../Technologies/Technologies";
import './modal.css'
import { IoClose} from "react-icons/io5";

/* export default function Modal() {
  const { theme } = useContext(ThemeContext);
  const { texts, language, handleLanguage } = useContext(LanguageContext);

  return (
    <>
    <div className="overlay" >
<div className="modalContainer" style={{ backgroundColor: theme.bgc}}>
  <div className="modalHeader">
    <h3 style={{ color: theme.title}}>{texts.skills}</h3>
    <div className="buttonM"> <button ><IoClose className="closeModal"/></button></div>
   
  </div>

  <div className="technologies">
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
              </div>

              <div className="soft">
                <span>soft</span>
                <span>soft</span>
                <span>soft</span>
                <span>soft</span>
                <span>soft</span>
                <span>soft</span>
                <span>soft</span>
                <span>soft</span>
                <span>soft</span>
                <span>soft</span>
                <span>soft</span>
              </div>
 
</div>
    </div>
    </>
  );
}
 */



export default function Modal() {
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}
