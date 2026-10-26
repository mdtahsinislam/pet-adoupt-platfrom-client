



// // // // // // // // import React from 'react';
// // // // // // // // import { Link, Outlet } from 'react-router-dom';  
// // // // // // // // import web from "../assets/images/logo-selected.jpg";
// // // // // // // // import { Switch, Typography } from "@material-tailwind/react";
// // // // // // // // import { useTheme } from "../context/ThemeContext";
// // // // // // // // //import { useAuthContext } from "../Pages/Shard/AuthProvider"; // ✅

// // // // // // // // import {
// // // // // // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // // // // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // // // // // } from 'react-icons/fa';
// // // // // // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // // // // // import { useAuthContext } from '../context/AuthProvider';

// // // // // // // // const DashbordLayout = () => {
// // // // // // // //   const { isDarkMode, toggleTheme } = useTheme();
// // // // // // // // //   const { user } = useAuthContext(); // ✅ get user
// // // // // // // // //   const isAdmin = user?.role === "admin"; // ✅ check admin role

// // // // // // // //   return (
// // // // // // // //     <div className="drawer lg:drawer-open min-h-screen flex">
// // // // // // // //       {/* Sidebar */}
// // // // // // // //       <div
// // // // // // // //         className="drawer-side bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 w-80 min-h-screen hidden lg:block pt-6"
// // // // // // // //         style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.1)', zIndex: 40 }}
// // // // // // // //       >
// // // // // // // //         {/* Logo + Dark Mode */}
// // // // // // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // // // // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // // // // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // // // // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // // // // // //               PetAdoptPlatform
// // // // // // // //             </h1>
// // // // // // // //           </Link>

// // // // // // // //           Dark Mode Toggle
// // // // // // // //           <div className="flex items-center gap-2">
// // // // // // // //             <Switch color="blue" onChange={toggleTheme} checked={isDarkMode} />
// // // // // // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // // // // // //               Dark Mode
// // // // // // // //             </Typography>
// // // // // // // //           </div>
// // // // // // // //           {/* Theme Toggle */}
// // // // // // // //                   <div className="flex items-center gap-2">
// // // // // // // //                     <Switch
// // // // // // // //                       id="theme-toggle"
// // // // // // // //                       checked={darkMode}
// // // // // // // //                       onChange={handleThemeToggle}
// // // // // // // //                       ripple={false}
// // // // // // // //                       className="h-5 w-10"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Dashboard Heading */}
// // // // // // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // // // // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // // // // // //         </h1>

// // // // // // // //         {/* Sidebar Menu */}
// // // // // // // //         <ul className="menu p-4 w-full text-base-content space-y-2">

// // // // // // // //           {/* ✅ Admin-only Links */}
           
// // // // // // // //               <li>
// // // // // // // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // // //                   Users
// // // // // // // //                 </Link>
// // // // // // // //               </li>

// // // // // // // //               <li>
// // // // // // // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // // //                   All Pets
// // // // // // // //                 </Link>
// // // // // // // //               </li>

// // // // // // // //               <li>
// // // // // // // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // // //                   All Donations
// // // // // // // //                 </Link>
// // // // // // // //               </li>
            
// // // // // // // //           {/* ✅ Common user links */}
// // // // // // // //           <li>
// // // // // // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // // //               Add a Pet
// // // // // // // //             </Link>
// // // // // // // //           </li>

// // // // // // // //           <li>
// // // // // // // //             <Link to="/dashbord/mypets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // // //               My Added Pets
// // // // // // // //             </Link>
// // // // // // // //           </li>

// // // // // // // //           <li>
// // // // // // // //             <Link to="/dashbord/adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // // //               Adoption Request
// // // // // // // //             </Link>
// // // // // // // //           </li>

// // // // // // // //           <li>
// // // // // // // //             <Link to="/dashbord/create-campaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // // //               Create Donation Campaign
// // // // // // // //             </Link>
// // // // // // // //           </li>

// // // // // // // //           <li>
// // // // // // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // // //               My Donation Campaigns
// // // // // // // //             </Link>
// // // // // // // //           </li>

// // // // // // // //           <li>
// // // // // // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // // //               My Donations
// // // // // // // //             </Link>
// // // // // // // //           </li>
// // // // // // // //         </ul>
// // // // // // // //       </div>

// // // // // // // //       {/* Drawer Content */}
// // // // // // // //       <div className="flex-1 drawer-content w-full pt-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// // // // // // // //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
// // // // // // // //           Open drawer
// // // // // // // //         </label>
// // // // // // // //         <Outlet />
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default DashbordLayout;


// // // // // // // // //i want theam toggle like navbar i use  add this feature 



// // // // // // // import React, { useContext } from 'react';
// // // // // // // import { Link, Outlet } from 'react-router-dom';  
// // // // // // // import web from "../assets/images/logo-selected.jpg";
// // // // // // // import { Switch, Typography } from "@material-tailwind/react";
// // // // // // // import { ThemeContext } from '../context/ThemeContext';
// // // // // // // import { AuthContext } from '../context/AuthProvider';

// // // // // // // import {
// // // // // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // // // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // // // // } from 'react-icons/fa';
// // // // // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // // // // import useAdmin from '../hooks/useAdmin';

// // // // // // // const DashbordLayout = () => {
// // // // // // //   // Theme context থেকে darkMode state এবং setDarkMode ফাংশন নাও
// // // // // // //   const { darkMode, setDarkMode } = useContext(ThemeContext);

// // // // // // //   // Auth context থেকে user ও logout ফাংশন নাও (যদি লগইন ইউজার হ্যান্ডেল করতে চাও)
// // // // // // //   const { user, logout } = useContext(AuthContext);
// // // // // // //   //const isAdmin = user?.role === 'admin';
// // // // // // //   const isAdmin = useAdmin();
// // // // // // //   // থিম টগল করার হ্যান্ডলার
// // // // // // //   const handleThemeToggle = () => {
// // // // // // //     setDarkMode(!darkMode);
// // // // // // //   };

// // // // // // //   // লগআউট হ্যান্ডলার (ইচ্ছামতো ব্যবহার করো)
// // // // // // //   const handleLogout = async () => {
// // // // // // //     try {
// // // // // // //       await logout();
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Logout error:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="drawer lg:drawer-open min-h-screen flex">
// // // // // // //       {/* Sidebar */}
// // // // // // //       <div
// // // // // // //         className="drawer-side bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 w-80 min-h-screen hidden lg:block pt-6"
// // // // // // //         style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.1)', zIndex: 40 }}
// // // // // // //       >
// // // // // // //         {/* Logo + Dark Mode */}
// // // // // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // // // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // // // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // // // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // // // // //               PetAdoptPlatform
// // // // // // //             </h1>
// // // // // // //           </Link>

// // // // // // //           {/* Theme Toggle */}
// // // // // // //           <div className="flex items-center gap-2 mt-2">
// // // // // // //             <Switch
// // // // // // //               color="blue"
// // // // // // //               checked={darkMode}
// // // // // // //               onChange={handleThemeToggle}
// // // // // // //               ripple={false}
// // // // // // //             />
// // // // // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // // // // //               Dark Mode
// // // // // // //             </Typography>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Dashboard Heading */}
// // // // // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // // // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // // // // //         </h1>

// // // // // // //         {/* Sidebar Menu */}
// // // // // // //         <ul className="menu p-4 w-full text-base-content space-y-2">
          
