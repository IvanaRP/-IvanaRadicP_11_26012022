// import { useEffect } from "react";

// /**
//  * useCarousel hook
//  * @param {object} currentPicture
//  * @param {array} pictures
//  * @returns previous and next element to display
//  */

// export const useCarousel = (currentPicture, pictures) => {
//   let pictureCounter = 0;
//   useEffect(() => startCarousel());

//   const startCarousel = () => {
//     currentPicture.current.src = pictures[0];
//   };

//   const handleCarousel = (picture) => {
//     currentPicture.current.src = pictures[picture - 1];
//     animateCarousel(currentPicture);
//   };

//   const animateCarousel = () => {
//     currentPicture.current.classList.add("fadeIn");
//     setTimeout(() => {
//       currentPicture.current.classList.remove("fadeIn");
//     }, 700);
//   };

//   const goToPreviousPicture = () => {
//     if (pictureCounter === 0) {
//       handleCarousel(pictures.length);
//       pictureCounter = pictures.length;
//     }

//     handleCarousel(pictureCounter);
//     pictureCounter--;
//   };

//   const gotToNextPicture = () => {
//     // For DEBUGG : console.log(pictureCounter + " > " + pictures.length)
//     if (pictureCounter === pictures.length - 1) {
//       startCarousel();
//       pictureCounter = -1;
//     }

//     currentPicture.current.src = pictures[pictureCounter + 1];
//     pictureCounter++;
//   };

//   return { goToPreviousPicture, gotToNextPicture };
// };
