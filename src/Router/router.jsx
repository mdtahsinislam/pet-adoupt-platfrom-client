

import {
  createBrowserRouter,
  
} from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import DashbordLayout from "../layouts/DashbordLayout";
import Lottie from "lottie-react";
import animationData from "../../public/Dashobard.json"
import Addpet from "../Pages/Dashbord/Element/Addpet";
import Users from "../Pages/Dashbord/Element/Users";
import AdminRoute from "../layouts/AdminRoute";
import MyAddedPets from "../Pages/Dashbord/Element/MyAddedPets";
import UpdatePet from "../Pages/Dashbord/Eidt/UpdatePet";
import CreateDonationCampaign from "../Pages/Dashbord/Element/CreateDonationCampaign";
import PetListing from "../Pages/NavbarFeature/PetListing";
import PetDetails from "../Pages/NavbarFeature/PetDetails";
import DonationCampaigns from "../Pages/NavbarFeature/DonationCampaigns";
import DonationDetails from "../Pages/NavbarFeature/DonationDetails";
import MyDonationCampaigns from "../Pages/Dashbord/Element/MyDonationCampaigns";
import EditDonationCampaign from "../Pages/Dashbord/Element/EditDonationCampaign";
import MyDonations from "../Pages/Dashbord/Element/MyDonations";
import MyAdoptionRequests from "../Pages/Dashbord/Element/MyAdoptionRequests";
import AllPets from "../Pages/Dashbord/Element/AllPets";
import AllDonations from "../Pages/Dashbord/Element/AllDonations";
import Adminprofile from "../Pages/Dashbord/Element/Adminprofile";
import Userprofile from "../Pages/Dashbord/Element/Userprofile";
import Overview from "../Pages/Dashbord/Element/Overview";
import Service from "../Pages/NavbarFeature/Service";
import Contact from "../Pages/NavbarFeature/Contact";
//import Usees from "../Pages/Dashbord/Element/Usees";

  export const router = createBrowserRouter([
  {
    path: "/",
   Component:RootLayouts,
   children:[
    {
        index:true,
        Component:Home
    },
    {
      path:"petlisting",
      element:<PetListing></PetListing>

    },
    {
      path:"service",
      element:<Service></Service>

    },
    {
      path:"contact",
      element:<Contact></Contact>

    },
    {
      path:"/pet-details/:id",
      element:<PetDetails></PetDetails>
    },
    {
      path:"/donationampaigns",
      element:<DonationCampaigns></DonationCampaigns>
    },
    {
      path:"/donation-campaigns/:id",
      element:<DonationDetails></DonationDetails>
    }
   ]
  },
  
    {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login", // [cite: 4]
        element: <Login />,
      },
      {
         path: "register",
         element: <Register />,
      },
    ],
  },
  {
    path:"dashbord",
    element:<DashbordLayout></DashbordLayout>,
    children:[
      {
        index: true,
        element: <div><h2 className="text-2xl text-center mt-10">Welcome to Dashboard</h2><Lottie animationData={animationData} loop={true} /></div>, // 
      },
      {
        path:"addpet",
        element:<Addpet></Addpet>
      },
      {
       path:"userprofile" ,
       element:<Userprofile></Userprofile>
      },
      {
        path:"users",
        element:<AdminRoute> <Users></Users></AdminRoute>
        
       
      },
      {
        path:"overview",
        element:<AdminRoute> <Overview></Overview></AdminRoute>
      },
      {
        path:"adminprofile",
        element: <AdminRoute>  <Adminprofile></Adminprofile> </AdminRoute>
        
       
      },

      {
        path:"myaddedpets",
        element:<MyAddedPets></MyAddedPets>
      },
      {
        path:"update-pet/:id",
      element:<UpdatePet></UpdatePet>
      },
      {
        path:"createdonationcampaign",
        element:<CreateDonationCampaign></CreateDonationCampaign>
      },
      {
         path:"my-donation-campaigns",
         element:<MyDonationCampaigns></MyDonationCampaigns>
      },
      {
        path:"edit-donation-campaign/:id",
        element:<EditDonationCampaign></EditDonationCampaign>
      },
      {
        path:"my-donations",
        element:<MyDonations></MyDonations>
      },
      {
                path: "my-adoption-requests", // New route path
                element: <MyAdoptionRequests></MyAdoptionRequests> // New component
            },
            {
        path: "all-pets",
        element: (
          <AdminRoute>
            <AllPets />
          </AdminRoute>
        ),
      },
      {
                path: "all-donations",
                element: <AdminRoute><AllDonations /></AdminRoute>,
            }
    ]
  }
  
]);

