import FullStar from '../../assets/star-full.svg'
import EmptyStar from '../../assets/star-empty.svg'
import PropTypes from 'prop-types'

import '../../styles/Rating.css'



function Rating({rating}) {

    const defaultRating = 5

    const fullStar = [...Array(rating)].map((star, index) => (<img src={FullStar} alt="" key={index} className="rates" />))
    const emptyStarNumber = defaultRating-rating
    const emptyStar = [...Array(emptyStarNumber)].map((star, index) => (<img src={EmptyStar} alt="" key={index} className="rates" />))

    return (
        <div className="ratingList">
            {fullStar}
            {emptyStar}
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired
}

export default Rating


