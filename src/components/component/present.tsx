"use client";
import { TypePhase, useTypedSuperpower } from "./useTypedSuperpower";
import cn from 'classnames'
import React from 'react';

const superpowers = ['En Construccion . . .']

export const Present = () => {
  const {typedSuperpower, selectedSuperpower, phase} = useTypedSuperpower(superpowers)
  return (
    <div className='text-white'>
      <div className='max-w-[700px] mt-[-400px] w-full h-screen mx-auto text-left absolute flex-col justify-center pl-2 z-[-2]'>
        {/* <p className='font-bold'>Construyendo conexiones, diseñando experiencias.</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Turn your dreams into tangible things</h1> */}
        <div>
          {/* <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Diseño, calidad y eficiencia para tu</p> */}
          <span className={cn('text-green-600 font-bold md:text-6xl sm:text-5xl text-2xl pl-48', {['end-cursor']: phase !== TypePhase.Deleting, ['blinking']: phase === TypePhase.Pausing, })} aria-label={selectedSuperpower}>
                {typedSuperpower}
            </span>
        </div>
      </div>
    </div>
    
  );
};