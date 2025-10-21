import React from "react";
import { ShoppingCart } from "lucide-react";
const DealCard = () => {
  const deals = [
    {
      id: 1,
      title: "Organic Cage Grade A Large Eggs",
      brand: "By Hambger Hel",
      price: "$21.00",
      discount: "$55.00",
      image: "/Deal1.png",
    },
    {
      id: 2,
      title: "Naturally Flavoured Cinnamon Vanilla",
      brand: "By Hambger Hel",
      price: "$51.00",
      discount: "$55.00",
      image: "/Deal2.png",
    },
    {
      id: 3,
      title: "Seeds Of Change Organic Watermelon",
      brand: "By Hambger Hel",
      price: "$61.50",
      discount: "$66.00",
      image: "/Deal3.png",
    },
    {
      id: 4,
      title: "Nestle Coffee Mate Coffee Creamer",
      brand: "By Totino's Pizza",
      price: "$52.80",
      discount: "$53.80",
      image: "/Deal4.png",
    },
  ];

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {deals.map((deal) => (
          <div
            key={deal.id}
            className=' relative border border-[#ECECEC] rounded 
             shadow-md  transition'
          >
            <img 
            src={deal.image}
            alt={deal.title}
            className="object-cover"
             />

            <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-[94%] 
                bg-white rounded-2xl p-4 shadow-lg'>
              <h3 className='font-semibold text-[#253D4E] text-sm'>
                {deal.title}
              </h3>
              <p className='text-[#3BB77E] text-xs '>{deal.brand}</p>
              <div className='flex items-center gap-2 mt-2'>
                <span className='text-[#3BB77E] font-bold'>{deal.price}</span>
                <span className='text-gray-400 line-through text-sm'>
                  {deal.discount}
                </span>
                <button className='flex items-center bg-[#DEF9EC]
                  text-[#29A56C] rounded px-2 py-1 text-sm hover:bg-[#3BB77E] hover:text-white '>
                      <ShoppingCart
                        size={16}/>
                        Add
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealCard;
