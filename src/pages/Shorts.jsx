import React, { useState } from 'react';
import Img1 from "../assets/shorts/short1.jpg";
import Img2 from "../assets/shorts/short2.jpg";
import Img3 from "../assets/shorts/short3.jpg";
import Img4 from "../assets/shorts/short4.jpeg";
import Img5 from "../assets/shorts/short5.jpeg";
import Img6 from "../assets/shorts/short6.jpeg";
import Img7 from "../assets/shorts/short7.jpeg";
import Img8 from "../assets/shorts/short8.jpeg";
import Img9 from "../assets/shorts/short9.jpeg";
import Img10 from "../assets/shorts/short10.jpeg";
import Img11 from "../assets/shorts/short11.jpeg";
import Img12 from "../assets/shorts/short12.jpeg";
import Img13 from "../assets/shorts/short13.jpeg";
import Img14 from "../assets/shorts/short14.jpeg";
import Img15 from "../assets/shorts/short15.jpeg";
import Img16 from "../assets/shorts/short16.jpeg";
import Img17 from "../assets/shorts/short17.jpeg";
import Img18 from "../assets/shorts/short18.jpeg";
import Img19 from "../assets/shorts/short19.jpeg";
import Img20 from "../assets/shorts/short20.jpeg";
import Img21 from "../assets/shorts/short21.jpeg";
import Img22 from "../assets/shorts/short22.jpeg";
import Img23 from "../assets/shorts/short23.jpg";
import Img24 from "../assets/shorts/pira1.jpeg";
import Img25 from "../assets/shorts/pira3.jpeg";
import Img26 from "../assets/shorts/pira4.jpeg";
import Img27 from "../assets/shorts/pira5.jpeg";
import Img28 from "../assets/shorts/pira6.jpeg";
import Img29 from "../assets/shorts/pira7.jpeg";
import Img30 from "../assets/shorts/pira19.jpeg";
import Img31 from "../assets/shorts/pira9.jpeg";  // Changed duplicate Img31
import Img32 from "../assets/shorts/pira10.jpeg";
import Img33 from "../assets/shorts/pira11.jpeg";
import Img34 from "../assets/shorts/pira12.jpeg";
import Img35 from "../assets/shorts/pira13.jpeg";
import Img36 from "../assets/shorts/pira14.jpeg";
import Img37 from "../assets/shorts/pira15.jpeg";
import Img38 from "../assets/shorts/pira16.jpeg";  // Fixed duplicate
import Img39 from "../assets/shorts/pira17.jpeg";  // Fixed duplicate
import Img40 from "../assets/shorts/pira18.jpeg";  // Fixed duplicate

import { FaStar } from "react-icons/fa6";


// Full Shorts data array
const ShortsData = [
  { id: 1, img: Img1, title: "Casual wear", price: 29.99 , rating:5, },
  { id: 2, img: Img2, title: "Printed shirt", price: 19.99 , rating:5,},
  { id: 3, img: Img3, title: "Gentle shirt", price: 24.99 , rating:5,},
  { id: 4, img: Img4, title: "Printed shirt", price: 21.99 , rating:5,},
  { id: 5, img: Img5, title: "Gentle shirt", price: 22.99 , rating:5,},
  { id: 6, img: Img6, title: "Casual wear", price: 29.99 , rating:5,},
  { id: 7, img: Img7, title: "Printed shirt", price: 18.99 , rating:5,},
  { id: 8, img: Img8, title: "Gentle shirt", price: 23.99 , rating:5,},
  { id: 9, img: Img9, title: "Printed shirt", price: 20.99 , rating:5,},
  { id: 10, img: Img10, title: "Gentle shirt", price: 25.99 , rating:5,},
  { id: 11, img: Img11, title: "Casual wear", price: 29.99 , rating:5,},
  { id: 12, img: Img12, title: "Printed shirt", price: 19.99 , rating:5,},
  { id: 13, img: Img13, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 14, img: Img14, title: "Printed shirt", price: 22.99 , rating:5,},
  { id: 15, img: Img15, title: "Gentle shirt", price: 24.99 , rating:5,},
  { id: 16, img: Img16, title: "Casual wear", price: 27.99 , rating:5,},
  { id: 17, img: Img17, title: "Printed shirt", price: 18.99 , rating:5,},
  { id: 18, img: Img18, title: "Gentle shirt", price: 23.99 , rating:5,},
  { id: 19, img: Img19, title: "Printed shirt", price: 21.99 , rating:5,},
  { id: 20, img: Img20, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 21, img: Img21, title: "Casual wear", price: 28.99 , rating:5,},
  { id: 22, img: Img22, title: "Printed shirt", price: 19.99 , rating:5,},
  { id: 23, img: Img23, title: "Gentle shirt", price: 24.99 , rating:5,},
  { id: 24, img: Img24, title: "Printed shirt", price: 22.99 , rating:5,},
  { id: 25, img: Img25, title: "Gentle shirt", price: 23.99 , rating:5,},
  { id: 26, img: Img26, title: "Casual wear", price: 27.99 , rating:5,},
  { id: 27, img: Img27, title: "Printed shirt", price: 20.99 , rating:5,},
  { id: 28, img: Img28, title: "Gentle shirt", price: 24.99 , rating:5,},
  { id: 29, img: Img29, title: "Printed shirt", price: 21.99 , rating:5,},
  { id: 30, img: Img30, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 31, img: Img31, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 32, img: Img32, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 33, img: Img33, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 34, img: Img34, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 35, img: Img35, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 36, img: Img36, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 37, img: Img37, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 38, img: Img38, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 39, img: Img39, title: "Gentle shirt", price: 26.99 , rating:5,},
  { id: 40, img: Img40, title: "Gentle shirt", price: 26.99 , rating:5,},

];

function Shorts() {
  const [visibleCount, setVisibleCount] = useState(5); // Start with 5 visible items

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 35); // Show 25 more items when clicked
  };

  const handleOrderPopup = () => {
    alert("Order Now clicked!"); // Define your order logic here
  };

  return (
    <div className='container dark:bg-gray-800'>
      {/* Header section */}
      <div className='flex flex-col mb-24 justify-center items-center'>
        <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white   text-red-500'>Shorts and T-shirts</h1>
        <p data-aos="fade-up" className='text-xs text-gray-400'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi.
        </p>
      </div>

      {/* Body section */}
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-36 md:gap-20 place-items-center'>
        {ShortsData.slice(0, visibleCount).map((data) => (
          <div
            key={data.id}
            data-aos="zoom-out"
            className='rounded-2xl bg-green-500 hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px] max-h-[320px]'
          >
            {/* Image section */}
            <div className='h-[200px]'>
              <img
                src={data.img}
                alt={data.title}
                className='max-w-[180px] block mx-auto transform -translate-y-16 group-hover:scale-105 duration-300 drop-shadow-md'
              />
            </div>
                 {/* Details section */}
             <div className=' text-center mb-10'>
               <h1 className='text-ml font-bold'>{data.title}</h1>
                <p className='text-gray-800'>${data.price.toFixed(2)}</p>
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
      {visibleCount < ShortsData.length && (
        <div className='flex justify-center'>
          <button onClick={handleViewMore} className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md'>
            View more
          </button>
        </div>
      )}
    </div>
  );
}

export default Shorts;
