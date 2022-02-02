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
    const icon = document.getElementById("equip-chevron-icon-down");

    console.log(icon)
    if (content.style.display === "none") {
      content.style.display = "flex";
      icon.classList.add("rotateIcon");
    } else {
      content.style.display = "none";
      icon.classList.remove("rotateIcon");
    }
  }

  return (
    <div className="equipWrapper">
      <div className="equip-header">
        <span>Equipements</span>
        <span id="chevron-descr">
          <FaChevronDown  id="equip-chevron-icon-down" className="chevron-icon-down" onClick={handleClick} />
        </span>
      </div>
      <div className="equip-content" id="equipContent">
        <ul className="equip-ul">
          {equipment.map((eq, index) => (
            <li className="equip-li" key={index}>{eq}</li>
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
