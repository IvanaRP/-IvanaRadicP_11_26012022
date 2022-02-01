// import "../../styles/Location.css";
// // import { useFetch } from '../../utils/hooks/useFetch'
// // import { useParams } from 'react-router-dom'
// // import Carousel from '../../components/Carousel'
// // import Rating from '../../components/Rating'
// // import Description from '../../components/Description'
// // import Equipment from '../../components/Equipment'

// import Data from "../../datas/data.json";

// function Location() {
//   return (
//     <div >
//       {Data.map((post) => {
//         return (
//           <div >
//             <p>{post.title}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Location;

import React, { useState, useEffect } from 'react';
import { data } from '../datas/data';
import { Link, useParams } from 'react-router-dom';
const Location = () => {
  const [title, setTitle] = useState('default name');
  const { id } = useParams();
console.log(useParams())
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setTitle(newPerson.title);
  }, [id]);
  return (
    <div>
      <h1>{title}</h1>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  );
};

export default Location;


