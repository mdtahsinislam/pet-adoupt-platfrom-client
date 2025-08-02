






// // import React from 'react';
// // import animationData from "../../assets/register (4).json";
// // import Lottie from 'lottie-react';
// // import { FaEnvelope, FaImage, FaLock, FaUser } from 'react-icons/fa';
// // import { Link, useNavigate } from 'react-router-dom';
// // import SocialLogin from './SocialLogin';
// // import { Button } from '@material-tailwind/react';






// //   return (
// //     <div className="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
// //       <h1 className="text-3xl font-bold mb-2">Registration Now!</h1>

// //       <div className="w-40 mx-auto mb-4">
// //         <Lottie animationData={animationData} loop={true} />
// //       </div>

// //       <form className="space-y-4" onSubmit={handleRegister}>
// //         {/* Name */}
// //         <div className="flex items-center gap-2">
// //           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
// //             <FaUser className="text-xl" />
// //           </span>
// //           <input type="text" name="name" placeholder="Name"  className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md" required />
// //         </div>

// //         {/* Email */}
// //         <div className="flex items-center gap-2">
// //           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
// //             <FaEnvelope className="text-xl" />
// //           </span>
// //           <input type="email" name="email" placeholder="Email"  className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md" required />
// //         </div>

// //         {/* Password */}
// //         <div className="flex items-center gap-2">
// //           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
// //             <FaLock className="text-xl" />
// //           </span>
// //           <input type="password" name="password" placeholder="Password"  className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md" required />
// //         </div>

// //         {/* Photo Upload */}
// //         <div className="flex items-center gap-2">
// //           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
// //             <FaImage className="text-xl" />
// //           </span>
// //           <input type="file" name="photo" accept="image/*"   className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md" required />
// //         </div>

// //         <div className="pt-4">
// //           <Button type="submit" className="btn btn-neutral w-full">Register</Button>
// //         </div>

// //         <div className="pt-4">
// //           <p>*Already have an account? <Link to="/login"><span className='text-blue-600'>Login</span></Link></p>
// //         </div>
// //       </form>

// //       <SocialLogin />
// //     </div>
// //   );
// // };

// // export default Register;




// import React, { useContext } from 'react';
// import animationData from "../../assets/register (4).json";
// import Lottie from 'lottie-react';
// import { FaEnvelope, FaImage, FaLock, FaUser } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import SocialLogin from './SocialLogin';
// import { Button } from '@material-tailwind/react';
// import { AuthContext } from '../../context/AuthProvider';

// const Register = () => {
  
//  const { register } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const handleRegister = e => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     register(email, password)
//       .then(result => {
//         console.log("Registered:", result.user);
//         navigate("/");
//       })
//       .catch(error => {
//         console.error(error.message);
//       });
//   };


//   return (
//     <div className="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
//       <h1 className="text-3xl font-bold mb-2">Registration Now!</h1>

//       <div className="w-40 mx-auto mb-4">
//         <Lottie animationData={animationData} loop={true} />
//       </div>

//       <form className="space-y-4" onSubmit={handleRegister} >
        

//         {/* Email */}
//         <div className="flex items-center gap-2">
//           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
//             <FaEnvelope className="text-xl" />
//           </span>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="flex items-center gap-2">
//           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
//             <FaLock className="text-xl" />
//           </span>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
//             required
//           />
//         </div>

//         {/* Photo Upload */}
//         <div className="flex items-center gap-2">
//           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
//             <FaImage className="text-xl" />
//           </span>
//           <input
//             type="file"
//             name="photo"
//             accept="image/*"
//             className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
//             required
//           />
//         </div>

//         <div className="pt-4">
//           <Button type="submit" className="btn btn-neutral w-full">
//             Register
//           </Button>
//         </div>

//         <div className="pt-4 text-center">
//           <p>
//             *Already have an account?{' '}
//             <Link to="/login" className="text-blue-600 hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </form>

//       <SocialLogin />
//     </div>
//   );
// };

// export default Register;



import React, { useContext } from 'react';
import animationData from "../../assets/register (4).json";
import Lottie from 'lottie-react';
import { FaEnvelope, FaImage, FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { Button } from '@material-tailwind/react';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const imageUploadKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY;

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = form.photo.files[0];
    const name = form.name.value;
    // 1️⃣ Upload image to imgbb
    const formData = new FormData();
    formData.append("image", imageFile);

    const uploadRes = await fetch(`https://api.imgbb.com/1/upload?key=${imageUploadKey}`, {
      method: "POST",
      body: formData
    });

    const imgData = await uploadRes.json();

    if (imgData.success) {
      const photoURL = imgData.data.display_url;

      // 2️⃣ Firebase Register
      register(email, password)
        .then((result) => {
          const user = result.user;

          // 3️⃣ Save to MongoDB
          const userInfo = {
            name:name,
            email: email,
            photo: photoURL,
            role: "user" // চাইলে admin বা অন্য কিছুও দিতে পারো
          };

          fetch("https://pet-adoupt-platfrom-serverr.vercel.app/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then(() => {
              console.log("User saved to MongoDB");
              navigate("/");
            })
            .catch((err) => console.error("DB Error:", err));
        })
        .catch((err) => console.error("Firebase Error:", err));
    } else {
      console.error("Image upload failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-2">Registration Now!</h1>

      <div className="w-40 mx-auto mb-4">
        <Lottie animationData={animationData} loop={true} />
      </div>

      <form className="space-y-4" onSubmit={handleRegister}>
        {/* Name */}
        <div className="flex items-center gap-2">
          <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
            <FaUser className="text-xl" />
          </span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
            required
          />
        </div>
        {/* Email */}
        <div className="flex items-center gap-2">
          <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
            <FaEnvelope className="text-xl" />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center gap-2">
          <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
            <FaLock className="text-xl" />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
            required
          />
        </div>

        {/* Photo Upload */}
        <div className="flex items-center gap-2">
          <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
            <FaImage className="text-xl" />
          </span>
          <input
            type="file"
            name="photo"
            accept="image/*"
            className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
            required
          />
        </div>

        <div className="pt-4">
          <Button type="submit" className="btn btn-neutral w-full">
            Register
          </Button>
        </div>

        <div className="pt-4 text-center">
          <p>
            *Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>

      <SocialLogin />
    </div>
  );
};

export default Register;
