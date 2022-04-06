import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";

import Rating from "../../components/Rating";

import Dropdown from "../../components/Dropdown";

import "../../styles/Locations.css";
import "../../styles/Description.css";
import "../../styles/Equipment.css";
import data from "../../datas/data.json";

function Location() {
  const { idLocation } = useParams();

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
              <div className="descrWrapper">
                <Dropdown
                  title={"Description"}
                  content={location.description}
                />
              </div>
              <div className="equipWrapper">
                <Dropdown
                  title={"Equipement"}
                  content={location["equipments"].map((eq, equip) => (
                    <ul className="equip-ul">
                      <li className="equip-li" key={`${equip}-${idLocation}`}>
                        {eq}
                      </li>
                    </ul>
                  ))}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Location;
