"use client"
import React from 'react';
import { Navbar } from '@/components/component/navbar';

export default function Gallery_casas() {

    let images = [
        'https://dr.savee-cdn.com/things/thumbnails/6/4/b014f6fb7f6446b7c6117d.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/c/940d2bb2f8dc4dd16351e6.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/4/bcb1e25d96d4e2d7b1f569.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/2/0eb5985f8267ceabe9a3db.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/5/33bd9df8aadf0116ebef0e.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/4/9308e02f22baa3cb1dc1b2.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/c/9411987c82ce7ab878bdd1.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/4/d5f9397b7cd43cd88fe8c8.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/4/80c3c71b258af5203e9076.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/0/501fb1b9ff4b021688613d.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/f/b5d2b6a3d756228e99da41.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/c/25464646d7ca1fd955e6ff.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/2/0a9d2cdbb3227de445fb0a.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/b/46852e3e82354d17300112.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/b/ec79adfff57a530b4de672.webp',
    ]

  return (
    <main className='bg-black'>
      <header>
        <Navbar />
      </header>
      <section className=''>
        
        <section className='grid grid-cols-1 gap-4 p-4 pl-9 lg:grid-cols-2 lg:pl-10 md:grid-cols-2'>
          <section className='grid grid-cols-1'>
            <img src="https://dr.savee-cdn.com/things/thumbnails/6/4/b014f6fb7f6446b7c6117d.webp" alt="Casa" className='post w-[650px] h-[650px]'/>
            {images.map((img, imgIndex) => (
              <img 
                key={imgIndex}
                className='post w-80 h-80'
                src={img}
                alt={`Image ${imgIndex + 1}`}
                
              />
            ))}
          </section>
          <div className='grid grid-cols-2'>
            {images.map((img, imgIndex) => (
                <img 
                  key={imgIndex}
                  className='post w-80 h-80'
                  src={img}
                  alt={`Image ${imgIndex + 1}`}
                  
                />
              ))}
            </div>
        </section>
      </section>
    </main>
  );
}