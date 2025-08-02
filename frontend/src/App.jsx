import React from 'react'
import Header from './components/header/Header'
import { Routes ,Route } from 'react-router-dom'
import Layout from './components/pages/Layout'


const App = () => {
  return (
    
    <> 
    <Routes>

    <Route path='/' element={<Layout/>}/>


    </Routes>
</>

)
}

export default App