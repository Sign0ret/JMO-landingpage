import React from "react";
import { ItemsContainer } from "./itemsContainer";


export const Footer = () => {
    
    return (
      <footer className="text-white bg-gray-900 ">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-teal-400 ">Free</span> until you&apos;re ready to launch
          </h1>
          <div>
            <input type="text" placeholder="Enter Your ph.no" className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none" />
            <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
              Enviar
            </button>
          </div>
        </div>
        <ItemsContainer/>
        <div className="flex lg:justify-end justify-center px-16 py-2">
          <img className="w-14 h-14 mx-3 rounded-full cursor-pointer p-2 hover:bg-gray-800 duration-300" src="/logo-facebook.svg" alt="Logo" />
          <img className="w-14 h-14 mx-3 rounded-full cursor-pointer p-2 hover:bg-gray-800 duration-300" src="/logo-instagram.svg" alt="Logo" />
          <img className="w-14 h-14 mx-3 rounded-full cursor-pointer p-2 hover:bg-gray-800 duration-300" src="/logo-youtube.svg" alt="Logo" />
          <img className="w-14 h-14 mx-3 rounded-full cursor-pointer p-2 hover:bg-gray-800 duration-300" src="/logo-linkedin.svg" alt="Logo" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 text-center pt-2 text-gray-400 text-sm pb-7 border-t border-gray-600 mx-16">
          <span className="lg:text-left md:text-center">©2024 APPY. ALL RIGHTS RESERVED.</span>
          <span className="lg:text-right md:text-center">WEBSITE BY 4-BITS
            
          </span>
          
        </div>
      </footer>
      
    );
  };
  