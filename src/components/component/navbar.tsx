"use client";


import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Link } from "react-scroll";

export const Navbar = () => {
    /* Aqui van todos los scripts */
    

    let [open,setOpen]= useState(false);

    return (
      <nav id="navbar">
        <div className="transition-all duration-500 shadow-md lg:shadow-none w-full left-0 right-0 top-0 fixed lg:top-5 lg:pr-52 lg:pl-52 z-40">
          <div className="md:flex items-center justify-between bg-black bg-opacity-15 py-4 md:px-10 px-2 backdrop-blur-sm">
            <a href="/">
              <div className="font-bold text-xl flex items-center cursor-pointer font-[Poppins]">
                <span className="text-white">JMO</span>
                {/* <span id="labs" className="text-white size-5 text-xs md:ml-0.5 mr-6 ">LAB&apos;s</span> */}
              </div> 
            </a>
            <div onClick={()=>setOpen(!open)} className="absolute right-4 top-3 cursor-pointer md:hidden">
              <img src={open ? 'close-outline.svg' : 'menu-outline.svg'} alt="" className="h-8 w-8 "/>
            </div>

            <ul className={`bg-black bg-opacity-50 md:flex md:items-center md:pb-0 pb-2 absolute md:static md:bg-opacity-0 md:z-50 z-[-1] lg:bg-opacity-0 font-mono 
              left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
              ${open ? 'top-16 opacity-100':'top-[-490px] opacity-0'} md:opacity-100`}> 

              <li className="md:ml-5 md:my-0 my-6 lg:ml-2"><Link to="jmo_arqui" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer relative lg:text-xs addDot">JMO ARQUITECTOS</Link></li>
              <li className="md:ml-5 md:my-0 my-6 lg:ml-2"><Link to="nosotros" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer relative lg:text-xs addDot">NOSOTROS</Link></li>
              <li className="md:ml-5 md:my-0 my-6 lg:ml-2"><Link to="casas" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer relative lg:text-xs addDot">CASAS</Link></li>
              <li className="md:ml-5 md:my-0 my-6 lg:ml-2"><Link to="contacto" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer relative lg:text-xs addDot">CONTACTO</Link></li>
              {/* <li className="md:ml-5 md:my-0 my-6 lg:ml-2"><a href="/gallery" className="text-white relative lg:text-xs addDot">GALERIA</a></li> */}
              <li className="md:ml-5 md:my-0 my-6 lg:ml-2"><a href="https://obra.jmoarquitectos.com/projects" className="text-white relative lg:text-xs addDot">PROYECTOS</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };


/*  let Links =[
      {name: "JMO ARQUITECTOS",link:"/"},
      {name: "NOSOTROS",link:"/"},
      {name: "CASAS",link:"/"},
      {name: "CONTACTO",link:"/"},  
      {name: "GALERIA",link:"/"},
    ];
              Links.map((link)=>(
                <li key={link.name} className="md:ml-5 md:my-0 my-6 lg:ml-2">
                  <a href={link.link} className="text-white relative lg:text-xs addDot">
                    {link.name}</a>
                </li>
              ))
            }
             */