// // // // // // //           {isAdmin && (
// // // // // // //             <>
// // // // // // //              <li> {/* admin path */}
// // // // // // //             <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // //               <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // //               Users
// // // // // // //             </Link>
// // // // // // //           </li>

// // // // // // //           <li>
// // // // // // //             <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // //               <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // //               All Pets
// // // // // // //             </Link>
// // // // // // //           </li>

// // // // // // //           <li>
// // // // // // //             <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // //               <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // //               All Donations
// // // // // // //             </Link>
// // // // // // //           </li>
// // // // // // //             </>
// // // // // // //           )} 

          

// // // // // // //           <li>
// // // // // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // //               Add a Pet
// // // // // // //             </Link>
// // // // // // //           </li>

// // // // // // //           <li>
// // // // // // //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // //               My Added Pets
// // // // // // //             </Link>
// // // // // // //           </li>

// // // // // // //           <li>
// // // // // // //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // //               Adoption Request
// // // // // // //             </Link>
// // // // // // //           </li>

// // // // // // //           <li>
// // // // // // //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // //               Create Donation Campaign
// // // // // // //             </Link>
// // // // // // //           </li>

// // // // // // //           <li>
// // // // // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // //               My Donation Campaigns
// // // // // // //             </Link>
// // // // // // //           </li>

// // // // // // //           <li>
// // // // // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // // //               My Donations
// // // // // // //             </Link>
// // // // // // //           </li>
// // // // // // //         </ul>
// // // // // // //       </div>

// // // // // // //       {/* Drawer Content */}
// // // // // // //       <div className="flex-1 drawer-content w-full pt-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// // // // // // //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
// // // // // // //           Open drawer
// // // // // // //         </label>
// // // // // // //         <Outlet />
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default DashbordLayout;





// // // // // // import React, { useContext } from 'react';
// // // // // // import { Link, Outlet } from 'react-router-dom';  
// // // // // // import web from "../assets/images/logo-selected.jpg";
// // // // // // import { Switch, Typography } from "@material-tailwind/react";
// // // // // // import { ThemeContext } from '../context/ThemeContext';
// // // // // // import { AuthContext } from '../context/AuthProvider';

// // // // // // import {
// // // // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // // // } from 'react-icons/fa';
// // // // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // // // import useAdmin from '../hooks/useAdmin'; 

// // // // // // const DashbordLayout = () => {
// // // // // //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// // // // // //   const { user, logout } = useContext(AuthContext);
  
// // // // // //   // ✅ Destructure correctly
// // // // // //   const [isAdmin, isAdminLoading] = useAdmin();

// // // // // //   const handleThemeToggle = () => {
// // // // // //     setDarkMode(!darkMode);
// // // // // //   };

// // // // // //   const handleLogout = async () => {
// // // // // //     try {
// // // // // //       await logout();
// // // // // //     } catch (error) {
// // // // // //       console.error("Logout error:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   if (isAdminLoading) {
// // // // // //     return (
// // // // // //       <div className="flex items-center justify-center h-screen dark:text-white">
// // // // // //         Loading dashboard...
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="drawer lg:drawer-open min-h-screen flex">
// // // // // //       {/* Sidebar */}
// // // // // //       <div
// // // // // //         className="drawer-side bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 w-80 min-h-screen hidden lg:block pt-6"
// // // // // //         style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.1)', zIndex: 40 }}
// // // // // //       >
// // // // // //         {/* Logo + Dark Mode */}
// // // // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // // // //               PetAdoptPlatform
// // // // // //             </h1>
// // // // // //           </Link>

// // // // // //           {/* Theme Toggle */}
// // // // // //           <div className="flex items-center gap-2 mt-2">
// // // // // //             <Switch
// // // // // //               color="blue"
// // // // // //               checked={darkMode}
// // // // // //               onChange={handleThemeToggle}
// // // // // //               ripple={false}
// // // // // //             />
// // // // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // // // //               Dark Mode
// // // // // //             </Typography>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Dashboard Heading */}
// // // // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // // // //         </h1>

// // // // // //         {/* Sidebar Menu */}
// // // // // //         <ul className="menu p-4 w-full text-base-content space-y-2">
          
// // // // // //           {/* ✅ Show only for admin */}
// // // // // //           {isAdmin && (
// // // // // //             <>
// // // // // //               <li>
// // // // // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // //                   Users
// // // // // //                 </Link>
// // // // // //               </li>

// // // // // //               <li>
// // // // // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // //                   All Pets
// // // // // //                 </Link>
// // // // // //               </li>

// // // // // //               <li>
// // // // // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // //                   All Donations
// // // // // //                 </Link>
// // // // // //               </li>
// // // // // //             </>
// // // // // //           )}

// // // // // //           {/* ✅ Normal user & Admin common links */}
// // // // // //           <li>
// // // // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // //               Add a Pet
// // // // // //             </Link>
// // // // // //           </li>

// // // // // //           <li>
// // // // // //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // //               My Added Pets
// // // // // //             </Link>
// // // // // //           </li>

// // // // // //           <li>
// // // // // //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // //               Adoption Request
// // // // // //             </Link>
// // // // // //           </li>

// // // // // //           <li>
// // // // // //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // //               Create Donation Campaign
// // // // // //             </Link>
// // // // // //           </li>

// // // // // //           <li>
// // // // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // //               My Donation Campaigns
// // // // // //             </Link>
// // // // // //           </li>

// // // // // //           <li>
// // // // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // // //               My Donations
// // // // // //             </Link>
// // // // // //           </li>
// // // // // //         </ul>
// // // // // //       </div>

// // // // // //       {/* Main content */}
// // // // // //       <div className="flex-1 drawer-content w-full pt-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// // // // // //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
// // // // // //           Open drawer
// // // // // //         </label>
// // // // // //         <Outlet />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DashbordLayout;








// // // // // import React, { useContext } from 'react';
// // // // // import { Link, Outlet } from 'react-router-dom';  
// // // // // import web from "../assets/images/logo-selected.jpg";
// // // // // import { Switch, Typography } from "@material-tailwind/react";
// // // // // import { ThemeContext } from '../context/ThemeContext';
// // // // // import { AuthContext } from '../context/AuthProvider';

// // // // // import {
// // // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // // } from 'react-icons/fa';
// // // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // // import useAdmin from '../hooks/useAdmin'; 

// // // // // const DashbordLayout = () => {
// // // // //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// // // // //   const { user, logout } = useContext(AuthContext);
// // // // //   const [isAdmin, isAdminLoading] = useAdmin();

// // // // //   const handleThemeToggle = () => setDarkMode(!darkMode);
// // // // //   const handleLogout = async () => {
// // // // //     try {
// // // // //       await logout();
// // // // //     } catch (error) {
// // // // //       console.error("Logout error:", error);
// // // // //     }
// // // // //   };

// // // // //   if (isAdminLoading) {
// // // // //     return (
// // // // //       <div className="flex items-center justify-center h-screen dark:text-white">
// // // // //         Loading dashboard...
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="flex flex-col md:flex-row-reverse lg:flex-row min-h-screen">
      
// // // // //       {/* Main content */}
// // // // //       <div className="w-full md:w-2/3 lg:w-3/4 pt-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 order-1 md:order-2">
// // // // //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
// // // // //           Open drawer
// // // // //         </label>
// // // // //         <Outlet />
// // // // //       </div>

// // // // //       {/* Sidebar */}
// // // // //       <div
// // // // //         className="w-full md:w-1/3 lg:w-1/4 bg-white dark:bg-gray-900 border-t md:border-t-0 md:border-r border-gray-300 dark:border-gray-700 pt-6 order-2 md:order-1"
// // // // //         style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.1)', zIndex: 40 }}
// // // // //       >
// // // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // // //               PetAdoptPlatform
// // // // //             </h1>
// // // // //           </Link>

