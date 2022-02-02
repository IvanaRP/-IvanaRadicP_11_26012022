// import {handleClickShow} from '../utils/function/event'
import PropTypes from "prop-types";
import "../../styles/Equipment.css";

import { FaChevronDown } from "react-icons/fa";

/**
 *
 * @param {props} equipment
 * @returns the location equipements
 * using handleClickShow function for displaying or not the content. By default content is not displayed.
 */

function Equipment({ equipment }) {
  function handleClick(e) {
    const content = document.getElementById("equipContent");

    if (content.style.display === "none") {
      content.style.display = "flex";
    } else {
      content.style.display = "none";
    }
  }

  return (
    <div className="equipWrapper">
      <div className="equip-header">
        <span>Equipements</span>
        <span id="chevron-descr">
          <FaChevronDown className="chevron-icon-down" onClick={handleClick} />
        </span>
      </div>
      <div className="equip-content" id="equipContent">
        <ul>
          {equipment.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Equipment.propTypes = {
  equipment: PropTypes.array.isRequired,
};

export default Equipment;
