import React , {useState} from 'react'
import Frame40 from '../assets/Frame40.png'
import Frame42 from '../assets/Frame42.png'
import Frame44 from '../assets/Frame44.png'
function Tourist() {

   
    const ClientCard = (props) => {
        return (
          <div className=" w-[300px] bg-[#fafafa] h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
              <div className=" p-5 flex flex-row justify-start">
                  <img src={props.svg} alt="" className=" h-[100px] rounded-2xl" />
              </div>
      
              <div className="flex flex-col justify-center px-5 my-5 gap-4">
                <h3 className=' text-sm font-bold text-[#559297] text-start'>"{props.quote}"</h3>
                <h4 className=' text-xs font-medium text-[#333333] text-start'>{props.rev}</h4>
                <div className=' font-medium text-[#333333] text-start'>
                 <h3 className=' text-xs font-medium text-[#559297] text-start'>{props.your}</h3>
                 <h3 className=' text-sm font-medium text-[#333333] text-start'>{props.go}</h3>
                </div>
              </div>
          </div>
        )
    }
    
    const clientData = [
        {
            img : `${Frame40}`,
            name : "An amazing service",
            post: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            h5: "John Carter",
            h3: "CEO at Google"
    
        },
    
        {
            img : `${Frame44}`,
            name : "One of a kind service",
            post: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            h5: "Andy Smith",
            h3: "CEO Dot Austere"
    
        },
        
        {
            img : `${Frame42}`,
            name : "The best service",
            post: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            h5: "Sophie Moore",
            h3: "MD at Facebook"
    
        },
      
    ]


    const cliecar = clientData.map((clients , index) => {
        return (

            <ClientCard
              key = {index} 
              svg = {clients.img}
             quote = {clients.name}
             rev ={clients.post}
             your = {clients.h5}
             go = {clients.h3}
            
            />
        )
    })



   

 
  return (
    <div className=' w-screen md:mx-8 mt-10'>
        <div className=' flex flex-col '>
          <div className=' flex flex-row justify-center'>
            <h1 className='  py-3' >What Our Clients Say</h1>
          </div>

          <div className=' flex flex-row justify-center'>
            <p className='  text-gray-500 py-4 text-center w-5/6 md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className=' my-14 container mx-auto grid md:grid-cols-2 lg:grid-cols-3  space-y-4 justify-center'>
          {cliecar}
        </div>
    </div>
  )
}


export default Tourist