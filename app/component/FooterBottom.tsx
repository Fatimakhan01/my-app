import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaSkype } from "react-icons/fa";
import { Phone } from "lucide-react";

const FooterBanner = () => {
  return (
    <footer className="bg-white border-t border-[#BCE3C9] p-9 mt-15">
      <div
        className="max-w-[75rem] mx-auto flex flex-col md:flex-row items-center 
      justify-between gap-4 px-6  text-[#253D4E]"
      >
        <p className="text-center text-[#7E7E7E]">
          © 2022,Nest - Ecommerce Template All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <span className="flex flex-col items-center text-center">
            <span className="flex items-center gap-1">
              <Phone size={18} className="text-[#7E7E7E]" />
              <span className="text-[#3BB77E] font-bold">1900646666</span>
            </span>
            <span className="text-xs text-[#7E7E7E]">Working 8:00-22:00</span>
          </span>

          <span className="flex flex-col items-center text-center">
            <span className="flex items-center gap-1">
              <Phone size={18} className="text-[#7E7E7E]" />
              <span className="text-[#3BB77E] font-bold">1900648888</span>
            </span>
            <span className="text-xs text-[#7E7E7E]">24/7 Support Center</span>
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 ">
            <span className="font-semibold text-[#253D4E]">Follow Us</span>
            <a href="#">
              <FaFacebookF
                size={22}
                className="bg-[#3BB77E] text-white rounded-full p-1"
              />
            </a>
            <a href="#">
              <FaTwitter
                size={22}
                className="bg-[#3BB77E] text-white rounded-full p-1"
              />
            </a>
            <a href="#">
              <FaSkype
                size={22}
                className="bg-[#3BB77E] text-white rounded-full p-1"
              />
            </a>
            <a href="#">
              <FaInstagram
                size={22}
                className="bg-[#3BB77E] text-white rounded-full p-1"
              />
            </a>
          </div>
          <p className="text-[#7E7E7E] text-sm mt-1">
            Up to 15% discount on your first subscribe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBanner;
