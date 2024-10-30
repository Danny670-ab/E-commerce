import React from 'react';
import Img1 from "../../assets/men1.png";
import Img2 from "../../assets/men2.png";
import Img3 from "../../assets/men5.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual wear",
    description: "lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description: "lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 3,
    img: Img3,
    title: "Gentle shirt",
    description: "lorem ipsum dolor sit amet  conectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = ({handleOrderPopup}) => {

  const handleOrder = () => {
    // Add your order handling logic here
    console.log("Order button clicked");
  };

  return (
    <div >
      <div className='container  dark:bg-gray-800 '>
        {/* Header section */}
        <div className='text-left mb-24'>
          <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white '>Best Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit anet consectetur, 
            adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className='rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px]' 
            >
              {/* Image section */}
              <div className='h-[100px]'>
                <img
                  src={data.img} alt={data.title} // Add alt text based on the product title for better accessibility
                  className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                />
              </div>
              {/* Details section */} 
              <div className='p-4 text-center'>
                {/* Rating stars */}
                <div className='w-full flex items-center justify-center gap-1'>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                </div>
                <h1 className='text-ml font-bold'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                  {data.description}
                </p>
                <button 
                  className='bg-primary hover:scale-105 duration-300 text-white py-1 px-2 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' 
                  onClick={handleOrderPopup}
                  
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default TopProducts;
