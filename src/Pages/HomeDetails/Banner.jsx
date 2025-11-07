

// import React, { useState, useRef } from "react";
// import { Typography, Button } from "@material-tailwind/react";

// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [
//     {
//       image: "https://i.ibb.co/1Yd9yndw/section5.jpg",
//       title: "Best Friend for Your Best Time",
//       description:
//         "Every pet listed on PetAdoptPlatform meets rigorous health and welfare standards, giving you confidence in your new family member..",
//       cta: true,
//     },
//     {
//       image: "https://i.ibb.co/wF1Ffx5t/section6.jpg",
//     },
//     {
//       image: "https://i.ibb.co/W4Y0qVXz/section7.jpg",
//     },
//     {
//       image: "https://i.ibb.co/Lzks6kNd/section8.jpg",
//     },
//   ];

//   const carouselRef = useRef(null);

//   const handlePrev = () => {
//     const newIndex = (currentIndex - 1 + slides.length) % slides.length;
//     setCurrentIndex(newIndex);
//     scrollToSlide(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = (currentIndex + 1) % slides.length;
//     setCurrentIndex(newIndex);
//     scrollToSlide(newIndex);
//   };

//   const scrollToSlide = (index) => {
//     if (carouselRef.current) {
//       const slideWidth = carouselRef.current.offsetWidth;
//       carouselRef.current.scrollTo({
//         left: slideWidth * index,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="w-full  relative">
//       {/* Carousel Container */}
//       <div
//         className="flex overflow-x-hidden scroll-smooth w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] rounded-lg"
//         ref={carouselRef}
//       >
//         {slides.map((slide, idx) => (
//           <div key={idx} className="min-w-full relative">
//             <img
//               src={slide.image}
//               alt={`Slide ${idx + 1}`}
//               className="w-full h-full object-cover"
//             />
//             {slide.cta && (
//               <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/40 dark:bg-black/60">
//                 <Typography
//                   variant="h2"
//                   className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
//                 >
//                   {slide.title}
//                 </Typography>
//                 <Typography
//                   variant="paragraph"
//                   className="text-gray-200 text-sm sm:text-base max-w-md mt-3"
//                 >
//                   {slide.description}
//                 </Typography>
                
//                   <Button
//                     color="orange"
//                     size="lg"
//                     className="mt-6 bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:scale-105 transition-transform duration-300"
//                   >
//                     Explore our PetAdoptPlatform
//                   </Button>
                
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Left/Right Controls */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full shadow hover:scale-105 transition"
//       >
//         <ChevronLeftIcon className="w-6 h-6 text-black dark:text-white" />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full shadow hover:scale-105 transition"
//       >
//         <ChevronRightIcon className="w-6 h-6 text-black dark:text-white" />
//       </button>

//       {/* Dots */}
//       <div className="flex justify-center gap-2 py-4">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => {
//               setCurrentIndex(idx);
//               scrollToSlide(idx);
//             }}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === idx
//                 ? "bg-blue-500"
//                 : "bg-gray-300 dark:bg-gray-600"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;


// import React from 'react'

// export default function Banner() {
//   return (
//     <div>Banner</div>
//   )
// }


// import React from 'react';


// const backgroundImage = 'path-to-your-background-image.jpg';

// export default function Banner() {
//   return (
//     <div
//       className="hero min-h-[500px] lg:min-h-[600px] relative" // 'hero' and 'min-h' are from DaisyUI/Tailwind
//       style={{
//         backgroundImage: `url(${backgroundImage})`,"C:\Web-Development\Mile-stone-07\React\MileStone10\Assignment--10\Milestone-11\Milestone--12Final\BAssignment--12\pet-adoupt-platfrom-client\src\assets\images\rc.jpg"
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Overlay to darken the image slightly for better text readability, similar to the original image */}
//       <div className="hero-overlay bg-opacity-50"></div> 
      
//       {/* Content container */}
//       <div className="hero-content text-center text-neutral-content p-4 md:p-8">
//         <div className="max-w-xl">
//           {/* Main Title */}
//           <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
//             Best Friend for Your Best Time
//           </h1>
          
//           {/* Subtext */}
//           <p className="mb-8 text-lg sm:text-xl font-medium px-2 md:px-0">
//             Every pet listed on PetAdoptPlatform meets rigorous health 
//             and welfare standards, giving you confidence in your new family member..
//           </p>
          
//           {/* Button - using a gradient similar to the image */}
//           <button 
//             className="btn border-none text-white text-lg font-semibold px-8 py-3 
//                        bg-gradient-to-r from-amber-400 to-red-600 
//                        hover:from-amber-500 hover:to-red-700 transition duration-300
//                        shadow-xl"
//           >
//             EXPLORE OUR PETADOPTPLATFORM
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//C:\Web-Development\Mile-stone-07\React\MileStone10\Assignment--10\Milestone-11\Milestone--12Final\BAssignment--12\pet-adoupt-platfrom-client\src\Pages\HomeDetails\Banner.jsx

import React from 'react';
//import bannerImage from ''; // adjust the path relative to this file
import bannerImage from '../../assets/images/rc.jpg';

export default function Banner() {
  return (
    <div
      className="hero min-h-[500px] lg:min-h-[600px] relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      
      <div className="hero-content text-center text-neutral-content p-4 md:p-8 text-white">
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Best Friend for Your Best Time
          </h1>
          
          <p className="mb-8 text-lg sm:text-xl font-medium px-2 md:px-0">
            Every pet listed on PetAdoptPlatform meets rigorous health 
            and welfare standards, giving you confidence in your new family member.
          </p>
          
          <button 
            className="btn border-none text-white text-lg font-semibold px-4 py-3 
                       bg-gradient-to-r from-amber-400 to-red-600 
                       hover:from-amber-500 hover:to-red-700 transition duration-300
                       shadow-xl"
          >
            EXPLORE OUR PETADOPTPLATFORM
          </button>
        </div>
      </div>
    </div>
  );
}
