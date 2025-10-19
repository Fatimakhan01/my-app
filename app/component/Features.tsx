import React from "react";
import { Tag, Truck, BadgePercent, Boxes, RefreshCcw } from "lucide-react";


const features = [
  {
    id: 1,
    icon:<Tag className="text-[#3BB77E]"/>,
    title: "Best Price & Offers",
    description: "Orders $50 or more",
  },
  {
    id: 2,
    icon:<Truck className="text-[#3BB77E]"/>,
    title: "Free Delivery",
    description: "24/7 amazing services",
  },
  {
    id: 3,
    icon:<BadgePercent className="text-[#3BB77E]"/>,
    title: "Great Daily Deal",
    description: "When you sign up",
  },
  {
    id: 4,
    icon:<Boxes className="text-[#3BB77E]"/>,
    title: "Wide Assortment",
    description: "Mega discounts",
  },
  {
    id: 5,
    icon:<RefreshCcw className="text-[#3BB77E]"/>,
    title: "Easy Returns",
    description: "Within 30 days",
  },
];

const Features = () => {
  return (
    <section className='w-full bg-white py-10'>
      <div className='max-w-[75rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-5 gap-6 px-4'>
        {features.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-center justify-center text-center
             p-4 border border-[#ECECEC] bg-[#F4F6FA] rounded shadow-sm '
          >
            <div className='mb-3'>
                {item.icon}
            </div>
            <h3 className=' text-[#242424] '>
              {item.title}
            </h3>
            <p className='text-sm text-[#ADADAD]'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
