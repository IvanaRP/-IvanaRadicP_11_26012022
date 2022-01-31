import "../../styles/Location.css";
// import { useFetch } from '../../utils/hooks/useFetch'
// import { useParams } from 'react-router-dom'
// import Carousel from '../../components/Carousel'
// import Rating from '../../components/Rating'
// import Description from '../../components/Description'
// import Equipment from '../../components/Equipment'

import Data from "../../datas/data.json";

function Location() {
  return (
    <div >
      {Data.map((post) => {
        return (
          <div >
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Location;



// {/* 
// function Location() {

//     const { idLocation } = useParams()
//     const { data } = useFetch('../datas/data.json')
//     const myLocation = data?.filter(loc => loc.id === idLocation)

//     return(
//         <div className="locationWrapper">
//             {myLocation && myLocation.map((location, index) => (
//                 <div  key={`${location.title}-${index}`} className="locationContainer">
//                     <Carousel
//                         id = {idLocation}
//                         cover = {location.cover}
//                         pictures = {location.pictures}
//                     />
//                     <div className="location-header">
//                         <div className="location-header-info">
//                             <h1>{location.title}</h1>
//                             <span>{location.location}</span>
//                         </div>
//                         <div className="location-header-host">
//                             <span>{location.host['name']}</span>
//                             <img src={location.host['picture']} alt="Hôte illustration" />
//                         </div>
//                     </div>
//                     <div className="location-header-tagsRates">
//                         <div className="tagsList">
//                             <ul>
//                                 {
//                                     location['tags'].map((tag, index) => (
//                                         <li key={`${index}-${idLocation}`}>{tag}</li>
//                                     ))
//                                 }
//                             </ul>
//                         </div>
//                         <Rating rating={parseInt(location.rating)} />
//                     </div>
//                     <div className="location-content">
//                         <Description description={location['description']} />
//                         <Equipment equipment={location['equipments']} />
//                     </div>
//                 </div>

//             ))}
//         </div>

//     )
// }

// export default Location */}
