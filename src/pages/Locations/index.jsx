// import { data } from "../datas/data";
import { useParams } from "react-router-dom";
// import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import Description from "../../components/Description";
import Equipement from "../../components/Equipment";
import Rating from "../../components/Rating";

import "../../styles/Locations.css";
import data from "../../datas/data.json";

function Location() {
  const { idLocation } = useParams();

  // const lastSegmentOfUrl = window.location.href.split("/").pop();
  // console.log(lastSegmentOfUrl);

  const myLocation = data?.filter((loc) => loc.id === idLocation);

  return (
    <div className="locationWrapper">
      {myLocation &&
        myLocation.map((location, index) => (
          <div key={`${location.title}-${index}`} className="locationContainer">
            <Carousel
              id={idLocation}
              cover={location.cover}
              pictures={location.pictures}
            />

            <div className="location-header">
              <div className="location-header-info">
                <h1>{location.title}</h1>
                <h3>{location.location}</h3>
              </div>
              <div className="location-header-host">
                <span className="location-header-name">
                  {location.host["name"]}
                </span>
                <img src={location.host["picture"]} alt="Hôte illustration" />
              </div>
            </div>
            <div className="location-tags-rating">
              <div className="location-tagsList">
                <ul>
                  {location["tags"].map((tag, index) => (
                    <li key={`${index}-${idLocation}`}>{tag}</li>
                  ))}
                </ul>
              </div>
              <Rating rating={parseInt(location.rating)} />
            </div>

            <div className="location-content">
              <Description description={location["description"]} />
              <Equipement equipment={location["equipments"]} />
            </div>
          </div>
        ))}
    </div>
  );

}

export default Location;
