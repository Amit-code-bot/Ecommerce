import React from 'react'
import {nanoid} from "nanoid"
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
const Login = () => {
  const {register, reset, handleSubmit}  = useForm()

  const loginHandler = (user) =>{
       user.id = nanoid()  
       console.log(user);
         
      
}

  return (
     <form className='flex flex-col w-1/2 p-10' onSubmit={handleSubmit(loginHandler)}>
          
          <br />
          <input className='mb-3 outline-0 border-b p-2 text-4xl' 
          {...register("email")}
          type="email" 
          placeholder='john@deo.com' />
          <br />
          <input className='mb-3 outline-0 border-b p-2 text-4xl' 
          {...register("password")}
          type="password" 
          placeholder='*******' />
          
          <button className='bg-green-400 text-black w-20 p-1'>Login</button>
          <br />
          <Link to="/register" > Don't have account Please <span className='text-red-400 '>Register</span></Link>

     </form>
  )
}

export default Login