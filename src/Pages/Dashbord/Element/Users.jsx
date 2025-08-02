// // // import React from 'react';

// // // const Users = () => {
// // //     return (
// // //         <div>
// // //             hhhhhhhhh
// // //         </div>
// // //     );
// // // };

// // // export default Users;


// // import React, { useEffect, useState } from 'react';

// // const Users = () => {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     fetch('https://your-server-url.com/all-users')
// //       .then(res => res.json())
// //       .then(data => setUsers(data));
// //   }, []);

// //   const handleMakeAdmin = id => {
// //     fetch(`https://your-server-url.com/users/make-admin/${id}`, {
// //       method: 'PATCH'
// //     })
// //     .then(res => res.json())
// //     .then(data => {
// //       if (data.modifiedCount > 0) {
// //         alert("User promoted to admin!");
// //         // Optional: Reload users
// //         setUsers(prev => prev.map(user => user._id === id ? { ...user, role: 'admin' } : user));
// //       }
// //     });
// //   };

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-xl font-bold mb-4">All Users</h2>
// //       <table className="table-auto w-full border">
// //         <thead>
// //           <tr className="bg-gray-100">
// //             <th className="p-2 border">Name</th>
// //             <th className="p-2 border">Email</th>
// //             <th className="p-2 border">Photo</th>
// //             <th className="p-2 border">Role</th>
// //             <th className="p-2 border">Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {
// //             users.map(user => (
// //               <tr key={user._id} className="text-center">
// //                 <td className="p-2 border">{user.name || "No Name"}</td>
// //                 <td className="p-2 border">{user.email}</td>
// //                 <td className="p-2 border">
// //                   <img src={user.photo} alt="profile" className="w-10 h-10 rounded-full mx-auto" />
// //                 </td>
// //                 <td className="p-2 border">{user.role}</td>
// //                 <td className="p-2 border">
// //                   {
// //                     user.role !== 'admin' &&
// //                     <button onClick={() => handleMakeAdmin(user._id)} className="bg-blue-500 text-white px-3 py-1 rounded">
// //                       Make Admin
// //                     </button>
// //                   }
// //                 </td>
// //               </tr>
// //             ))
// //           }
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Users;



// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// //import useAxiosSecure from '../../hooks/useAxiosSecure';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { Button } from '@material-tailwind/react';

// const Users = () => {
//     const axiosSecure = useAxiosSecure();

//     const { data: users = [], refetch } = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/all-users');
//             return res.data;
//         }
//     });

//     const handleMakeAdmin = async (user) => {
//         try {
//             const res = await axiosSecure.patch(`/users/make-admin/${user._id}`);
//             if (res.data.modifiedCount > 0) {
//                 refetch();
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Success!',
//                     text: `${user.name || user.email} is now an Admin!`,
//                 });
//             }
//         } catch (error) {
//             console.error('Error making admin:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Something went wrong! Could not make user an admin.',
//             });
//         }
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-6 text-center">All Users</h1>
//             <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
//                 <table className="table w-full">
//                     <thead className="bg-blue-600 text-white">
//                         <tr>
//                             <th>#</th>
//                             <th>Profile Picture</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user._id} className="border-b dark:border-gray-700">
//                                 <td className="p-4">{index + 1}</td>
//                                 <td className="p-4">
//                                     <div className="avatar">
//                                         <div className="mask mask-squircle w-12 h-12">
//                                             <img src={user.photo} alt="User Profile" />
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="p-4">{user.name || 'N/A'}</td>
//                                 <td className="p-4">{user.email}</td>
//                                 <td className="p-4 capitalize">
//                                     <span className={`badge ${user.role === 'admin' ? 'badge-info' : 'badge-neutral'}`}>
//                                         {user.role}
//                                     </span>
//                                 </td>
//                                 <td className="p-4">
//                                     {user.role === 'admin' ? (
//                                         <button className="btn btn-sm btn-disabled" disabled>Admin</button>
//                                     ) : (
//                                         <Button
//                                             onClick={() => handleMakeAdmin(user)}
//                                             className="btn btn-sm btn-outline btn-info text-white"
//                                         >
//                                             Make Admin
//                                         </Button>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Users;



import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  Card,
  CardBody,
  Typography,
  Avatar,
  Button,
  Chip,
} from "@material-tailwind/react";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-users");
      return res.data;
    },
  });

  const handleMakeAdmin = async (user) => {
    try {
      const res = await axiosSecure.patch(`/users/make-admin/${user._id}`);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `${user.name || user.email} is now an Admin!`,
        });
      }
    } catch (error) {
      console.error("Error making admin:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Could not make user an admin.",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Typography variant="h4" className="text-center mb-8 text-blue-700">
        All Registered Users
      </Typography>

      <Card className="overflow-x-auto shadow-xl">
        <CardBody className="p-0">
          <table className="w-full text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Profile</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="even:bg-gray-50 dark:even:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">
                    <Avatar
                      src={user.photo}
                      alt="profile"
                      size="sm"
                      variant="circular"
                    />
                  </td>
                  <td className="p-4">{user.name || "Anonymous"}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">
                    <Chip
                      value={user.role}
                      color={user.role === "admin" ? "green" : "blue-gray"}
                      size="sm"
                    />
                  </td>
                  <td className="p-4 text-center">
                    {user.role === "admin" ? (
                      <Button
                        size="sm"
                        disabled
                        className="bg-green-500 text-white "
                      >
                        Admin
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        color="blue"
                        onClick={() => handleMakeAdmin(user)}
                      >
                        Make Admin
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Users;
