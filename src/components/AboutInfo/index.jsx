import React from "react";
import "../../styles/About.css";
import { FaChevronDown } from "react-icons/fa";

// import { handleClickArrow } from "../HandleClickArrow/handleClickArrow";

function AboutInfo(props) {
  // function handleClickArrow() {
  //   const content = document.getElementById("description");
  //   const icon = document.getElementById("chevron");
  //   if (content.style.display === "none") {
  //     content.style.display = "flex";
  //     icon.classList.add("rotateIcon");
  //   } else {
  //     content.style.display = "none";
  //     icon.classList.remove("rotateIcon");
  //   }
  // }
  return (
    <div className="about-infoWrapper">
      <div className="about-info-header">
        <span className="feature-item-title">{props.title}</span>
        <span id="chevron">
          <FaChevronDown id="chevron-icon-down" className="chevron-icon-down" />
        </span>
      </div>

      <p id="description" className="about-info-content">
        {props.text}
      </p>
    </div>
  );
}

export default AboutInfo;
