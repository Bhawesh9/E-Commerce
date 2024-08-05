import React from 'react';
import Popularproducts from './Popularproducts';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Men = () => {
  const products = [
    { img: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8emFyYSUyMGNsb3RoaW5nfGVufDB8fDB8fHwwg", name: "ZARA Mens Shirt", price: "$42.50" },
    { img: "/Img2.png", name: "Men Oversized Boxy Bonded Scuba Bomber Jacket", price: "$2.50" },
    { img: "/Img1.png", name: "ZARA Mens Shorts", price: "$2.50" },
    { img: "https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D", name: "Men Full Vest", price: "$2.50" },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className='mt-8 flex items-center gap-[950px]'>
        <p className='text-xl font-bold'>New Arrivals</p>

        <div>
        <div className='hidden md:block'>
          <ul className='font-normal text-sm flex gap-6'>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? 'white' : '',
                  backgroundColor: isActive ? 'black' : '',
                  padding: isActive ? '5px' : '',
                  borderRadius: isActive ? "10%" : "",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/men"
                style={({ isActive }) => ({
                  color: isActive ? 'white' : '',
                  backgroundColor: isActive ? 'black' : '',
                  padding: isActive ? '5px' : '',
                  borderRadius: isActive ? "10%" : "",
                })}
              >
                Men
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/women"
                style={({ isActive }) => ({
                  color: isActive ? 'white' : '',
                  backgroundColor: isActive ? 'black' : '',
                  padding: isActive ? '5px' : '',
                  borderRadius: isActive ? "10%" : "",
                })}
              >
                Women
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/kids"
                style={({ isActive }) => ({
                  color: isActive ? 'white' : '',
                  backgroundColor: isActive ? 'black' : '',
                  padding: isActive ? '5px' : '',
                  borderRadius: isActive ? "10%" : "",
                })}
              >
                Kids
              </NavLink>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
        {products.map((product, index) => (
          <div key={index} className='bg-zinc-300'>
            <div className='aspect-w-3 aspect-h-4'>
              <img src={product.img} alt='' className='object-cover w-full h-full' />
            </div>
            <div className='p-4'>
              <p className='text-sm mt-2'>{product.name}</p>
              <p className='font-semibold text-sm mt-2'>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-16 sm:mt-24 text-center opacity-85'>
        <p className='text-sm'>We offer a wide range of high-quality apparel to suit every style and occasion.</p>
        <button className='mt-4 text-sm font-semibold p-2 px-4 rounded-md text-white bg-slate-900 hover:bg-slate-700 transition duration-300'>
          Browse All Collections
        </button>
      </div>

      <div className='mt-10'>
        <Popularproducts />
      </div>

      <div className='mt-10'>
        <Footer/>
      </div>
    </div>
    
  );
};

export default Men;