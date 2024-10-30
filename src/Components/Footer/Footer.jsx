import React from 'react';
import Banner from "../../assets/footer.png";
import footerLogo from "../../assets/logo2.png";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';
import DarkMode from '../Navbar/DarkMode';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/blog", // Corrected link
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white mb-20 relative file: dark:bg-gray-800 '> {/* added 'relative' */}
      <div className='container'>
        <div 
        data-aos="zoom-in"
        className='grid md:grid-cols-3 pb-60 pt-5'>
          {/* Company Details */}
          <div className='py-8 px-4'> 
            <h1 className='sm:text-left text-justify mb-3 flex items-center gap-3 text-yellow-400'>
              <img src={footerLogo} alt='Shopsy Logo' className='max-w-[50px]' />
              Shopsy
            </h1>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Footer Links */}
          <div className='grid grid-cols-1 sm:grid-cols-2 col-span-1 md:pl-10'>
            <div>
              <div className='py-8 px-4'>
                <h1 className='font-bold sm:text-left text-justify mb-3 flex items-center text-yellow-400'>
                  Important Links
                </h1>
                <ul>
                  {
                    FooterLinks.map((link) => (
                      <li key={link.title} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                        <a href={link.link}>
                          {link.title}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div>
              <div className='py-8 px-10'>
                <h1 className='font-bold sm:text-left text-justify mb-3 flex items-center text-yellow-400'>
                   Links
                </h1>
                <ul>
                  {
                    FooterLinks.map((link) => (
                      <li key={link.title} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                        <a href={link.link}>
                          {link.title}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          {/* Social Links */}
           <div className=' py-8 px-5'> {/*ositioned right with mt-0  */}

            <div className='flex items-center gap-3'>
              <a href='#' aria-label="Instagram">
                <FaInstagram className="text-3xl" />
              </a>
              <a href='#' aria-label="Facebook">
                <FaFacebook className="text-3xl" />
              </a>
              <a href='#' aria-label="Linkedin">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            <div className='flex items-center gap-3 mt-3'>
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>
            </div>
            <div className='flex items-center gap-3 mt-3'>
                <FaMobileAlt />
                <p>+91 123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
