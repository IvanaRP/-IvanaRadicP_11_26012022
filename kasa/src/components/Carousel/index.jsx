
import { data } from "../../pages/datas/data";
import { useParams } from "react-router-dom";
// import Description from "../../components/Description";
// import Equipement from "../../components/Equipment";

import "../../styles/Locations.css";
// import ImageSlider from "../../components/ImageSlider";


function Carousel() {
  const { idLocation } = useParams();
  // const { data } = useFetch('../datas/data.json')

  const myLocation = data?.filter((loc) => loc.id === idLocation);

  return (
    <div className="locationWrapper">
      {myLocation &&
        myLocation.map((location, index) => (
          <div key={`${location.rating}-${index}`} className="locationContainer">
           <h1>{location.rating}</h1>
          </div>
        ))}
    </div>
  );
}

export default Carousel;