// // // // //           {/* Theme Toggle */}
// // // // //           <div className="flex items-center gap-2 mt-2">
// // // // //             <Switch
// // // // //               color="blue"
// // // // //               checked={darkMode}
// // // // //               onChange={handleThemeToggle}
// // // // //               ripple={false}
// // // // //             />
// // // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // // //               Dark Mode
// // // // //             </Typography>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Dashboard Heading */}
// // // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // // //         </h1>

// // // // //         {/* Sidebar Menu */}
// // // // //         <ul className="menu p-4 w-full text-base-content space-y-2">
// // // // //           {isAdmin && (
// // // // //             <>
// // // // //               <li>
// // // // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// // // // //                   Users
// // // // //                 </Link>
// // // // //               </li>
// // // // //               <li>
// // // // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// // // // //                   All Pets
// // // // //                 </Link>
// // // // //               </li>
// // // // //               <li>
// // // // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// // // // //                   All Donations
// // // // //                 </Link>
// // // // //               </li>
// // // // //             </>
// // // // //           )}

// // // // //           {/* Common Links */}
// // // // //           <li>
// // // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// // // // //               Add a Pet
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// // // // //               My Added Pets
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// // // // //               Adoption Request
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// // // // //               Create Donation Campaign
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// // // // //               My Donation Campaigns
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// // // // //               My Donations
// // // // //             </Link>
// // // // //           </li>
// // // // //         </ul>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DashbordLayout;





// // // // import React, { useContext } from 'react';
// // // // import { Link, Outlet } from 'react-router-dom';
// // // // import web from "../assets/images/logo-selected.jpg";
// // // // import { Switch, Typography } from "@material-tailwind/react";
// // // // import { ThemeContext } from '../context/ThemeContext';
// // // // import { AuthContext } from '../context/AuthProvider';

// // // // import {
// // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // } from 'react-icons/fa';
// // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // import useAdmin from '../hooks/useAdmin';

// // // // const DashbordLayout = () => {
// // // //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// // // //   const { user, logout } = useContext(AuthContext);

// // // //   const [isAdmin, isAdminLoading] = useAdmin();

// // // //   const handleThemeToggle = () => {
// // // //     setDarkMode(!darkMode);
// // // //   };

// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       await logout();
// // // //     } catch (error) {
// // // //       console.error("Logout error:", error);
// // // //     }
// // // //   };

// // // //   if (isAdminLoading) {
// // // //     return (
// // // //       <div className="flex items-center justify-center h-screen dark:text-white">
// // // //         Loading dashboard...
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col md:flex-row-reverse">
// // // //       {/* Sidebar */}
// // // //       <div className="w-full md:w-80 bg-white dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700 pt-6">
// // // //         {/* Logo + Dark Mode */}
// // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // //               PetAdoptPlatform
// // // //             </h1>
// // // //           </Link>

// // // //           {/* Theme Toggle */}
// // // //           <div className="flex items-center gap-2 mt-2">
// // // //             <Switch
// // // //               color="blue"
// // // //               checked={darkMode}
// // // //               onChange={handleThemeToggle}
// // // //               ripple={false}
// // // //             />
// // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // //               Dark Mode
// // // //             </Typography>
// // // //           </div>
// // // //         </div>

// // // //         {/* Dashboard Heading */}
// // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // //         </h1>

// // // //         {/* Sidebar Menu */}
// // // //         <ul className="menu p-4 w-full text-base-content space-y-2">
// // // //           {isAdmin && (
// // // //             <>
// // // //               <li>
// // // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Users
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Pets
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Donations
// // // //                 </Link>
// // // //               </li>
// // // //             </>
// // // //           )}

// // // //           {/* Common Links */}
// // // //           <li>
// // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Add a Pet
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Added Pets
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Adoption Request
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Create Donation Campaign
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donation Campaigns
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donations
// // // //             </Link>
// // // //           </li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* Main content */}
// // // //       <div className="flex-1 pt-16 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// // // //         <Outlet />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashbordLayout;



// // // // import React, { useContext } from 'react';
// // // // import { Link, Outlet } from 'react-router-dom';   
// // // // import web from "../assets/images/logo-selected.jpg";
// // // // import { Switch, Typography } from "@material-tailwind/react"; 
// // // // import { ThemeContext } from '../context/ThemeContext';
// // // // import { AuthContext } from '../context/AuthProvider';

// // // // import {
// // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // } from 'react-icons/fa';
// // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // import useAdmin from '../hooks/useAdmin'; 

// // // // const DashbordLayout = () => {
// // // //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// // // //   const { user, logout } = useContext(AuthContext);
// // // //   const [isAdmin, isAdminLoading] = useAdmin();

// // // //   const handleThemeToggle = () => {
// // // //     setDarkMode(!darkMode);
// // // //   };

// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       await logout();
// // // //     } catch (error) {
// // // //       console.error("Logout error:", error);
// // // //     }
// // // //   };

// // // //   if (isAdminLoading) {
// // // //     return (
// // // //       <div className="flex items-center justify-center h-screen dark:text-white">
// // // //         Loading dashboard...
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div
// // // //       className={`
// // // //         flex flex-col-reverse 
// // // //         md:flex-row-reverse 
// // // //         min-h-screen
// // // //       `}
// // // //     >
// // // //       {/* Sidebar */}
// // // //       <div
// // // //         className="w-full md:w-1/3 lg:w-1/4 bg-white dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700 pt-6"
// // // //         style={{ boxShadow: '0 -2px 8px rgba(0,0,0,0.1)', zIndex: 40 }}
// // // //       >
// // // //         {/* Logo + Dark Mode */}
// // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // //               PetAdoptPlatform
// // // //             </h1>
// // // //           </Link>

// // // //           {/* Theme Toggle */}
// // // //           <div className="flex items-center gap-2 mt-2">
// // // //             <Switch
// // // //               color="blue"
// // // //               checked={darkMode}
// // // //               onChange={handleThemeToggle}
// // // //               ripple={false}
// // // //             />
// // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // //               Dark Mode
// // // //             </Typography>
// // // //           </div>
// // // //         </div>

// // // //         {/* Dashboard Heading */}
// // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // //         </h1>

// // // //         {/* Sidebar Menu */}
// // // //         <ul className="menu p-4 w-full text-base-content space-y-2">
// // // //           {isAdmin && (
// // // //             <>
// // // //               <li>
// // // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Users
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Pets
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Donations
// // // //                 </Link>
// // // //               </li>
// // // //             </>
// // // //           )}

// // // //           <li>
// // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Add a Pet
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Added Pets
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Adoption Request
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Create Donation Campaign
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donation Campaigns
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donations
// // // //             </Link>
// // // //           </li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* Main Content */}
// // // //       <div className="w-full md:w-2/3 lg:w-3/4 px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// // // //         <Outlet />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashbordLayout;



// // // // do this same code for 
// // // // (lg device  and  md  device  ) 
  
// // // // lg md  device এর size আনুয়ায়ী  (sider left and main content right)দুইপাশে wrap করে ছোট বড় হবে 




// // // // sm /mobile  device এ  main content  উপরে  sider নিচে দেখাবে

// // // //go to deep seak

