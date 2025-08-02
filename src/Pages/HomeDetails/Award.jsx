// import React from 'react';

// const Award = () => {
//     return (
//         <div className="bg-gray-100 py-16">
//              <p className="mt-1  mb-5 text-3xl leading-8  tracking-tight text-gray-900 sm:text-4xl text-center">
//                       Go <span  className='text-green-600'>GREEN</span>  Our Ambission
//                     </p>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
//                     {/* Stat Item 1: Our Staff */}
//                     <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
//                         {/* Icon for Our Staff (replace with actual SVG or icon component) */}
//                         <svg className="h-16 w-16 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.5.86 2.47 2.37 2.47 3.95V19h5v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//                         </svg>
//                         <p className="text-xl font-medium text-gray-700">Our Staff</p>
//                         <p className="mt-2 text-4xl font-extrabold text-gray-900">145</p>i want counting feature add
//                     </div>

//                     {/* Stat Item 2: Award */}
//                     <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
//                         {/* Icon for Award (replace with actual SVG or icon component) */}
//                         <svg className="h-16 w-16 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                         </svg>
//                         <p className="text-xl font-medium text-gray-700">Award</p>
//                         <p className="mt-2 text-4xl font-extrabold text-gray-900">152</p>i want counting feature add
//                     </div>

//                     {/* Stat Item 3: Cup Coffee */}
//                     <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
//                         {/* Icon for Cup Coffee (replace with actual SVG or icon component) */}
//                         <svg className="h-16 w-16 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM8 15c-1.1 0-2-.9-2-2V5h2v8h8V5h2v8c0 1.1-.9 2-2 2H8z" />
//                         </svg>
//                         <p className="text-xl font-medium text-gray-700">Cup Coffee</p>
//                         <p className="mt-2 text-4xl font-extrabold text-gray-900">780</p>i want counting feature add
//                     </div>

//                     {/* Stat Item 4: Happy People */}
//                     <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
//                         {/* Icon for Happy People (replace with actual SVG or icon component) */}
//                         <svg className="h-16 w-16 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//                         </svg>
//                         <p className="text-xl font-medium text-gray-700">Happy People</p>
//                         <p className="mt-2 text-4xl font-extrabold text-gray-900">18560</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Award;



import React from 'react';
import CountUp from 'react-countup';
import { Button } from "@material-tailwind/react";
const Award = () => {
    return (
        <div className=" py-16">
            
            <p
    className="text-orange-500 font-semibold text-xl md:text-4xl mt-1 mb-5  leading-8 tracking-tight  sm:text-4xl text-center"
    style={{ fontFamily: '"My Soul", cursive' }}
  >
   OUR  <span className='text-green-600 ml-4 mr-4'>  Proud</span>   <span className='text-orange-500 font-bold'>Platform</span>
  </p>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">

                    {/* Stat Item 1: Our Staff */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                        <svg className="h-16 w-16 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.5.86 2.47 2.37 2.47 3.95V19h5v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                     
                        <p className="text-xl font-medium text-gray-700">Our Staff</p>
                        <p className="mt-2 text-4xl font-extrabold text-gray-900">
                            <CountUp end={145} duration={8} />
                        </p>
                    </div>

                    {/* Stat Item 2: Award */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                        {/* <svg className="h-16 w-16 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg> */}
                        <span style={{ fontSize: '40px' }}>🏅</span>

                        <p className="text-xl font-medium text-gray-700">Award</p>
                        <p className="mt-2 text-4xl font-extrabold text-gray-900">
                            <CountUp end={152} duration={8} />
                        </p>
                    </div>

                    {/* Stat Item 3: Cup Coffee */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                      
                      <span style={{ fontSize: '40px' }}>🏆</span>

                        <p className="text-xl font-medium text-gray-700">Cup Trophy</p>
                        <p className="mt-2 text-4xl font-extrabold text-gray-900">
                            <CountUp end={780} duration={10} />
                        </p>
                    </div>

                    {/* Stat Item 4: Happy People */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                        <svg className="h-16 w-16 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <p className="text-xl font-medium text-gray-700">Happy People</p>
                        <p className="mt-2 text-4xl font-extrabold text-gray-900">
                            <CountUp end={18560} duration={20} separator="," />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;