import React from 'react'
import disney from "../assets/images/logo.png"
import disneyV from "../assets/videos/disneyV.mp4"
import marvel from "../assets/images/marvel.png"
import marvelV from "../assets/videos/marvelV.mp4"
import national from "../assets/images/national.png"
import nationalV from "../assets/videos/nationalV.mp4"
import pixer from "../assets/images/pixer.png"
import pixerV from "../assets/videos/pixerV.mp4"
import starwar from "../assets/images/starwars.png"
import starwarV from "../assets/videos/starwarV.mp4"

const ProductionHouse = () => {
    const list = [
        {
            id:1,
            image:disney,
            video:disneyV
            
        },
        {
            id:2,
            image:pixer,
            video:pixerV
            
        },
        {
            id:3,
            image:marvel,
            video:marvelV
            
        },
        {
            id:4,
            image:starwar,
            video:starwarV
            
        },
        {
          id:4,
          image:national,
          video:nationalV
        }
    ]
  return (
    <div className='flex gap-2 md:gap-5 md:px-16 p-2 flex-grap'>
      {
        list.map((item,index)=>(
          <div className='border-2 border-gray-600 rounded-lg h-[150px] flex items-center justify-center  flex-wrap cursor-pointer  hover:scale-110 duration-300 ease-in-out relative flex-grow group shadow-xl shadow-gray-800' key={index}>
            <img src={item.image} className='w-[200px] h-24  px-3 z-10'/>
            <video src={item.video} loop muted autoPlay className='w-full h-full absolute rounded-md  opacity-0 group-hover:opacity-100 object-cover'></video>
          </div>
        ))
      }
    </div>
  )
}

export default ProductionHouse