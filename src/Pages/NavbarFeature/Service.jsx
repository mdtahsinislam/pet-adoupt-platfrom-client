// import React from 'react'

// export default function Service() {
//   return (
//     <div> i want service section show here i provide a picture include good looking i have dark/light theme togle feature suitable that also  middle dog image i given you given img</div>
//   )
// }

import React from 'react';
import { FaPaw, FaCut, FaBath, FaClinicMedical } from 'react-icons/fa';
import dogImageUrl from '../../assets/images/licensed-image.jpg';

// ✅ Service data array
const services = [
  {
    title: 'Full Grooming',
    description: 'Your pet is in good hands with us! Let your favorite get the best care in our center.',
    icon: FaCut,
  },
  {
    title: 'Styling',
    description: 'Our team of pet hair stylists is happy to make your animal look pretty and happy.',
    icon: FaPaw,
  },
  {
    title: 'Bath & Dry',
    description: 'We use a big range of shampoos for all different coat types and breeds.',
    icon: FaBath,
  },
  {
    title: 'Medical Bath',
    description: 'Bathing in our vet bath, using an appropriate shampoo that is kind to pet\'s skin.',
    icon: FaClinicMedical,
  },
];

// ✅ ServiceCard Component (fixed destructuring)
const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 p-4">
    <div className="flex items-center space-x-3">
      <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-500 dark:text-orange-200">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 dark:text-gray-400 max-w-xs md:max-w-none">
      {description}
    </p>
  </div>
);

// ✅ Main Service Section
export default function Service() {
 //const dogImageUrl = 'src/assets/images/licensed-image.jpg';


  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="mt-3 inline-block">
            <FaPaw className="w-6 h-6 text-orange-500" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
          {/* Left Column */}
          <div className="col-span-2 lg:col-span-1 space-y-12 order-1 lg:order-1">
            <div className="flex justify-end">
              <ServiceCard {...services[0]} />
            </div>
            <div className="flex justify-end">
              <ServiceCard {...services[2]} />
            </div>
          </div>

          {/* Center Image */}
          <div className="col-span-2 lg:col-span-1 flex justify-center order-3 lg:order-2">
            <img
              src={dogImageUrl}
              alt="A cute Yorkshire Terrier with a red bow tie, representing our services"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="col-span-2 lg:col-span-1 space-y-12 order-2 lg:order-3">
            <div className="flex justify-start">
              <ServiceCard {...services[1]} />
            </div>
            <div className="flex justify-start">
              <ServiceCard {...services[3]} />
            </div>
          </div>
        </div>

        {/* Note */}
       <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
  *Our services are performed by trained professionals ensuring safety, hygiene, and satisfaction.
</p>

      </div>
    </section>
  );
}
