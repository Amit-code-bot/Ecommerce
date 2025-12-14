import React from 'react'
import {Route , Routes} from "react-router-dom"
import Login from '../pages/Login'
import Home from '../pages/Home'
import PageNotf from '../pages/PageNotf'
import Product from '../pages/Product'
import Register from '../pages/Register'
const MainRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/> 
       <Route path='/register' element={<Register/>}/> 
       <Route path='/product' element={<Product/>}/>
       <Route path='*' element={<PageNotf/>}/> 
    </Routes>
  )
}

export default MainRoutes