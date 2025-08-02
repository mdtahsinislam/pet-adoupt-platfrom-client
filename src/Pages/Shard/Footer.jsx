

import React from "react";
import { Typography } from "@material-tailwind/react";
import web from "../../assets/images/logo-selected.jpg";
import i1 from "../../assets/images/facebook.png";
import i2 from "../../assets/images/instagram.png";
import i3 from "../../assets/images/x.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Logo + Social */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500">PetAdoptPlatform</h1>
          </div>
          <div>
            <Typography variant="h6" className="mb-2 text-blue-600 dark:text-blue-400">Social</Typography>
            <div className="flex gap-3">
              <img src={i1} alt="Facebook" className="w-6 h-6" />
              <img src={i2} alt="Instagram" className="w-6 h-6" />
              <img src={i3} alt="X/Twitter" className="w-6 h-6 rounded dark:bg-white" />
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <Typography variant="h6" className="mb-3 text-blue-600 dark:text-blue-400">
            Services
          </Typography>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="#">Branding</a></li>
            <li><a className="hover:underline" href="#">Design</a></li>
            <li><a className="hover:underline" href="#">Marketing</a></li>
            <li><a className="hover:underline" href="#">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <Typography variant="h6" className="mb-3 text-blue-600 dark:text-blue-400">
            Company
          </Typography>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="#">About us</a></li>
            <li><a className="hover:underline" href="#">Contact</a></li>
            <li><a className="hover:underline" href="#">Jobs</a></li>
            <li><a className="hover:underline" href="#">Press kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <Typography variant="h6" className="mb-3 text-blue-600 dark:text-blue-400">
            Legal
          </Typography>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="#">Terms of use</a></li>
            <li><a className="hover:underline" href="#">Privacy policy</a></li>
            <li><a className="hover:underline" href="#">Cookie policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm">
        <Typography className="text-gray-600 dark:text-blue-500">
          &copy; {new Date().getFullYear()} PetAdoptPlatform. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
