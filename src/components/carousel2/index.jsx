import { useState } from 'react'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';





function Carousel2({ cover, pictures }) {
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    const goToPreviousPicture = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const gotToNextPicture = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div>
         <FaChevronLeft id="chevron-icon-down" className="btn-left" onClick={goToPreviousPicture}/>
         <FaChevronRight id="chevron-icon-down" className="btn-right" onClick={gotToNextPicture}/>

         
            <div>
                {current + 1}/{length}
            </div>
            {pictures.map(
                (pic, index) =>
                    index === current && (
                        <img  key={pic} src={pic} alt="" />
                    )
            )}
        </div>
    )
}

export default Carousel2