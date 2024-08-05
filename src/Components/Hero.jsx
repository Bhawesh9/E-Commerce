import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold">
          Beyond Ordinary <span className="text-white text-opacity-45">Fashion</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 mt-4 max-w-lg">
          Discover extraordinary fashion with unique, trend-defying designs for those who love to stand out.
        </p>
        <button className="mt-6 px-6 py-2 bg-zinc-500 text-white text-sm font-semibold rounded hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-400 transition duration-300">
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Hero;