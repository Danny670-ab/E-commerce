import React, { useState } from 'react';
import Img1 from "../assets/tise/tise1.jpg";
import Img2 from "../assets/tise/tise2.jpg";
import Img3 from "../assets/tise/tise3.jpg";
import Img4 from "../assets/tise/tise4.jpeg";
import Img5 from "../assets/tise/tise5.png";
import Img6 from "../assets/tise/tise6.jpeg";
import Img7 from "../assets/tise/tise7.jpeg";
import Img8 from "../assets/tise/tise8.jpeg";
import Img9 from "../assets/tise/tise9.jpeg";
import Img10 from "../assets/tise/tise10.jpeg";
import Img11 from "../assets/tise/tise11.jpeg";
import Img12 from "../assets/tise/tise12.jpeg";
import Img13 from "../assets/tise/tise13.jpeg";
import Img14 from "../assets/tise/tise14.jpeg";
import Img15 from "../assets/tise/tise15.jpeg";
import Img16 from "../assets/tise/tise16.jpeg";
import Img17 from "../assets/tise/tise17.jpeg";
import Img18 from "../assets/tise/tise18.jpeg";
import Img20 from "../assets/tise/tise20.jpeg";
import Img21 from "../assets/tise/tise21.jpeg";
import Img22 from "../assets/tise/tise22.jpeg";
import Img23 from "../assets/tise/tise23.jpeg";
import Img24 from "../assets/tise/tise24.jpeg";
import Img25 from "../assets/tise/tise25.jpeg";
import Img26 from "../assets/tise/tise26.jpeg";
import Img27 from "../assets/tise/tise27.jpeg";
import Img28 from "../assets/tise/tise10.jpeg";
import Img29 from "../assets/tise/tise29.jpeg";
import Img30 from "../assets/tise/tise30.jpeg";
import Img31 from "../assets/tise/tise31.jpeg";


import { FaStar } from "react-icons/fa6";

const CottonData = [
  { id: 1, img: Img1, title: "women Ethnic", rating: 5.0, color: "white", aosDelay: "0" },
  { id: 2, img: Img2, title: "women western", rating: 4.5, color: "Red", aosDelay: "200" },
  { id: 3, img: Img3, title: "Goggles", rating: 4.7, color: "brown", aosDelay: "400" },
  { id: 4, img: Img4, title: "Printed T-Shirt", rating: 4.4, color: "Yellow", aosDelay: "600" },
  { id: 5, img: Img5, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "800" },
  { id: 6, img: Img6, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "1000" },
  { id: 7, img: Img7, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "1200" },
  { id: 8, img: Img8, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "1400" },
  { id: 9, img: Img9, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "1600" },
  { id: 10, img: Img10, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "1800" },
  { id: 11, img: Img11, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "2000" },
  { id: 12, img: Img12, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "2200" },
  { id: 13, img: Img13, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "2400" },
  { id: 14, img: Img14, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "2600" },
  { id: 15, img: Img15, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "2800" },
  { id: 16, img: Img16, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "3000" },
  { id: 17, img: Img17, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "3200" },
  { id: 18, img: Img18, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "3400" },
  { id: 20, img: Img20, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "3800" },
  { id: 21, img: Img21, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "4000" },
  { id: 22, img: Img22, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "4200" },
  { id: 23, img: Img23, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "4400" },
  { id: 24, img: Img24, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "4600" },
  { id: 25, img: Img25, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "4800" },
  { id: 26, img: Img26, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "5000" },
  { id: 27, img: Img27, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "5200" },
  { id: 28, img: Img28, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "5400" },
  { id: 29, img: Img29, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "5600" },
  { id: 30, img: Img30, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "5800" },
  { id: 31, img: Img31, title: "fashionT-shirt", rating: 4.5, color: "Pink", aosDelay: "6000" },

];

function Cotton() {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 25);
  };
  const handleOrderPopup = () => {
    alert("Order Now clicked!"); 
  };

  return (
    <div className='mt-14 mb-12 dark:text-white dark:bg-gray-800'>
      <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-green-500'>Cotton and Tissue</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
          </p>
        </div>

        {/* Body Section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-10'>
            {/* Card Section */}
            {CottonData.slice(0, visibleCount).map((data) => (
              <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className='space-x-10'
              >
                <img
                  src={data.img}
                  alt=''
                  className='h-[220px] w-[150px] object-cover rounded-md py-1'
                />
                <div className='items-center'>
                  <h3 className='font-bold text-sm items-center justify-center'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex  gap-1'>
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <button 
                className='bg-primary hover:scale-105 duration-300 text-white py-1 px-2  rounded-full  group-hover:bg-white group-hover:text-primary'
                onClick={handleOrderPopup}
              >
                Order Now
              </button>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          {visibleCount < CottonData.length && (
            <div className='flex justify-center'>
              <button 
                onClick={handleViewMore}
                className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md'
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cotton;
