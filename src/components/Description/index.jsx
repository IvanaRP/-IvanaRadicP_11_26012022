import PropTypes from "prop-types";
import React from "react";
import "../../styles/Description.css";
import Dropdown from "../Dropdown";

const title = "Description";
function Description({ description }) {
  return (
    <div className="descrWrapper">
      <Dropdown title={title} content={description} />
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
