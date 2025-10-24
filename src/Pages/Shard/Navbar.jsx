

// export default Navbar;






import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Switch,
  Button,
  Collapse,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/images/logo-selected.jpg';
import defaultAvatar from '../../assets/images/call.png';
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://pet-adoupt-platfrom-serverr.vercel.app/users/${user.email}`)
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(err => console.error("Failed to fetch user data:", err));
    }
  }, [user]);

  const handleThemeToggle = () => setDarkMode(!darkMode);

  const handleLogout = async () => {
    try {
      await logout();
      setUserData(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const getUserImage = () => {
    if (!userData) return defaultAvatar;
    const potentialSources = [
      userData.photo,
      userData.photoURL,
      userData.image,
      userData.profilePicture
    ].filter(Boolean);
    return potentialSources[0] || defaultAvatar;
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-bold text-blue-700 dark:text-white">
            PetAdouptPlatform
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-sm font-semibold hover:text-blue-500 dark:text-white">
            Home
          </Link>
          <Link to="/petlisting" className="text-sm font-semibold hover:text-blue-500 dark:text-white">
            Pet List
          </Link>
          <Link to="/donationampaigns" className="text-sm font-semibold hover:text-blue-500 dark:text-white">
             Donation Campaigns
          </Link>
            <Link to="/service" className="text-sm font-semibold hover:text-blue-500 dark:text-white">
            Our Service
          </Link>
           <Link to="/contact" className="text-sm font-semibold hover:text-blue-500 dark:text-white">
            Contact
          </Link>
        </div>

        {/* Theme Toggle & Auth (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Switch
            id="theme-toggle"
            checked={darkMode}
            onChange={handleThemeToggle}
            ripple={false}
            className="h-5 w-10"
          />
          {!user ? (
            <Button variant="outlined" size="sm" className="border-blue-500 text-blue-500">
              <Link to="/login">Login</Link>
            </Button>
          ) : (
            <Menu>
              <MenuHandler>
                <div className="cursor-pointer">
                  <img
                    src={getUserImage()}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultAvatar;
                    }}
                  />
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem><Link to="/dashbord">Dashboard</Link></MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <XMarkIcon className="w-6 h-6 text-blue-600 dark:text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-blue-600 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Collapse open={openNav}>
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white dark:bg-gray-800">
          <Link to="/" onClick={() => setOpenNav(false)} className="text-sm font-semibold dark:text-white">Home</Link>
          <Link to="/petlisting" onClick={() => setOpenNav(false)} className="text-sm font-semibold dark:text-white">Pet List</Link>
          <Link to="/donationampaigns" onClick={() => setOpenNav(false)} className="text-sm font-semibold dark:text-white">Donation Campaigns</Link>
          

 <Link to="/service" onClick={() => setOpenNav(false)} className="text-sm font-semibold dark:text-white"> Our Service</Link>
          <Link to="/contact" onClick={() => setOpenNav(false)} className="text-sm font-semibold dark:text-white">Contact</Link>
          



          <div className="flex items-center gap-2">
            <Switch
              id="theme-toggle-mobile"
              checked={darkMode}
              onChange={handleThemeToggle}
              ripple={false}
              className="h-5 w-10"
            />
            <span className="text-sm dark:text-white">Dark Mode</span>
          </div>

{/**i change  */}
          {/* {!user ? (     
            <Button variant="outlined" size="sm" className="border-blue-500 text-blue-500">
              <Link to="/login">Login</Link>
            </Button>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/dashbord" onClick={() => setOpenNav(false)} className="text-sm font-semibold dark:text-white">Dashboard</Link>
              <Button size="sm" color="red" onClick={handleLogout}>Logout</Button>
            </div>
          )} */}


          {/***this */}

          {!user ? (
  <Button variant="outlined" size="sm" className="border-blue-500 text-blue-500">
    <Link to="/login">Login</Link>
  </Button>
) : (
  <div className="flex flex-col gap-3">
    {/* Avatar */}
    <div className="flex items-center gap-3">
      <img
        src={getUserImage()}
        alt="User Avatar"
        className="w-10 h-10 rounded-full border border-gray-300 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultAvatar;
        }}
      />
      
    </div>
    {/* Links */}
    <Link to="/dashbord" onClick={() => setOpenNav(false)} className="text-sm font-semibold dark:text-white">Dashboard</Link>
    <Button size="sm" color="red" onClick={handleLogout}>Logout</Button>
  </div>
)}

        </div>
      </Collapse>
    </nav>
  );
};

export default Navbar;


// this code is all most correct in lg and md device  when user login it show user picture  but mobile device when user login it not show user picture  add this feature
// http://localhost:3000
//https://pet-adoupt-platfrom-serverr.vercel.app