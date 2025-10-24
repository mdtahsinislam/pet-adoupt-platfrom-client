



// // // // // import React from 'react';
// // // // // import { Link, Outlet } from 'react-router-dom';  
// // // // // import web from "../assets/images/logo-selected.jpg";
// // // // // import { Switch, Typography } from "@material-tailwind/react";
// // // // // import { useTheme } from "../context/ThemeContext";
// // // // // //import { useAuthContext } from "../Pages/Shard/AuthProvider"; // ✅

// // // // // import {
// // // // //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// // // // //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // // // // } from 'react-icons/fa';
// // // // // import { MdDashboardCustomize } from "react-icons/md";
// // // // // import { useAuthContext } from '../context/AuthProvider';

// // // // // const DashbordLayout = () => {
// // // // //   const { isDarkMode, toggleTheme } = useTheme();
// // // // // //   const { user } = useAuthContext(); // ✅ get user
// // // // // //   const isAdmin = user?.role === "admin"; // ✅ check admin role

// // // // //   return (
// // // // //     <div className="drawer lg:drawer-open min-h-screen flex">
// // // // //       {/* Sidebar */}
// // // // //       <div
// // // // //         className="drawer-side bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 w-80 min-h-screen hidden lg:block pt-6"
// // // // //         style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.1)', zIndex: 40 }}
// // // // //       >
// // // // //         {/* Logo + Dark Mode */}
// // // // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // // // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // // // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // // // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // // // //               PetAdoptPlatform
// // // // //             </h1>
// // // // //           </Link>

// // // // //           Dark Mode Toggle
// // // // //           <div className="flex items-center gap-2">
// // // // //             <Switch color="blue" onChange={toggleTheme} checked={isDarkMode} />
// // // // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // // // //               Dark Mode
// // // // //             </Typography>
// // // // //           </div>
// // // // //           {/* Theme Toggle */}
// // // // //                   <div className="flex items-center gap-2">
// // // // //                     <Switch
// // // // //                       id="theme-toggle"
// // // // //                       checked={darkMode}
// // // // //                       onChange={handleThemeToggle}
// // // // //                       ripple={false}
// // // // //                       className="h-5 w-10"
// // // // //                     />
// // // // //                   </div>
// // // // //         </div>

// // // // //         {/* Dashboard Heading */}
// // // // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // // // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // // // //         </h1>

// // // // //         {/* Sidebar Menu */}
// // // // //         <ul className="menu p-4 w-full text-base-content space-y-2">

// // // // //           {/* ✅ Admin-only Links */}
           
// // // // //               <li>
// // // // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // //                   Users
// // // // //                 </Link>
// // // // //               </li>

// // // // //               <li>
// // // // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // //                   All Pets
// // // // //                 </Link>
// // // // //               </li>

// // // // //               <li>
// // // // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // //                   All Donations
// // // // //                 </Link>
// // // // //               </li>
            
// // // // //           {/* ✅ Common user links */}
// // // // //           <li>
// // // // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // //               Add a Pet
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/mypets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // //               My Added Pets
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // //               Adoption Request
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/create-campaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // //               Create Donation Campaign
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // //               My Donation Campaigns
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // // //               My Donations
// // // // //             </Link>
// // // // //           </li>
// // // // //         </ul>
// // // // //       </div>

// // // // //       {/* Drawer Content */}
// // // // //       <div className="flex-1 drawer-content w-full pt-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// // // // //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
// // // // //           Open drawer
// // // // //         </label>
// // // // //         <Outlet />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DashbordLayout;


// // // // // //i want theam toggle like navbar i use  add this feature 



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
// // // //   // Theme context থেকে darkMode state এবং setDarkMode ফাংশন নাও
// // // //   const { darkMode, setDarkMode } = useContext(ThemeContext);

// // // //   // Auth context থেকে user ও logout ফাংশন নাও (যদি লগইন ইউজার হ্যান্ডেল করতে চাও)
// // // //   const { user, logout } = useContext(AuthContext);
// // // //   //const isAdmin = user?.role === 'admin';
// // // //   const isAdmin = useAdmin();
// // // //   // থিম টগল করার হ্যান্ডলার
// // // //   const handleThemeToggle = () => {
// // // //     setDarkMode(!darkMode);
// // // //   };

