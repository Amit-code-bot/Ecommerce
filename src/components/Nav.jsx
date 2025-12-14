import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-center gap-20 text-2xl items-center'>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/login">Login</NavLink>
         <NavLink to="/product">Product</NavLink>
     </nav>
  )
}

export default Nav