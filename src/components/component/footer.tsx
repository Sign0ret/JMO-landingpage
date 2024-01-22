import React from "react";
import { ItemsContainer } from "./itemsContainer";


export const Footer = () => {
    
    return (
      <footer className="text-black bg-gray-200">
        
        <ItemsContainer/>
        <div className="flex lg:justify-end justify-center px-16 py-2">
          <img className="w-14 h-14 mx-3 rounded-full cursor-pointer p-2 hover:bg-gray-300 duration-300" src="/logo-facebook.svg" alt="Logo" />
          <img className="w-14 h-14 mx-3 rounded-full cursor-pointer p-2 hover:bg-gray-300 duration-300" src="/logo-instagram.svg" alt="Logo" />
          <img className="w-14 h-14 mx-3 rounded-full cursor-pointer p-2 hover:bg-gray-300 duration-300" src="/logo-youtube.svg" alt="Logo" />
          <img className="w-14 h-14 mx-3 rounded-full cursor-pointer p-2 hover:bg-gray-300 duration-300" src="/logo-linkedin.svg" alt="Logo" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 text-center pt-2 text-gray-500 text-sm pb-7 border-t border-gray-400 mx-16">
          <span className="lg:text-left md:text-center">©2024 APPY. ALL RIGHTS RESERVED.</span>
          <span className="lg:text-right md:text-center">WEBSITE BY <span className="">2-BIT</span></span>
          
        </div>
      </footer>
      
    );
  };
  