// // // //   // লগআউট হ্যান্ডলার (ইচ্ছামতো ব্যবহার করো)
// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       await logout();
// // // //     } catch (error) {
// // // //       console.error("Logout error:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="drawer lg:drawer-open min-h-screen flex">
// // // //       {/* Sidebar */}
// // // //       <div
// // // //         className="drawer-side bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 w-80 min-h-screen hidden lg:block pt-6"
// // // //         style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.1)', zIndex: 40 }}
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
// // // //              <li> {/* admin path */}
// // // //             <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               Users
// // // //             </Link>
// // // //           </li>

// // // //           <li>
// // // //             <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               All Pets
// // // //             </Link>
// // // //           </li>

// // // //           <li>
// // // //             <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // // //               <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // // //               All Donations
// // // //             </Link>
// // // //           </li>
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

// // // //       {/* Drawer Content */}
// // // //       <div className="flex-1 drawer-content w-full pt-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// // // //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
// // // //           Open drawer
// // // //         </label>
// // // //         <Outlet />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashbordLayout;





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

// // // const DashbordLayout = () => {
// // //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// // //   const { user, logout } = useContext(AuthContext);
  
// // //   // ✅ Destructure correctly
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
// // //     <div className="drawer lg:drawer-open min-h-screen flex">
// // //       {/* Sidebar */}
// // //       <div
// // //         className="drawer-side bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 w-80 min-h-screen hidden lg:block pt-6"
// // //         style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.1)', zIndex: 40 }}
// // //       >
// // //         {/* Logo + Dark Mode */}
// // //         <div className="flex flex-col px-4 pb-4 gap-3">
// // //           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
// // //             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
// // //             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
// // //               PetAdoptPlatform
// // //             </h1>
// // //           </Link>

// // //           {/* Theme Toggle */}
// // //           <div className="flex items-center gap-2 mt-2">
// // //             <Switch
// // //               color="blue"
// // //               checked={darkMode}
// // //               onChange={handleThemeToggle}
// // //               ripple={false}
// // //             />
// // //             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
// // //               Dark Mode
// // //             </Typography>
// // //           </div>
// // //         </div>

// // //         {/* Dashboard Heading */}
// // //         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
// // //           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
// // //         </h1>

// // //         {/* Sidebar Menu */}
// // //         <ul className="menu p-4 w-full text-base-content space-y-2">
          
// // //           {/* ✅ Show only for admin */}
// // //           {isAdmin && (
// // //             <>
// // //               <li>
// // //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   Users
// // //                 </Link>
// // //               </li>

// // //               <li>
// // //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   All Pets
// // //                 </Link>
// // //               </li>

// // //               <li>
// // //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //                   All Donations
// // //                 </Link>
// // //               </li>
// // //             </>
// // //           )}

// // //           {/* ✅ Normal user & Admin common links */}
// // //           <li>
// // //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //               Add a Pet
// // //             </Link>
// // //           </li>

// // //           <li>
// // //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //               My Added Pets
// // //             </Link>
// // //           </li>

// // //           <li>
// // //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //               Adoption Request
// // //             </Link>
// // //           </li>

// // //           <li>
// // //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //               Create Donation Campaign
// // //             </Link>
// // //           </li>

// // //           <li>
// // //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //               My Donation Campaigns
// // //             </Link>
// // //           </li>

// // //           <li>
// // //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// // //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
// // //               My Donations
// // //             </Link>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Main content */}
// // //       <div className="flex-1 drawer-content w-full pt-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
// // //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
// // //           Open drawer
// // //         </label>
// // //         <Outlet />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DashbordLayout;








// // import React, { useContext } from 'react';
// // import { Link, Outlet } from 'react-router-dom';  
// // import web from "../assets/images/logo-selected.jpg";
// // import { Switch, Typography } from "@material-tailwind/react";
// // import { ThemeContext } from '../context/ThemeContext';
// // import { AuthContext } from '../context/AuthProvider';

// // import {
// //   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
// //   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// // } from 'react-icons/fa';
// // import { MdDashboardCustomize } from "react-icons/md";
// // import useAdmin from '../hooks/useAdmin'; 

// // const DashbordLayout = () => {
// //   const { darkMode, setDarkMode } = useContext(ThemeContext);
// //   const { user, logout } = useContext(AuthContext);
// //   const [isAdmin, isAdminLoading] = useAdmin();

// //   const handleThemeToggle = () => setDarkMode(!darkMode);
// //   const handleLogout = async () => {
// //     try {
// //       await logout();
// //     } catch (error) {
// //       console.error("Logout error:", error);
// //     }
// //   };

