'use client';
import React from 'react'
import { Link } from "react-scroll";

export default function Contact() {
  return (
    
    <div className='relative z-[-2] h-screen text-myWhite max-w-2/3'>
        {/* <img src="maqueta.webp" alt="maqueta" className='object-cover w-full h-full absolute inset-0'/> */}
        <div id='text' className='flex-row absolute text-5xl lg:text-9xl text-myWhite font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center justify-center'>
          <Link to="jmo_arqui" spy={true} smooth={true} offset={50} duration={500}  className=" cursor-pointer ">Contáctanos</Link>
          <p className='text-base'>ahora mismo</p>
        </div>
    </div>
  )
}



