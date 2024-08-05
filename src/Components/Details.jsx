import React from 'react'

const Details = () => {
  return (
    <div className='min-h-[570px] w-full bg-black pt-6 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex flex-col sm:flex-row items-center justify-evenly text-center sm:text-left space-y-4 sm:space-y-0'>
          <p className='font-bold text-lg sm:text-xl text-white'>CASUAL WEAR</p>
          <p className='font-bold text-lg sm:text-xl text-white'>- FORMAL ATTIRE</p>
          <p className='font-bold text-lg sm:text-xl text-white'>- SPORTSWARE</p>
        </div>

        <div className='flex flex-col sm:flex-row mt-4 items-center justify-center sm:justify-evenly text-center sm:text-left space-y-4 sm:space-y-0'>
          <p className='font-bold text-lg sm:text-xl text-white'>ACCESSORIES</p>
          <p className='font-bold text-lg sm:text-xl text-white'>- LATEST FASHION TRENDS</p>
        </div>
      </div>

      <div className='mt-4 text-center sm:text-left sm:ml-[20%] lg:ml-[30%]'>
        <p className='text-[10px] sm:text-xs text-white max-w-md'>
          Discover the finest selection of clothing at unbeatable prices. 
          We offer a wide range of high-quality apparel to suit every style
          and occasion. Experience the perfect blend of affordability and 
          excellence with our premium clothing collection.
        </p>
      </div>

      <div className='relative mt-8 sm:mt-16'>
        <div className='flex justify-center space-x-4 sm:space-x-8 text-white font-bold text-4xl sm:text-6xl opacity-40'>
          <h1>K</h1>
          <h1>W</h1>
          <h1>A</h1>
          <h1>A</h1>
          <h1>N</h1>
        </div>
         
        <div className='mt-8 text-center sm:text-right sm:mr-[5%] lg:mr-[10%]'>
          <p className='text-[10px] sm:text-xs text-white mb-4'>
            We offer a wide range of high-quality apparel to suit <br className='hidden sm:inline'/> every style and occasion.
          </p>
          <button className='text-sm bg-white text-black rounded-md text-center px-4 py-2'>
            Browse collection
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details