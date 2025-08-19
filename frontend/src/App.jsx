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
import PickupDelivery from './components/industryPages/PickupDelivery'
import Grocery_App from './components/industryPages/Grocery_App'
import Ecommerce from './components/industryPages/Ecommerce'
import NewHome from './components/pages/home/NewHome'
import PackerMovers from './components/industryPages/PackerMovers'
import LogisticsServices from './components/industryPages/LogisticsServices'
import OnDemand from './components/industryPages/OnDemand'
import RealEstate from './components/industryPages/RealEstate'
import EventsTicketing from './components/industryPages/EventsTicketing'
import FitnessApp from './components/industryPages/FitnessApp'
import MobileAppDevelopment from './components/ourServices/MobileAppDevelopment'
import WebAppDevelopment from './components/ourServices/WebAppDevelopment'
import WebsiteDevelopment from './components/ourServices/WebsiteDevelopment'
import UIUXDesign from './components/ourServices/UIUXDesign'
import LogoDesigning from './components/ourServices/LogoDesigning'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import DigitalMarketing from './components/ourServices/DigitalMarketing'
import SocialMediaApp from './components/industryPages/SocialMediaApp'
import HealthCareApp from './components/industryPages/HealthCareApp'

 

const App = () => {
    const navigate = useNavigate();
  

    const {user, setUser } = useAuth();

  


  
  return (
    
    <> 
    <Routes>

    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<NewHome/>}/>
    <Route path='/contact-us' element={<Contact/>}/>
    <Route path='/alluser' element={<GetAllUsers/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/food-delivery' element={<FoodDelivery/>}/>
    <Route path='/Pickup_Delivery' element={<PickupDelivery/>}/>
    <Route path='/Grocery_App' element={<Grocery_App/>}/>
    <Route path='/Ecommerce' element={<Ecommerce/>}/>
    <Route path='/about_us' element ={<About/>}/>
    <Route path='/Packer_Movers' element={<PackerMovers/>}/>
    <Route path='/Logistics_Services' element={<LogisticsServices/>}/>
    <Route path='/on_demand' element={<OnDemand/>}/>
    <Route path='/real_state' element={<RealEstate/>}/>
    <Route path='/Events_Ticketing' element={<EventsTicketing/>}/>
    <Route path='/Fitness_App' element={<FitnessApp/>}/>
    <Route path='/MobileApp_Development' element={<MobileAppDevelopment/>}/>
    <Route path='/WebApp_Development' element={<WebAppDevelopment/>}/>
    <Route path='/Website_Development' element={<WebsiteDevelopment/>}/>
    <Route path='/UI-UX_Design' element={<UIUXDesign/>}/>
    <Route path='/logo_design' element={<LogoDesigning/>}/>
    <Route path='/Digital_Marketing' element={<DigitalMarketing/>}/>
    <Route path='/Social_MediaApp' element={<SocialMediaApp/>}/>
    <Route path='/Health_CareApp' element={<HealthCareApp/>}/>
    


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
    <ScrollToTopButton/>

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