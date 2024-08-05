import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? 'white' : '',
    backgroundColor: isActive ? 'black' : '',
    padding: isActive ? '5px' : '',
    borderRadius: isActive ? '10%' : '',
  });

  return (
    <div>
        <div className='w-full text-center bg-black text-white py-2 px-4'>
        <p className='text-xs font-semibold md:hidden'>GET 20% OFF ON FIRST MEMBERSHIP</p>
        <div className='hidden md:flex justify-between'>
          <p className='text-xs font-semibold'>GET 20% OFF ON FIRST MEMBERSHIP</p>
          <p className='text-xs font-semibold'>BOTH COD & ONLINE PAYMENT</p>
          <p className='text-xs font-semibold'>ENJOY FREE SHIPPING OVER RS.5000</p>
        </div>
      </div>

      <div className='h-16 w-full flex justify-between items-center px-4 md:px-8'>
        <div className='flex items-center'>
          <p className='text-2xl font-bold'>KWAAN.</p>
        </div>

        <div className='hidden md:block'>
          <ul className='font-normal text-sm flex gap-6'>
            <li>
              <NavLink to="/" style={navLinkStyles}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/men" style={navLinkStyles}>Men</NavLink>
            </li>
            <li>
              <NavLink to="/women" style={navLinkStyles}>Women</NavLink>
            </li>
            <li>
              <NavLink to="/kids" style={navLinkStyles}>Kids</NavLink>
            </li>
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex gap-4'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faHeartRegular} />
            <FontAwesomeIcon icon={faShoppingBag} />
          </div>
          <div className='hidden md:flex items-center'>
            <div className='h-[30px] border border-black flex rounded-md overflow-hidden'>
              <Link
                to="/login"
                className='bg-black text-white text-center text-xs flex items-center justify-center px-3'
              >
                LOG IN
              </Link>
              <Link
                to="/signup"
                className='text-xs text-center flex items-center justify-center px-3'
              >
                SIGN UP
              </Link>
            </div>
          </div>
          <button 
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden bg-white border-t py-4'>
          <ul className='font-normal text-sm flex flex-col items-center gap-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