// // // // import React, { useContext } from 'react';
// // // // import { Link, Outlet } from 'react-router-dom';   
// // // // import web from "../assets/images/logo-selected.jpg";
// // // // import { Switch, Typography } from "@material-tailwind/react"; 
// // // // import { ThemeContext } from '../context/ThemeContext';
// // // // import { AuthContext } from '../context/AuthProvider';
// // // // //import Adminprofile from '../';pet-adoupt-platfrom-client\src\Pages\Dashbord\Element\Adminprofile.jsx
// // // // //import Adminprofile from "../Pages/Dashbord/Element/Adminprofile";

// // // // import {
// // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // } from 'react-icons/fa';
// // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // import useAdmin from '../hooks/useAdmin'; 
// // // // import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// // // // const DashbordLayout = () => {
// // // //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// // // //   const { user, logout } = useContext(AuthContext);
// // // //   const [isAdmin, isAdminLoading] = useAdmin();

// // // //   const handleThemeToggle = () => {
// // // //     setDarkMode(!darkMode);
// // // //   };

// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       await logout();
// // // //     } catch (error) {
// // // //       console.error("Logout error:", error);
// // // //     }
// // // //   };

// // // //   if (isAdminLoading) {
// // // //     return (
// // // //       <div className="flex items-center justify-center h-screen dark:text-white">
// // // //         Loading dashboard...
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div
// // // //       className={`
// // // //         flex flex-col 
// // // //         md:flex-row    /* On md and up: flex row */
// // // //         min-h-screen
// // // //       `}
// // // //     >
// // // //       {/* Sidebar */}
// // // //       <div
// // // //         className="w-full md:w-1/3 lg:w-1/4 
// // // //           bg-white dark:bg-gray-900 
// // // //           border-t md:border-t-0 md:border-r border-gray-300 dark:border-gray-700
// // // //           pt-6
// // // //           order-2 md:order-1
// // // //           shadow-md   h-screen
// // // //     fixed
// // // //     z-0
// // // //           "
// // // //         style={{ boxShadow: '0 -2px 8px rgba(0,0,0,0.1)', zIndex: 40 }}
// // // //       >
// // // //         {/* Logo + Dark Mode */}
// // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // //               PetAdoptPlatform
// // // //             </h1>
// // // //           </Link>

// // // //           {/* Theme Toggle */}
// // // //           <div className="flex items-center gap-2 mt-2">
// // // //             <Switch
// // // //               color="blue"
// // // //               checked={darkMode}
// // // //               onChange={handleThemeToggle}
// // // //               ripple={false}
// // // //             />
// // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // //               Dark Mode
// // // //             </Typography>
// // // //           </div>
// // // //         </div>

// // // //         {/* Dashboard Heading */}
// // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // //         </h1>

// // // //         {/* Sidebar Menu */}
// // // //         <ul className="menu p-4 w-full text-base-content space-y-2">
// // // //           {isAdmin && (
// // // //             <>
// // // //              <li>
// // // //                <li>
// // // //                 <Link to="/dashbord/overview" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FcBullish className="text-xl  text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Overview
// // // //                 </Link>
// // // //               </li>
// // // //                 <Link to="/dashbord/adminprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FcOnlineSupport className="text-xl  text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Admin Profile
// // // //                 </Link>
// // // //               </li>
             
// // // //               <li>
// // // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Users
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Pets
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Donations
// // // //                 </Link>
// // // //               </li>
// // // //             </>
// // // //           )}

// // // //            <li>
// // // //             <Link to="/dashbord/userprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               User Profile
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Add a Pet
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Added Pets
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Adoption Request
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Create Donation Campaign
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donation Campaigns
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donations
// // // //             </Link>
// // // //           </li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* Main Content */}
// // // //       <div className="w-full md:w-2/3 lg:w-3/4 px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 order-1 md:order-2">
// // // //         <Outlet />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashbordLayout;





// // // ////2nd code

// // // // import React, { useContext } from 'react';
// // // // import { Link, Outlet } from 'react-router-dom';   
// // // // import web from "../assets/images/logo-selected.jpg";
// // // // import { Switch, Typography } from "@material-tailwind/react"; 
// // // // import { ThemeContext } from '../context/ThemeContext';
// // // // import { AuthContext } from '../context/AuthProvider';

// // // // import {
// // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // } from 'react-icons/fa';
// // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // import useAdmin from '../hooks/useAdmin'; 
// // // // import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// // // // const DashbordLayout = () => {
// // // //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// // // //   const { user, logout } = useContext(AuthContext);
// // // //   const [isAdmin, isAdminLoading] = useAdmin();

// // // //   const handleThemeToggle = () => {
// // // //     setDarkMode(!darkMode);
// // // //   };

// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       await logout();
// // // //     } catch (error) {
// // // //       console.error("Logout error:", error);
// // // //     }
// // // //   };

// // // //   if (isAdminLoading) {
// // // //     return (
// // // //       <div className="flex items-center justify-center h-screen dark:text-white">
// // // //         Loading dashboard...
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="flex min-h-screen bg-gray-50 dark:bg-gray-800">
// // // //       {/* Fixed Sidebar */}
// // // //       <div
// // // //         className="w-full md:w-1/3 lg:w-1/4 
// // // //           bg-white dark:bg-gray-900 
// // // //           border-t md:border-t-0 md:border-r border-gray-300 dark:border-gray-700
// // // //           pt-6
// // // //           fixed h-screen
// // // //           overflow-y-auto
// // // //           z-40
// // // //           shadow-lg                    "
// // // //       >
// // // //         {/* Logo + Dark Mode */}
// // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // //               PetAdoptPlatform
// // // //             </h1>
// // // //           </Link>

// // // //           {/* Theme Toggle */}
// // // //           <div className="flex items-center gap-2 mt-2">
// // // //             <Switch
// // // //               color="blue"
// // // //               checked={darkMode}
// // // //               onChange={handleThemeToggle}
// // // //               ripple={false}
// // // //             />
// // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // //               Dark Mode
// // // //             </Typography>
// // // //           </div>
// // // //         </div>

// // // //         {/* Dashboard Heading */}
// // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // //         </h1>

// // // //         {/* Sidebar Menu */}
// // // //         <ul className="menu p-4 w-full text-base-content space-y-2">
// // // //           {isAdmin && (
// // // //             <>
// // // //               <li>
// // // //                 <Link to="/dashbord/overview" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FcBullish className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Overview
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/adminprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FcOnlineSupport className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Admin Profile
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Users
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Pets
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Donations
// // // //                 </Link>
// // // //               </li>
// // // //             </>
// // // //           )}

// // // //           <li>
// // // //             <Link to="/dashbord/userprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               User Profile
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Add a Pet
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Added Pets
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Adoption Request
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Create Donation Campaign
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donation Campaigns
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donations
// // // //             </Link>
// // // //           </li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* Main Content with proper margin */}
// // // //       <div className="w-full md:ml-[33.333%] lg:ml-[25%] px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
// // // //         <Outlet />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashbordLayout;


// // // // import React, { useContext } from 'react';
// // // // import { Link, Outlet } from 'react-router-dom';   
// // // // import web from "../assets/images/logo-selected.jpg";
// // // // import { Switch, Typography } from "@material-tailwind/react"; 
// // // // import { ThemeContext } from '../context/ThemeContext';
// // // // import { AuthContext } from '../context/AuthProvider';

// // // // import {
// // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // } from 'react-icons/fa';
// // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // import useAdmin from '../hooks/useAdmin'; 
// // // // import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// // // // const DashbordLayout = () => {
// // // //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// // // //   const { user, logout } = useContext(AuthContext);
// // // //   const [isAdmin, isAdminLoading] = useAdmin();

