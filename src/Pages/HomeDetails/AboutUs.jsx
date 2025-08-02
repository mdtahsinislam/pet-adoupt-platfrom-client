// import React from 'react';
// import { Typography, Button } from '@material-tailwind/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaw, faDog, faAward } from '@fortawesome/free-solid-svg-icons';
// import img from "../../../assets/images/section1.png"
// // No longer importing bannerimg from section1.png as per the section2.jpg image
// // We will use the image provided in section2.jpg directly
// // If you have section2.jpg in your assets, you can import it like:
// // import section2Image from "../../../assets/images/section2.jpg";
// // For this example, I'll use the provided URL for section2.jpg.

// const AboutUs = () => {
//     return (
//         <section className="container mx-auto py-16 px-4">
//             <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//                 {/* Left Section: Image and Paw Print */}
//                 <div className="relative w-full lg:w-1/2 flex justify-center items-center p-8 lg:p-0"> {/* Added padding for better spacing on smaller screens */}
//                     <img  {img}
                    
//                         className="rounded-lg shadow-xl w-full h-auto max-w-lg lg:max-w-none object-cover"
//                     />
//                     <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 opacity-80 z-0">
                        
//                         <FontAwesomeIcon icon={faPaw} className="text-orange-500 text-[150px] lg:text-[250px] xl:text-[300px]" />
//                     </div>{/* Large paw print icon, adjusted positioning for the visual effect */}
//                 </div>

//                 {/* Right Section: Content */}
//                 <div className="w-full lg:w-1/2 text-center lg:text-left">
//                     <Typography
//                         variant="small"
//                         color="orange"
//                         className="font-bold uppercase mb-2"
//                     >
//                         About Us
//                     </Typography>
//                     <Typography
//                         variant="h2"
//                         color="blue-gray"
//                         className="mb-6 font-bold leading-tight"
//                     >
//                         Best Service to Breed Your Loved Dog
//                     </Typography>
//                     <Typography
//                         variant="lead"
//                         color="gray"
//                         className="mb-8 text-lg"
//                     >
//                         Welcome to **PetAdoptPlatform**! Our journey began with a simple yet profound goal: to create a compassionate bridge between loving families and pets seeking forever homes. We understand the profound joy and companionship a pet brings into your life, and our platform is meticulously designed to make the adoption process seamless, transparent, and joyful. We're dedicated to ensuring every pet finds a caring home and that every family discovers their perfect furry companion, contributing to a world where every pet is cherished.
//                     </Typography>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                         <div className="flex items-start gap-4">
//                             <FontAwesomeIcon icon={faDog} className="text-orange-500 text-3xl mt-1" />
//                             <div>
//                                 <Typography variant="h5" color="blue-gray" className="font-bold">
//                                     Professional Breeder
//                                 </Typography>
//                                 <Typography variant="paragraph" color="gray">
//                                     We collaborate exclusively with ethical and professional breeders committed to the health, well-being, and responsible rehoming of animals.
//                                 </Typography>
//                             </div>
//                         </div>
//                         <div className="flex items-start gap-4">
//                             <FontAwesomeIcon icon={faAward} className="text-orange-500 text-3xl mt-1" />
//                             <div>
//                                 <Typography variant="h5" color="blue-gray" className="font-bold">
//                                     Standard Quality
//                                 </Typography>
//                                 <Typography variant="paragraph" color="gray">
//                                     Every pet listed on PetAdoptPlatform meets rigorous health and welfare standards, giving you confidence in your new family member.
//                                 </Typography>
//                             </div>
//                         </div>
//                     </div>

//                     <Button color="orange" size="lg" className="flex items-center gap-2 mx-auto lg:mx-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                         About Us
//                         <FontAwesomeIcon icon={faPaw} />
//                     </Button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutUs;



import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
// Import icons directly from react-icons/fa (for Font Awesome)
import { FaPaw, FaDog, FaAward } from 'react-icons/fa'; // Changed imports
import img from "../../assets/images/section1.png"; 

const AboutUs = () => {
    return (
        <section className="container mx-auto py-16 px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Section: Image and Paw Print */}
                <div className="relative w-full lg:w-1/2 flex justify-center items-center p-8 lg:p-0">
                    <img
                        src={img}
                        alt="Pet Adoption"
                        className="rounded-lg shadow-xl w-full h-auto max-w-lg lg:max-w-none object-cover"
                    />
                   
                </div>

                {/* Right Section: Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <Typography
                        variant="small"
                        color="orange"
                        className="font-bold uppercase mb-2"
                    >
                        About Us
                    </Typography>
                    <Typography
                        variant="h3"
                        color="blue-gray"
                        className="mb-6 font-bold leading-tight"
                    >
                        Best Service to Breed Your Loved Pet's
                    </Typography>
                    <Typography
                        variant="lead"
                        color="gray"
                        className="mb-8 text-lg"
                    >
                        Welcome to **PetAdoptPlatform**! Our journey began with a simple yet profound goal: to create a compassionate bridge between loving families and pets seeking forever homes. We understand the profound joy and companionship a pet brings into your life, and our platform is meticulously designed to make the adoption process seamless, transparent, and joyful. We're dedicated to ensuring every pet finds a caring home and that every family discovers their perfect furry companion, contributing to a world where every pet is cherished.
                    </Typography>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="flex items-start gap-4">
                            {/* Use FaDog component directly */}
                            <FaDog className="text-orange-500 text-5xl mt-1" />
                            <div>
                                <Typography variant="h5" color="blue-gray" className="font-bold">
                                    Professional Breeder
                                </Typography>
                                <Typography variant="paragraph" color="gray">
                                    We collaborate exclusively with ethical and professional breeders committed to the health, well-being, and responsible rehoming of animals.
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            {/* Use FaAward component directly */}
                            <FaAward className="text-orange-500 text-4xl  mt-1" />
                            <div>
                                <Typography variant="h5" color="blue-gray" className="font-bold">
                                    Standard Quality
                                </Typography>
                                <Typography variant="paragraph" color="gray">
                                    Every pet listed on PetAdoptPlatform meets rigorous health and welfare standards, giving you confidence in your new family member.
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <Button color="orange" size="lg" className="flex items-center gap-2 mx-auto lg:mx-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        About Us
                        {/* Use FaPaw component directly */}
                        <FaPaw />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;