import React from 'react';
import { assets } from '../assets/assets';

const SideBar = () => {
  return (
    // sidebar parent
    <div className='bg-gray-100 w-60 h-screen m-0 p-0 overflow-hidden'> 
      {/* top */}
      <div>
        <img src={assets.menu_icon} className='w-8 m-3 mb-4 cursor-pointer hover:bg-gray-300 rounded-full p-1' alt="" /> 
        {/* new chat */}
        <div className='flex gap-2 bg-gray-200 rounded-full m-5 mt-16 hover:bg-gray-300  group transition duration-300 ease-in-out cursor-pointer'>
          <img className='m-2 ml-4 w-7' src={assets.plus_icon} alt="" />
          <p className='mt-4 text-gray-400 group-hover:text-gray-100'>New Chat</p> 
        </div>
        {/* recent */}
        <div className='mt-8 flex flex-col gap-5'>
            <div className=' font-bold ml-4 '>
                <h1 >Recent</h1>
            </div>
            {/* recent shite */}
            <div className=' ml-9'>
                <div className=' flex flex-row gap-2 rounded-full p-2 mb-2 mr-2 hover:bg-gray-300'>
           <img src={assets.message_icon} className='w-7' alt="" /> <p className=' font-medium'>what is html ?</p>
           </div>
           <div className=' flex flex-row mr-2 gap-2 p-2 rounded-full mb-2 hover:bg-gray-300'>
           <img src={assets.message_icon} alt="" className='w-7' /> <p className=' font-medium'>what is react ?</p></div>
            </div>
        </div>
      </div>
      {/* bottom */}
      <div className=' flex flex-col m-3 gap-2 mt-36'>
        <div className='flex flex-row gap-5 hover:bg-gray-300 rounded-full p-1 transition duration-300 ease-in-out cursor-pointer'>
            <img src={assets.question_icon} className='w-7 ' alt="" /> <h1 className=' font-medium '>Help</h1> 
        </div>
        <div className='flex flex-row gap-5 hover:bg-gray-300 rounded-full p-1  transition duration-300 ease-in-out cursor-pointer'>
            <img src={assets.history_icon} alt="" className='w-7 ' />
            <h1 className=' font-medium '>History</h1>
        </div>
        <div className='flex flex-row gap-5 hover:bg-gray-300 rounded-full p-1 transition duration-300 ease-in-out cursor-pointer'>
            <img src={assets.setting_icon} alt="" className='w-7 '/>
            <h1 className=' font-medium '>Settings</h1>
        </div>
      </div>
    </div>
  );
}

export default SideBar;