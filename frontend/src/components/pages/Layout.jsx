import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import SkillsSlider from '../sliderPages/SkillsSlider'
import Footer from '../footer/Footer'


const Layout = () => {
  return (
    <div>

        <Header/>
        <br />
        <SkillsSlider/>
        <Outlet/>
        <Footer/>
        
          
    </div>
  )
}

export default Layout;