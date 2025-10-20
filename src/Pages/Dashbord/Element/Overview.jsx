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
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts';
import { FcBusinessman, FcHome, FcDonate, FcLike } from 'react-icons/fc';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Overview() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPets: 0,
    totalAdoptions: 0,
    totalDonations: 0,
  });

  const [donationData, setDonationData] = useState([]);
  const [adoptionData, setAdoptionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ⚙️ API endpoints update করো তোমার server অনুযায়ী
        const usersRes = await axios.get('http://localhost:3000/all-users');
        const petsRes = await axios.get('http://localhost:3000/all-pets');
        const adoptionsRes = await axios.get('http://localhost:3000/all-adoption-requests');
        const donationsRes = await axios.get('http://localhost:3000/all-donation-campaigns');

        // ✅ Total stats
        setStats({
          totalUsers: usersRes.data.length,
          totalPets: petsRes.data.length,
          totalAdoptions: adoptionsRes.data.length,
          totalDonations: donationsRes.data.length,
        });

        // ✅ Pie Chart (Donation Data)
        const donationPie = donationsRes.data.map(c => ({
          name: c.petName || 'Campaign',
          value: c.donatedAmount || 0,
        }));
        setDonationData(donationPie);

        // ✅ Bar Chart (Adoption Data)
        const adoptionCount = {};
        adoptionsRes.data.forEach((req) => {
          if (req.status === 'accepted') { // শুধু accepted গুলো নেবে
            const name = req.petName || 'Unknown';
            adoptionCount[name] = (adoptionCount[name] || 0) + 1;
          }
        });

        const formattedData = Object.keys(adoptionCount).map((key) => ({
          category: key,
          adoptions: adoptionCount[key],
        }));

        setAdoptionData(formattedData);
      } catch (error) {
        console.error('Overview fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* 🔹 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <FcBusinessman className="text-4xl mr-3" />
          <div>
            <p className="text-gray-500 dark:text-gray-300">Total Users</p>
            <p className="text-2xl font-bold">{stats.totalUsers}</p>
          </div>
        </div>

        <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <FcHome className="text-4xl mr-3" />
          <div>
            <p className="text-gray-500 dark:text-gray-300">Total Pets</p>
            <p className="text-2xl font-bold">{stats.totalPets}</p>
          </div>
        </div>

        <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <FcLike className="text-4xl mr-3" />
          <div>
            <p className="text-gray-500 dark:text-gray-300">Adoptions</p>
            <p className="text-2xl font-bold">{stats.totalAdoptions}</p>
          </div>
        </div>

        <div className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <FcDonate className="text-4xl mr-3" />
          <div>
            <p className="text-gray-500 dark:text-gray-300">Donations</p>
            <p className="text-2xl font-bold">{stats.totalDonations}</p>
          </div>
        </div>
      </div>

      {/* 🔹 Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 🥧 Donation Pie Chart */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">
            Donations by Campaign
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={donationData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {donationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 📊 Adoption Bar Chart */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">
            Adoptions per Category
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={adoptionData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="adoptions" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
