import React from "react";

const SmallBannerCard = () => {
  return (
    <div className='w-full max-w-[75rem] mx-auto mt-16 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <img
          src='/SmallBanner1.png'
          alt='Banner 1'
          className='rounded-lg w-full object-cover'
        />
        <img
          src='/SmallBanner2.png'
          alt='Banner 2'
          className='rounded-lg w-full object-cover'
        />
        <img
          src='/SmallBanner3.png'
          alt='Banner 3'
          className='rounded-lg w-full object-cover'
        />
      </div>
    </div>
  );
};

export default SmallBannerCard;
