import React from 'react';
import Slider from 'react-slick';
import DarkMode from '../Navbar/DarkMode';


const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://picsum.photos/101/101", // Fixed the URL
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://picsum.photos/102/102", // Fixed the URL
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://picsum.photos/103/103", // Fixed the URL
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='mb-10 dark:bg-gray-800 dark:text-white'>
      <div className='container '>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>
            What Our Customers Are Saying
          </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        {/* Testimonials Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
               <div className=''>
               <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-3 rounded-xl dark:bg-gray-80 bg-primary/10 relative'>
                <div className=' mb-4'>
                  <img 
                    src={data.img} 
                    alt={data.name} 
                    className='w-20 h-20 rounded-full ' // Adjusted the styling for image
                  />
                </div>
                 <div className='flex flex-col items-center gap-4'>
                   <div className=' space-y-3'>
                    <p className='text-gray-500'>{data.text}</p>
                    <h1 className='text-lg font-bold text-black/80 dark:text-light dark:text-white '>{data.name}</h1>
                   </div>
                 </div>
                 <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                  ,,
                 </p>
                </div>
               </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
