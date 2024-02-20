"use client";
import { TypePhase, useTypedSuperpower } from "./useTypedSuperpower";
import cn from 'classnames'
import React from 'react';

interface MiComponenteProps {
  estiloPersonalizado?: string; 
}
// const superpowers = ['En Construccion...']

export const Present: React.FC<MiComponenteProps> = ({ estiloPersonalizado }) => {
  // const {typedSuperpower, selectedSuperpower, phase} = useTypedSuperpower(superpowers)
  return (
    <div className={`clase-comun ${estiloPersonalizado} flex items-center justify-center h-full`}>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Enfocados en los detalles.</h1>
    </div>
  
    
  );
};

//Mejor estilo
// max-w-[800px] mt-[-400px] w-full h-screen mx-auto text-left absolute flex-col justify-center pl-2 z-[-2]