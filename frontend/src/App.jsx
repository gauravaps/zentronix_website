import React from 'react'
import Header from './components/header/Header'
import { Routes ,Route } from 'react-router-dom'
import Layout from './components/pages/Layout'
import Contact from './components/pages/contact-pages/Contact'


const App = () => {
  return (
    
    <> 
    <Routes>

    <Route path='/' element={<Layout/>}/>

    <Route path='/contact-us' element={<Contact/>}/>


    </Routes>
</>

)
}

export default App