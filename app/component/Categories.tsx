import React from 'react';
import { ChevronDown, Grid2x2, Flame,Headphones } from 'lucide-react';

interface CategoryProps {
    icon?: React.ReactNode;       
    label: string;                
    hasDropdown?: boolean;       
    active?: boolean;             
  }

  const NavButton: React.FC<CategoryProps> = ({ icon, label, hasDropdown = false, active = false }) => {
  return (
    <button
      className={`flex items-center gap-2 px-2 py-2 text-sm font-bold  whitespace-nowrap
        ${active ? 'bg-[#3BB77E] text-white' : 'text-[#253D4E]'}`}
    >
      {icon && <span className='flex items-center'>{icon}</span>}
      <span>{label}</span>
      {hasDropdown && <ChevronDown size={16} />}
    </button>
  );
};

const Categories = () => {

  const navItems = [
    { icon: <Flame size={18} className='text-[#3BB77E]' />, label: 'Hot Deals' },
    { label: 'Home', hasDropdown: true },
    { label: 'About' },
    { label: 'Shop', hasDropdown: true },
    { label: 'Mega Menu',hasDropdown: true},
    { label: 'Vendors',hasDropdown: true },
    { label: 'Blog',hasDropdown: true },
    { label: 'Pages', hasDropdown: true },
    { label: 'Contact', hasDropdown: true },
    
  ];

  return (
    <header className='w-full bg-white'>
      <div className='container mx-auto'>
      <div className=' h-[4.375rem] flex items-center  font-Quicksand'>
    
        <NavButton
          icon={<Grid2x2 size={22} className='text-white ' />}
          label='Browse All Categories'
          hasDropdown
          active
        />

        <div className='flex items-center gap-4.5'>
          {navItems.map((item, index) => (
            <NavButton
              key={index}
              icon={item.icon}
              label={item.label}
              hasDropdown={item.hasDropdown}
            />
          ))}
        </div>
        <div className='flex items-center gap-2'>
          <Headphones
           size={28} 
           className='text-[#253D4E]' />
          <div className='flex flex-col leading-tight'>
            <span className='text-[#3BB77E] font-bold text-lg'>1900888123</span>
            <span className='text-[#7E7E7E] text-xs'>24/7 Support Center</span>
          </div>
        </div>
      </div>
      </div>
    </header>
    
  )
}

export default Categories;
