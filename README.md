![Preview](https://github.com/mdtahsinislam/pet-adoupt-platfrom-client/blob/3f486041a972a4361c2c4f2d061479175ec6638a/project%201.png)

---
 
# 🎯 Pet Adoption Platform 🐾

🐾 A full-stack **MERN Pet Adoption Platform** that connects loving families with pets in need.  
This project enables users to browse pets, send adoption requests, donate to campaigns, and manage pets through a secure authentication system with role-based dashboards (User & Admin).  

---

## 🚀 Live Website showcase
https://pet-adoupt-platfrom.web.app
# 🌐 Live Site Link: https://pet-adoupt-platfrom.web.app/ 
## 🔗 Client Side Github Repository Link:[Client Repo](https://github.com/mdtahsinislam/pet-adoupt-platfrom-client)
## 🔗 Server Side Github Repository Link:[Server Repo](https://github.com/mdtahsinislam/pet-adoupt-platfrom-serverr) 

## 🔐 Important information 🎯Pet Adoption Platform
* **1.👑Admin email: admin@gmail.com**
* **2.👑Admin password🗝️: 123456**
* **Database : DBpet's**
---

## 📌 Table of Contents
- [Overview](#-overview)
- [Homepage Features](#-homepage-features)
- [Pet Listing](#-pet-listing)
- [Pet Details & Adoption](#-pet-details--adoption)
- [Donation Campaigns](#-donation-campaigns)
- [Authentication](#-authentication)
- [User Dashboard](#-user-dashboard)
- [Admin Dashboard](#-admin-dashboard)
- [Important Info](#-important-info)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [License](#-license)

---

## 📖 Overview
This platform allows:
- Browsing adoptable pets 🐶🐱🐰🐟
- Sending adoption requests
- Managing pets via dashboards
- Running and contributing to donation campaigns
- Role-based access (User/Admin)
- Fully responsive with Dark/Light mode support

---

## 🏠 Homepage Features
- **Navbar**: Logo + links → Home, Pet Listing, Donation Campaigns, Login/Register  
  - If logged in: profile picture dropdown (Dashboard + Logout)  
- **Banner**: Hero slider or static banner with CTA button  
- **Categories Section**: Quick filters (Cats, Dogs, Rabbits, Fish, etc.)  
- **Call to Action Section**: Inspires users to adopt  
- **About Us Section**: Explains purpose and mission  
- **Extra Sections**: 2 custom theme-related sections  

---

## 🐕 Pet Listing
- Grid layout (3 columns) showing all pets (not yet adopted)  
- Sorted by **date (descending)**  
- Search + Category dropdown filters  
- Each pet card includes:
  - Pet image, name, age, location  
  - Details button → Pet Details page  
- Infinite scrolling  

---

## 🐾 Pet Details & Adoption
- Pet full profile + **Adopt button**  
- On Adopt → modal form with:
  - Pet info (auto filled)
  - User info (auto filled: name/email)
  - Phone number & address (input fields)
- Adoption request stored in DB  

---

## 💝 Donation Campaigns
- **Donation Campaigns Page**:
  - Grid layout (3 columns) with campaign cards  
  - Pet name, image, max donation, progress, details button  
  - Infinite scrolling  
- **Donation Details Page**:
  - Full campaign details
  - **Donate Now** button → opens modal with:
    - Amount input
    - Stripe credit card payment
  - After donating → update progress + show donor in campaign
  - Recommended campaigns shown below  

---

## 🔐 Authentication
- Email + Password login/register  
- Additional login: Google, Facebook, GitHub (any 2)  
- Register with name + image + email + password  
- Password rules:  
  ✅ At least 6 chars  
  ✅ One uppercase  
  ✅ One lowercase  
- JWT authentication → token stored in localStorage/cookies  
- User roles: **user** (default) and **admin**  

---

## 👤 User Dashboard
Layout: Sidebar + Top Navbar  

Pages:
1. **Add a Pet** (upload with Cloudinary/imgbb + formik)
2. **My Added Pets** (sortable/paginated table via Tanstack Table)
   - Update, Delete, Mark Adopted  
3. **Adoption Requests** (approve/reject requests for own pets)
4. **Create Donation Campaign**
5. **My Donation Campaigns** (edit, pause, view donors)
6. **My Donations** (see past donations, request refund)

---

##  👑Admin Dashboard
Admins see everything users do **+ extra pages**:

- **Users Management**:  
  - List all users (name, email, profile pic)  
  - Make Admin / Ban User  
- **All Pets**:  
  - Manage all pets (delete, edit, mark adopted/unadopted)  
- **All Donations**:  
  - Manage all campaigns (delete, edit, pause/unpause)  

➡️ If a normal user tries to access Admin pages → auto redirect to User Dashboard.

---

# ⚡ Important Info
- Admins can also access all user routes  
- Fully responsive (mobile → desktop)  
- **Dark/Light mode** toggle available  

---

# ✨ Technology Stack
* Frontend: React.js / Tailwind CSS / daisyui
* Backend: Node.js + Express.js
* Database: MongoDB
* Authentication: Firebase Authentication / JWT
* Image Hosting:  imgbb
* Payments: Stripe Integration  
* Hosting: Frontend (Client site): Firebase Hosting | Backend (Server site): Vercel Hosting
* Toaster/Alerts: react-toastify & SweetAlert2
* Slider:  DaisyUI Carousel
* Version Control: GitHub

---

## ⚙️ Installation
```bash


# Install dependencies
npm install

# Run frontend
npm run dev

# Run backend
cd server
npm install
npm start
```
## 🛠️ Deployment
* Hosting: Frontend (Client site): Firebase Hosting | Backend (Server site): Vercel Hosting
* Database: MongoDB Atlas
---
# 📝  Happy coding 🚀


