import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import "./projects.css";
import { Slide, Zoom } from "react-reveal";
import ProjectCard from "../ProjectCard/ProjectCard";
import styled from "styled-components";
import Technologies from "../Technologies/Technologies";
import { Link } from "react-router-dom";

export default function Projects() {
  const { theme } = useContext(ThemeContext);
  const { texts, language, handleLanguage } = useContext(LanguageContext);

  return (
    <div style={{ backgroundColor: theme.projectsBg }} className="projects">
      <h2 style={{ color: theme.title }}>{texts.projectsTitle}</h2>
      <div className="projectsContainer">
        <div className="projectCard">
          <ProjectCard name="nomade" project="nomade" />

          <div className="transition">
            <h3>Nomade</h3>
            <a href="https://nomade-khaki.vercel.app/">Ver Proyecto</a>
            <div className="technologies">
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
                <Technologies logo="mongo" name="mongo" />
              </div>
              <div className="tech">
                <Technologies logo="git" name="gitHub" />
              </div>
            </div>
          </div>
        </div>
        <div className="projectCard">
          <ProjectCard name="Dogappedia" project="dogs" />
          <div className="transition">
            <h3>Dogappedia</h3>
            <a href="https://pi-dogs-iota-flame.vercel.app/">Ver Proyecto</a>
            <div className="technologies">
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
                <Technologies logo="git" name="gitHub" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
