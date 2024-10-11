import React, { useState } from 'react';
import { assets } from '../assets/assets';

const SidebarItem = ({ icon, label, additionalClasses = '', expaned }) => {
  return (
    <div className={`flex flex-row gap-5 hover:bg-gray-300 rounded-full p-1 transition duration-300 ease-in-out cursor-pointer ${additionalClasses}`}>
      <img src={icon} className='w-7' alt={label} /> {/* Icon always shows */}
      {expaned && <h1 className='font-medium'>{label}</h1>} {/* Text only shows when expanded */}
    </div>
  );
};

const SideBar = () => {
  const [expaned, setExpaned] = useState(false);

  const toggleSideBar = () => {
    setExpaned(!expaned);
  };

  return (
    <div className={`bg-gray-100 ${expaned ? 'w-96' : 'w-28'} h-screen m-0 p-0 overflow-hidden transition-all duration-300`}>
      {/* top */}
      <div>
        <img 
          src={assets.menu_icon} 
          className={`w-8 m-3 mb-4 cursor-pointer hover:bg-gray-300 rounded-full p-1 ${expaned? "":"ml-6"}`} 
          alt="menu" 
          onClick={toggleSideBar} 
        />
        {/* new chat */}
        <div className={`flex ${expaned ? 'gap-2' : 'justify-center items-center'} bg-gray-200 ${expaned ? 'm-5' : 'm-3'} rounded-full mt-16 hover:bg-gray-300 group transition duration-300 ease-in-out cursor-pointer`}>
          <img className={`w-7 ${expaned ? 'm-2 rounded-full p-1' : ''}`} src={assets.plus_icon} alt="new chat" />
          {expaned && <p className='mt-4 text-gray-400 group-hover:text-gray-100'>New Chat</p>}
        </div>
        {/* recent */}
        <div className='mt-8 flex flex-col gap-5'>
          {expaned && (
            <div className='font-bold ml-4'>
              <h1>Recent</h1>
            </div>
          )}
          {/* recent chats */}
          <div className='ml-9'>
            {/* Hide the image when collapsed */}
            {expaned && <SidebarItem icon={assets.message_icon} label='what is html ?' additionalClasses='mb-2' expaned={expaned}/>}
            {expaned && <SidebarItem icon={assets.message_icon} label='what is react ?' additionalClasses='mb-2' expaned={expaned} />}
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className={`flex flex-col m-3 gap-2 ${expaned ? 'mt-36' : 'mt-72'}`}>
        {/* These items will keep showing regardless of sidebar state */}
        <SidebarItem icon={assets.question_icon} label='Help' expaned={expaned} />
        <SidebarItem icon={assets.history_icon} label='History' expaned={expaned} />
        <SidebarItem icon={assets.setting_icon} label='Settings' expaned={expaned} />
      </div>
    </div>
  );
};

export default SideBar;