// // // //   const handleThemeToggle = () => {
// // // //     setDarkMode(!darkMode);
// // // //   };

// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       await logout();
// // // //     } catch (error) {
// // // //       console.error("Logout error:", error);
// // // //     }
// // // //   };

// // // //   if (isAdminLoading) {
// // // //     return (
// // // //       <div className="flex items-center justify-center h-screen dark:text-white">
// // // //         Loading dashboard...
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-800">
      

// // // //       {/* Sidebar - Comes SECOND on mobile (below main content) */}
// // // //       <div
// // // //         className="w-full md:w-1/3 lg:w-1/4 
// // // //           bg-white dark:bg-gray-900 
// // // //           border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700
// // // //           pt-6
// // // //           order-2 md:order-1
// // // //           shadow-lg
// // // //           "
// // // //       >
// // // //         {/* Logo + Dark Mode */}
// // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // //               PetAdoptPlatform
// // // //             </h1>
// // // //           </Link>

// // // //           {/* Theme Toggle */}
// // // //           <div className="flex items-center gap-2 mt-2">
// // // //             <Switch
// // // //               color="blue"
// // // //               checked={darkMode}
// // // //               onChange={handleThemeToggle}
// // // //               ripple={false}
// // // //             />
// // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // //               Dark Mode
// // // //             </Typography>
// // // //           </div>
// // // //         </div>

// // // //         {/* Dashboard Heading */}
// // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // //         </h1>

// // // //         {/* Sidebar Menu */}
// // // //         <ul className="menu p-4 w-full text-base-content space-y-2">
// // // //           {isAdmin && (
// // // //             <>
// // // //               <li>
// // // //                 <Link to="/dashbord/overview" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FcBullish className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Overview
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/adminprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FcOnlineSupport className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Admin Profile
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   Users
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Pets
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //                   All Donations
// // // //                 </Link>
// // // //               </li>
// // // //             </>
// // // //           )}

// // // //           <li>
// // // //             <Link to="/dashbord/userprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               User Profile
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Add a Pet
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Added Pets
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Adoption Request
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Create Donation Campaign
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donation Campaigns
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               My Donations
// // // //             </Link>
// // // //           </li>
// // // //         </ul>
// // // //       </div>
// // // //       {/* Main Content - Comes FIRST on mobile */}
// // // //       <div className="w-full md:w-2/3 lg:w-3/4 px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 order-1">
// // // //         <Outlet />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashbordLayout;


// // // //C:\Web-Development\Mile-stone-07\React\MileStone10\Assignment--10\Milestone-11\Milestone--12Final\BAssignment--12\pet-adoupt-platfrom-client\src\layouts\DashbordLayout.jsx

// // // import React, { useContext } from 'react';
// // // import { Link, Outlet } from 'react-router-dom';   
// // // import web from "../assets/images/logo-selected.jpg";
// // // import { Switch, Typography } from "@material-tailwind/react"; 
// // // import { ThemeContext } from '../context/ThemeContext';
// // // import { AuthContext } from '../context/AuthProvider';

// // // import {
// // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // } from 'react-icons/fa';
// // // import { MdDashboardCustomize } from "react-icons/md";
// // // import useAdmin from '../hooks/useAdmin'; 
// // // import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// // // const DashbordLayout = () => {
// // //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// // //   const { user, logout } = useContext(AuthContext);
// // //   const [isAdmin, isAdminLoading] = useAdmin();

// // //   const handleThemeToggle = () => {
// // //     setDarkMode(!darkMode);
// // //   };

// // //   const handleLogout = async () => {
// // //     try {
// // //       await logout();
// // //     } catch (error) {
// // //       console.error("Logout error:", error);
// // //     }
// // //   };

// // //   if (isAdminLoading) {
// // //     return (
// // //       <div className="flex items-center justify-center h-screen dark:text-white">
// // //         Loading dashboard...
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-800">
// // //       {/* Sidebar - Sticky on desktop, normal on mobile */}
// // //       <div
// // //         className="w-full md:w-1/3 lg:w-1/4 
// // //           bg-white dark:bg-gray-900 
// // //           border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700
// // //           pt-6
// // //           order-2 md:order-1
// // //           shadow-lg
// // //           md:sticky md:top-0 md:h-screen md:overflow-y-auto"
// // //       >
// // //         <div className="md:flex md:flex-col md:h-full">
// // //           {/* Logo + Dark Mode */}
// // //           <div className="flex flex-col px-4 pb-4 gap-3">
// // //             <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // //               <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // //               <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // //                 PetAdoptPlatform
// // //               </h1>
// // //             </Link>

// // //             {/* Theme Toggle */}
// // //             <div className="flex items-center gap-2 mt-2">
// // //               <Switch
// // //                 color="blue"
// // //                 checked={darkMode}
// // //                 onChange={handleThemeToggle}
// // //                 ripple={false}
// // //               />
// // //               <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // //                 Dark Mode
// // //               </Typography>
// // //             </div>
// // //           </div>

// // //           {/* Dashboard Heading */}
// // //           <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // //             <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // //           </h1>

// // //           {/* Sidebar Menu - Scrollable on desktop */}
// // //           <div className="flex-1 overflow-y-auto">
// // //             <ul className="menu p-4 w-full text-base-content space-y-2">
// // //               {isAdmin && (
// // //                 <>
// // //                   <li>
// // //                     <Link to="/dashbord/overview" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                       <FcBullish className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                       Overview
// // //                     </Link>
// // //                   </li>
// // //                   <li>
// // //                     <Link to="/dashbord/adminprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                       <FcOnlineSupport className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                       Admin Profile
// // //                     </Link>
// // //                   </li>
// // //                   <li>
// // //                     <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                       <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                       Users
// // //                     </Link>
// // //                   </li>
// // //                   <li>
// // //                     <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                       <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                       All Pets
// // //                     </Link>
// // //                   </li>
// // //                   <li>
// // //                     <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                       <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                       All Donations
// // //                     </Link>
// // //                   </li>
// // //                 </>
// // //               )}

// // //               <li>
// // //                 <Link to="/dashbord/userprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   User Profile
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   Add a Pet
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   My Added Pets
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   Adoption Request
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   Create Donation Campaign
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   My Donation Campaigns
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   My Donations
// // //                 </Link>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Content - Comes FIRST on mobile */}
// // //       <div className="w-full md:w-2/3 lg:w-3/4 px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 order-1">
// // //         <Outlet />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DashbordLayout;






// // import React, { useContext, useState } from 'react';
// // import { Link, Outlet } from 'react-router-dom';
// // import web from "../assets/images/logo-selected.jpg";
// // import { Switch, Typography } from "@material-tailwind/react";
// // import { ThemeContext } from '../context/ThemeContext';
// // import { AuthContext } from '../context/AuthProvider';

// // import {
// //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers, FaBars, FaTimes
// // } from 'react-icons/fa';
// // import { MdDashboardCustomize } from "react-icons/md";
// // import useAdmin from '../hooks/useAdmin';
// // import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// // const DashbordLayout = () => {
// //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// //   const { user, logout } = useContext(AuthContext);
// //   const [isAdmin, isAdminLoading] = useAdmin();

