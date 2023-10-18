import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {MdOutlineTravelExplore} from 'react-icons/md'
const Search = () => {
  return (
    <div className=' max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16 container'>
   
     <div className=' lg:col-span-2 flex flex-col justify-evenly '>
        <div>
            <h2 className=' '>A QUALITY SERVICE YOU CAN TRUST</h2>
            <p className=' text-gray-500 py-4'>Obudu Mountain Resort also known as Obudu Cattle Ranch is one of Africa’s finest and most interesting and spectacular tourist destinations. Obudu Mountain Resort is located in the highlands and deep tropical forests of Cross River State with a temperate climate at about 45 miles from the border with Cameroon.

             If you are a tourist looking for a mix of adventure and idyllic tranquillity, then Obudu Cattle Ranch is the place to be. With rich natural vegetation and a picturesque view, Obudu is increasingly becoming popular amongst tourists from all around Nigeria and Africa as a whole.

             The ranch has numerous pleasant and beautiful mountain-area and country-side views, with a well preserved and calm Serene to suit all our guests.</p>
        </div>
        <div className=' md:flex md:flex-row grid   gap-8 py-4 '>
           <div className=' flex flex-col md:flex-row items-center text-center'>
            <button className='btn'>
                <RiCustomerService2Fill size={40} />
            </button>
            <div>
                <h3 className=' text-xl py-2 font-semibold'>24/7 Customer Service</h3>
                <p className='text-gray-500 py-1 md:text-base text-sm'>Our customer service is always available to help you with any questions you might have.</p>
            </div>
           </div>
           <div className=' flex flex-col md:flex-row items-center text-center'>
            <button className=' btn'>
                <MdOutlineTravelExplore size={40}/>
            </button>
            <div>
                <h3 className=' py-2 text-xl font-semibold'>24/7 Customer Service</h3>
                <p className='text-gray-500 py-1 md:text-base text-sm'>Our customer service is always available to help you with any questions you might have.</p>
            </div>
           </div>
        </div>
     </div>
     <div>

        <div className=' border text-center p-2'>
            <p>GET AN ADDITIONAL 10% OFF</p> 
            <p className=' py-4'>ON YOUR FIRST BOOKING</p>
            <p className=' bg-gray-800 text-gray-200 rounded-md shadow-inner py-2'>BOOK YOUR STAY</p> 
        </div>
        <form action="" className=' w-full '>
            <div className=' flex flex-col my-2'>
                <label>Booking Type</label>
                <select   className=' border rounded-md p-2'>
                    <option value="">PREMIUM</option>
                    <option value="">GOLD</option>
                    <option value="">DIAMOND</option>
                    <option value="">PLATINUM</option>
                    <option value="">SILVER</option>
                </select>
            </div>
            <div className=' flex flex-col my-2'>
                <label>Check In</label>
                <input  className=' border rounded-md p-2' type="date" />
            </div>
            <div className=' flex flex-col my-2 '>
                <label>Check Out</label>
                <input className=' border rounded-md p-2' type="date" />
            </div>
            <div> 
                <button className=' btn w-full my-4'>Book Obudu</button>
            </div>
        </form>
     </div>
         
    </div>
  )
}

export default Search