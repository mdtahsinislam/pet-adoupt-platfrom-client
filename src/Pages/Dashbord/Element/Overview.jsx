// // import React from 'react'

// // export default function Overview() {
// //   return (
// //     <div>Overview</div>
// //   )
// // }
// // //i nead a graphical professionan good looking oerview showcase overall stats with charts and graphical elements


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
// import { FcBusinessman, FcHome, FcDonate, FcLike } from 'react-icons/fc';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// export default function Overview() {
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalPets: 0,
//     totalAdoptions: 0,
//     totalDonations: 0,
//   });

//   const [donationData, setDonationData] = useState([]);
//   const [adoptionData, setAdoptionData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch total users
// //         const usersRes = await axios.get('http://localhost:3000/all-users');
// //         const petsRes = await axios.get('http://localhost:3000/all-pets');
// //         const adoptionsRes = await axios.get('http://localhost:3000/all-adoption-requests'); // Create this endpoint if needed
// //         const donationsRes = await axios.get('http://localhost:3000/all-donation-campaigns');

// //         setStats({
// //           totalUsers: usersRes.data.length,
// //           totalPets: petsRes.data.length,
// //           totalAdoptions: adoptionsRes.data.length,
// //           totalDonations: donationsRes.data.length,
// //         });

// //         // Example: Pie data for donations by campaign
// //         const donationPie = donationsRes.data.map(c => ({
// //           name: c.petName || 'Campaign',
// //           value: c.donatedAmount,
// //         }));
// //         setDonationData(donationPie);

// //         // Example: Bar chart for adoptions per pet category
// //         const adoptionBar = [];
// //         const categoryMap = {};
// //         adoptionsRes.data.forEach(r => {
// //           categoryMap[r.petCategory] = (categoryMap[r.petCategory] || 0) + 1;
// //         });
// //         for (const key in categoryMap) {
// //           adoptionBar.push({ category: key, adoptions: categoryMap[key] });
// //         }
// //         setAdoptionData(adoptionBar);

// //       } catch (error) {
// //         console.error('Overview fetch error:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const usersRes = await axios.get('http://localhost:3000/all-users');
//       const petsRes = await axios.get('http://localhost:3000/all-pets');
//       const adoptionsRes = await axios.get('http://localhost:3000/all-adoption-requests');
//       const donationsRes = await axios.get('http://localhost:3000/all-donation-campaigns');

//       console.log('Users:', usersRes.data);
//       console.log('Pets:', petsRes.data);
//       console.log('Adoptions:', adoptionsRes.data);
//       console.log('Donations:', donationsRes.data);

//       setStats({
//         totalUsers: usersRes.data.length,
//         totalPets: petsRes.data.length,
//         totalAdoptions: adoptionsRes.data.length,
//         totalDonations: donationsRes.data.length,
//       });

//       const donationPie = donationsRes.data.map(c => ({
//         name: c.petName || 'Campaign',
//         value: c.donatedAmount || 0,
//       }));
//       console.log('Donation Pie Data:', donationPie);
//       setDonationData(donationPie);

//       const adoptionBar = [];
//       const categoryMap = {};
//       adoptionsRes.data.forEach(r => {
//         categoryMap[r.petCategory] = (categoryMap[r.petCategory] || 0) + 1;
//       });
//       for (const key in categoryMap) {
//         adoptionBar.push({ category: key, adoptions: categoryMap[key] });
//       }
//       console.log('Adoption Bar Data:', adoptionBar);
//       setAdoptionData(adoptionBar);

//     } catch (error) {
//       console.error('Overview fetch error:', error);
//     }
//   };

//   fetchData();
// }, []);

//   return (
//     <div className="p-6 space-y-6">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <FcBusinessman className="text-4xl mr-3" />
//           <div>
//             <p className="text-gray-500 dark:text-gray-300">Total Users</p>
//             <p className="text-2xl font-bold">{stats.totalUsers}</p>
//           </div>
//         </div>

//         <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <FcHome className="text-4xl mr-3" />
//           <div>
//             <p className="text-gray-500 dark:text-gray-300">Total Pets</p>
//             <p className="text-2xl font-bold">{stats.totalPets}</p>
//           </div>
//         </div>

//         <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <FcLike className="text-4xl mr-3" />
//           <div>
//             <p className="text-gray-500 dark:text-gray-300">Adoptions</p>
//             <p className="text-2xl font-bold">{stats.totalAdoptions}</p>
//           </div>
//         </div>

//         <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <FcDonate className="text-4xl mr-3" />
//           <div>
//             <p className="text-gray-500 dark:text-gray-300">Donations</p>
//             <p className="text-2xl font-bold">{stats.totalDonations}</p>
//           </div>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Donations by Campaign</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={donationData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 label
//               >
//                 {donationData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Adoptions per Category</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={adoptionData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="category" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="adoptions" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
// import { FcBusinessman, FcHome, FcDonate, FcLike } from 'react-icons/fc';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// export default function Overview() {
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalPets: 0,
//     totalAdoptions: 0,
//     totalDonations: 0,
//   });

