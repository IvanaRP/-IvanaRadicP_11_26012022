import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../../styles/Carousel.css'


function Carousel({ cover, pictures }) {



  const currentPicture = useRef(null);
  const counter = pictures.length;
 
  

  let pictureCounter = 0;
  useEffect(() => startCarousel());

  const startCarousel = () => {
    currentPicture.current.src = pictures[0];
  };

  const handleCarousel = (picture) => {
    currentPicture.current.src = pictures[picture - 1];
    animateCarousel(currentPicture);
  };

  const animateCarousel = () => {
    currentPicture.current.classList.add("fadeIn");
    setTimeout(() => {
      currentPicture.current.classList.remove("fadeIn");
    }, 700);
  };

  const goToPreviousPicture = () => {
    if (pictureCounter === 0) {
      handleCarousel(pictures.length);
      pictureCounter = pictures.length;
    }

    handleCarousel(pictureCounter);
    pictureCounter--;
  };

  const gotToNextPicture = () => {
    if (pictureCounter === pictures.length - 1) {
      startCarousel();
      pictureCounter = -1;
    }

    currentPicture.current.src = pictures[pictureCounter + 1];
    pictureCounter++;
  };


  console.log([currentPicture.length] + 1);
  console.log(pictureCounter + 1);
  console.log(counter);
  console.log(pictures[pictureCounter + 1])
  console.log([currentPicture].length)
  console.log(currentPicture.current.src);

  return (
    <div className="slideWrapper">
   
      <div className="slideContainer">
        {counter === 1 ? (
          <img src={cover} alt="Carrousel"  />
        ) : (
          <div>
             <FaChevronLeft id="chevron-icon-down" className="btn-left" onClick={goToPreviousPicture}/>
            <img
              src={currentPicture}
              ref={currentPicture}
              alt=""
              className="slideImg"
            />
    <p> {pictureCounter + 1}/{counter}</p>
             <FaChevronRight id="chevron-icon-down" className="btn-right" onClick={gotToNextPicture}/>
          </div>
          
        )}
         <p> {currentPicture + 1}/{counter}</p>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
};

export default Carousel;
