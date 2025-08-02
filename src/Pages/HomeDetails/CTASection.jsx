




import React from 'react';
import { Button } from "@material-tailwind/react";

const CTASection = () => {
  return (
    <section className="relative max-w-7xl mx-auto min-h-[80vh] py-16 md:py-24 overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/vxS5dR0B/section10.jpg"
          alt="Happy Pet Adoption"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      </div>

      {/* Text & Buttons */}
      <div className="relative z-10 container mx-auto mt-16 px-4 text-center max-w-4xl">
        <h2 className="text-2xl md:text-5xl text-white mb-4 leading-snug">
          Give a New Life, Save a Heart!
        </h2>
        <p className="text-lg md:text-2xl text-white/90 mb-8">
          Welcome a pet into your home and change their life. Begin a new chapter of love and joy today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            color="white"
            className="py-3 px-8 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-105 text-base md:text-lg font-semibold text-purple-700"
            onClick={() => window.location.href = ''}
          >
            Adopt a Pet
          </Button>
          <Button
            size="lg"
            variant="outlined"
            color="white"
            className="py-3 px-8 rounded-full border-white text-white hover:bg-white/10 transition text-base md:text-lg"
            onClick={() => window.location.href = ''}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-10 text-white text-opacity-80">
          <p className="text-sm md:text-base">Thousands of pets have already found their forever homes.</p>
          <p className="text-sm md:text-base">Now it's your turn!</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
//please don't change my code responsive for any device 