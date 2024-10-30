import React from 'react';
import Banner from "../../assets/women4.jpg"; // Correct import
import DarkMode from '../Navbar/DarkMode';

const BannerImg = {
    backgroundImage: `url(${Banner})`, // Using backticks to interpolate the image correctly
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Subscribe = () => {
  return (
    <div
      
      style={BannerImg} // Apply style as a separate prop
      className='bg-gray-100   dark:bg-gray-800 text-white  '>
        <div className='container backdrop-blur-sm py-3 h'>
            <div className='!text-center sm:text-left font-semibold'>
                <h1 className='text-2xl text-center  sm:text-2xl font-semibold'>
                    Get Notified About New Product
                </h1>
                <input 
                 data-aos="fade-op"
                 type="text-gray"
                 placeholder='Enter your email'
                 className='w-full p-3 text-gray-800'
                />

            </div>
        </div>
    </div>
  );
};

export default Subscribe;
