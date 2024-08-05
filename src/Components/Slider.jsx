import React, { useState } from 'react';

const Slider = ({ images, name, detail }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="mb-2 text-xl sm:text-2xl">
          <span className="text-black">&#9733;</span>
          <span className="text-black">&#9733;</span>
          <span className="text-black">&#9733;</span>
          <span className="text-black">&#9733;</span>
          <span className="text-black">&#9733;</span>
        </div>
        <p className="text-sm sm:text-base">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
          enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,
          eros dolor interdum nulla, ut commodo diam libero vitae erat."
        </p>
      </div>
      
      <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative'>
        <button
          className="absolute left-0 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-4 rounded-full hover:bg-opacity-75 focus:outline-none z-10"
          onClick={goToPreviousSlide}
          style={{ top: '50%' }}
        >
          &#10094;
        </button>
        
        <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-full bg-blue-900 overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`slide ${currentIndex}`}
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="text-center sm:text-left">
          <p className='text-sm font-semibold'>
            {name}
          </p>
          <p className='text-xs sm:text-sm mt-1'>
            {detail}
          </p>
        </div>
        
        <button
          className="absolute right-0 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-4 rounded-full hover:bg-opacity-75 focus:outline-none z-10"
          onClick={goToNextSlide}
          style={{ top: '50%' }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
