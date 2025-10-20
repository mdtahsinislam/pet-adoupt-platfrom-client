// import React from 'react'

// export default function Adminprofile() {
//   return (
//     <div>Adminprofile</div>
//   )
// }


// // // i want to show in this page login admin profile information image,name,email,phone, address in stylish good looking give me the code with backend also 
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Adminprofile() {
//   const [adminData, setAdminData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ধরুন এই ইউজারের ইমেইল Firebase Auth বা Context থেকে আসে
//   const adminEmail = "mdtahsinislam13@gmail.com"; // পরিবর্তন করুন লগইন করা অ্যাডমিনের ইমেইল দিয়ে

//   useEffect(() => {
//     const fetchAdminData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/users/${adminEmail}`);
//         setAdminData(response.data);
//       } catch (error) {
//         console.error("Error fetching admin data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAdminData();
//   }, [adminEmail]);

//   if (loading) {
//     return <div className="text-center mt-10 text-xl">Loading admin profile...</div>;
//   }

//   if (!adminData) {
//     return <div className="text-center mt-10 text-red-500">Admin profile not found!</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
//       <div className="flex flex-col items-center">
//         <img
//           src={adminData.photo || "https://via.placeholder.com/150"}
//           alt={adminData.name}
//           className="w-32 h-32 rounded-full border-2 border-cyan-400 mb-4"
//         />
//         <h2 className="text-2xl font-bold mb-1">{adminData.name || "No Name"}</h2>
//         <p className="text-gray-600 mb-1">Email: {adminData.email}</p>
//         <p className="text-gray-600 mb-1">Role: {adminData.role}</p>
//         {/* যদি ফোন এবং অ্যাড্রেস ডেটা থাকে */}
//         <p className="text-gray-600 mb-1">Phone: {adminData.phone || "Not Provided"}</p>
//         <p className="text-gray-600 mb-1">Address: {adminData.address || "Not Provided"}</p>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth"; // Firebase Auth import

export default function Adminprofile() {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser; // বর্তমানে লগইন করা ইউজার
        if (!user) {
          setLoading(false);
          return;
        }

        const email = user.email; // লগইন করা ইউজারের ইমেইল
        const response = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/users/${email}`);
        setAdminData(response.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading admin profile...</div>;
  }

  if (!adminData) {
    return <div className="text-center mt-10 text-red-500">Admin profile not found!</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-base-content rounded-xl shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={adminData.photo || "https://via.placeholder.com/150"}
          alt={adminData.name}
          className="w-32 h-32 rounded-full border-2 border-cyan-400 mb-4"
        />
        <h2 className="text-2xl font-bold mb-1">Name: {adminData.name || "No Name"}</h2>
        <p className="text-gray-600 mb-1">Email: {adminData.email}</p>
        <span className="mb-1 px-3 py-1 inline-block rounded-full bg-green-100 text-green-800 font-semibold">
  Role: {adminData.role}
</span>

        {/* <p className=" mb-1 px-2 py-1 btn btn-accent btn-outline inline-block rounded-full text-green-800 font-semibold">Role: {adminData.role}</p> */}
        {/* <p className="text-gray-600 mb-1">Phone: {adminData.phone || "Not Provided"}</p>
        <p className="text-gray-600 mb-1">Address: {adminData.address || "Not Provided"}</p> */}
      </div>
    </div>
  );
}
