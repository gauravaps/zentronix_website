import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import SkillsSlider from '../sliderPages/SkillsSlider'


const Layout = () => {
  return (
    <div>

        <Header/>
        <SkillsSlider/>
        <Outlet/>
          
    </div>
  )
}

export default Layout;