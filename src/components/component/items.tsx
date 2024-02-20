"use client";
import React from 'react'
import { Link } from "react-scroll"

export const Items = () => {

  return (
    
    <ul className='text-myWhite max-w-fit grid grid-cols-1 sm:grid-cols-2 text-right'>
        <li className='addDot cursor-pointer hover:text-myBone duration-300 max-w-fit'> <Link to="jmo_arqui" spy={true} smooth={true} offset={50} duration={500} >JMO ARQUITECTOS</Link> </li>
        <li className='addDot cursor-pointer hover:text-myBone duration-300 max-w-fit'> <Link to="nosotros" spy={true} smooth={true} offset={50} duration={500}>NOSOTROS</Link> </li>
        <li className='addDot cursor-pointer hover:text-myBone duration-300 max-w-fit'> <Link to="casas" spy={true} smooth={true} offset={50} duration={500}>CASAS</Link> </li>
        <li className='addDot cursor-pointer hover:text-myBone duration-300 max-w-fit'> <Link to="contacto" spy={true} smooth={true} offset={50} duration={500}>CONTACTO</Link> </li>
        <li className='addDot cursor-pointer hover:text-myBone duration-300 max-w-fit'> <a href="/gallery">GALERIA</a></li>
    </ul>

  )
}
