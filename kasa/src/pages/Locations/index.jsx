// // import "../../styles/Location.css";
// // // import { useFetch } from '../../utils/hooks/useFetch'
// // // import { useParams } from 'react-router-dom'
// // // import Carousel from '../../components/Carousel'
// // // import Rating from '../../components/Rating'
// // // import Description from '../../components/Description'
// // // import Equipment from '../../components/Equipment'

// // import Data from "../../datas/data.json";

// // function Location() {
// //   return (
// //     <div >
// //       {Data.map((post) => {
// //         return (
// //           <div >
// //             <p>{post.title}</p>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // export default Location;

// import React, { useState, useEffect } from 'react';
// import { data } from '../datas/data';
// import { Link, useParams } from 'react-router-dom';

// const Location = () => {
//   const [title, setTitle] = useState('default name');
//   const { id } = useParams();

// console.log(useParams())
//   useEffect(() => {
//     const newPerson = data.find((person) => person.id === parseInt(id));
//     setTitle(newPerson.title);
//   }, [id]);
//   return (
//     <div>
//       <h1>{title}</h1>
//       <Link to='/about' className='btn'>
//         Back To People
//       </Link>
//     </div>
//   );
// };

// export default Location;



// import '../sass/Location.scss'
// import { useFetch } from '../utils/hooks/useFetch'
import { data } from '../datas/data';
import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import Description from  '../../components/Description'
import Equipement from '../../components/Equipment'


import "../../styles/Locations.css";
/**
 * Loaction component
 * @returns the location details page
 * using personalized hook useFetch for data
 * using useParams hooks to get the location id
 * using Carousel, Rating, Description and Equipment components
 */

function Location() {

    const { idLocation } = useParams()
    // const { data } = useFetch('../datas/data.json')
   
    const myLocation = data?.filter(loc => loc.id === idLocation)
    
    return(
        <div className="locationWrapper">
            {myLocation && myLocation.map((location, index) => (
                <div  key={`${location.title}-${index}`} className="locationContainer">
                  <Carousel 
                        id = {idLocation}
                        cover = {location.cover}
                        pictures = {location.pictures}
                    />
                    <div className="location-header">
                        <div className="location-header-info">
                            <h1>{location.title}</h1>
                            <span>{location.location}</span> 
                        </div>                       
                        <div className="location-header-host">
                            <span>{location.host['name']}</span>
                            <img src={location.host['picture']} alt="Hôte illustration" />
                        </div>                        
                    </div>
                    
                    <div className="location-content">
                      
                    <Description description={location['description']} />
                        <Equipement equipment={location['equipments']} />
                      
                    </div>                
                </div>
                        
            ))}
        </div>
        
    )
}

export default Location

