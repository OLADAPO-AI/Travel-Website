import React from 'react'
import Obudu from '../assets/Obudu.mp4'
const Hero = () => {
  return (
    <div className=' w-full h-screen relative '>
       <video className=' w-full h-full object-cover ' src={Obudu} autoPlay loop muted></video>

       <div className=' absolute w-full h-full top-0 left-0 bg-gray-900/30'>
       </div>

       <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-center text-white space-y-1 p-4'>
        
            <h1 className='text-white md:text-4xl lg:text-7xl'> Obudu Ranch Resort</h1>
            <h2 className=' text-gray-300 text-xl md:text-2xl lg:text-3xl font-medium'>AFRICA'S BIGGEST & FINEST TOURIST DESTINATION</h2>
             
             <div>

             <button className=' w-4/6  md:w-2/6 lg:w-2/6 mt-5 text-white font-bold py-2 px-4 rounded-md bg-gradient-to-r from-[#170e30] to-[#ffd700] shadow-2xl '> Explore Obudu </button>

             </div>
           
            
       </div>
    </div>
  )
}

export default Hero