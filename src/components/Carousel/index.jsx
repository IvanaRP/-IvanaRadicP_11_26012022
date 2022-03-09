import { useState } from 'react'
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../../styles/Carousel.css'




function Carousel({ cover, pictures }) {


    const [current, setCurrent] = useState(0)
    const counter = pictures.length

    const goToPreviousPicture = () => {
        setCurrent(current === counter - 1 ? 0 : current + 1)
    }
    const gotToNextPicture = () => {
        setCurrent(current === 0 ? counter - 1 : current - 1)
    }

    
    return (
        <div className="slideWrapper">
       
          <div className="slideContainer">
            {counter === 1 ? (
              <img src={cover} alt="Carrousel"  />
            ) : (
              <div>
                 <FaChevronLeft id="chevron-icon-down" className="btn-left" onClick={goToPreviousPicture}/>
                 {pictures.map(
                    (pic, index) =>
                        index === current && (
                            <img  key={pic} src={pic} alt="" className="slideImg" />
                        )
                  )}
                  <p className="slideNumber"> {current + 1}/{counter}</p>
                 <FaChevronRight id="chevron-icon-down" className="btn-right" onClick={gotToNextPicture}/>
              </div>
              
            )}
            
          </div>
        </div>
      );


}


Carousel.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    pictures: PropTypes.array.isRequired,
  };
export default Carousel