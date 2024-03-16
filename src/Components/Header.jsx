import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus,HiOutlineDotsVertical} from "react-icons/hi";
const menu = [
    {
        name:"HOME",
        icon:HiHome
    },{
        name:"Search",
        icon:HiMagnifyingGlass
    }
    ,{
        name:"WATCH LIST",
        icon:HiPlus
    },
    {
        name:"ORIGINALS",
        icon:HiStar
    },
    {
        name:"MOVIES",
        icon:HiPlayCircle
    },
    {
        name:"SERIES",
        icon:HiTv
    }
]
const Header = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <nav className='text-white flex items-center justify-between p-5'>
   <div className='flex items-center gap-8'>
   <img src={logo} alt="logo" className=' w-20 md:w-28  object-cover'/>
   <ul className='hidden md:flex items-center gap-8'>
   {
    menu.map((item,index)=>(
        <HeaderItem key={index} name={item.name} Icon={item.icon}/>
    ))
   }
   </ul>

   <ul className='flex items-center gap-8 md:hidden'>
   {
    menu.map((item,index)=> index<3 &&(  
        <HeaderItem key={index} name={""} Icon={item.icon}/>
    ))
   }
   <div className='md:hidden' onClick={()=> setToggle(!toggle)}>
     <HeaderItem  name={""} Icon={HiOutlineDotsVertical}/>
     
     
    {
        toggle &&
     <div className='absolute z-10 mt-3 bg-black border border-gray-600 px-5 py-4'>
{
   
        menu.map((item,index)=> index>2 &&(  
            <HeaderItem key={index} name={item.name} Icon={item.icon}/>
        ))
                 
}
    </div>
}
</div>

   </ul>
   </div>
   <img src="https://media.istockphoto.com/id/1406153509/photo/3d-illustration-of-smiling-african-american-woman-coco-showing-thumb-up-positive-hand-gesture.webp?b=1&s=170667a&w=0&k=20&c=-ZYFJqnpSkZm37ej3kDqMHGr9AxL-7PBkFUio1MvySo=" alt="" className='rounded-full w-10'/>
    </nav>
  )
}

export default Header



const HeaderItem = ({name,Icon}) =>{
    return (
        <li>
<h1 href="" className='flex items-center gap-3  font-semibold hover:underline underline-offset-8 duration-300 cursor-pointer'><Icon/> {name}</h1>
            </li>
    )
}