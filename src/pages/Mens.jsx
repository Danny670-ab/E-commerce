import React, { useState } from 'react';
import Img1 from "../assets/Jogging/jog1.jpg";
import Img2 from "../assets/Jogging/jog2.jpg";
import Img3 from "../assets/Jogging/jog3.jpeg";
import Img4 from "../assets/Jogging/jog4.jpg";
import Img5 from "../assets/Jogging/jog5.jpeg";
import Img6 from "../assets/Jogging/joj6.jpeg";
import Img7 from "../assets/Jogging/joj7.jpeg";
import Img8 from "../assets/Jogging/joj8.jpeg";
import Img9 from "../assets/Jogging/joj9.jpeg";
import Img10 from "../assets/Jogging/joj10.jpeg";
import Img11 from "../assets/Jogging/joj11.jpeg";
import Img12 from "../assets/Jogging/joj12.jpeg";
import Img13 from "../assets/Jogging/joj13.jpeg";
import Img14 from "../assets/Jogging/joj14.jpeg";
import Img15 from "../assets/Jogging/joj15.jpeg";
import Img16 from "../assets/Jogging/joj16.jpeg";
import Img17 from "../assets/Jogging/joj17.jpeg";
import Img18 from "../assets/Jogging/joj18.jpeg";
import Img19 from "../assets/Jogging/joj19.jpeg";
import Img20 from "../assets/Jogging/joj20.jpeg";
import Img21 from "../assets/Jogging/joj21.jpeg";
import Img22 from "../assets/Jogging/joj22.jpeg";
import Img23 from "../assets/Jogging/joj23.jpeg";
import Img24 from "../assets/Jogging/joj24.jpeg";
import Img25 from "../assets/Jogging/joj25.jpeg";
import Img26 from "../assets/Jogging/joj26.jpg";
import Img27 from "../assets/Jogging/joj27.jpeg";
import Img28 from "../assets/Jogging/joj28.jpeg";
import Img29 from "../assets/Jogging/joj29.jpeg";
import Img30 from "../assets/Jogging/joj30.jpeg";

import { FaStar } from "react-icons/fa6";


// Correct import for Tshirts
import Tshirts from "./Tshirts";  // Adjust this path if Tshirts.js is in another folder
import Shorts from "./Shorts";
import Cutton from './Cotton';
import Costime from './Costime';
import Shouse from './Shouse';

const MensData = [
  { id: 1, img: Img1, rating: 4.5, title: "Kids Ethnic", price: "$30", aosDelay: "0" },
  { id: 2, img: Img2,rating: 4.5, title: "Kids Western", price: "$20", aosDelay: "200" },
  { id: 3, img: Img3,rating: 4.5, title: "Goggles", price: "$20", aosDelay: "400" },
  { id: 4, img: Img4,rating: 4.5, title: "Printed T-Shirt", price: "$20", aosDelay: "600" },
  { id: 5, img: Img5,rating: 4.5, title: "Fashion T-Shirt", price: "$17", aosDelay: "800" },
  { id: 6, img: Img6,rating: 4.5, title: "Casual Shirt", price: "$22", aosDelay: "1000" },
  { id: 7, img: Img7,rating: 4.5, title: "Jeans", price: "$35", aosDelay: "1200" },
  { id: 8, img: Img8,rating: 4.5, title: "Leather Jacket", price: "$120", aosDelay: "1400" },
  { id: 9, img: Img9,rating: 4.5, title: "Denim Jacket", price: "$90", aosDelay: "1600" },
  { id: 10, img: Img10,rating: 4.5, title: "Formal Suit", price: "$200", aosDelay: "1800" },
  { id: 11, img: Img11,rating: 4.5, title: "Summer Wear", price: "$25", aosDelay: "2000" },
  { id: 12, img: Img12,rating: 4.7, title: "Beach Wear", price: "$30", aosDelay: "2200" },
  { id: 13, img: Img13,rating: 4.7, title: "Winter Coat", price: "$150", aosDelay: "2400" },
  { id: 14, img: Img14,rating: 4.7, title: "Sweatshirt", price: "$40", aosDelay: "2600" },
  { id: 15, img: Img15,rating: 4.7, title: "Cardigan", price: "$55", aosDelay: "2800" },
  { id: 16, img: Img16,rating: 4.7, title: "Leather Boots", price: "$80", aosDelay: "3000" },
  { id: 17, img: Img17,rating: 4.2, title: "Sneakers", price: "$60", aosDelay: "3200" },
  { id: 18, img: Img18,rating: 4.2,  title: "Flip Flops", price: "$15", aosDelay: "3400" },
  { id: 19, img: Img19,rating: 4.2,  title: "Joggers", price: "$35", aosDelay: "3600" },
  { id: 20, img: Img20,rating: 4.2,  title: "Cargo Pants", price: "$50", aosDelay: "3800" },
  { id: 21, img: Img21,rating: 4.2,  title: "Blazer", price: "$180", aosDelay: "4000" },
  { id: 22, img: Img22,rating: 4.2,  title: "Vest", price: "$20", aosDelay: "4200" },
  { id: 23, img: Img23,rating: 5,  title: "Scarf", price: "$10", aosDelay: "4400" },
  { id: 24, img: Img24,rating: 5, title: "Gloves", price: "$12", aosDelay: "4600" },
  { id: 25, img: Img25,rating: 5, title: "Socks", price: "$5", aosDelay: "4800" },
  { id: 26, img: Img26,rating: 5, title: "Watch", price: "$150", aosDelay: "5000" },
  { id: 27, img: Img27,rating: 5, title: "Hat", price: "$25", aosDelay: "5200" },
  { id: 28, img: Img28,rating: 5, title: "Belt", price: "$20", aosDelay: "5400" },
  { id: 29, img: Img29,rating: 5, title: "Belt", price: "$20", aosDelay: "5600" },
  { id: 30, img: Img30,rating: 5, title: "Belt", price: "$20", aosDelay: "5800" },
];

function Mens() {
  const [visibleCount, setVisibleCount] = useState(5); // Number of products visible initially

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 25); // Increase visible products by 25 each time
  };

  const handleOrderPopup = () => {
    alert("Order Now clicked!"); 
  };

  return (
    <div className='mt-14 mb-12 dark:text-white dark:bg-gray-800'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for Men</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-blue-900'>JEANS PANT</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* Product card section */}
            {MensData.slice(0, visibleCount).map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay} 
                className='space-y-3'
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className='h-[220px] w-[150px] object-cover rounded-md hover:w-[200px]'
                />
                <div>
                  <h3 className='flex flex-col font-bold text-sm items-center'>{data.title}</h3>
                  {data.price && (
                    <p className='text-center font-bold text-sm text-gray-800 dark:text-gray-300'>{data.price}</p>

             

                  )}
                </div>
                <div className='flex flex-col px-4'>
                <button 
                  className='flex flex-col items-center justify-center bg-primary hover:scale-105 duration-300 text-white  rounded-full group-hover:bg-white group-hover:text-primary'
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More button */}
          {visibleCount < MensData.length && (
            <div className='flex justify-center'>
              <button onClick={handleViewMore} className='text-center mt-10 cursor-pointer bg-primary text-white py-2 px-4 rounded-md font-bold'>
                View More
              </button>
            </div>
          )}

          {/* Render Tshirts component */}
          <div className="mt-10">
            <Tshirts />
          </div>
          <div className='mt-10'>
            <Shorts />
          </div>
          <div className='mt-10'>
            <Cutton />
          </div>
          <div className='mt-10'>
            <Costime />
          </div>
          <div className='mt-10'>
            <Shouse />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mens;
