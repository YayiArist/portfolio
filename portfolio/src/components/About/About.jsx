import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import { Link, useHistory } from "react-router-dom";
import "./about.css";
import { Slide, Zoom, Fade } from "react-reveal";
import Technologies from "../Technologies/Technologies";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { useEffect } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

export default function About() {
  const { theme } = useContext(ThemeContext);
  const { texts, language, handleLanguage } = useContext(LanguageContext);

  const ButtonAbout = styled.button`
    margin-top: 50px;
    border: none;
    background: none;
    background-color: ${theme.buttonAbout};
    width: 200px;
    height: 40px;
    border-radius: 5px;
    font-size: 1.5em;
    cursor: pointer;
    transition: 0.4s;
    color: ${theme.buttonText};
    &:hover {
      background-color: ${theme.buttonHover};
      color: ${theme.buttonHoverText};
    }
  `;
  const SocialButton = styled.a`
    color: ${theme.social};
    font-size: 1em;
    transition: 0.4s;
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      color: ${theme.socialHover};
    }
  `;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;


  return (
    <div
      className="about"
      style={{ backgroundColor: theme.bgc, color: theme.text }}
    >
      <Zoom>
        <div className="section" style={{ boxShadow: theme.boxShadow }}>
          <div className="content">
            <div className="aboutTop">
              <div className="aboutImgCont">
                <img src="assets/me.png" alt="me" className="aboutImg" />
              </div>

              <div className="textWrapper">
                <h1 className="aboutTitle" style={{ color: theme.title }}>
                  {texts.aboutTitle}
                </h1>
                <h4 className="aboutSubtitle" style={{ color: theme.title }}>
                  {texts.aboutSubtitle}
                </h4>
                <div className="contText">
                  <p className="aboutText" style={{ color: theme.text }}>
                    {texts.aboutText}
                  </p>
                </div>
                <div className="aditional">
                  <div className="buttons">

 {/*                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

                    <ButtonAbout
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      {texts.mySkills}
                    </ButtonAbout>  
                   

                    <a
                      href="https://drive.google.com/drive/folders/1-3BzJiMq9G7B4swkkRVwhB7k14z7gwBT?usp=sharing"
                      target="_blank"
                    >
                      <ButtonAbout>{texts.download}</ButtonAbout>
                    </a>
                    <a href="exampleModal">
                      <ButtonAbout>{texts.contact}</ButtonAbout>
                    </a>
                  </div>
                  <div className="aditionalSkills">
                    <div className="languages">
                      <p className="key">Idiomas:</p>
                      <p className="val"> Ingles, Español</p>
                    </div>
                    <div className="learning">
                      <p className="key">Aprendiendo:</p>
                      <p className="val">JAVA, Python</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="aboutBottom">
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
                {/*  </div>
                 <div className="technologies"> */}
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
            </div>
          </div>
          <Fade right>
            <div
              style={{ backgroundColor: theme.socialBgc }}
              className="social"
            >
              <SocialButton href="https://github.com/YayiArist" target="_blank">
                <BsGithub />
              </SocialButton>
              <SocialButton
                href="https://linkedin.com/in/yairys-aristigueta"
                target="_blank"
              >
                <BsLinkedin />
              </SocialButton>
              <SocialButton href="https://t.me/Yayitgdss" target="_blank">
                <BsTelegram />
              </SocialButton>
            </div>
          </Fade>
        </div>
      </Zoom>
    </div>
  );
}
