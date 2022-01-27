import Card from '../Card'
import "../../styles/Gallery.css";
import React from "react";
import Data from "../../datas/logements.json";

// function Gallery() {
//   return (
//     <div className="galleryContainer">
//       {Data.map((post) => {
//         return (
//           <div className="cardContainer">
//             <p>{post.title}</p>
//             <img src={post.cover} alt="" className="galleryImg" />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

function Gallery() {

    return (
        <div className="galleryContainer">
            {Data && Data.map((location, index) => (
                <Card
                    key={`${location.title}-${index}`}
                    cover = {location.cover}
                    title={location.title}
                    id= {location.id}
                    
                />
            ))}

        </div>
    )
}

export default Gallery;
