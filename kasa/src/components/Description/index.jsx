// import {handleClickShow} from '../utils/function/event'
import PropTypes from "prop-types";
import React from "react";
import "../../styles/Description.css";


import { FaChevronDown } from 'react-icons/fa';




/**
 * Description component
 * @param {props} description
 * @returns the location description
 * using handleClickShow function for displaying or not the content. By default content is not displayed.
 */

function Description({ description }) {

  function handleClick(e) {
    const content = document.getElementById("descrContent");
    const icon = document.getElementById("chevron-icon-down");
    if (content.style.display === "none") {
      content.style.display = "flex";
      icon.classList.add("rotateIcon");
    } else {
      content.style.display = "none";
      icon.classList.remove("rotateIcon");
    }
  }

  return (
    <div className="descrWrapper">
      <div className="descr-header" >
        <span>Description </span>
        <span id="chevron-descr" >
        <FaChevronDown id="chevron-icon-down" className="chevron-icon-down" onClick={handleClick}/>
        </span>
      </div>
      <div id="descrContent" className="descr-content">
        {description}
      </div>
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
