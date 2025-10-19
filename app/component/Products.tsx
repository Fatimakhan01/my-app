import React from 'react';
import ProductCard from './ProductCard';
import DealCard from "./DealCard"


const products =[
    {id:1,
    name:"Seeds of Change Organic Red Rice",
    price:"$28.85" ,
    discount:"$55.80",
    brand:"By NestFood",
    image:"/product1.png"},
    {id:2,
    name:"All natural Style Chicken Meatballs",
    price:"$52.85",
    discount:"$55.80",
    brand:"By NestFood",
    image:"/product2.png"},
    {id:3,
    name:"Angie's Sweet & Salty Kettle Corn",
    price:"$48.85" ,
    discount:"$52.80",
    brand:"By Country Crock",
    image:"/product3.png"},
    {id:4,
    name:"Foster Forma Takeout Crispy Classic",
    price:"$17.85",
    discount:"$19.80",
    brand:"By Country Crock",
    image:"/product4.png"},
    {id:5,
    name:"Blue Almonds Lightly Salted Vegetables",
    price:"$23.85",
    discount:"$25.80",
    brand:"By Country Crock",
    image:"/product5.png"},
    {id:6,
    name:"Chobani Complete Vanilla Greek Yogurt",
    price:"$54.85",
    discount:"$55.80",
    brand:"By Country Crock",
    image:"/product6.png"},
    {id:7,
    name:"Haagen Caramel Cone Ice Cream Boxed",
    price:"$22.85" ,
    discount:"$24.80",
    brand:"By Hambger Hel",
    image:"/product7.png"},
    {id:8,
    name:"Gorton's Beer Battered Fish Fillets",
    price:"$23.85" ,
    discount:"$25.80",
    brand:"By Hambger Hel",
    image:"/product8.png"},
    {id:9,
    name:"Encore Seafoods Stuffed Alaskan",
    price:"$35.85" ,
    discount:"$37.80",
    brand:"By Hambger Hel",
    image:"/product9.png"},
    {id:10,
    name:"Canada Dry Ginger Ale- 2 l Bottle",
    price:"$32.85" ,
    discount:"$33.80",
    brand:"By Hambger Hel",
    image:"/product10.png"},
    {id:11,
    name:"Extra virgin olive oil,canola oil,nonfat",
    price:"$58.00" ,
    discount:"$60.00",
    brand:"By Totino's Pizza",
    image:"/product11.png"},
    {id:12,
    name:"Frozen vegetables broccoli,spinach",
    price:"$71.00" ,
    discount:"$75.00",
    brand:"By Totino's Pizza",
    image:"/product12.png"},
    {id:13,
      name:"Frozen fruit strawberry,berries",
      price:"$78.00" ,
      discount:"$98.00",
      brand:"By Maruchan Ramen",
      image:"/product13.png"},
    {id:14,
    name:"Pre-portioned,low-fat icecream yogurt",
    price:"$79.00" ,
    discount:"$99.00",
    brand:"By Maruchan Ramen",
    image:"/product14.png"},
    {id:15,
    name:"Dried fruit:apricots,figs",
    price:"$56.00" ,
    discount:"$76.00",
    brand:"By USA Noodle Soup",
    image:"/product15.png"},

]

const categories = [
  "Baking Material",
  "Bread & Juice",
  "Clothing & Beauty",
  "Deals of the Day",
  "Fresh Fruit",
  "Fresh Seafood",
  "Milk & Dairies",
  "Pet Foods & Toy",
  "Vegetables",
  "Wines & Drinks",
  "Uncategorized",
];
const Products = () => {
  return (
   
    <section className='w-full max-w-[75rem] mx-auto  flex gap-6 items-start'>
      <div className='flex-1'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold text-[#253D4E]'>
          Popular Products
        </h2>

        <div className='flex items-center gap-6 text-sm p-2 text-[#253D4E]'>
          <button className='text-[#3BB77E] border-b-2 border-[#3BB77E]'>All</button>
          <button>Baking Material</button>
          <button>Fresh Fruits</button>
          <button>Milk & Dairies</button>
          <button>Meats</button>
          <button>Vegetables</button>
        </div>
      </div>
      <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>

        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
       </div>
       <div className='mt-9'>
  <h2 className='text-xl font-bold text-[#253D4E] mb-4'>Deals of the Day</h2>
  <DealCard />
</div>
        </div>
        <aside className='w-[16rem] bg-white shadow-xl p-5 rounded'>
        <h2 className='font-bold text-lg mb-3 text-[#253D4E] border-b border-[#BCE3C9] pb-2'>
          Category
        </h2>

        <div className='flex flex-col gap-2'>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className='text-[#253D4E] border border-[#F2F3F4] py-2 px-3 rounded hover:bg-[#F2F3F4] transition'
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>
     
    </section>
     
    
  )
}

export default Products
