import React from 'react'
import { IoMdMenu } from "react-icons/io";
function SideMenu() {
  return (
    <div className='flex flex-col items-center p-4 text-2xl border w-[5%] min-h-screen space-y-2'>
    <div >
        <IoMdMenu />
    </div>
     <ul className='flex flex-col justify-center items-center space-y-2'>
        <li><img src='s11.png ' className='w-full h-full object-cover ' alt='' /></li>
        <li><img src='s12.png ' className='w-full h-full object-cover' alt='' /></li>
        <li><img src='s13.png ' className='w-full h-full object-cover' alt='' /></li>
        <li><img src='s14.png ' className='w-full h-full object-cover' alt='' /></li>
        <li><img src='s15.png ' className='w-full h-full object-cover' alt='' /></li>
     </ul>
    </div>
  )
}

export default SideMenu
