import React from 'react';
import Image from 'next/image';
import { ArrowRight,RefreshCcw, Heart,ShoppingCart,User } from 'lucide-react';

const Navbar = () => {
  return (
  <header className='w-full border-b border-[#DEDFE2] bg-white'>
    <div className='max-w-[75rem] mx-auto h-[6.3rem]  flex items-center justify-between font-Lato gap-2'>
        <div className='flex items-center gap-6 w-full'>
     <img
     src='/Nest.png'
     alt='logo'
     />
      
      <form className='flex border border-[#BCE3C9] text-sm rounded w-full max-w-md '>
  <input
    type='text'
    placeholder='Search for products..'
    className='flex-1 h-[2.6rem] px-3 outline-none text-[#999999]'
  />
  <button className='bg-[#3BB77E] text-[#FFFFFF] px-4 m-1 rounded  '>
    Search
  </button>
</form>

    <button className='flex items-center gap-1  px-4 py-2 rounded text-sm
     bg-[#FFFFFF] text-[#3BB77E] border border-[#ECECEC] shadow-md hover:shadow-lg transition whitespace-nowrap'>
  Became Vendor
  <ArrowRight 
  size={20}
  className='text-[#3BB77E]' />
</button>
</div>

 <nav className='flex items-center gap-4 font-Lato text-sm text-[#7E7E7E]'>
   <button className='relative flex items-center gap-1'>
     <div className='relative'>
      <RefreshCcw 
      size={22} 
      className='text-[#253D4E]' />
      <span className='absolute -top-2 -right-2 bg-[#3BB77E] text-white
       text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>
       0
      </span>
     </div>
      <span>Compare</span>
    </button>

   <button className=' relative flex items-center gap-1'>
    <div className='relative'>
    <Heart
     size={22}
     className='text-[#253D4E]' />
     <span className='absolute -top-2 -right-2 bg-[#3BB77E] text-white
     text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>
      0
     </span>
     </div>
    <span>Wishlist</span>
   </button>

   <button className=' relative flex items-center gap-1'>
    <div className='relative'>
    <ShoppingCart 
    size={22} 
    className='text-[#253D4E]' />
    <span className='absolute -top-2 -right-2 bg-[#3BB77E] text-white
     text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>
      0
     </span>
    </div>
    <span>Cart</span>
   </button>

   <button className=' relative flex items-center gap-1'>
    <div className='relative'>
    <User
     size={22}
     className='text-[#253D4E]' />
     <span className='absolute -top-2 -right-2 bg-[#3BB77E] text-white
     text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>
      0
     </span>
     </div>
    <span>Account</span>
   </button>

 </nav>
   </div>
    </header>
  )
}

export default Navbar
