import React from 'react';
import BannerImg from "../../assets/women4.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import DarkMode from '../Navbar/DarkMode';

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-17 sm:py-0  dark:bg-gray-800 '>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=''
              className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,3)] object-cover'
            />
          </div>

          {/* text details section */}
          <div data-aos="zoom-in" className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-4xl sm:text-2xl font-bold dark:text-white '>
              Winter Sale up to 50% Off
            </h1>
            <p className='text-sm text-gray-500  leading-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <div data-aos="zoom-in" className='flex flex-col gap-4 '>
              <div className='flex items-center gap-4 '>
                {/* Icon inside shadow */}
                <div className='relative h-12 w-12 shadow-lg p-4 rounded-full bg-violet-100 flex justify-center items-center'>
                  <GrSecure className='text-2xl text-gray-800 ' />
                </div>
                {/* Text */}
                <p className='text-gray-800 font-semibold dark:text-white'>Quality Products</p>
              </div>
              <div className='flex items-center gap-4'>
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-200'/>
                <p className='text-gray-800 font-semibold dark:text-white' >Fast Delivery</p>
              </div>
               <div className='flex items-center gap-4'>
               <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-300'/>
              <p className='text-gray-800 font-semibold dark:text-white ' >Easy Payment Method</p>
             </div>
             <div className='flex items-center gap-4'>
              <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100'/>
             <p className='text-gray-800 font-semibold dark:text-white'>Get Offers</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

