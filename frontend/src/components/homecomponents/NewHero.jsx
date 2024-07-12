import React from 'react';
import hero from '../../assets/hero.png';

const NewHero = () => {
  return (
    <>
      <dive className="flex ">
        <div className="flex items-center w-full lg:w-[60%]">
          <div className="max-w-2xl mb-8 ml-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
  Discover the Hidden Gems of the World
</h1>
<p className="py-5 text-xl leading-normal text-gray-200 lg:text-xl xl:text-2xl dark:text-gray-300">
  Join us on an unforgettable journey as we explore breathtaking landscapes, vibrant cultures, and extraordinary destinations. Embark on adventures that will ignite your wanderlust and create memories to last a lifetime.
</p>


            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className={`px-8 py-4 text-lg font-medium text-center text-white bg-[#1A4D2E] rounded-md `}
              >
                Project Zip File
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                
                
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-[40%]">
          <div className="w-[616px] h-[616px]">
            <img src={hero} alt="N" width="616" height="616" />
          </div>
        </div>
      </dive>
    </>
  );
};

export default NewHero;