//   const [donationData, setDonationData] = useState([]);
//   const [adoptionData, setAdoptionData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usersRes = await axios.get('http://localhost:3000/all-users');
//         const petsRes = await axios.get('http://localhost:3000/all-pets');
//         const adoptionsRes = await axios.get('http://localhost:3000/all-adoption-requests');
//         const donationsRes = await axios.get('http://localhost:3000/all-donation-campaigns');

//         setStats({
//           totalUsers: usersRes.data.length,
//           totalPets: petsRes.data.length,
//           totalAdoptions: adoptionsRes.data.length,
//           totalDonations: donationsRes.data.length,
//         });

//         const donationPie = donationsRes.data.map(c => ({
//           name: c.petName || 'Campaign',
//           value: c.donatedAmount || 0,
//         }));
//         setDonationData(donationPie);

//         const adoptionBar = [];
//         const categoryMap = {};
//         adoptionsRes.data.forEach(r => {
//           categoryMap[r.petCategory] = (categoryMap[r.petCategory] || 0) + 1;
//         });
//         for (const key in categoryMap) {
//           adoptionBar.push({ category: key, adoptions: categoryMap[key] });
//         }
//         setAdoptionData(adoptionBar);

//       } catch (error) {
//         console.error('Overview fetch error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="p-6 space-y-6">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <FcBusinessman className="text-4xl mr-3" />
//           <div>
//             <p className="text-gray-500 dark:text-gray-300">Total Users</p>
//             <p className="text-2xl font-bold">{stats.totalUsers}</p>
//           </div>
//         </div>
//         <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <FcHome className="text-4xl mr-3" />
//           <div>
//             <p className="text-gray-500 dark:text-gray-300">Total Pets</p>
//             <p className="text-2xl font-bold">{stats.totalPets}</p>
//           </div>
//         </div>
//         <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <FcLike className="text-4xl mr-3" />
//           <div>
//             <p className="text-gray-500 dark:text-gray-300">Adoptions</p>
//             <p className="text-2xl font-bold">{stats.totalAdoptions}</p>
//           </div>
//         </div>
//         <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <FcDonate className="text-4xl mr-3" />
//           <div>
//             <p className="text-gray-500 dark:text-gray-300">Donations</p>
//             <p className="text-2xl font-bold">{stats.totalDonations}</p>
//           </div>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Donations by Campaign</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={donationData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 label
//               >
//                 {donationData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Adoptions per Category</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={adoptionData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="category" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="adoptions" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }



// // please correct my full code
// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import axios from "axios";

// export default function AdoptionChart() {
//   const [adoptionData, setAdoptionData] = useState([]);

//   useEffect(() => {
//     const fetchAdoptionData = async () => {
//       try {
//         const { data } = await axios.get("https://your-server.vercel.app/adoption-requests");

//         // ✅ Step 2: Group by petName and count accepted adoptions
//         const adoptionCount = {};

//         data.forEach((req) => {
//           if (req.status === "accepted") { // শুধু accepted গুলো গণনা করবো
//             adoptionCount[req.petName] = (adoptionCount[req.petName] || 0) + 1;
//           }
//         });

//         // ✅ Step 3: Convert object to array for chart
//         const formattedData = Object.keys(adoptionCount).map((key) => ({
//           category: key,       // petName হিসেবে দেখাবে
//           adoptions: adoptionCount[key],
//         }));

//         setAdoptionData(formattedData);
//       } catch (error) {
//         console.error("Error fetching adoption data:", error);
//       }
//     };

//     fetchAdoptionData();
//   }, []);

//   return (
//     <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//       <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">
//         Adoptions per Category
//       </h2>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart
//           data={adoptionData}
//           margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="category" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="adoptions" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, LineChart, Line
} from 'recharts';
import { FcBusinessman, FcHome, FcDonate, FcLike, FcCalendar, FcStatistics } from 'react-icons/fc';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF6B6B'];

