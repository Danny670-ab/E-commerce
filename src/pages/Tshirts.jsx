import React, { useState } from 'react';
import Img1 from "../assets/shati/shati1.png";
import Img2 from "../assets/shati/shati2.png";
import Img3 from "../assets/shati/shati3.png";
import Img4 from "../assets/shati/shati4.png";
import Img5 from "../assets/shati/shati5.png";
import Img6 from "../assets/shati/shati6.png";
import Img7 from "../assets/shati/shati7.png";
import Img8 from "../assets/shati/shati8.png";
import Img9 from "../assets/shati/shati9.png";
import Img10 from "../assets/shati/shati11.png";
import Img11 from "../assets/shati/shati11.png";
import Img12 from "../assets/shati/shati12.png";
import Img13 from "../assets/shati/shati13.png";
import Img14 from "../assets/shati/shati14.png";
import Img15 from "../assets/shati/shati15.png";
import Img16 from "../assets/shati/shati16.png";
import Img17 from "../assets/shati/shati5.png";
import Img18 from "../assets/shati/shati18.png";
import Img19 from "../assets/shati/shati19.png";
import Img20 from "../assets/shati/shati20.png";
import Img21 from "../assets/shati/shati21.png";
import Img22 from "../assets/shati/shati22.png";
import Img23 from "../assets/shati/shati23.png";
import Img24 from "../assets/shati/shati24.png";
import Img25 from "../assets/shati/shati25.png";
import Img26 from "../assets/shati/shati28.png";
import Img27 from "../assets/shati/shati27.png";
import Img28 from "../assets/shati/shati28.png";
import Img29 from "../assets/shati/shati29.png";
import Img30 from "../assets/shati/shati30.png";

import { FaStar } from "react-icons/fa6";


// Full Tshirts data array with 30 items
const TshirtsData = [
  { id: 1, img: Img1, title: "Casual wear", price: 29.99 , rating: 5.0},
  { id: 2, img: Img2, title: "Printed shirt", price: 19.99 , rating: 5.0},
  { id: 3, img: Img3, title: "Gentle shirt", price: 24.99 , rating: 5.0},
  { id: 4, img: Img4, title: "Printed shirt", price: 21.99 , rating: 5.0},
  { id: 5, img: Img5, title: "Gentle shirt", price: 22.99 , rating: 5.0},
  { id: 6, img: Img6, title: "Casual wear", price: 29.99 , rating: 4.5},
  { id: 7, img: Img7, title: "Printed shirt", price: 18.99 , rating: 4.5},
  { id: 8, img: Img8, title: "Gentle shirt", price: 23.99 , rating: 4.5},
  { id: 9, img: Img9, title: "Printed shirt", price: 20.99 , rating: 4.7},
  { id: 10, img: Img10, title: "Gentle shirt", price: 25.99 , rating: 4.7},
  { id: 11, img: Img11, title: "Casual wear", price: 29.99 , rating: 4.7},
  { id: 12, img: Img12, title: "Printed shirt", price: 19.99 , rating: 4.5},
  { id: 13, img: Img13, title: "Gentle shirt", price: 26.99 , rating: 5.0},
  { id: 14, img: Img14, title: "Printed shirt", price: 22.99 , rating: 5.0},
  { id: 15, img: Img15, title: "Gentle shirt", price: 24.99 , rating: 5.0},
  { id: 16, img: Img16, title: "Casual wear", price: 27.99 , rating: 5.0},
  { id: 17, img: Img17, title: "Printed shirt", price: 18.99 , rating: 5.0},
  { id: 18, img: Img18, title: "Gentle shirt", price: 23.99 , rating: 5.0},
  { id: 19, img: Img19, title: "Printed shirt", price: 21.99 , rating: 5.0},
  { id: 20, img: Img20, title: "Gentle shirt", price: 26.99 , rating: 5.0},
  { id: 21, img: Img21, title: "Casual wear", price: 28.99 , rating: 5.0},
  { id: 22, img: Img22, title: "Printed shirt", price: 19.99 , rating: 5.0},
  { id: 23, img: Img23, title: "Gentle shirt", price: 24.99 , rating: 5.0},
  { id: 24, img: Img24, title: "Printed shirt", price: 22.99 , rating: 5.0},
  { id: 25, img: Img25, title: "Gentle shirt", price: 23.99 , rating: 5.0},
  { id: 26, img: Img26, title: "Casual wear", price: 27.99 , rating: 5.0},
  { id: 27, img: Img27, title: "Printed shirt", price: 20.99 , rating: 5.0},
  { id: 28, img: Img28, title: "Gentle shirt", price: 24.99 , rating: 5.0},
  { id: 29, img: Img29, title: "Printed shirt", price: 21.99 , rating: 5.0},
  { id: 30, img: Img30, title: "Gentle shirt", price: 26.99 , rating: 5.0},
];

function Tshirts() {
  const [visibleCount, setVisibleCount] = useState(5); // Start with 5 visible items

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 25); // Show 25 more items when clicked
  };

  const handleOrderPopup = () => {
    alert("Order Now clicked!"); // Define your order logic here
  };

  return (
    <div className='container dark:bg-gray-800'>
      {/* Header section */}
      <div className='flex flex-col mb-24 justify-center items-center'>
        <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>Mens Shirt</h1>
        <p data-aos="fade-up" className='text-xs text-gray-400'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi.
        </p>
      </div>

      {/* Body section */}
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-36 md:gap-20 place-items-center'>
        {TshirtsData.slice(0, visibleCount).map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className='rounded-2xl bg-green-300 hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px] max-h-[320px]'
          >
            {/* Image section */}
            <div className='h-[200px]'>
              <img
                src={data.img}
                alt={data.title}
                className=' max-w-[180px] block mx-auto transform -translate-y-16 group-hover:scale-105 duration-300 drop-shadow-md'
              />
            </div>
                 {/* Details section */}
             <div className=' text-center mb-10'>
              <h1 className='text-ml font-bold'>{data.title}</h1>
               <p className='text-gray-400'>${data.price.toFixed(2)}</p>
              <div className='flex flex-col items-center justify-center text-yellow-300'>
                <div className='flex items-center gap-1'>
                <FaStar className="text-yellow-300" />
                <span>{data.rating}</span>
              </div>
              <button
               className='bg-primary hover:scale-105 duration-300 text-white py-1 px-3 rounded-full group-hover:bg-white group-hover:text-primary mt-2'
               onClick={handleOrderPopup}>
               Order Now      
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More button */}
      {visibleCount < TshirtsData.length && (
        <div className='flex justify-center'>
          <button onClick={handleViewMore} className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md'>
            View more
          </button>
        </div>
      )}
    </div>
  );
}

export default Tshirts;
