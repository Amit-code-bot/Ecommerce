import React, { useEffect } from 'react'
import MainRoutes from './Routes/MainRoutes'
import Nav from './components/Nav'
import "tailwindcss"
const App = () => {
  
  return (
    <div className='w-screen h-screen p-10 bg-gray-900 text-white font-bold'>
           <Nav/>
          <MainRoutes/>
    </div>
  )

}

export default App