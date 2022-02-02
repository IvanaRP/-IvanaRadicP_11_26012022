import React, { useState } from "react";
import { data } from "../../pages/datas/data";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/fa';

function Carousel() {
  // const [current, setCurrent] = useState(0);
  // const length = slides.length;

  return (
    <section className="slider">
      {/* <MdOutlineArrowBackIosNew className="left-arrow" />
      <MdOutlineArrowForwardIos className="right-arrow" />
      {data.map((location, index) => {
        return <img src={location.pictures} alt="imagecover"></img>;
      })} */}
    </section>
  );
}

export default Carousel;
