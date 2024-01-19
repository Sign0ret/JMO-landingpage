"use client";

import { Link } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
    /* Aqui van todos los scripts */
    
    let Links =[
      {name: "JMO ARQUITECTOS",link:"/"},
      {name: "NOSOTROS",link:"/"},
      {name: "CASAS",link:"/"},
      {name: "CONTACTO",link:"/"},  
    ];

    let [open,setOpen]= useState(false);

    return (
    
      <div className="transition-all duration-500 shadow-md lg:shadow-none w-full left-0 right-0 top-0 fixed lg:top-5 lg:pr-52 lg:pl-52">
        <div className="md:flex items-center justify-between bg-black bg-opacity-15 py-4 md:px-10 px-2 backdrop-blur-sm">
          <div className="font-bold text-xl flex items-center cursor-pointer font-[Poppins]">
            {/* <img
              src="architectural.png"
              alt="Logo"
              className="h-7 w-auto mr-2 ml-1"  // Puedes ajustar la altura (h-7) según tus necesidades
            /> */}
            <span className="text-white lg:text-">ARQUITECTOS</span>
            <span id="labs" className="text-white size-5 text-xs md:ml-0.5 mr-6 ">LAB&apos;s</span>
          </div> 
 
          <div onClick={()=>setOpen(!open)} className="absolute right-4 top-3 cursor-pointer md:hidden">
            <img src={open ? 'close-outline.svg' : 'menu-outline.svg'} alt="" className="h-8 w-8"/>
          </div>

          <ul className={`bg-black bg-opacity-15 md:flex md:items-center md:pb-0 pb-2 absolute md:static md:bg-opacity-0 md:z-auto z-[-1] lg:bg-opacity-0 font-mono 
            left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
            ${open ? 'top-16 opacity-100':'top-[-490px] opacity-0'} md:opacity-100`}> 
            {
              Links.map((link)=>(
                <li key={link.name} className="md:ml-5 md:my-0 my-6 lg:ml-2">
                  <a href={link.link} className="text-white hover:text-gray-600 transition-all duration-500 group relative lg:text-xs">
                    <span className="hidden group-hover:block w-2 h-2 rounded-full bg-non bg-opacity-40"></span>
                    {link.name}</a>
                </li>
              ))
            }
            
          </ul>
        </div>
      </div>
      
    );
  };


