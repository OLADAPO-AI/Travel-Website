import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Foot = () => {
  return (
    <div className=' w-full bg-gray-100 py-16 '>
        <div className=' max-w-[1240px] mx-auto flex flex-col px-4 '>

            <div className=' mb-3 pl-6 sm:flex text-center justify-between items-center '>
                <h1>OBUDU.</h1>
                <div className=' pr-6 flex justify-between w-full sm:max-w-[280px] my-4 '>
                <FaFacebook className=' icon'/>
                <FaTwitter className=' icon'/>
                <FaInstagram className=' icon'/>
                <FaYoutube className=' icon'/>
                </div>
            </div>

            <div className=' flex justify-between '>
                <ul className=' pl-6 lg:flex gap-5 space-y-5 md:space-y-0'>
                    <li className=' text-center text-gray-500'>Home</li>
                    <li className=' text-center text-gray-500'>About</li>
                    <li className=' text-center text-gray-500'>Contact</li>
                </ul>

                <ul className=' pr-6  text-right lg:flex gap-5 space-y-5 md:space-y-0'>
                    <li className=' text-center text-gray-500'>Partnerships</li>
                    <li className=' text-center text-gray-500'>Careers</li>
                    <li className=' text-center text-gray-500'>Advertising</li>
                </ul>
            </div>
        </div>


    </div>
  )
}

export default Foot