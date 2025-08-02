

// //Login.jsx
// import React from 'react';
// import { FaEnvelope, FaImage, FaLock, FaUser } from 'react-icons/fa';
// //import animationDataa from "../../assets/zpunet icon.json"
// import animationData from "../../assets/zpunet icon.json"
// import Lottie from 'lottie-react';
// import { Link } from 'react-router';
// import SocialLogin from './SocialLogin';
// import { Button } from '@material-tailwind/react';
// const Login = () => {
//     return (
//             <div className="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold mb-2 text-black">LOgin your account Now!</h1>
      

// {/* 🔥 First Lottie Animation */}
//       {/* <div className="w-40 mx-auto mb-4">
//         <Lottie animationData={animationData} loop={true} />
//       </div> */}

//       {/* 🔥 Second Lottie Animation */}
//       <div className="w-40 mx-auto mb-4">
//         {/* <Lottie animationDataa={animationDataa} loop={true} /> */}
//           <Lottie animationData={animationData} loop={true} />
//       </div>
//       <div>
//         {/* <img src="../src/assets/Privacy-policy-rafiki.png" alt="" /> */}
//       </div>
//       <form className="space-y-4">
//         {/* Name */}
//         {/* <div className="flex items-center gap-2">
//           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
//             <FaUser className="text-xl" />
//           </span>
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
//           />
//         </div> */}

//         {/* Email */}
//         <div className="flex items-center gap-2">
//           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
//             <FaEnvelope className="text-xl" />
//           </span>
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
//           />
//         </div>

//         {/* Password */}
//         <div className="flex items-center gap-2">
//           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
//             <FaLock className="text-xl" />
//           </span>
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
//           />
//         </div>

//         {/* Photo Upload */}
//         {/* <div className="flex items-center gap-2">
//           <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
//             <FaImage className="text-xl" />
//           </span>
//           <input
//             type="file"
//             accept="image/*"
//             name="photo"
//             className="w-full shadow-sm px-4 py-[9px] border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md file:border-1 file:bg-white file:text-gray-600"
//           />
//         </div> */}

//         {/* Submit Button */}
//         <div className="pt-4">
//                  <Button className="btn btn-neutral w-full">Continue</Button>
//                </div>
//         {/* <Link to="/register"> */}
//          <div className="pt-4">
//           {/* <p className="btn btn-neutral w-full"></p> */}
//             <p>* Do not have an account? <Link to="/register"><span className='text-blue-600'>Register</span></Link></p>
//         </div>
//         {/* </Link> */}
       
//       </form>
      
//       <SocialLogin></SocialLogin>
//     </div>
//     );
// };

// export default Login;



// Login.jsx
import React, { useContext } from 'react';
import { FaEnvelope, FaImage, FaLock, FaUser } from 'react-icons/fa';
import animationData from "../../assets/zpunet icon.json"
import Lottie from 'lottie-react';
//import { Link } from 'react-router';
import { Link, useNavigate} from 'react-router-dom'; 

import SocialLogin from './SocialLogin';
import { Button } from '@material-tailwind/react';
import { AuthContext } from '../../context/AuthProvider';



const Login = () => {
const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(result => {
        console.log("Logged in:", result.user);
        navigate("/"); // home page or dashboard
      })
      .catch(error => {
        console.error(error.message);
      });
  };

    return (
        <div className="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-2 text-black">LOgin your account Now!</h1>

            {/* 🔥 Lottie Animation */}
            <div className="w-40 mx-auto mb-4">
                <Lottie animationData={animationData} loop={true} />
            </div>

            <form className="space-y-4" onSubmit={handleLogin} >
                {/* Email */}
                <div className="flex items-center gap-2">
                    <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
                        <FaEnvelope className="text-xl" />
                    </span>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
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
                        placeholder="Password"
                        name="password"
                        className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button type="submit" className="btn btn-neutral w-full">Continue</Button>
                </div>

                <div className="pt-4">
                    <p>* Do not have an account? <Link to="/register"><span className='text-blue-600'>Register</span></Link></p>
                </div>
            </form>

           <SocialLogin></SocialLogin> 
        </div>
    );
};

export default Login;
