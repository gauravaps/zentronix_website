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

 

const App = () => {
    const navigate = useNavigate();
  

    const {user, setUser } = useAuth();

  useEffect(() =>{

    if (user?.role?.role === 'admin') {
          navigate('/userprofile'); // admin route
        } else {
          navigate('/login'); 
        }

  },[user])


  
  return (
    
    <> 
    <Routes>

    <Route path='/' element={<Layout/>}>

    <Route path='/contact-us' element={<Contact/>}/>
    <Route path='/product' element={<GetAllQuery/>}/>
    <Route path='/alluser' element={<GetAllUsers/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/userprofile' element={<UserProfile/>}/>
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
</>

)
}

export default App