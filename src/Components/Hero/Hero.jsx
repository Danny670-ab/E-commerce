
import React from 'react';
import Image1 from "../../assets/women2.png";
import Image2 from "../../assets/shopping.png";
import Image3 from "../../assets/sale.png";
import Image4 from "../../assets/logo1.png";
import Slider from 'react-slick';
import DarkMode from '../Navbar/DarkMode'; // Import DarkMode component

// Product data
const products = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% on all Men's Wear",
    description: 
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 4,
    img: Image4,
    title: "70% off on all Products sale",
    description: 
      `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Men's Wear",
    description: 
      `Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 3,
    img: Image3,
    title: "50% off on all Products sale",
    description: 
      `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Hero = ({handleOrderPopup}) => {

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    autoplaySpeed: 4000,
  };

  return (
    <div className='relative overflow-hidden h-[550px] sm:min-w-[650px] bg-gray-100 flex justify-center items-center dark:text-white  dark:bg-gray-800 duration-200'>

      {/* Dark Mode Toggle */}
      <div className='absolute top-4 right-4 z-10'>
      
      </div>

      {/* Background pattern */}
      <div className='h-[550px] w-[700px] bg-primary/40 absolute right-0 -top-1/2 rotate-45 -z-9 rounded-3xl dark:bg-gray-800'></div>

      {/* Hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className='grid grid-cols-1 sm:grid-cols-2 items-center gap-8'>
              {/* Text content section */}
              <div className='flex flex-col justify-center text-left sm:pr-8 text-black dark:text-white mt-60'>
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className='font-bold text-2xl sm:text-3xl lg:text-4xl'
                >
                  {product.title}
                </h1>
                <p  
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className='mt-2 text-sm sm:text-base lg:text-lg dark:text-gray-300'
                >
                  {product.description}
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  <button
                    className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white rounded-full w-28 mt-4'
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>

              {/* Image section */}
              <div className='flex justify-center sm:justify-end'>
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className='flex w-[50vw] h-auto max-w-full sm:w-[40vw] lg:w-[30vw] object-contain' 
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
