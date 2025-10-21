import React from 'react';
import { ChevronDown } from 'lucide-react';


const NavbarTop = () => {
  return (
    <header className='w-full border-b border-[#DEDFE2] bg-white'>
      <div className='container mx-auto'>
  <div className=' px-4 h-[2.5625rem] flex items-center 
  justify-between text-sm font-Lato'>

      <nav>
          <ul className='flex items-center space-x-2 text-[#7E7E7E] '>
            <li>About Us</li>
            <span className='w-px h-2.5 bg-[#DEDFE2]' />
            <li>My Account</li>
            <span className='w-px h-2.5 bg-[#DEDFE2]' />
            <li>Wishlist</li>
            <span className='w-px h-2.5 bg-[#DEDFE2]' />
            <li>Order Tracking</li>
          </ul>
       </nav>

      <p className='text-[#3BB77E] text-md font-bold mt-2 md:mt-0'>
        100% Secure delivery without contacting the courier
      </p>

      <div className=' flex items-center space-x-2 text-[#7E7E7E]'>
        <span> Need help? Call Us:</span>
        <span className='text-[#3BB77E] font-semibold'>+1800900122</span>
        <span className='w-px h-2.5 bg-[#DEDFE2]'></span>
         <button className='flex items-center gap-1'>
            English <ChevronDown size={14} />
         </button>
        <span className='w-px h-2.5 bg-[#DEDFE2]' />
         <button className='flex items-center gap-1'>
            INR <ChevronDown size={14} />
         </button>
      </div>
    </div>
    </div>
    </header>
    
  )

  }
export default NavbarTop
