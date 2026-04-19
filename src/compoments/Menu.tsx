"use client";
import React, { useState } from 'react';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('PROFILE');
  
  const menuItems = ['PROFILE', 'SERVICES', 'WORKS', 'NOTES', 'EXPERIENCE'];

  return (
    <nav className="sticky top-6 mr-5 ml-5 z-50 flex justify-between items-center py-6 px-6 max-w-full font-['Montserrat',sans-serif]
      bg-white/20 
      backdrop-blur-xl 
      rounded-2xl 
      border border-white/50 
      shadow-[0_15px_35px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_4px_15px_rgba(255,255,255,0.6)]
      transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(255,255,255,0.5),inset_0_4px_20px_rgba(255,255,255,0.8)]
    ">
      
      {/* Logo */}
      <div className="font-['Caveat',cursive] text-4xl font-semibold text-[#1c3240] tracking-wide cursor-pointer drop-shadow-sm">
        Binjan
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex items-center gap-10 m-0 p-0 list-none">
        {menuItems.map((item) => (
          <li key={item} className="flex items-center">
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(item);
              }}
              className={`text-xs font-bold tracking-[0.5px] transition-all duration-300 flex items-center gap-1.5 drop-shadow-sm
                ${activeMenu === item ? 'text-[#2D786D]' : 'text-[#4A555A] hover:text-[#2D786D] hover:-translate-y-0.5'}
              `}
            >
              {activeMenu === item && <span className="font-normal text-lg mb-0.5 text-[#2D786D] drop-shadow-md">[</span>}
              {item}
              {activeMenu === item && <span className="font-normal text-lg mb-0.5 text-[#2D786D] drop-shadow-md">]</span>}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact Section */}
      <div className="flex items-center gap-5">
        <span className="text-sm font-bold text-[#1c3240] hidden sm:block drop-shadow-sm">
          +84 (358) 179 329
        </span>
        
        {/* Nút bấm Neumorphism / 3D Glow */}
        <button className="relative flex justify-center items-center w-11 h-11 bg-white/40 backdrop-blur-md rounded-full border border-white/60 text-[#2D786D] 
          shadow-[0_5px_15px_rgba(0,0,0,0.05),inset_0_2px_5px_rgba(255,255,255,0.8)] 
          transition-all duration-300 hover:scale-105 hover:bg-white/60 hover:shadow-[0_8px_20px_rgba(45,120,109,0.2),inset_0_2px_5px_rgba(255,255,255,1)]">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 drop-shadow-sm">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
        </button>
      </div>

    </nav>
  );
};

export default Menu;