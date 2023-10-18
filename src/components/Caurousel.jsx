import React from 'react'
import Obudu11 from '../assets/Obudu11.jpg'
import Obudu12 from '../assets/Obudu12.jpg'
import Obudu13 from '../assets/Obudu13.jpg'
import Obudu15 from '../assets/Obudu15.jpg'
import { HiArrowCircleLeft , HiArrowCircleRight } from "react-icons/hi";



const Caurousel = () => {

  
   const dataImg = [
    { img : `${Obudu11}`},
    { img : `${Obudu12}`},
    { img : `${Obudu13}`},
    { img : `${Obudu15}`},
   ]
    
   const [slide, setSlide] = React.useState(0)
   const length = dataImg.length
 
   const prevSlide = () => {
     setSlide(slide === 0 ? length - 1 : slide - 1)  }
 
   const nextSlide = () => {
     setSlide(slide === length - 1 ? 0 : slide + 1)  }
  

  return (
    <div className=' max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <HiArrowCircleLeft onClick={prevSlide} className=' text-slate-900 absolute top-[50%] text-7xl cursor-pointer left-8'/>
      <HiArrowCircleRight onClick={nextSlide} className=' text-slate-900 absolute top-[50%] text-7xl  cursor-pointer right-8'/>
      
      {dataImg.map((data, index) => {
        return (
          <div key={index} className={index === slide ? "opacity-100" : "opacity-0"}>
            {index === slide && (<img src={data.img} alt="" className=' w-screen h-96 object-cover'/>)}
          </div>
        )
      })}
    </div>
  )
}

export default Caurousel;