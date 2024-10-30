import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { FaCaretDown, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo2.png';
import DarkMode from './DarkMode';

const Menu = [ 
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Womens', link: '/womens' },
  { id: 3, name: 'Kids', link: '/kids' },
  { id: 4, name: 'Mens', link: '/mens' },
  { id: 5, name: 'Electronics', link: '/electronics' },
];

const DropdownLink = [
  { id: 1, name: 'Trending Product', link: '/' },
  { id: 2, name: 'Best Selling', link: '/best-selling' },
  { id: 3, name: 'Top Related', link: '/top-related' },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 duration-200 relative">
      {/* Upper Navbar */}
      <div className="bg-primary/40 dark:bg-gray-800 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 dark:text-white">
            <img src={logo} className="w-10 bg-color-transparent" alt="logo" />
            Shopsy
          </Link>

          {/* Search, Cart, and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[150px] sm:w-[150px] transition-all group-hover:w-[200px] duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-700 dark:text-white"
              />
              <MdSearch className="text-gray-500 group-hover:text-primary dark:text-gray-300 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order button */}
            <button
              onClick={handleOrderPopup}
              className="hidden sm:flex bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full items-center gap-3 group dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-600"
            >
              <span className="group-hover:block hidden">Order</span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Switch */}
            <DarkMode />

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden text-xl dark:text-white"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className={`sm:flex ${isMobileMenuOpen ? 'block' : 'hidden'} dark:bg-gray-800`}>
        <ul className="flex flex-col sm:flex-row justify-center items-center py-2"> {/* Added items-center for vertical centering */}
          {Menu.map((data) => (
           <li key={data.id}>
           <Link
            to={data.link}
               className="text-gray-700 dark:text-white inline-block px-4 py-2 w-full sm:w-auto hover:bg-primary dark:hover:bg-gray-600 duration-200"
            > 
          {data.name}
        </Link>
      </li>
    ))}

    {/* Dropdown for Trending */}
    <li className="group relative cursor-pointer">
      <div className="flex items-center gap-[2px] dark:text-white">
        Trending Products
        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
      </div>
      <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-gray-800 shadow-md p-2 rounded-md min-w-[200px] z-50">
        <ul className="flex flex-col gap-2">
          {DropdownLink.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
