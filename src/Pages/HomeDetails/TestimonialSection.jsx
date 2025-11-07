// // // src/components/TestimonialSection.jsx (or wherever you prefer)
// // import React, { useState } from 'react';

// // import ChevronLeftIcon from '@heroicons/react/24/solid/ChevronLeftIcon';
// // import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';

// // import i1 from "../../../assets/newassets/doc1.jpg";
// // import i2 from "../../../assets/newassets/githubbbbbbbbbbb.png";
// // import i3 from "../../../assets/newassets/ppp.jpg";
// // import i4 from "../../../assets/newassets/bannerparoate.jpg";
// // import i5 from "../../../assets/newassets/imagesss.jpg";
// // import Q from "../../../assets/newassets/reviewQuote.png";

// // // Testimonial data moved directly into this file for a single-file solution
// // const testimonials = [
// //   {
// //     id: 1,
// //     quote: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
// //     name: "Rasel Ahamed",
// //     title: "CTO",
// //     img:{i1}, // Placeholder grey circle
// //   },
// //   {
// //     id: 2,
// //     quote: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
// //     name: "Awlad Hossain",
// //     title: "Senior Product Designer",
// //     img:{i2}, // Placeholder purple circle
// //   },
// //   {
// //     id: 3,
// //     quote: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
// //     name: "Nasir Uddin",
// //     title: "CEO",
// //     img:{i3}, // Placeholder grey circle
// //   },
// //   {
// //     id: 4,
// //     quote: "The ergonomic design of this corrector has significantly reduced my back pain during long working hours. Highly recommend for desk job professionals!",
// //     name: "Faruk Islam",
// //     title: "Software Engineer",
// //     img:{i4},
// //   },
// //   {
// //     id: 5,
// //     quote: "I've tried many posture correctors, but Posture Pro is by far the most comfortable and effective. My shoulders feel much more aligned.",
// //     name: "Sadia Rahman",
// //     title: "Fitness Instructor",
// //     img:{i5},
// //   },
// // ];

// // const TestimonialSection = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const totalTestimonials = testimonials.length;

// //   const handlePrev = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1));
// //   };

// //   const handleNext = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1));
// //   };

// //   const handleDotClick = (index) => {
// //     setCurrentIndex(index);
// //   };

// //   // The quote icon SVG (reusable component)
// //   const QuoteIcon = () => (
// //     // <svg
// //     //   xmlns="http://www.w3.org/2000/svg"
// //     //   className="h-10 w-10 text-gray-300 transform -scale-x-100 mb-4" // Flipped horizontally
// //     //   fill="currentColor"
// //     //   viewBox="0 0 24 24"
// //     // >
// //     //   <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.217.835-4.166 1.66-5.013 2.913-.195.275-.387.569-.59 1.15-.295.885-.453 1.554-.453 2.396 0 2.428 2.395 4.388 4.474 4.388 2.009 0 3.92-1.551 3.92-4.044 0-.507-.063-1.028-.153-1.533l2.083-.405c.188.943.284 1.884.284 2.906 0 5.74-4.855 9.387-11.041 9.387-5.188 0-9.826-3.116-9.826-10.875zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.217.835-4.166 1.66-5.013 2.913-.195.275-.387.569-.59 1.15-.295.885-.453 1.554-.453 2.396 0 2.428 2.395 4.388 4.474 4.388 2.009 0 3.92-1.551 3.92-4.044 0-.507-.063-1.028-.153-1.533l2.083-.405c.188.943.284 1.884.284 2.906 0 5.74-4.855 9.387-11.041 9.387-5.188 0-9.826-3.116-9.826-10.875z"/>
// //     // </svg>
// //     img:{Q}
// //   );

// //   return (
// //     <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
// //       <div className="max-w-7xl mx-auto text-center">
// //         {/* Top Illustration (assuming it's a background or static image) */}
// //         {/* Replace with your actual SVG or image path */}
// //         <div className="mb-8 flex justify-center">
// //           <img src="https://via.placeholder.com/150x100?text=Your+Illustration" alt="Illustration" className="h-24 w-auto" />
// //         </div>

// //         <h2 className="text-4xl font-bold text-gray-800 mb-4">What our customers are saying</h2>
// //         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
// //           Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce
// //           pain, and strengthen your body with ease!
// //         </p>

