// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { ThemeProvider } from '@material-tailwind/react'
// import {
  
//   RouterProvider,
// } from "react-router";
// import { router } from './Router/router.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeProvider>
//      <RouterProvider router={router} />
//     </ThemeProvider>
//   </StrictMode>,
// )



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { ThemeProvider as MTProvider } from '@material-tailwind/react';
// import ThemeProvider from './context/ThemeContext';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './Router/router';
// import AuthProvider from './context/AuthProvider';
// //import {AuthProvider} from './context/AuthProvider';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//    <AuthProvider>
//      <MTProvider>
//       <ThemeProvider>
//         <RouterProvider router={router} />
//       </ThemeProvider>
//     </MTProvider>
//    </AuthProvider>
//   </React.StrictMode>
// );

//gemni

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { ThemeProvider as MTProvider } from '@material-tailwind/react';
// import ThemeProvider from './context/ThemeContext';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './Router/router';
// import AuthProvider from './context/AuthProvider'; 
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'; // দুটি জিনিস import করা হয়েছে

// // নতুন QueryClient তৈরি করা হয়েছে
// const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* QueryClientProvider এর মধ্যে আপনার পুরো অ্যাপ্লিকেশনটি wrap করা হয়েছে */}
//     <QueryClientProvider client={queryClient}> 
//       <AuthProvider>
//         <MTProvider>
//           <ThemeProvider>
//             <RouterProvider router={router} />
//           </ThemeProvider>
//         </MTProvider>
//       </AuthProvider>
//     </QueryClientProvider>
//   </React.StrictMode>
// );

//

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider as MTProvider } from '@material-tailwind/react';
import ThemeProvider from './context/ThemeContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/router';
import AuthProvider from './context/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Create a new QueryClient
const queryClient = new QueryClient();

// Load your Stripe public key
// Replace with the correct environment variable key if different
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MTProvider>
          <ThemeProvider>
            {/* Wrap the RouterProvider with the Stripe Elements provider */}
            <Elements stripe={stripePromise}>
              <RouterProvider router={router} />
            </Elements>
          </ThemeProvider>
        </MTProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

 //new