// //   if (isAdminLoading) {
// //     return (
// //       <div className="flex items-center justify-center h-screen dark:text-white">
// //         Loading dashboard...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col md:flex-row-reverse lg:flex-row min-h-screen">
      
// //       {/* Main content */}
// //       <div className="w-full md:w-2/3 lg:w-3/4 pt-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 order-1 md:order-2">
// //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
// //           Open drawer
// //         </label>
// //         <Outlet />
// //       </div>

// //       {/* Sidebar */}
// //       <div
// //         className="w-full md:w-1/3 lg:w-1/4 bg-white dark:bg-gray-900 border-t md:border-t-0 md:border-r border-gray-300 dark:border-gray-700 pt-6 order-2 md:order-1"
// //         style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.1)', zIndex: 40 }}
// //       >
// //         <div className="flex flex-col px-4 pb-4 gap-3">
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
// //         <ul className="menu p-4 w-full text-base-content space-y-2">
// //           {isAdmin && (
// //             <>
// //               <li>
// //                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// //                   Users
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// //                   All Pets
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// //                   All Donations
// //                 </Link>
// //               </li>
// //             </>
// //           )}

// //           {/* Common Links */}
// //           <li>
// //             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// //               Add a Pet
// //             </Link>
// //           </li>

// //           <li>
// //             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// //               My Added Pets
// //             </Link>
// //           </li>

// //           <li>
// //             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// //               Adoption Request
// //             </Link>
// //           </li>

// //           <li>
// //             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// //               Create Donation Campaign
// //             </Link>
// //           </li>

// //           <li>
// //             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// //               My Donation Campaigns
// //             </Link>
// //           </li>

// //           <li>
// //             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
// //               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700" />
// //               My Donations
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashbordLayout;





// import React, { useContext } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import web from "../assets/images/logo-selected.jpg";
// import { Switch, Typography } from "@material-tailwind/react";
// import { ThemeContext } from '../context/ThemeContext';
// import { AuthContext } from '../context/AuthProvider';

// import {
//   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
//   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// } from 'react-icons/fa';
// import { MdDashboardCustomize } from "react-icons/md";
// import useAdmin from '../hooks/useAdmin';

// const DashbordLayout = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const { user, logout } = useContext(AuthContext);

//   const [isAdmin, isAdminLoading] = useAdmin();

//   const handleThemeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   if (isAdminLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen dark:text-white">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row-reverse">
//       {/* Sidebar */}
//       <div className="w-full md:w-80 bg-white dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700 pt-6">
//         {/* Logo + Dark Mode */}
//         <div className="flex flex-col px-4 pb-4 gap-3">
//           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
//             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
//             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
//               PetAdoptPlatform
//             </h1>
//           </Link>

//           {/* Theme Toggle */}
//           <div className="flex items-center gap-2 mt-2">
//             <Switch
//               color="blue"
//               checked={darkMode}
//               onChange={handleThemeToggle}
//               ripple={false}
//             />
//             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
//               Dark Mode
//             </Typography>
//           </div>
//         </div>

//         {/* Dashboard Heading */}
//         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
//           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
//         </h1>

//         {/* Sidebar Menu */}
//         <ul className="menu p-4 w-full text-base-content space-y-2">
//           {isAdmin && (
//             <>
//               <li>
//                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Users
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Pets
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Donations
//                 </Link>
//               </li>
//             </>
//           )}

//           {/* Common Links */}
//           <li>
//             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Add a Pet
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Added Pets
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Adoption Request
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Create Donation Campaign
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donation Campaigns
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donations
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 pt-16 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashbordLayout;



// import React, { useContext } from 'react';
// import { Link, Outlet } from 'react-router-dom';   
// import web from "../assets/images/logo-selected.jpg";
// import { Switch, Typography } from "@material-tailwind/react"; 
// import { ThemeContext } from '../context/ThemeContext';
// import { AuthContext } from '../context/AuthProvider';

// import {
//   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
//   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// } from 'react-icons/fa';
// import { MdDashboardCustomize } from "react-icons/md";
// import useAdmin from '../hooks/useAdmin'; 

// const DashbordLayout = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const { user, logout } = useContext(AuthContext);
//   const [isAdmin, isAdminLoading] = useAdmin();