// //         {/* Testimonial Cards Slider */}
// //         <div className="relative overflow-hidden">
// //           {/*
// //             The transform property uses `currentIndex`.
// //             We display 3 cards at a time on medium screens and larger (`md:w-1/3`).
// //             So, each 'slide' effectively moves by 1/3rd of the total width.
// //             On smaller screens, `w-full` means each card takes 100%, so we need to adjust
// //             the transform for a single card view.
// //             For simplicity in this single file, we'll keep the 3-card view logic
// //             and ensure it stacks correctly on small screens. For perfect small-screen
// //             sliding, you'd need a more complex `translateX` or a dedicated slider lib.
// //           */}
// //           <div
// //             className="flex transition-transform duration-500 ease-in-out"
// //             style={{
// //               transform: `translateX(-${currentIndex * (100 / totalTestimonials)}%)`, // This handles full width per item
// //             }}
// //           >
// //             {testimonials.map((testimonial) => (
// //               <div
// //                 key={testimonial.id}
// //                 // For a single card to be shown at a time on small screens:
// //                 // w-full flex-shrink-0 p-4
// //                 // For 3 cards visible on wider screens, you'd need more specific styling
// //                 // that adjusts `min-w` and `w` based on breakpoints.
// //                 // For this example, we will adjust the transform to move by one card at a time.
// //                 className="flex-shrink-0 w-full md:w-1/3 p-4" // This makes cards take 1/3 on md screens, full on small
// //               >
// //                 <div className="card bg-gray-50 shadow-md p-6 h-full flex flex-col items-center text-left">
// //                   <QuoteIcon /> {/* Quote icon */}
// //                   <p className="text-gray-700 text-base mb-6 flex-grow">{testimonial.quote}</p>
// //                   <div className="border-t border-gray-300 border-dotted w-full my-4"></div> {/* Dotted separator */}
// //                   <div className="flex items-center w-full">
// //                     <div className="avatar mr-4">
// //                       <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
// //                         <img src={testimonial.avatar} alt={testimonial.name} className="object-cover w-full h-full" />
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
// //                       <p className="text-gray-500 text-sm">{testimonial.title}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Navigation Arrows */}
// //           <button
// //             onClick={handlePrev}
// //             className="btn btn-circle btn-sm absolute left-0 top-1/2 -translate-y-1/2 transform bg-white text-gray-600 border-gray-300 shadow-md hover:bg-gray-100 z-10 ml-4"
// //             aria-label="Previous testimonial"
// //           >
// //             <ChevronLeftIcon className="h-5 w-5" />
// //           </button>
// //           <button
// //             onClick={handleNext}
// //             className="btn btn-circle btn-sm absolute right-0 top-1/2 -translate-y-1/2 transform bg-white text-gray-600 border-gray-300 shadow-md hover:bg-gray-100 z-10 mr-4"
// //             aria-label="Next testimonial"
// //           >
// //             <ChevronRightIcon className="h-5 w-5" />
// //           </button>
// //         </div>

// //         {/* Pagination Dots */}
// //         <div className="flex justify-center mt-8 space-x-2">
// //           {testimonials.map((_, index) => (
// //             <button
// //               key={index}
// //               className={`h-2 w-2 rounded-full transition-all duration-300 ${
// //                 index === currentIndex ? 'bg-green-500 w-6' : 'bg-gray-300'
// //               }`}
// //               onClick={() => handleDotClick(index)}
// //               aria-label={`Go to slide ${index + 1}`}
// //             ></button>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialSection;  
// // //please dont change my code my image not show solve 




// // src/components/TestimonialSection.jsx
// import React, { useState } from 'react';

// import ChevronLeftIcon from '@heroicons/react/24/solid/ChevronLeftIcon';
// import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';

// import i1 from "../../../assets/newassets/doc1.jpg";
// import i2 from "../../../assets/newassets/githubbbbbbbbbbb.png";
// import i3 from "../../../assets/newassets/ppp.jpg";
// import i4 from "../../../assets/newassets/bannerparoate.jpg";
// import i5 from "../../../assets/newassets/imagesss.jpg";
// import Q from "../../../assets/newassets/reviewQuote.png";

// import call from "../../../assets/newassets/call.png";
// const testimonials = [
//   {
//     id: 1,
//     quote: "A posture corrector works by providing support and gentle alignment...",
//     name: "Rasel Ahamed",
//     title: "CTO",
//     img: i1,
//   },
//   {
//     id: 2,
//     quote: "A posture corrector works by providing support and gentle alignment...",
//     name: "Awlad Hossain",
//     title: "Senior Product Designer",
//     img: i2,
//   },
//   {
//     id: 3,
//     quote: "A posture corrector works by providing support and gentle alignment...",
//     name: "Nasir Uddin",
//     title: "CEO",
//     img: i3,
//   },
//   {
//     id: 4,
//     quote: "The ergonomic design of this corrector has significantly reduced...",
//     name: "Faruk Islam",
//     title: "Software Engineer",
//     img: i4,
//   },
//   {
//     id: 5,
//     quote: "I've tried many posture correctors, but Posture Pro is by far the most...",
//     name: "Sadia Rahman",
//     title: "Fitness Instructor",
//     img: i5,
//   },
// ];

// const TestimonialSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalTestimonials = testimonials.length;

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1));
//   };

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const QuoteIcon = () => (
//     <img src={Q} alt="Quote Icon" className="w-10 h-10 mb-4" />
//   );

//   return (
//     <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <div className="mb-8 flex justify-center">
//          <img
//   src={call}
//   alt="Illustration"
//   className="h-24 w-auto"
// />

//         </div>

//         <h2 className="text-4xl font-bold text-gray-800 mb-4">
//           What our customers are saying
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//           Enhance posture, mobility, and well-being effortlessly with Posture Pro.
//         </p>

//         {/* Testimonials Carousel */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / totalTestimonials)}%)`,
//             }}
//           >
//             {testimonials.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="flex-shrink-0 w-full md:w-1/3 p-4"
//               >
//                 <div className="card bg-gray-50 shadow-md p-6 h-full flex flex-col items-center text-left">
//                   <QuoteIcon />
//                   <p className="text-gray-700 text-base mb-6 flex-grow">
//                     {testimonial.quote}
//                   </p>
//                   <div className="border-t border-gray-300 border-dotted w-full my-4"></div>
//                   <div className="flex items-center w-full">
//                     <div className="avatar mr-4">
//                       <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
//                         <img
//                           src={testimonial.img}
//                           alt={testimonial.name}
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">
//                         {testimonial.name}
//                       </h3>
//                       <p className="text-gray-500 text-sm">{testimonial.title}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Arrows */}
//           <button
//             onClick={handlePrev}
//             className="btn btn-circle btn-sm absolute left-0 top-1/2 -translate-y-1/2 transform bg-white text-gray-600 border-gray-300 shadow-md hover:bg-gray-100 z-10 ml-4"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeftIcon className="h-5 w-5" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="btn btn-circle btn-sm absolute right-0 top-1/2 -translate-y-1/2 transform bg-white text-gray-600 border-gray-300 shadow-md hover:bg-gray-100 z-10 mr-4"
//             aria-label="Next testimonial"
//           >
//             <ChevronRightIcon className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               className={`h-2 w-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? 'bg-green-500 w-6' : 'bg-gray-300'
//               }`}
//               onClick={() => handleDotClick(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;
// i want which item show that display shadow-lg (and another are display non disable)



// src/components/TestimonialSection.jsx


import React, { useState } from 'react';

import ChevronLeftIcon from '@heroicons/react/24/solid/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import { Button } from "@material-tailwind/react";
// Assuming these paths are correct in your project structure doc1.jpg
import i1 from "../../assets/images/doc1.jpg";
import i2 from "../../assets/images/githubbbbbbbbbbb.png";
import i3 from "../../assets/images/ppp.jpg";
import i4 from "../../assets/images/bannerparoate.jpg";
import i5 from "../../assets/images/imagesss.jpg";
import Q from "../../assets/images/reviewQuote.png";
import call from "../../assets/images/call.png";

const testimonials = [
  {
    id: 1,
    quote: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Rasel Ahamed",
    title: "CTO",
    img: i1,
  },
  {
    id: 2,
    quote: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Awlad Hossain",
    title: "Senior Product Designer",
    img: i2,
  },
  {
    id: 3,
    quote: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Nasir Uddin",
    title: "CEO",
    img: i3,
  },
  {
    id: 4,
    quote: "The ergonomic design of this corrector has significantly reduced my back pain during long working hours. Highly recommend for desk job professionals!",
    name: "Faruk Islam",
    title: "Software Engineer",
    img: i4,
  },
  {
    id: 5,
    quote: "I've tried many posture correctors, but Posture Pro is by far the most comfortable and effective. My shoulders feel much more aligned.",
    name: "Sadia Rahman",
    title: "Fitness Instructor",
    img: i5,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const QuoteIcon = () => (
    <img src={Q} alt="Quote Icon" className="w-10 h-10 mb-4" />
  );

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <img src={call} alt="Illustration" className="h-24 w-auto" />
        </div>

        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
          What our customers are saying
        </h2>
        <p className="text-lg  text-black dark:text-white max-w-2xl mx-auto mb-12">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        </p>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              // For a 3-card visible slider, we want to move by 1/3 of the container width per slide.
              // We'll apply responsiveness with Tailwind to ensure `w-full` on small screens
              // and `md:w-1/3` on medium/large screens.
              // To ensure only the `currentIndex` card is truly centered and highlighted,
              // while showing partial adjacent cards, we need a slightly more complex transform.
              // This calculation attempts to center the `currentIndex` card while allowing others to be partially visible.
              // It effectively moves the whole track by the width of (currentIndex - 1) cards on md screens,
              // or currentIndex card on small screens.
              transform: `translateX(calc(-${currentIndex} * (100% / ${totalTestimonials}) + (${currentIndex > 0 ? '16.6667%' : '0%'})))`, // Adjust for partial visibility of prev card
              // The `16.6667%` is roughly half of `1/3` width, to shift it left and bring the next card into view.
              // This might need fine-tuning based on exact card width/gap.
            }}
          >
            {testimonials.map((testimonial, index) => {
              // Calculate the difference in index from the current active slide
              const diff = Math.abs(index - currentIndex);

              let cardClasses = 'opacity-20 pointer-events-none'; // Default for far away cards

              if (index === currentIndex) {
                cardClasses = 'opacity-200 shadow-lg'; // Active card
              } else if (diff === 1 || (currentIndex === 0 && index === totalTestimonials - 1) || (currentIndex === totalTestimonials - 1 && index === 0)) {
                // Adjacent cards (including wrap-around for ends)
                cardClasses = 'opacity-25 shadow-none'; // Lightly visible
              }

              return (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-1/3 p-4" // Ensures 3 cards on md, 1 on small
                  style={{
                      // For a truly centered main card with visible neighbors:
                      // On md screens, each card is 1/3 width.
                      // If current is index 1, we want index 0 to be partially visible, index 1 centered.
                      // This is a tricky CSS transformation for a pure flexbox setup to perfectly center
                      // one item while showing parts of others without a dedicated slider library.
                      // The current translateX focuses on moving one card at a time.
                      // To make the middle card prominent and others partially visible
                      // we need to adjust translateX to center the current card visually.
                      // A simpler approach for the visual effect is changing opacity and shadow.
                  }}
                >
                  <div
                    className={`card bg-gray-50 p-6 h-full flex flex-col items-center text-left
                      transition-opacity transition-shadow duration-300 transform
                      ${cardClasses}
                      ${index === currentIndex ? 'scale-105' : 'scale-100'}
                    `}
                  >
                    <QuoteIcon />
                    <p className="text-gray-700 text-base mb-6 flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="border-t border-gray-300 border-dotted w-full my-4"></div>
                    <div className="flex items-center w-full">
                      <div className="avatar mr-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                          <img
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="btn btn-circle btn-sm absolute left-0 top-1/2 -translate-y-1/2 transform bg-white text-gray-600 border-gray-300 shadow-md hover:bg-gray-100 z-10 ml-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="btn btn-circle btn-sm absolute right-0 top-1/2 -translate-y-1/2 transform bg-white text-gray-600 border-gray-300 shadow-md hover:bg-gray-100 z-10 mr-4"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-green-500 w-6' : 'bg-gray-300'
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;