import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import log from "../assets/images/Privacy-policy-rafiki.png";
import web  from "../assets/images/logo-selected.jpg";
const AuthLayout = () => {
    return (
        <div className="relative bg-base-200 min-h-screen flex flex-col lg:flex-row">
      
      {/* ✅ Top-left corner logo */}
      <Link to="/" className="absolute top-4 left-4 flex items-center z-10">
        <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-600 ml-2">PetAdoptPlatform</h1>
      </Link>

      {/* ✅ Left side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
        <img src={log} alt="Login" className="max-w-full h-auto" />
      </div>

      {/* ✅ Right side - Form or Outlet */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-6 ">
        <Outlet />
      </div>
    </div>
    );
};

export default AuthLayout;