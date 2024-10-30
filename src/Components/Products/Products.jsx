import React from 'react'
import Img1 from "../../assets/women2.png";
import Img2 from "../../assets/women1.png";
import Img3 from "../../assets/women3.jpeg";
import Img4 from "../../assets/women4.jpg";
import Img5 from "../../assets/women1.png";
import { FaStar } from "react-icons/fa6";
import DarkMode from '../Navbar/DarkMode';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },  {
    id: 2,
    img: Img2,
    title: "women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles ",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt ",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "fashionT-shirt ",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

function Products()  {
  return (
    <div className='mt-14 mb-12 dark:text-white   dark:bg-gray-800'>
        <div className='container'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up"  className='text-sm text-primary'>Top Selling Products for you </p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up"  className='text-xs text-gray-400'>Lorem ipsum dolor sit anet consectetur,
                adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>
            {/* boby section */}
       
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-5
                md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
               {/* card section */}                 
               {
                ProductsData.map((data) => (
                    <div 
                     data-aos="fade-up"
                     data-aos-Delay={data.aosDelay}
                    key={data.id} className='space-y-3'>
                    <img 
                      src={data.img}
                      alt=''
                      className='h-[220px] w-[150px] object-cover rounded-md'
                    />
                    <div>
                      <h3 className='font-bold text-sm'>{data.title}</h3>
                      <p className='text-sm text-gray-600'>{data.color}</p>
                      <div className='flex justify-center gap-1 '>
                        <FaStar className="text-yellow-400"/>
                        <span className=''>{data.rating}</span>

                      </div>
                     </div>
                    </div>
                    ))}
                </div>
                {/* view all button */}
                <div className='flex justify-center'>
                  <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md'>view All </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products







