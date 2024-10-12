import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Context } from '../context/Context';

const Card = ({ icon, label }) => {
  return (
    <div className='bg-gray-200 h-48 rounded-lg relative p-4 hover:bg-gray-300 transition duration-300 ease-in-out cursor-pointer'>
      <p className='font-light'>{label}</p>
      <img className='w-7 absolute bottom-2 right-2 cursor-pointer' src={icon} alt="icon" />
    </div>
  );
}

const Main = () => {
  const { onSent, recentPrompt, showResult, resultData, input, setInput } = useContext(Context);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <main className='flex-1 relative p-4'>
      {/* logo */}
      <nav>
        <h1 className='m-8 font-bold text-3xl tracking-wide text-gray-500'>Gemini</h1>
      </nav>

      {/* Main content */}
      <div className="flex flex-col h-screen">
        {!showResult ? (
          <>
            {/* headline */}
            <div className='m-10 ml-44'>
              <h1 className="text-4xl mb-3 font-medium text-gray-500 bg-gradient-to-r from-blue-500 to-red-500 via-pink-500 bg-clip-text text-transparent">Hello, Dev.</h1>
              <h1 className='text-4xl font-medium text-gray-500'>How can I help you today?</h1>
            </div>

            {/* features 4 squares */}
            <div className='grid grid-cols-4 gap-3 mx-40'>
              <Card icon={assets.compass_icon} label='Suggest beautiful places and must-see destinations'></Card>
              <Card icon={assets.bulb_icon} label='Provide a concise summary of this concept or idea'></Card>
              <Card icon={assets.message_icon} label='Brainstorm engaging team-building activities for work'></Card>
              <Card icon={assets.code_icon} label='Assist with solving this coding error or issue'></Card>
            </div>
          </>
        ) : (
          // result div
          <div className='flex-1 overflow-y-auto p-8 ml-44'>
            {/* result title */}
            <div>
              <h1>{recentPrompt}</h1>
            </div>

            {/* AI response */}
            <div className='flex flex-row mt-4'>
              <img className='w-10 mb-96 mr-3' src={assets.gemini_icon} alt="Gemini" />
              <p className='text-sm' dangerouslySetInnerHTML={{ __html: resultData }}></p>
            </div>
          </div>
        )}

        {/* Search bar - fixed at the bottom */}
        <div className='fixed bottom-0 left-0 w-full p-4 bg-white ml-14'>
          <div className={`bg-gray-200 w-2/3 mx-auto rounded-full relative`}>
            <input
              type="text"
              placeholder='Message my chatbot ...'
              className='bg-transparent m-4 outline-none w-full'
              value={input}
              onChange={handleChange}
            />
            <img
              src={assets.send_icon}
              className='w-7 absolute right-2 top-1 m-3 cursor-pointer'
              alt="send"
              onClick={() => onSent()}
            />
            <img src={assets.mic_icon} className='w-7 absolute right-12 top-1 m-3 cursor-pointer' alt="mic" />
            <img src={assets.gallery_icon} className='w-7 absolute right-20 top-1 m-3 cursor-pointer' alt="gallery" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
