import React from 'react'
import {nanoid} from "nanoid"
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncRegister } from '../store/actions/userAction '
const Register = () => {
 const dispatch =  useDispatch()
  const {register, reset , handleSubmit} = useForm()
  const RegisterHandler = (user) => {
    user.id = nanoid.id
    dispatch(asyncRegister(user))
  }

  return ( <form className='flex flex-col w-1/2 p-10' onSubmit={handleSubmit(RegisterHandler)}>
          <input className='mb-3 outline-0 border-b p-2 text-4xl' 
           {...register("username")}
          type="text" 
          placeholder='john-Deo' />
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
          
          <button className='bg-blue-400  w-30 p-1'>Register User</button>
          <Link to="/login" > Already have an account please <span className='text-red-400 '>Login</span></Link>
     </form>
  )
}

export default Register