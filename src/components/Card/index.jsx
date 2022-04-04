import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ title, id, cover }) {
  return (
    <div className="cardContainer">
      <Link to={`/location/${id}`} className="cardLink">
        <div className="cardContent">
          <div className="cardTitle">{title}</div>
          <img src={cover} className="cardImg" alt="Cover" />
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
