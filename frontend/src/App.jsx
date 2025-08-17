import React, { useEffect } from 'react'
import Header from './components/header/Header'
import { Routes ,Route } from 'react-router-dom'
import Layout from './components/pages/Layout'
import Contact from './components/pages/contact-pages/Contact'
import GetAllQuery from './components/profile/GetAllQuery' 
import { FloatingWhatsApp } from "react-floating-whatsapp";
import zentronix2 from '/public/zentronix2.png' 
import GetAllUsers from './components/profile/GetAllUsers'
import Login from './components/profile/Login'
import UserProfile from './components/profile/UserProfile'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './components/context/AuthContext'
import NotAuthorized from './components/pages/NotAuthorized'
import ProtectedRoute from './components/routes/ProtectedRoute'
import Home from './components/pages/home/Home'
import UpdateAddress from './components/pages/address_page/UpdateAddress'
import UpdateProfile from './components/profile/UpdateProfile'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FoodDelivery from './components/industryPages/FoodDelivery'
import About from './components/aboutPage/About_us'

 

const App = () => {
    const navigate = useNavigate();
  

    const {user, setUser } = useAuth();

  


  
  return (
    
    <> 
    <Routes>

    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
    <Route path='/contact-us' element={<Contact/>}/>
    <Route path='/alluser' element={<GetAllUsers/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/food-delivery' element={<FoodDelivery/>}/>
    <Route path='/about_us' element ={<About/>}/>


{/* Only logged-in users can access profile */}
    <Route
      path='/userprofile'
      element={
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
      }
    />

    {/* <Route path='update-address' 
    element={
      <ProtectedRoute>
        <UpdateAddress/>
      </ProtectedRoute>
    }
    
    /> */}


    {/* Example admin-only page (replace paths as needed) */}
    <Route
      path='/admin/all-queries'
      element={
        <ProtectedRoute requiredRole='admin'>
          <GetAllQuery />
        </ProtectedRoute>
      }
    />


    <Route path='update-address' 
    element={
      <ProtectedRoute requiredRole='admin'>
        <UpdateAddress/>
      </ProtectedRoute>
    } /> 


    
    <Route path='update-profile' 
    element={
      <ProtectedRoute requiredRole='admin'>
        <UpdateProfile/>
      </ProtectedRoute>
    } />





    <Route path='/not-authorize' element={<NotAuthorized />} />



    </Route>
    </Routes>

     <FloatingWhatsApp
        phoneNumber="911234567890" 
        accountName="Gaurav Support"
        avatar={zentronix2} // optional
        statusMessage="Typically replies in 1 minute"
        chatMessage="Hello 👋 How can I help you?"
        placeholder="Type your message"
        darkMode={false}
        allowClickAway
        notification
        notificationSound    
      />


      <ToastContainer 
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
</>

)
}

export default App