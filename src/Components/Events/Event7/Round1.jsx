import React from 'react';
import e26 from '../../../assets/e710.webp'; // Updated image
import e25 from '../../../assets/e74.webp'; // New background image

const Round1 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 mt-5 mb-5 md:p-8">
      {/* Background Image */}
      <img
        src={e25}
        alt="Insight Island"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      />

      {/* Overlay Content */}
      <div className="relative w-full p-4 bg-black rounded-lg shadow-xl md:p-8 bg-opacity-70 max-w-none drop-shadow-xl">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex-shrink-0 w-full md:w-auto md:mr-8">
            <img
              src={e26}
              alt="LCU 20"
              className="w-full rounded-lg md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="w-full max-w-2xl mt-4 text-center md:mt-8 md:text-left">
            <h1 className="text-4xl font-medium text-white md:text-4xl lg:text-4xl font-good">
            Round 1 
            </h1>
            <p className="mt-4 text-base font-medium text-white md:text-lg lg:text-xl">
            • There will be 20 teams, each consisting of 2 members. <br></br>
            • Generate words using prompts indirectly through ChatGPT, with a timer starting from 00:00. <br></br>
            • Teams with the least time consumption for generating words will advance to Round 2. 


 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round1;