//   const handleThemeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   if (isAdminLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen dark:text-white">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`
//         flex flex-col-reverse 
//         md:flex-row-reverse 
//         min-h-screen
//       `}
//     >
//       {/* Sidebar */}
//       <div
//         className="w-full md:w-1/3 lg:w-1/4 bg-white dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700 pt-6"
//         style={{ boxShadow: '0 -2px 8px rgba(0,0,0,0.1)', zIndex: 40 }}
//       >
//         {/* Logo + Dark Mode */}
//         <div className="flex flex-col px-4 pb-4 gap-3">
//           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
//             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
//             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
//               PetAdoptPlatform
//             </h1>
//           </Link>

//           {/* Theme Toggle */}
//           <div className="flex items-center gap-2 mt-2">
//             <Switch
//               color="blue"
//               checked={darkMode}
//               onChange={handleThemeToggle}
//               ripple={false}
//             />
//             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
//               Dark Mode
//             </Typography>
//           </div>
//         </div>

//         {/* Dashboard Heading */}
//         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
//           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
//         </h1>

//         {/* Sidebar Menu */}
//         <ul className="menu p-4 w-full text-base-content space-y-2">
//           {isAdmin && (
//             <>
//               <li>
//                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Users
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Pets
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Donations
//                 </Link>
//               </li>
//             </>
//           )}

//           <li>
//             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Add a Pet
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Added Pets
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Adoption Request
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Create Donation Campaign
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donation Campaigns
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donations
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-full md:w-2/3 lg:w-3/4 px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashbordLayout;



// do this same code for 
// (lg device  and  md  device  ) 
  
// lg md  device এর size আনুয়ায়ী  (sider left and main content right)দুইপাশে wrap করে ছোট বড় হবে 




// sm /mobile  device এ  main content  উপরে  sider নিচে দেখাবে

//go to deep seak

// import React, { useContext } from 'react';
// import { Link, Outlet } from 'react-router-dom';   
// import web from "../assets/images/logo-selected.jpg";
// import { Switch, Typography } from "@material-tailwind/react"; 
// import { ThemeContext } from '../context/ThemeContext';
// import { AuthContext } from '../context/AuthProvider';
// //import Adminprofile from '../';pet-adoupt-platfrom-client\src\Pages\Dashbord\Element\Adminprofile.jsx
// //import Adminprofile from "../Pages/Dashbord/Element/Adminprofile";

// import {
//   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
//   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// } from 'react-icons/fa';
// import { MdDashboardCustomize } from "react-icons/md";
// import useAdmin from '../hooks/useAdmin'; 
// import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// const DashbordLayout = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const { user, logout } = useContext(AuthContext);
//   const [isAdmin, isAdminLoading] = useAdmin();

//   const handleThemeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   if (isAdminLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen dark:text-white">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`
//         flex flex-col 
//         md:flex-row    /* On md and up: flex row */
//         min-h-screen
//       `}
//     >
//       {/* Sidebar */}
//       <div
//         className="w-full md:w-1/3 lg:w-1/4 
//           bg-white dark:bg-gray-900 
//           border-t md:border-t-0 md:border-r border-gray-300 dark:border-gray-700
//           pt-6
//           order-2 md:order-1
//           shadow-md   h-screen
//     fixed
//     z-0
//           "
//         style={{ boxShadow: '0 -2px 8px rgba(0,0,0,0.1)', zIndex: 40 }}
//       >
//         {/* Logo + Dark Mode */}
//         <div className="flex flex-col px-4 pb-4 gap-3">
//           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
//             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
//             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
//               PetAdoptPlatform
//             </h1>
//           </Link>

//           {/* Theme Toggle */}
//           <div className="flex items-center gap-2 mt-2">
//             <Switch
//               color="blue"
//               checked={darkMode}
//               onChange={handleThemeToggle}
//               ripple={false}
//             />
//             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
//               Dark Mode
//             </Typography>
//           </div>
//         </div>

//         {/* Dashboard Heading */}
//         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 sticky top-0 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
//           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
//         </h1>

//         {/* Sidebar Menu */}
//         <ul className="menu p-4 w-full text-base-content space-y-2">
//           {isAdmin && (
//             <>
//              <li>
//                <li>
//                 <Link to="/dashbord/overview" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FcBullish className="text-xl  text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Overview
//                 </Link>
//               </li>
//                 <Link to="/dashbord/adminprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FcOnlineSupport className="text-xl  text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Admin Profile
//                 </Link>
//               </li>
             
//               <li>
//                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Users
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Pets
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Donations
//                 </Link>
//               </li>
//             </>
//           )}

//            <li>
//             <Link to="/dashbord/userprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               User Profile
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Add a Pet
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Added Pets
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Adoption Request
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Create Donation Campaign
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donation Campaigns
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donations
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-full md:w-2/3 lg:w-3/4 px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 order-1 md:order-2">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashbordLayout;





////2nd code

// import React, { useContext } from 'react';
// import { Link, Outlet } from 'react-router-dom';   
// import web from "../assets/images/logo-selected.jpg";
// import { Switch, Typography } from "@material-tailwind/react"; 
// import { ThemeContext } from '../context/ThemeContext';
// import { AuthContext } from '../context/AuthProvider';

// import {
//   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
//   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// } from 'react-icons/fa';
// import { MdDashboardCustomize } from "react-icons/md";
// import useAdmin from '../hooks/useAdmin'; 
// import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// const DashbordLayout = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const { user, logout } = useContext(AuthContext);
//   const [isAdmin, isAdminLoading] = useAdmin();

//   const handleThemeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   if (isAdminLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen dark:text-white">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-50 dark:bg-gray-800">
//       {/* Fixed Sidebar */}
//       <div
//         className="w-full md:w-1/3 lg:w-1/4 
//           bg-white dark:bg-gray-900 
//           border-t md:border-t-0 md:border-r border-gray-300 dark:border-gray-700
//           pt-6
//           fixed h-screen
//           overflow-y-auto
//           z-40
//           shadow-lg                    "
//       >
//         {/* Logo + Dark Mode */}
//         <div className="flex flex-col px-4 pb-4 gap-3">
//           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
//             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
//             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
//               PetAdoptPlatform
//             </h1>
//           </Link>

//           {/* Theme Toggle */}
//           <div className="flex items-center gap-2 mt-2">
//             <Switch
//               color="blue"
//               checked={darkMode}
//               onChange={handleThemeToggle}
//               ripple={false}
//             />
//             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
//               Dark Mode
//             </Typography>
//           </div>
//         </div>

//         {/* Dashboard Heading */}
//         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
//           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
//         </h1>

//         {/* Sidebar Menu */}
//         <ul className="menu p-4 w-full text-base-content space-y-2">
//           {isAdmin && (
//             <>
//               <li>
//                 <Link to="/dashbord/overview" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FcBullish className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Overview
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/adminprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FcOnlineSupport className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Admin Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Users
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Pets
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Donations
//                 </Link>
//               </li>
//             </>
//           )}

//           <li>
//             <Link to="/dashbord/userprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               User Profile
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Add a Pet
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Added Pets
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Adoption Request
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Create Donation Campaign
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donation Campaigns
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donations
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content with proper margin */}
//       <div className="w-full md:ml-[33.333%] lg:ml-[25%] px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashbordLayout;


// import React, { useContext } from 'react';
// import { Link, Outlet } from 'react-router-dom';   
// import web from "../assets/images/logo-selected.jpg";
// import { Switch, Typography } from "@material-tailwind/react"; 
// import { ThemeContext } from '../context/ThemeContext';
// import { AuthContext } from '../context/AuthProvider';

// import {
//   FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
//   FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
// } from 'react-icons/fa';
// import { MdDashboardCustomize } from "react-icons/md";
// import useAdmin from '../hooks/useAdmin'; 
// import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

// const DashbordLayout = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const { user, logout } = useContext(AuthContext);
//   const [isAdmin, isAdminLoading] = useAdmin();

//   const handleThemeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   if (isAdminLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen dark:text-white">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-800">
      

//       {/* Sidebar - Comes SECOND on mobile (below main content) */}
//       <div
//         className="w-full md:w-1/3 lg:w-1/4 
//           bg-white dark:bg-gray-900 
//           border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700
//           pt-6
//           order-2 md:order-1
//           shadow-lg
//           "
//       >
//         {/* Logo + Dark Mode */}
//         <div className="flex flex-col px-4 pb-4 gap-3">
//           <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
//             <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
//             <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
//               PetAdoptPlatform
//             </h1>
//           </Link>

//           {/* Theme Toggle */}
//           <div className="flex items-center gap-2 mt-2">
//             <Switch
//               color="blue"
//               checked={darkMode}
//               onChange={handleThemeToggle}
//               ripple={false}
//             />
//             <Typography variant="small" className="text-gray-700 dark:text-gray-200">
//               Dark Mode
//             </Typography>
//           </div>
//         </div>

//         {/* Dashboard Heading */}
//         <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
//           <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
//         </h1>

