import React from 'react'
import Obudu1 from '../assets/Obudu1.jpg'
import Obudu2 from '../assets/Obudu2.jpg'
import Obudu3 from '../assets/Obudu3.jpg'
import Obudu4 from '../assets/Obudu4.jpg'
import Obudu5 from '../assets/Obudu5.jpg'


const Explore = () => {
  return (
    <div className=' max-w-[1240px] mx-auto container  py-16 px-4 text-center'>
      
      <h1>Explore</h1>
      <p>Pleasant and Beautiful Mountain-area and Country-side Views</p>
      
      <div className=' grid grid-rows-none md:grid-cols-5 lg:grid-cols-5 py-4 gap-2 md:gap-4 lg:gap-4'>
      <img  className='w-full h-full object-cover col-span-2 md:col-span-3 lg:col-span-3 row-span-2' src={Obudu3} alt="" />
      <img className='w-full h-full object-cover ' src={Obudu2} alt="" />
      <img className='w-full h-full object-cover ' src={Obudu3} alt="" />
      <img className='w-full h-full object-cover ' src={Obudu4} alt="" />
      <img className='w-full h-full object-cover ' src={Obudu5} alt="" />

      </div>
    </div>
  )
}

export default Explore