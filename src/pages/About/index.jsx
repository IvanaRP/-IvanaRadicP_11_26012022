import React, { useState } from "react";
import "../../styles/About.css";
import aboutImg from "../../assets/background-about.png";

import { about } from "../../datas/about";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function About() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked arrow is already active, then close it
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
    </div>
  );
}

export default About;
