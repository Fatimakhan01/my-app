import React from 'react';
import NavbarTop from './component/NavbarTop'; 
import Navbar from './component/Navbar';
import Categories from './component/Categories';
import Banner from './component/Banner';
import Products from './component/Products';
import SmallBannerCard from './component/SmallBannerCard';
import Features from './component/Features';
import Footer from './component/Footer';
import FooterBottom from './component/FooterBottom';


const Page = () => {
  return (
    <div>
      <NavbarTop /> 
      <Navbar/>
      <Categories/>
      <Banner/>
      <Products/>
      <SmallBannerCard/>
      <Features/>
      <Footer/>
      <FooterBottom/>
    </div>
  );
};

export default Page;
