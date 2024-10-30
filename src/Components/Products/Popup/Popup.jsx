import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          {/* Overlay */}
          <div 
            className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={() => setOrderPopup(false)}
            aria-hidden="true"
          ></div>

          {/* Popup Content */}
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            aria-modal="true"
            role="dialog"
          >
            <div className="relative p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-black font-semibold">Order Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer text-black"
                  onClick={() => setOrderPopup(false)}
                  aria-label="Close Popup"
                />
              </div>

              {/* Form Section */}
              <div className='text-black'>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                  <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                  <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <div className='flex justify-center'>
                  <button 
                    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                     Order Now
                  </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
