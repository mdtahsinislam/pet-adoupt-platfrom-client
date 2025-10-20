// import React from 'react'

// export default function Userprofile() {
//   return (
//     <div>Userprofile</div>
//   )
// }

// //i want user profile information image , name, email, phone , address 

import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [adoptions, setAdoptions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace this with logged-in user email from Firebase/Auth context
//   const userEmail = "i want currently login user profile information";
const auth = getAuth();
const userEmail = auth.currentUser ? auth.currentUser.email : null;


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user profile
        const res = await axios.get(`http://localhost:3000/users/${userEmail}`);
        setUser(res.data);

        // Fetch adoption requests for this user
        const adoptionRes = await axios.get(`http://localhost:3000/my-adoption-requests/${userEmail}`);
        setAdoptions(adoptionRes.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userEmail]);

  if (loading) return <div>Loading profile...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="max-w-3xl mt-20 mx-auto p-6 bg-base-content shadow rounded-lg">
      <div className="flex items-center gap-4">
        <img
          src={user.photo || "https://i.ibb.co/placeholder.png"}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400"
        />
        <div>
          <h2 className="text-2xl font-bold">Name : {user.name || "No Name Provided"}</h2>
          <p className="text-gray-600">Email : {user.email}</p>
          {/* <p className="text-gray-600">{user.phone || "No phone provided"}</p>
          <p className="text-gray-600">{user.address || "No address provided"}</p> */}
          <p className="mt-1 px-2 py-1 bg-green-200 inline-block rounded-full text-green-800 font-semibold">
           Role:  {user.role}
          </p>
        </div>
      </div>

      {/* <hr className="my-6" />

      <div>
        <h3 className="text-xl font-semibold mb-4">My Adoption Requests</h3>
        {adoptions.length === 0 ? (
          <p>No adoption requests found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adoptions.map((req) => (
              <div key={req._id} className="border p-4 rounded-lg shadow-sm flex flex-col items-center">
                <img
                  src={req.petImage}
                  alt={req.petName}
                  className="w-32 h-32 object-cover rounded-lg mb-2"
                />
                <h4 className="font-semibold">{req.petName}</h4>
                <p>Status: <span className={`font-bold ${req.status === "accepted" ? "text-green-600" : req.status === "rejected" ? "text-red-600" : "text-yellow-600"}`}>{req.status}</span></p>
                <p>Adopter: {req.adopterName}</p>
                <p>Phone: {req.adopterPhoneNumber}</p>
                <p>Address: {req.adopterAddress}</p>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}
