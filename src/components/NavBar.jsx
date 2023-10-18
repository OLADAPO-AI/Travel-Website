import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
const NavBar = () => {

    const navLinks = [{title: 'Home', path: '/'} , {title: 'About', path: '/about'}, {title: 'Contact', path: '/contact'}]
    
    const [showMenu, setShowMenu] = useState(false)
    const [logo , setLogo] = useState(false)
      
    const handleMenu = () => { setShowMenu(!showMenu) ; setLogo(!logo) }

    


  return (
    <div className=' flex absolute w-full  justify-between items-center h-20 px-4 z-10 text-white '>

      <div ><h1 onClick={handleMenu} className={ logo ? 'hidden' : 'md:block text-white'}>OBUDU.</h1></div>

        <ul className=' lg:flex md:flex hidden '>
        {navLinks.map((link, index) => ( <li key={index} className='p-4 text-xl'>{link.title}</li>))}
        </ul>

      <div className=' lg:flex md:flex hidden '>
        <BiSearch className=' mr-6 '/>
        <BsPerson/>
      </div> 
     
      <div className=' md:hidden lg:hidden block z-30' onClick={handleMenu}>
         {showMenu ? <AiOutlineClose className=' text-black' size={25}/> : <HiOutlineMenuAlt4 size={25} /> }    
     </div>
     
        {/*  NavMENU MOBILE */}

        <div onClick={handleMenu} className={`md:hidden lg:hidden block text-gray-900 absolute ${showMenu ? "left-0 block transition-all ease-in duration-500 overflow-hidden" : "left-[100%] hidden"} z-10 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col fixed `}>

    <ul className=' '>
      <h1>OBUDU.</h1>
       {navLinks.map((link, index) => ( <li key={index} className='p-4 text-xl'>{link.title}</li>))}

    <div className=' flex flex-col '>
     <button className=' btn my-4'>Search</button>
     <button className=' btn'>Account</button>
     </div>

   <div className=' flex justify-between my-6'>
    <FaFacebook className=' icon'/>
    <FaTwitter className=' icon'/>
    <FaInstagram className=' icon'/>
    <FaYoutube className=' icon'/>
    </div>
    </ul>
</div>

      
      
    </div>
  )
}

export default NavBar