import React from 'react';
import { FaStar } from "react-icons/fa";  // Import FaStar
import Img1 from "../../src/assets/wom1.jpg";
import Img2 from "../../src/assets/wom2.jpg";
import Img3 from "../../src/assets/wom3.jpg";
import Img4 from "../../src/assets/wom4.jpg";
import Img5 from "../../src/assets/wom5.jpg";

const WomensData = [  // Corrected data array name
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "White",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women Western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.7,
      color: "Brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img5,
      title: "Fashion T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
];

function Womens() {
  return (
    <div className='mt-14 mb-12 dark:text-white dark:bg-gray-800'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for Womens</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Women Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
          </p>
        </div>

        {/* body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* card section */}
            {WomensData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay} // Corrected camelCase for delay attribute
                className='space-y-3'
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className='h-[220px] w-[150px] object-cover rounded-md'
                />
                <div>
                  <h3 className='font-bold text-sm'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex justify-center gap-1'>
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* view all button */}
     
        </div>
      </div>
    </div>
  );
}

export default Womens;