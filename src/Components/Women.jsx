import React from 'react'
import PopularproductsWomens from './PopularproductsWomens'
import Footer from './Footer'
import { NavLink } from'react-router-dom'

const Women = () => {
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
        {[
          {
            src: "https://static.zara.net/assets/public/f642/0ae4/d0bb4fe48552/398d90a2a2fe/06164053427-e1/06164053427-e1.jpg?ts=1719313988396&w=315",
            title: "Z1975 HIGH-RISE STRAIGHT JEANS",
            price: "$42.50"
          },
          {
            src: "https://static.zara.net/assets/public/83f6/7e30/f7bf40ab986b/8017d16cc082/04387096390-e1/04387096390-e1.jpg?ts=1706702358336&w=315",
            title: "BASIC POPLIN SHIRT",
            price: "$2.50"
          },
          {
            src: "https://static.zara.net/assets/public/eb22/4242/dab64f7e8ca1/8fa06f05731d/06147125427-e1/06147125427-e1.jpg?ts=1720525286514&w=315",
            title: "Z1975 DENIM HALTER JUMPSUIT",
            price: "$2.50"
          },
          {
            src: "https://static.zara.net/assets/public/e1a4/dc2e/58e24bcc8301/8b6186275031/1676463923930/1676463923930.jpg?ts=1702144112280&w=315",
            title: "LEATHER EFFECT CROPPED BIKER JACK",
            price: "$2.50"
          }
        ].map((item, index) => (
          <div key={index} className='bg-zinc-300'>
            <div className='aspect-w-3 aspect-h-4'>
              <img src={item.src} alt='' className='object-cover w-full h-full' />
            </div>
            <div className='p-4'>
              <p className='text-sm mt-3'>{item.title}</p>
              <p className='font-semibold text-sm mt-3'>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-24 text-center opacity-85'>
        <p className='text-sm'>We offer a wide range of high-quality apparel to suit every style and occasion.</p>
        <button className='mt-3 text-sm font-semibold p-2 px-4 rounded-md text-white bg-slate-900'>Browse All Collections</button>
      </div>

      <div className='mt-10'>
        <PopularproductsWomens/>
      </div>
       
      <div className='mt-10'>
        <Footer/>
      </div>
    </div>
  )
}

export default Women