//         {/* Sidebar Menu */}
//         <ul className="menu p-4 w-full text-base-content space-y-2">
//           {isAdmin && (
//             <>
//               <li>
//                 <Link to="/dashbord/overview" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FcBullish className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Overview
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/adminprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FcOnlineSupport className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Admin Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   Users
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Pets
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//                   <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//                   All Donations
//                 </Link>
//               </li>
//             </>
//           )}

//           <li>
//             <Link to="/dashbord/userprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               User Profile
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Add a Pet
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Added Pets
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Adoption Request
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               Create Donation Campaign
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donation Campaigns
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
//               <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
//               My Donations
//             </Link>
//           </li>
//         </ul>
//       </div>
//       {/* Main Content - Comes FIRST on mobile */}
//       <div className="w-full md:w-2/3 lg:w-3/4 px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 order-1">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashbordLayout;


import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';   
import web from "../assets/images/logo-selected.jpg";
import { Switch, Typography } from "@material-tailwind/react"; 
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthProvider';

import {
  FaBullhorn, FaDonate, FaHandHoldingHeart, FaHandshake,
  FaList, FaPaw, FaPlusCircle, FaThList, FaUsers
} from 'react-icons/fa';
import { MdDashboardCustomize } from "react-icons/md";
import useAdmin from '../hooks/useAdmin'; 
import { FcBullish, FcBusinessman, FcOnlineSupport } from 'react-icons/fc';

const DashbordLayout = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (isAdminLoading) {
    return (
      <div className="flex items-center justify-center h-screen dark:text-white">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Sidebar - Sticky on desktop, normal on mobile */}
      <div
        className="w-full md:w-1/3 lg:w-1/4 
          bg-white dark:bg-gray-900 
          border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700
          pt-6
          order-2 md:order-1
          shadow-lg
          md:sticky md:top-0 md:h-screen md:overflow-y-auto"
      >
        <div className="md:flex md:flex-col md:h-full">
          {/* Logo + Dark Mode */}
          <div className="flex flex-col px-4 pb-4 gap-3">
            <Link to="/" className="flex items-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
              <img className="w-14 h-14 rounded-lg" src={web} alt="logo" />
              <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500 ml-2">
                PetAdoptPlatform
              </h1>
            </Link>

            {/* Theme Toggle */}
            <div className="flex items-center gap-2 mt-2">
              <Switch
                color="blue"
                checked={darkMode}
                onChange={handleThemeToggle}
                ripple={false}
              />
              <Typography variant="small" className="text-gray-700 dark:text-gray-200">
                Dark Mode
              </Typography>
            </div>
          </div>

          {/* Dashboard Heading */}
          <h1 className="text-2xl font-semibold flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700">
            <MdDashboardCustomize className="text-blue-600 dark:text-blue-400" /> Dashboard
          </h1>

          {/* Sidebar Menu - Scrollable on desktop */}
          <div className="flex-1 overflow-y-auto">
            <ul className="menu p-4 w-full text-base-content space-y-2">
              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashbord/overview" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                      <FcBullish className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashbord/adminprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                      <FcOnlineSupport className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                      Admin Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashbord/users" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                      <FaUsers className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashbord/all-pets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                      <FaPaw className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                      All Pets
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashbord/all-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                      <FaDonate className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                      All Donations
                    </Link>
                  </li>
                </>
              )}

              <li>
                <Link to="/dashbord/userprofile" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                  <FcBusinessman className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                  User Profile
                </Link>
              </li>
              <li>
                <Link to="/dashbord/addpet" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                  <FaPlusCircle className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                  Add a Pet
                </Link>
              </li>
              <li>
                <Link to="/dashbord/myaddedpets" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                  <FaList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                  My Added Pets
                </Link>
              </li>
              <li>
                <Link to="/dashbord/my-adoption-requests" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                  <FaHandshake className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                  Adoption Request
                </Link>
              </li>
              <li>
                <Link to="/dashbord/createdonationcampaign" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                  <FaBullhorn className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                  Create Donation Campaign
                </Link>
              </li>
              <li>
                <Link to="/dashbord/my-donation-campaigns" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                  <FaThList className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                  My Donation Campaigns
                </Link>
              </li>
              <li>
                <Link to="/dashbord/my-donations" className="group rounded dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 px-3 py-2 flex gap-2 items-center">
                  <FaHandHoldingHeart className="text-xl text-indigo-500 group-hover:text-indigo-700 transition duration-300" />
                  My Donations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content - Comes FIRST on mobile */}
      <div className="w-full md:w-2/3 lg:w-3/4 px-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 order-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashbordLayout;