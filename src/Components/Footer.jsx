import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4'>
          <div className='w-full sm:w-auto text-center sm:text-left'>
            <h1 className='font-bold text-xl text-white'>KWAAN.</h1>
          </div>
          <div className='w-full sm:w-auto'>
            <ul className='text-white flex flex-wrap justify-center sm:justify-start gap-3 text-sm'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>X</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className="social-icons flex justify-center sm:justify-start gap-4 text-white">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              {/* Replace the below div with the actual icon when available */}
              <div>X</div>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </a>
          </div>
        </div>

        <div className='mt-12 sm:mt-16 pt-4 border-zinc-500 border-t-2'>
          <div className='flex flex-wrap justify-center gap-4 text-xs text-white'>
            <p><u>2024 Kwaan. All rights reserved.</u></p>
            <p><u>Privacy Policy</u></p>
            <p><u>Terms of Service</u></p>
            <p><u>Cookies Settings</u></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer