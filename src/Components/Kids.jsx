import React from 'react'
import PopularproductsKids from './PopularproductsKids'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Kids = () => {
  const products = [
    {
      img: "https://static.zara.net/assets/public/1a92/71ae/52f645748ecb/5ad3a494ac66/05350566500-e1/05350566500-e1.jpg?ts=1720524849316&w=315",
      name: "T-SHIRT WITH POCKET AND BERMUDA SHORTS CO-ORD",
      price: "$42.50"
    },
    {
      img: "https://static.zara.net/assets/public/992e/6d69/255b494497df/2d87636ed4dd/03854770807-e1/03854770807-e1.jpg?ts=1719471687521&w=315",
      name: "RAISED SLOGAN T-SHIRT AND BERMUDA SHORTS",
      price: "$2.50"
    },
    {
      img: "https://static.zara.net/assets/public/6a74/0841/25054f5896a1/ae09d65830dd/06887661250-e1/06887661250-e1.jpg?ts=1706717619533&w=315",
      name: "LINEN-BLEND SHIRT",
      price: "$2.50"
    },
    {
      img: "https://static.zara.net/assets/public/674d/18ae/804548aea6d0/9b5551aad107/00962704600-e1/00962704600-e1.jpg?ts=1718093432327&w=315",
      name: "PARIS NUMBER T-SHIRT",
      price: "$2.50"
    }
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
              <img src={product.img} alt={product.name} className='object-cover w-full h-full' />
            </div>
            <div className='p-4'>
              <p className='text-sm mt-2'>{product.name}</p>
              <p className='font-semibold text-sm mt-2'>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-16 sm:mt-24 text-center'>
        <p className='text-sm opacity-85'>We offer a wide range of high-quality apparel to suit every style and occasion.</p>
        <button className='mt-4 text-sm font-semibold p-2 px-4 rounded-md text-white bg-slate-900 hover:bg-slate-700 transition duration-300'>
          Browse All Collections
        </button>
      </div>

      <div className='mt-10'>
        <PopularproductsKids />
      </div>
      <div className='mt-10'>
        <Footer/>
      </div>
    </div>
  )
}

export default Kids