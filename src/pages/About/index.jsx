import React from "react";
import "../../styles/About.css";
import aboutImg from "../../assets/background-about.png";
import Dropdown from "../../components/Dropdown";
import { about } from "../../datas/about";

function About() {
  return (
    <div className="locationWrapper">
      <div className="aboutContainer">
        <div>
          <img src={aboutImg} alt="" className="aboutImg" />
        </div>
      </div>

      {about.map(({ title, content }) => {
        return (
          <>
            <div className="contentWrapper">
              <div key={content}>
                <Dropdown title={title} content={content} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default About;
