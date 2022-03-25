import React, { useState } from "react";
import "../../styles/About.css";
import aboutImg from "../../assets/background-about.png";

// import AboutInfo from "../../components/AboutInfo";
import { about } from "../../datas/about";
// import Dropdown from "../../components/Dropdown";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function About() {
  // function handleClickFiabilite() {
  //   const content = document.getElementById("fiabiliteContent");
  //   const icon = document.getElementById("chevron-fiabilite");
  //   if (content.style.display === "none") {
  //     content.style.display = "flex";
  //     icon.classList.add("rotateIcon");
  //   } else {
  //     content.style.display = "none";
  //     icon.classList.remove("rotateIcon");
  //   }
  // }

  // function handleClickRespect(e) {
  //   const content = document.getElementById("respectContent");
  //   const icon = document.getElementById("chevron-respect");
  //   if (content.style.display === "none") {
  //     content.style.display = "flex";
  //     icon.classList.add("rotateIcon");
  //   } else {
  //     content.style.display = "none";
  //     icon.classList.remove("rotateIcon");
  //   }
  // }

  // function handleClickService(e) {
  //   const content = document.getElementById("serviceContent");
  //   const icon = document.getElementById("chevron-service");
  //   if (content.style.display === "none") {
  //     content.style.display = "flex";
  //     icon.classList.add("rotateIcon");
  //   } else {
  //     content.style.display = "none";
  //     icon.classList.remove("rotateIcon");
  //   }
  // }

  // function handleClickResponsabilite(e) {
  //   const content = document.getElementById("responContent");
  //   const icon = document.getElementById("chevron-respon");
  //   if (content.style.display === "none") {
  //     content.style.display = "flex";
  //     icon.classList.add("rotateIcon");
  //   } else {
  //     content.style.display = "none";
  //     icon.classList.remove("rotateIcon");
  //   }
  // }
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <div className="aboutWrapper">
      <div className="aboutContainer">
        <div>
          <img src={aboutImg} alt="" className="aboutImg" />
        </div>
      </div>
      <div className="features">
        {about.map((item, index) => {
          return (
            <>
              <div
                className="about-info-header"
                onClick={() => toggle(index)}
                key={index}
              >
                <h1 className="feature-item-title">{item.title}</h1>
                <span>
                  {clicked === index ? (
                    <FaChevronDown
                      id="chevron-icon-down"
                      className="chevron-icon-down"
                    />
                  ) : (
                    <FaChevronUp />
                  )}
                </span>
              </div>
              {clicked === index ? (
                <div className="about-info-content">
                  <p>{item.text}</p>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
      {/* <div className="features">
        {about &&
          about.map((card, index) => (
            <AboutInfo key={index} title={card.title} text={card.text} />
          ))}
      </div> */}

      {/* <div className="about">
        <div className="about-infoWrapper">
          <div className="about-info-header">
            <span>Fiabilite </span>
            <span id="chevron-fiabilite">
              <FaChevronDown
                id="chevron-icon-down"
                className="chevron-icon-down"
                onClick={handleClickFiabilite}
              />
            </span>
          </div>
          <div id="fiabiliteContent" className="about-info-content">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </div>
        </div>

        <div className="about-infoWrapper">
          <div className="about-info-header">
            <span>Respect </span>
            <span id="chevron-respect">
              <FaChevronDown
                id="chevron-icon-down"
                className="chevron-icon-down"
                onClick={handleClickRespect}
              />
            </span>
          </div>
          <div id="respectContent" className="about-info-content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </div>

        <div className="about-infoWrapper">
          <div className="about-info-header">
            <span>Service </span>
            <span id="chevron-service">
              <FaChevronDown
                id="chevron-icon-down"
                className="chevron-icon-down"
                onClick={handleClickService}
              />
            </span>
          </div>
          <div id="serviceContent" className="about-info-content">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </div>
        </div>

        <div className="about-infoWrapper">
          <div className="about-info-header">
            <span>Responsabilite </span>
            <span id="chevron-respon">
              <FaChevronDown
                id="chevron-icon-down"
                className="chevron-icon-down"
                onClick={handleClickResponsabilite}
              />
            </span>
          </div>
          <div id="responContent" className="about-info-content">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </div>
        </div>
       
      </div> */}
    </div>
  );
}

export default About;
