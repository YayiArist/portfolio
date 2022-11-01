import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import "./about.css";
import { Slide, Zoom, Fade } from "react-reveal";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import NavBar from '../NavBar/NavBar'
export default function About() {
  const { theme } = useContext(ThemeContext);
  const { texts, language, handleLanguage } = useContext(LanguageContext);
  const [modal, setModal] = useState(false);

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
    <>   <NavBar />
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
                  <Modal modalState={modal} setModalState={setModal} />
                  <div className="buttons">
                    <ButtonAbout onClick={() => setModal(!modal)}>
                      {texts.mySkills}
                    </ButtonAbout>

                    <a
                      href="https://drive.google.com/drive/folders/1-3BzJiMq9G7B4swkkRVwhB7k14z7gwBT?usp=sharing"
                      target="_blank"
                    >
                      <ButtonAbout>{texts.download}</ButtonAbout>
                    </a>
               <Link to= '/contact'>
                      <ButtonAbout>{texts.contact}</ButtonAbout>
                      </Link>
                  </div>
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
    <Projects/>
      <Contact/> 
    </>
  );
}