// //   // Sidebar toggle state (works on all devices)
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const handleThemeToggle = () => {
// //     setDarkMode(!darkMode);
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await logout();
// //     } catch (error) {
// //       console.error("Logout error:", error);
// //     }
// //   };

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(prev => !prev);
// //   };

// //   // Close sidebar when a menu link is clicked (better mobile UX)
// //   const handleLinkClick = () => {
// //     setIsSidebarOpen(false);
// //   };

// //   if (isAdminLoading) {
// //     return (
// //       <div className="flex items-center justify-center h-screen dark:text-white">
// //         Loading dashboard...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="relative min-h-screen bg-gray-50 dark:bg-gray-800">
      
// //       {/* ========== Toggle Button (Top Left Corner) ========== */}
// //       <button
// //         onClick={toggleSidebar}
// //         className="fixed top-4 left-4 z-50 btn btn-circle btn-ghost bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900"
// //         aria-label="Toggle sidebar"
// //       >
// //         {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
// //       </button>

// //       {/* ========== Overlay (click to close sidebar) ========== */}
// //       {isSidebarOpen && (
// //         <div
// //           className="fixed inset-0 bg-black/40 z-40"
// //           onClick={() => setIsSidebarOpen(false)}
// //         ></div>
// //       )}

// //       {/* ========== Sidebar ========== */}
// //       <div
// //         className={`
// //           fixed top-0 left-0 z-40 h-full w-80
// //           bg-white dark:bg-gray-900
// //           border-r border-gray-300 dark:border-gray-700
// //           shadow-2xl
// //           transform transition-transform duration-300 ease-in-out
// //           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
// //           overflow-y-auto
// //         `}
// //       >
// //         <div className="flex flex-col h-full pt-16">
// //           {/* Logo + Dark Mode */}
// //           <div className="flex flex-col px-4 pb-4 gap-3">
// //             <Link
// //               to="/"
// //               onClick={handleLinkClick}
// //               className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md"
// //             >
// //               <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// //               <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// //                 PetAdoptPlatform
// //               </h1>
// //             </Link>

// //             {/* Theme Toggle */}
// //             <div className="flex items-center gap-2 mt-2">
// //               <Switch
// //                 color="blue"
// //                 checked={darkMode}
// //                 onChange={handleThemeToggle}
// //                 ripple={false}
// //               />
// //               <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// //                 Dark Mode
// //               </Typography>
// //             </div>
// //           </div>

// //           {/* Dashboard Heading */}
// //           <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// //             <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// //           </h1>

// //           {/* Sidebar Menu */}
// //           <div className="flex-1 overflow-y-auto">
// //             <ul className="menu p-4 w-full text-base-content space-y-2">
// //               {isAdmin && (
// //                 <>
// //                   <li>
// //                     <Link
// //                       to="/dashbord/overview"
// //                       onClick={handleLinkClick}
// //                       className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                     >
// //                       <FcBullish className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                       Overview
// //                     </Link>
// //                   </li>
// //                   <li>
// //                     <Link
// //                       to="/dashbord/adminprofile"
// //                       onClick={handleLinkClick}
// //                       className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                     >
// //                       <FcOnlineSupport className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                       Admin Profile
// //                     </Link>
// //                   </li>
// //                   <li>
// //                     <Link
// //                       to="/dashbord/users"
// //                       onClick={handleLinkClick}
// //                       className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                     >
// //                       <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                       Users
// //                     </Link>
// //                   </li>
// //                   <li>
// //                     <Link
// //                       to="/dashbord/all-pets"
// //                       onClick={handleLinkClick}
// //                       className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                     >
// //                       <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                       All Pets
// //                     </Link>
// //                   </li>
// //                   <li>
// //                     <Link
// //                       to="/dashbord/all-donations"
// //                       onClick={handleLinkClick}
// //                       className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                     >
// //                       <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                       All Donations
// //                     </Link>
// //                   </li>
// //                 </>
// //               )}

// //               <li>
// //                 <Link
// //                   to="/dashbord/userprofile"
// //                   onClick={handleLinkClick}
// //                   className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                 >
// //                   <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                   User Profile
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/dashbord/addpet"
// //                   onClick={handleLinkClick}
// //                   className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                 >
// //                   <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                   Add a Pet
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/dashbord/myaddedpets"
// //                   onClick={handleLinkClick}
// //                   className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                 >
// //                   <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                   My Added Pets
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/dashbord/my-adoption-requests"
// //                   onClick={handleLinkClick}
// //                   className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                 >
// //                   <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                   Adoption Request
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/dashbord/createdonationcampaign"
// //                   onClick={handleLinkClick}
// //                   className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                 >
// //                   <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                   Create Donation Campaign
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/dashbord/my-donation-campaigns"
// //                   onClick={handleLinkClick}
// //                   className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                 >
// //                   <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                   My Donation Campaigns
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/dashbord/my-donations"
// //                   onClick={handleLinkClick}
// //                   className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center"
// //                 >
// //                   <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                   My Donations
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ========== Main Content ========== */}
// //       <div className="min-h-screen w-full px-4 py-6 pt-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// //         <Outlet />
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashbordLayout;

// // //C:\Web-Development\Mile-stone-07\React\MileStone10\Assignment--10\Milestone-11\Milestone--12Final\BAssignment--12\pet-adoupt-platfrom-client\src\layouts\DashbordLayout.jsx
// // import React, { useContext, useState } from 'react';
// // import { Link, Outlet } from 'react-router-dom';
// // import web from "../assets/images/logo-selected.jpg";
// // import { Switch, Typography } from "@material-tailwind/react";
// // import { ThemeContext } from '../context/ThemeContext';
// // import { AuthContext } from '../context/AuthProvider';

// // import {
// //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers, FaBars, FaTimes
// // } from 'react-icons/fa';
// // import { MdDashboardCustomize } from "react-icons/md";
// // import useAdmin from '../hooks/useAdmin';
// // import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// // const DashbordLayout = () => {
// //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// //   const { user, logout } = useContext(AuthContext);
// //   const [isAdmin, isAdminLoading] = useAdmin();

// //   // Sidebar toggle state (all devices)
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

// //   const handleThemeToggle = () => {
// //     setDarkMode(!darkMode);
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await logout();
// //     } catch (error) {
// //       console.error("Logout error:", error);
// //     }
// //   };

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(prev => !prev);
// //   };

// //   if (isAdminLoading) {
// //     return (
// //       <div className="flex items-center justify-center h-screen dark:text-white">
// //         Loading dashboard...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex min-h-screen bg-gray-50 dark:bg-gray-800 relative">

// //       {/* ========== Sidebar ========== */}
// //       <div
// //         className={`
// //           fixed md:static top-0 left-0 z-40
// //           h-screen w-full
// //           bg-white dark:bg-gray-900
// //           border-r border-gray-300 dark:border-gray-700
// //           shadow-lg
// //           transform transition-transform duration-300 ease-in-out
// //           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
// //           flex flex-col
// //         `}
// //       >
// //         {/* Logo + Dark Mode */}
// //         <div className="flex flex-col px-4 pt-6 pb-4 gap-3">
// //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// //               PetAdoptPlatform
// //             </h1>
// //           </Link>

// //           {/* Theme Toggle */}
// //           <div className="flex items-center gap-2 mt-2">
// //             <Switch
// //               color="blue"
// //               checked={darkMode}
// //               onChange={handleThemeToggle}
// //               ripple={false}
// //             />
// //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// //               Dark Mode
// //             </Typography>
// //           </div>
// //         </div>

// //         {/* Dashboard Heading */}
// //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// //         </h1>

// //         {/* Sidebar Menu */}
// //         <div className="flex-1 overflow-y-auto">
// //           <ul className="menu p-4 w-full text-base-content space-y-2">
// //             {isAdmin && (
// //               <>
// //                 <li>
// //                   <Link to="/dashbord/overview" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                     <FcBullish className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                     Overview
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/dashbord/adminprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                     <FcOnlineSupport className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                     Admin Profile
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                     <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                     Users
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                     <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                     All Pets
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                     <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                     All Donations
// //                   </Link>
// //                 </li>
// //               </>
// //             )}

// //             <li>
// //               <Link to="/dashbord/userprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                 <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                 User Profile
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                 <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                 Add a Pet
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                 <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                 My Added Pets
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                 <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                 Adoption Request
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                 <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                 Create Donation Campaign
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                 <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                 My Donation Campaigns
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                 <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// //                 My Donations
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>

// //       {/* Overlay for mobile when sidebar is open */}
// //       {isSidebarOpen && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
// //           onClick={toggleSidebar}
// //         ></div>
// //       )}

// //       {/* ========== Main Content ========== */}
// //       <div className="flex-1 flex flex-col min-h-screen">
        
// //         {/* Top bar with Toggle Button */}
// //         <div className="sticky top-0 z-20 flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 shadow-sm">
// //           <button
// //             onClick={toggleSidebar}
// //             className="btn btn-ghost btn-circle text-2xl text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900"
// //             aria-label="Toggle sidebar"
// //           >
// //             {isSidebarOpen ? <FaBars /> : <FaBars />}
// //           </button>

// //           <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
// //             Dashboard
// //           </h2>
// //         </div>

// //         {/* Page Content */}
// //         <div className="flex-1 px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// //           <Outlet />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashbordLayout;





// import React, { useContext, useState, useEffect } from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import web from "../assets/images/logo-selected.jpg";
// import { Switch, Typography } from "@material-tailwind/react";
// import { ThemeContext } from '../context/ThemeContext';
// import { AuthContext } from '../context/AuthProvider';

// import {
//   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
//   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers, FaBars, FaTimes, FaSignOutAlt
// } from 'react-icons/fa';
// import { MdDashboardCustomize } from "react-icons/md";
// import useAdmin from '../hooks/useAdmin';
// import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// const DashbordLayout = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const { user, logout } = useContext(AuthContext);
//   const [isAdmin, isAdminLoading] = useAdmin();
//   const location = useLocation();

//   // Sidebar starts open on desktop, closed on mobile
//   const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

//   // Close sidebar on route change (mobile)
//   useEffect(() => {
//     if (window.innerWidth < 768) {
//       setIsSidebarOpen(false);
//     }
//   }, [location.pathname]);

//   // Handle resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsSidebarOpen(true);
//       } else {
//         setIsSidebarOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleThemeToggle = () => setDarkMode(!darkMode);

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

//   if (isAdminLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
//         <div className="text-lg font-medium text-gray-700 dark:text-gray-200">
//           Loading dashboard...
//         </div>
//       </div>
//     );
//   }

//   // Helper for active link style
//   const isActive = (path) => location.pathname === path;

//   const linkClass = (path) =>
//     `group flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200
//      ${isActive(path)
//        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium'
//        : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800'
//      }`;

//   return (
//     <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">

//       {/* ========== Overlay (mobile only) ========== */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* ========== Sidebar ========== */}
//       <aside
//         className={`
//           fixed top-0 left-0 z-50 h-full w-72
//           bg-white dark:bg-gray-900
//           border-r border-gray-200 dark:border-gray-700
//           shadow-xl
//           transform transition-transform duration-300 ease-in-out
//           flex flex-col
//           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//           md:translate-x-0 md:static md:shadow-none
//         `}
//       >
//         {/* Logo + Close button */}
//         <div className="flex items-center justify-between px-5 pt-5 pb-4">
//           <Link to="/" className="flex items-center gap-3 group">
//             <img
//               src={web}
//               alt="logo"
//               className="w-11 h-11 rounded-xl object-cover shadow-md group-hover:scale-105 transition"
//             />
//             <div>
//               <h1 className="text-lg font-bold text-blue-600 dark:text-blue-400 leading-tight">
//                 PetAdopt
//               </h1>
//               <p className="text-xs text-gray-500 dark:text-gray-400">Platform</p>
//             </div>
//           </Link>

//           {/* Close button - mobile only */}
//           <button
//             onClick={toggleSidebar}
//             className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//             aria-label="Close sidebar"
//           >
//             <FaTimes className="text-xl" />
//           </button>
//         </div>

//         {/* Theme Toggle */}
//         <div className="px-5 mb-4">
//           <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60">
//             <Switch
//               color="blue"
//               checked={darkMode}
//               onChange={handleThemeToggle}
//               ripple={false}
//             />
//             <Typography variant="small" className="text-gray-700 dark:text-gray-200 font-medium">
//               Dark Mode
//             </Typography>
//           </div>
//         </div>

//         {/* Dashboard Title */}
//         <div className="px-5 mb-2">
//           <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
//             <MdDashboardCustomize className="text-blue-500" />
//             Dashboard
//           </h2>
//         </div>

//         {/* Menu */}
//         <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
//           {isAdmin && (
//             <>
//               <p className="px-4 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
//                 Admin
//               </p>
//               <Link to="/dashbord/overview" className={linkClass('/dashbord/overview')}>
//                 <FcBullish className="text-xl" />
//                 Overview
//               </Link>
//               <Link to="/dashbord/adminprofile" className={linkClass('/dashbord/adminprofile')}>
//                 <FcOnlineSupport className="text-xl" />
//                 Admin Profile
//               </Link>
//               <Link to="/dashbord/users" className={linkClass('/dashbord/users')}>
//                 <FaUsers className="text-xl text-indigo-500" />
//                 Users
//               </Link>
//               <Link to="/dashbord/all-pets" className={linkClass('/dashbord/all-pets')}>
//                 <FaPaw className="text-xl text-indigo-500" />
//                 All Pets
//               </Link>
//               <Link to="/dashbord/all-donations" className={linkClass('/dashbord/all-donations')}>
//                 <FaDonate className="text-xl text-indigo-500" />
//                 All Donations
//               </Link>
//             </>
//           )}

//           <p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
//             User
//           </p>
//           <Link to="/dashbord/userprofile" className={linkClass('/dashbord/userprofile')}>
//             <FcBusinessman className="text-xl" />
//             User Profile
//           </Link>
//           <Link to="/dashbord/addpet" className={linkClass('/dashbord/addpet')}>
//             <FaPlusCircle className="text-xl text-indigo-500" />
//             Add a Pet
//           </Link>
//           <Link to="/dashbord/myaddedpets" className={linkClass('/dashbord/myaddedpets')}>
//             <FaList className="text-xl text-indigo-500" />
//             My Added Pets
//           </Link>
//           <Link to="/dashbord/my-adoption-requests" className={linkClass('/dashbord/my-adoption-requests')}>
//             <FaHandshake className="text-xl text-indigo-500" />
//             Adoption Request
//           </Link>
//           <Link to="/dashbord/createdonationcampaign" className={linkClass('/dashbord/createdonationcampaign')}>
//             <FaBullhorn className="text-xl text-indigo-500" />
//             Create Donation Campaign
//           </Link>
//           <Link to="/dashbord/my-donation-campaigns" className={linkClass('/dashbord/my-donation-campaigns')}>
//             <FaThList className="text-xl text-indigo-500" />
//             My Donation Campaigns
//           </Link>
//           <Link to="/dashbord/my-donations" className={linkClass('/dashbord/my-donations')}>
//             <FaHandHoldingHeart className="text-xl text-indigo-500" />
//             My Donations
//           </Link>
//         </nav>

//         {/* User + Logout (bottom) */}
//         <div className="border-t border-gray-200 dark:border-gray-700 p-4">
//           <div className="flex items-center gap-3 mb-3">
//             {user?.photoURL ? (
//               <img
//                 src={user.photoURL}
//                 alt="avatar"
//                 className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/30"
//               />
//             ) : (
//               <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
//                 {user?.displayName?.[0] || 'U'}
//               </div>
//             )}
//             <div className="flex-1 min-w-0">
//               <p className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
//                 {user?.displayName || 'User'}
//               </p>
//               <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
//                 {user?.email}
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
//                        bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400
//                        hover:bg-red-100 dark:hover:bg-red-900/50
//                        font-medium text-sm transition-colors"
//           >
//             <FaSignOutAlt />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* ========== Main Content ========== */}
//       <div className="flex-1 flex flex-col min-h-screen min-w-0">
        
//         {/* Top Navbar */}
//         <header className="sticky top-0 z-30 flex items-center gap-4 px-4 sm:px-6 py-3
//                            bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
//                            border-b border-gray-200 dark:border-gray-700 shadow-sm">
          
//           {/* Toggle Button */}
//           <button
//             onClick={toggleSidebar}
//             className="p-2.5 rounded-xl text-blue-600 dark:text-blue-400
//                        hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors
//                        md:hidden"   // only show on mobile (desktop sidebar is always visible)
//             aria-label="Toggle sidebar"
//           >
//             {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
//           </button>

//           {/* Desktop toggle (optional - if you want collapse on desktop too) */}
//           <button
//             onClick={toggleSidebar}
//             className="hidden md:flex p-2.5 rounded-xl text-blue-600 dark:text-blue-400
//                        hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
//             aria-label="Toggle sidebar"
//           >
//             {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
//           </button>

//           <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
//             Dashboard
//           </h2>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashbordLayout;  *:


//group-aria-checked:
import React, { useContext, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';   // ← useNavigate যোগ করা হয়েছে
import web from "../assets/images/logo-selected.jpg";
import { Switch, Typography } from "@material-tailwind/react";
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthProvider';
import {
  FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
  FaList, FaPaw, FaPlusCircle, FaThList, FaUsers, FaBars, FaTimes, FaSignOutAlt
} from 'react-icons/fa';
import { MdDashboardCustomize } from "react-icons/md";
import useAdmin from '../hooks/useAdmin';
import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

const DashbordLayout = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();   // ← যোগ করা হয়েছে

  // Sidebar starts open on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleThemeToggle = () => setDarkMode(!darkMode);

  // ========== Updated Logout Function ==========
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');           // Home page-এ redirect
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  if (isAdminLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-lg font-medium text-gray-700 dark:text-gray-200">
          Loading dashboard...
        </div>
      </div>
    );
  }

  // Helper for active link style
  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `group flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200
     ${isActive(path)
       ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium'
       : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800'
     }`;

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* ========== Overlay (mobile only) ========== */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* ========== Sidebar ========== */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-72
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-700
          shadow-xl
          transform transition-transform duration-300 ease-in-out
          flex flex-col
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:shadow-none
        `}
      >
        {/* Logo + Close button */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={web}
              alt="logo"
              className="w-11 h-11 rounded-xl object-cover shadow-md group-hover:scale-105 transition"
            />
            <div>
              <h1 className="text-lg font-bold text-blue-600 dark:text-blue-400 leading-tight">
                PetAdopt
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Platform</p>
            </div>
          </Link>

          {/* Close button - mobile only */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close sidebar"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Theme Toggle */}
        <div className="px-5 mb-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60">
            <Switch
              color="blue"
              checked={darkMode}
              onChange={handleThemeToggle}
              ripple={false}
            />
            <Typography variant="small" className="text-gray-700 dark:text-gray-200 font-medium">
              Dark Mode
            </Typography>
          </div>
        </div>

        {/* Dashboard Title */}
        <div className="px-5 mb-2">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            <MdDashboardCustomize className="text-blue-500" />
            Dashboard
          </h2>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
          {isAdmin && (
            <>
              <p className="px-4 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Admin
              </p>
              <Link to="/dashbord/overview" className={linkClass('/dashbord/overview')}>
                <FcBullish className="text-xl" />
                Overview
              </Link>
              <Link to="/dashbord/adminprofile" className={linkClass('/dashbord/adminprofile')}>
                <FcOnlineSupport className="text-xl" />
                Admin Profile
              </Link>
              <Link to="/dashbord/users" className={linkClass('/dashbord/users')}>
                <FaUsers className="text-xl text-indigo-500" />
                Users
              </Link>
              <Link to="/dashbord/all-pets" className={linkClass('/dashbord/all-pets')}>
                <FaPaw className="text-xl text-indigo-500" />
                All Pets
              </Link>
              <Link to="/dashbord/all-donations" className={linkClass('/dashbord/all-donations')}>
                <FaDonate className="text-xl text-indigo-500" />
                All Donations
              </Link>
            </>
          )}

          <p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            User
          </p>
          <Link to="/dashbord/userprofile" className={linkClass('/dashbord/userprofile')}>
            <FcBusinessman className="text-xl" />
            User Profile
          </Link>
          <Link to="/dashbord/addpet" className={linkClass('/dashbord/addpet')}>
            <FaPlusCircle className="text-xl text-indigo-500" />
            Add a Pet
          </Link>
          <Link to="/dashbord/myaddedpets" className={linkClass('/dashbord/myaddedpets')}>
            <FaList className="text-xl text-indigo-500" />
            My Added Pets
          </Link>
          <Link to="/dashbord/my-adoption-requests" className={linkClass('/dashbord/my-adoption-requests')}>
            <FaHandshake className="text-xl text-indigo-500" />
            Adoption Request
          </Link>
          <Link to="/dashbord/createdonationcampaign" className={linkClass('/dashbord/createdonationcampaign')}>
            <FaBullhorn className="text-xl text-indigo-500" />
            Create Donation Campaign
          </Link>
          <Link to="/dashbord/my-donation-campaigns" className={linkClass('/dashbord/my-donation-campaigns')}>
            <FaThList className="text-xl text-indigo-500" />
            My Donation Campaigns
          </Link>
          <Link to="/dashbord/my-donations" className={linkClass('/dashbord/my-donations')}>
            <FaHandHoldingHeart className="text-xl text-indigo-500" />
            My Donations
          </Link>
        </nav>

        {/* User + Logout (bottom) */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center gap-3 mb-3">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/30"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                {user?.displayName?.[0] || 'U'}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
                {user?.displayName || 'User'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                       bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400
                       hover:bg-red-100 dark:hover:bg-red-900/50
                       font-medium text-sm transition-colors"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* ========== Main Content ========== */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 flex items-center gap-4 px-4 sm:px-6 py-3
                           bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
                           border-b border-gray-200 dark:border-gray-700 shadow-sm">
          
          {/* Toggle Button (Mobile) */}
          <button
            onClick={toggleSidebar}
            className="p-2.5 rounded-xl text-blue-600 dark:text-blue-400
                       hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors
                       md:hidden"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

          {/* Desktop toggle */}
          <button
            onClick={toggleSidebar}
            className="hidden md:flex p-2.5 rounded-xl text-blue-600 dark:text-blue-400
                       hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Dashboard
          </h2>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashbordLayout;