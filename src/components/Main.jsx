import React from 'react';
import { assets } from '../assets/assets';
const Card = ({ icon, label }) => {
    return (
      <div className='bg-gray-200 h-48 rounded-lg relative p-4 hover:hover:bg-gray-300 transition duration-300 ease-in-out cursor-pointer'>  
        <p className='font-light'>{label}</p>
        <img className='w-7 absolute bottom-2 right-2 cursor-pointer' src={icon} alt="icon" /> 
      </div>
    );
  }
  
const Main = () => {
  return (
    <main className=''>
      {/* logo */}
      <nav>
        <h1 className=' m-8 font-bold text-2xl tracking-wide text-gray-500'>Gemini</h1>

      </nav>
      {/* headline */}
      <div className=' m-10 ml-44'>
        <h1 className=" text-4xl mb-3 font-medium text-gray-500 bg-gradient-to-r from-blue-500  to-red-500 via-pink-500 bg-clip-text text-transparent">Hello, Dev.</h1>
        <h1 className=' text-4xl font-medium text-gray-500'>How can i help you today ?</h1>

      </div>
      {/* featues 4 sqaures */}
      <div className=' grid grid-cols-4 gap-3 mx-40'>
      <Card icon={assets.compass_icon} label='Suggest beautiful places and must-see destinations'></Card>
      <Card icon={assets.bulb_icon} label='Provide a concise summary of this concept or idea'></Card>
      <Card icon={assets.message_icon} label='Brainstorm engaging team-building activities for work'></Card>
      <Card icon={assets.code_icon} label='Assist with solving this coding error or issue'></Card>


      </div>
      {/* search bar */}
      <div className='m-16 ml-56 bg-gray-200 w-2/3 rounded-full relative'>
  <input type="text" placeholder='Message my chatbot ...' className='bg-transparent m-4 outline-none w-full' />

  
  <img src={assets.gallery_icon} className='w-7 absolute right-12 top-1 m-3 cursor-pointer' alt="gallery" /> 
  <img src={assets.mic_icon} className='w-7 absolute right-2 top-1 m-3 cursor-pointer' alt="mic" />
</div>

    </main>
  )
}

export default Main
