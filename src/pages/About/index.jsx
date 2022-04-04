import React, { useState } from "react";
import "../../styles/About.css";
import aboutImg from "../../assets/background-about.png";

import { about } from "../../datas/about";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function About() {
  const [clicked, setClicked] = useState(false);

  const toggle = (itemIndex) => {
    if (clicked === itemIndex) {
      //if clicked arrow is already active, then close it
      return setClicked(null);
    }

    setClicked(itemIndex);
  };
  return (
    <div className="aboutWrapper">
      <div className="aboutContainer">
        <div>
          <img src={aboutImg} alt="" className="aboutImg" />
        </div>
      </div>
      <div className="about-info">
        {about.map((item, itemIndex) => {
          return (
            <>
              <div
                className="about-info-header"
                onClick={() => toggle(itemIndex)}
                key={itemIndex}
              >
                <span className="about-item-title">{item.title}</span>
                <span>
                  {clicked === itemIndex ? (
                    <FaChevronDown
                      id="chevron-icon-down"
                      className="chevron-icon-down"
                    />
                  ) : (
                    <FaChevronUp />
                  )}
                </span>
              </div>
              {clicked === itemIndex ? (
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
