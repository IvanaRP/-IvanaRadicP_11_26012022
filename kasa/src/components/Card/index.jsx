import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Card({ title, id }) {

    return  (
        <div className="cardContainer">
            <Link to={`/${id}`} className="cardLink">
                <div className="cardContent">
                    <span>{title}</span>
                </div>
            </Link>            
        </div>
    )   
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired 
}


export default Card