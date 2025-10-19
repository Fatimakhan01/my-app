import React from "react";
import {ShoppingCart} from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  discount:string;
  brand:string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    price,
    discount,
    brand,
    image,
  }) => {
    return (
      <div className=' border border-[#ECECEC] rounded-lg shadow-md  p-4 '>
       
        <img
          src={image}
          alt={name}
          className='w-full  object-cover rounded'
        />
  
        <h3 className='mt-2 font-bold text-[#253D4E] text-Quicksand text-md'>{name}</h3>
        <p className='text-xs text-[#3BB77E]'> {brand}</p>
  
       
  <div className='flex items-center gap-2'>
    <span className='text-[#3BB77E] font-bold text-lg'>{price}</span>
    <span className='text-[#ADADAD] line-through text-sm'>{discount}</span>
  

  <button className='flex items-center gap-1 bg-[#DEF9EC]
   text-[#29A56C] rounded px-2 py-1 text-sm hover:bg-[#3BB77E] hover:text-white '>
    <ShoppingCart
     size={16} />
    Add
  </button>
  </div>
</div>
      
    );
  };
  
export default ProductCard