export default function Overview() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPets: 0,
    totalAdoptions: 0,
    totalDonations: 0,
    pendingAdoptions: 0,
    totalDonationAmount: 0,
  });

  const [donationData, setDonationData] = useState([]);
  const [adoptionData, setAdoptionData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [usersRes, petsRes, adoptionsRes, donationsRes] = await Promise.all([
          axios.get('https://pet-adoupt-platfrom-serverr.vercel.app/all-users'),
          axios.get('https://pet-adoupt-platfrom-serverr.vercel.app/all-pets'),
          axios.get('https://pet-adoupt-platfrom-serverr.vercel.app/all-adoption-requests'),
          axios.get('https://pet-adoupt-platfrom-serverr.vercel.app/all-donation-campaigns')
        ]);

        const pendingAdoptions = adoptionsRes.data.filter(req => req.status === 'pending').length;
        const totalDonationAmount = donationsRes.data.reduce((sum, campaign) => 
          sum + (campaign.donatedAmount || 0), 0
        );

        setStats({
          totalUsers: usersRes.data.length,
          totalPets: petsRes.data.length,
          totalAdoptions: adoptionsRes.data.filter(req => req.status === 'accepted').length,
          totalDonations: donationsRes.data.length,
          pendingAdoptions,
          totalDonationAmount,
        });

        // Donation Pie Chart Data
        const donationPie = donationsRes.data
          .filter(campaign => (campaign.donatedAmount || 0) > 0)
          .slice(0, 6)
          .map(c => ({
            name: c.petName?.substring(0, 15) + (c.petName?.length > 15 ? '...' : '') || 'Campaign',
            value: c.donatedAmount || 0,
          }));
        setDonationData(donationPie);

        // ✅ FIXED: Adoption Bar Chart Data - Use petName like in your original working code
        const adoptionCount = {};
        adoptionsRes.data.forEach((req) => {
          if (req.status === 'accepted') {
            const name = req.petName || 'Unknown';
            adoptionCount[name] = (adoptionCount[name] || 0) + 1;
          }
        });

        const formattedData = Object.keys(adoptionCount).map((key) => ({
          category: key,
          adoptions: adoptionCount[key],
        }));
        setAdoptionData(formattedData);

        // Monthly Trend Data
        const monthlyTrends = generateMonthlyData(adoptionsRes.data, donationsRes.data);
        setMonthlyData(monthlyTrends);

      } catch (error) {
        console.error('Overview fetch error:', error);
        setError('Failed to load dashboard data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Generate mock monthly data
  const generateMonthlyData = (adoptions, donations) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map((month, index) => ({
      month,
      adoptions: Math.floor(Math.random() * 20) + 5,
      donations: Math.floor(Math.random() * 15) + 3,
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center text-red-500 bg-red-100 dark:bg-red-900 p-6 rounded-lg">
          <p className="text-lg font-semibold">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* 🔹 Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Welcome  pet adoption platform analytics
          </p>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <FcStatistics className="text-2xl" />
          <span className="text-sm">Real-time Analytics</span>
        </div>
      </div>

      {/* 🔹 Enhanced Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            icon: <FcBusinessman className="text-4xl" />, 
            title: 'Total Users', 
            value: stats.totalUsers.toLocaleString(),
            subtitle: 'Registered users',
            gradient: 'from-blue-500 to-blue-600'
          },
          { 
            icon: <FcHome className="text-4xl" />, 
            title: 'Available Pets', 
            value: stats.totalPets.toLocaleString(),
            subtitle: 'Looking for homes',
            gradient: 'from-green-500 to-green-600'
          },
          { 
            icon: <FcLike className="text-4xl" />, 
            title: 'Successful Adoptions', 
            value: stats.totalAdoptions.toLocaleString(),
            subtitle: `${stats.pendingAdoptions} pending`,
            gradient: 'from-purple-500 to-purple-600'
          },
          { 
            icon: <FcDonate className="text-4xl" />, 
            title: 'Total Donations', 
            value: `$${stats.totalDonationAmount.toLocaleString()}`,
            subtitle: `${stats.totalDonations} campaigns`,
            gradient: 'from-orange-500 to-orange-600'
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${card.gradient} p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-white`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">{card.title}</p>
                <p className="text-2xl font-bold mt-2">{card.value}</p>
                <p className="text-xs opacity-80 mt-1">{card.subtitle}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Enhanced Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 🥧 Donation Pie Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Donations by Campaign
            </h2>
            <FcDonate className="text-2xl" />
          </div>
          {donationData.length > 0 ? (
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={donationData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  innerRadius={60}
                  paddingAngle={2}
                  fill="#8884d8"
                  label={({ name, percent }) => 
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {donationData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Donated']}
                  labelFormatter={(label) => `Campaign: ${label}`}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-500">
              No donation data available
            </div>
          )}
        </div>

        {/* 📊 Adoption Bar Chart - FIXED */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Adoptions by Pet
            </h2>
            <FcLike className="text-2xl" />
          </div>
          {adoptionData.length > 0 ? (
            <ResponsiveContainer width="100%" height={350}>
              <BarChart 
                data={adoptionData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="category" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  tick={{ fontSize: 18 }}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [value, 'Adoptions']}
                  labelFormatter={(label) => `Pet: ${label}`}
                />
                <Legend />
                <Bar 
                  dataKey="adoptions" 
                  name="Successful Adoptions"
                  radius={[4, 4, 0, 0]}
                >
                  {adoptionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-500">
              No adoption data available
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Monthly Trends Line Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            Monthly Trends
          </h2>
          <FcCalendar className="text-2xl" />
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="adoptions" 
              name="Adoptions" 
              stroke="#0088FE" 
              strokeWidth={3}
              dot={{ fill: '#0088FE', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#0088FE', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="donations" 
              name="Donations" 
              stroke="#00C49F" 
              strokeWidth={3}
              dot={{ fill: '#00C49F', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#00C49F', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}