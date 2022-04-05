import PropTypes from "prop-types";
import "../../styles/Equipment.css";

import Dropdown from "../Dropdown";
const title = "Equipements";

function Equipment({ equipment }) {
  return (
    <div className="equipWrapper">
      <Dropdown
        title={title}
        content={equipment.map((eq, index) => (
          <ul className="equip-ul">
            <li className="equip-li" key={index}>
              {eq}
            </li>
          </ul>
        ))}
      />
    </div>
  );
}

Equipment.propTypes = {
  equipment: PropTypes.array.isRequired,
};

export default Equipment;
