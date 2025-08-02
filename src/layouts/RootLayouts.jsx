import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shard/Navbar';
import Footer from '../Pages/Shard/Footer';

const RootLayouts = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;


// src/layouts/RootLayouts.jsx

