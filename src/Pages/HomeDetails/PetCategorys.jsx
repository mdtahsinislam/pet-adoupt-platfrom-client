

// import React from "react";
// import { Card, CardBody, Typography } from "@material-tailwind/react";
// import { Link } from "react-router-dom"; 
// // If using react-router-dom-dom, replace above with: import { Link } from "react-router-dom-dom";

// const categories = [
//   {
//     title: "Cats",
//     desc: "Find adorable cats",
//     img: "https://i.ibb.co/zT7gXND9/Catimage2.jpg",
//     border: "border-purple-500",
//     to: "/pets/cats",
//   },
//   {
//     title: "Dogs",
//     desc: "Discover loyal companions",
//     img: "https://i.ibb.co/fVbW6hVs/section3.jpg",
//     border: "border-blue-500",
//     to: "/pets/dogs",
//   },
//   {
//     title: "Rabbits",
//     desc: "Explore fluffy rabbits",
//     img: "https://i.ibb.co/QFPqv4hn/Rabitsimage6.jpg",
//     border: "border-green-500",
//     to: "/pets/rabbits",
//   },
//   {
//     title: "Fish",
//     desc: "For your aquarium",
//     img: "https://i.ibb.co/7NTcZvC8/fishimage3.jpg",
//     border: "border-red-500",
//     to: "/pets/fish",
//   },
//   {
//     title: "Birds",
//     desc: "Colorful and beautiful birds",
//     img: "https://i.ibb.co/kYvq5dn/peroat1.jpg",
//     border: "border-yellow-500",
//     to: "/pets/birds",
//   },
//   {
//     title: "Small Animals",
//     desc: "Guinea pigs, hamsters & more",
//     img: "https://i.ibb.co/1tXjQ553/section9.jpg",
//     border: "border-orange-500",
//     to: "/pets/small-animals",
//   },
// ];

// const PetCategorys = () => {
//   return (
//     <section className="py-12 bg-gray-50 dark:bg-black transition duration-300">
//       <div className="container mx-auto px-4">
//         <Typography
//           variant="h2"
//           className="text-center text-gray-800 dark:text-white font-bold mb-4"
//         >
//           Our Pet Categories
//         </Typography>
//         <Typography
//           variant="lead"
//           className="text-center text-gray-600 dark:text-white mb-12"
//         >
//           Find your favorite type of pet
//         </Typography>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {categories.map((pet, index) => (
//             <Link to={pet.to} key={index}>
//               <Card className="hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
//                 <CardBody className="text-center">
//                   <img
//                     src={pet.img}
//                     alt={pet.title}
//                     className={`mx-auto mb-4 rounded-full border-4 ${pet.border}`}
//                   />
//                   <Typography
//                     variant="h5"
//                     className="mb-2 text-gray-800 dark:text-black"
//                   >
//                     {pet.title}
//                   </Typography>
//                   <Typography className="text-gray-600 dark:text-black">
//                     {pet.desc}
//                   </Typography>
//                 </CardBody>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PetCategorys;




//gpt
import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Cats",
    desc: "Graceful, curious, and loving companions — find the perfect feline friend.",
    img: "https://i.ibb.co/zT7gXND9/Catimage2.jpg",
    border: "border-purple-400",
    to: "/pets/cats",
  },
  {
    title: "Dogs",
    desc: "Loyal, playful, and protective — discover your new best friend today.",
    img: "https://i.ibb.co/fVbW6hVs/section3.jpg",
    border: "border-blue-400",
    to: "/pets/dogs",
  },
  {
    title: "Rabbits",
    desc: "Soft, gentle, and full of personality — perfect for peaceful homes.",
    img: "https://i.ibb.co/QFPqv4hn/Rabitsimage6.jpg",
    border: "border-green-400",
    to: "/pets/rabbits",
  },
  {
    title: "Fish",
    desc: "Bring tranquility to your home with colorful, low-maintenance fish.",
    img: "https://i.ibb.co/7NTcZvC8/fishimage3.jpg",
    border: "border-cyan-400",
    to: "/pets/fish",
  },
  {
    title: "Birds",
    desc: "From parrots to finches — add music and color to your space.",
    img: "https://i.ibb.co/kYvq5dn/peroat1.jpg",
    border: "border-yellow-400",
    to: "/pets/birds",
  },
  {
    title: "Small Animals",
    desc: "Meet tiny pets like hamsters, guinea pigs, and more — small but full of love.",
    img: "https://i.ibb.co/1tXjQ553/section9.jpg",
    border: "border-orange-400",
    to: "/pets/small-animals",
  },
];

const PetCategorys = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:to-gray-900 transition duration-500">
      <div className="container mx-auto px-6">
        <Typography
          variant="h2"
          className="text-center text-gray-900 dark:text-white font-extrabold mb-6"
        >
          Explore Our Pet Categories
        </Typography>
        <Typography
          variant="lead"
          className="text-center text-gray-600 dark:text-gray-300 mb-12"
        >
          Discover your ideal companion from our diverse range of pets.
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {categories.map((pet, index) => (
            <Link to={pet.to} key={index}>
              <Card className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={pet.img}
                    alt={pet.title}
                    className="w-full h-56 object-cover transform hover:scale-110 transition duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ${pet.border}`}
                  ></div>
                </div>
                <CardBody className="text-center">
                  <Typography
                    variant="h5"
                    className="mb-2 font-semibold text-gray-900 dark:text-white"
                  >
                    {pet.title}
                  </Typography>
                  <Typography className="text-gray-600 dark:text-gray-300 text-sm">
                    {pet.desc}
                  </Typography>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCategorys;

