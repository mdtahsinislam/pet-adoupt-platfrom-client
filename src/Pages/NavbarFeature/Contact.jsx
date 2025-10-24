
// import React from 'react'

// export default function Contact() {
//   return (
//     <div>Contact add image structure good stylish i add dark/light theme here give me looking good</div>
//   )
// }


import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* === Left Side: Drop a Line (Contact Form) === */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
              Drop a Line
            </h2>

            <form className="space-y-6">
              {/* Name and Email fields */}
              <div className="flex flex-col sm:flex-row gap-6">
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="E-mail*"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Message field */}
              <div>
                <textarea
                  placeholder="Message*"
                  required
                  rows="7"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                ></textarea>
              </div>

              {/* Checkbox and Submit */}
              <div className="flex flex-col gap-4">
                <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                  <input
                    type="checkbox"
                    required
                    className="form-checkbox h-4 w-4 text-orange-500 border-gray-300 dark:border-gray-600 rounded focus:ring-orange-500 bg-white dark:bg-gray-800"
                  />
                  <span>I agree that my submitted data is being collected and stored.</span>
                </label>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* --- Right Side: Contacts --- */}
          <div className="mt-8 lg:mt-0">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
              Contacts
            </h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="w-5 h-5 text-orange-500" />
                <a 
                  href="mailto:grooming@info.com" 
                  className="text-lg text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  grooming@info.com
                </a>
              </div>
              
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="w-5 h-5 text-orange-500" />
                <a 
                  href="tel:18005554321" 
                  className="text-lg text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
                >
                  0(800)-555-43-21
                </a>
              </div>
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-5 h-5 text-orange-500 mt-1" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Chattagram , Bangladesh
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}