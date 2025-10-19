import React from 'react';
import {MapPin, Headphones, Mail, Clock} from 'lucide-react';

const Footer = () => {
  return (
    <footer className='w-full bg-white text-[#253D4E] text-sm '>
      <div className=' max-w-[75rem] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        <div>
            <img
            src='/Nest.png'
            alt='logo'
            />
            <ul className='space-y-2   mt-7'>
            <li className='flex items-center gap-2'>
                <MapPin size={34} className='text-[#3BB77E]'/>
                Address 5171 W Campbell Ave undefined Kent Utah 531275 United State
            </li>
            <li className='flex items-center gap-2'>
                <Headphones size={18} className='text-[#3BB77E]'/>
                 Call us<li className='text-[#3BB77E]'> (+91)-540-025-124553</li>
            </li>
            <li className='flex items-center gap-2'>
                <Mail size={18} className='text-[#3BB77E]'/>
                Email <li className='text-[#3BB77E]'>sale@Nest.com</li>
            </li>
            <li className='flex items-center gap-2'>
                <Clock size={18} className='text-[#3BB77E]'/>
                Hours 10:00-18:00, Mon-Sat
            </li>
          </ul>

        </div>
        <div>
          <h3 className='font-bold text-lg mb-4'>Company</h3>
          <ul className='space-y-4  '>
            <li>Abbout Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Term & Conditions</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-lg mb-4'>Account</h3>
          <ul className='space-y-4  '>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track my Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details </li>
            <li>Compare Products</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-lg mb-4'>Corporate</h3>
          <ul className='space-y-4  '>
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Farm Business</li>
            <li>Farm Careers</li>
            <li>Our Suppliers</li>
            <li>Accessibility</li>
            <li>Promotions</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-lg mb-4'>Popular</h3>
          <ul className='space-y-4  '>
            <li>Milk & Flavoured Milk</li>
            <li>Butter & Margarine</li>
            <li>Egg Substitutes</li>
            <li>Marmalades</li>
            <li>Sour cream & Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-lg mb-4'>Install App</h3>
          <ul className='space-y-4  '>
            <li className='text-[#7E7E7E]'>From App Store or Google Play</li>
           <img
           src='/InstallApp.png'
           alt='Appstore'
           />
            <li className='text-[#253D4E]'>Secured Payment Gateways</li>
            <img
            src='/CreditCards.png'
            alt='Cards'
            />
          </ul>
        </div>





      </div>
    </footer>
  )
}

export default Footer
