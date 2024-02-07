"use client";
import React, { useEffect, useRef, useState } from 'react'
import "./carrusel_map.css"

enum SlideDirection {
    Prev,
    Next,
  }

export default function Carrusel_map() {
    let images = [
        '/nueva_casa.svg',
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

    const listRef = useRef<HTMLUListElement>(null);
    const [currentIndex, setcurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex !== 0) {
          const listNode = listRef.current;
          const imgNode = listNode?.querySelectorAll('li > img')[currentIndex];
    
          if (imgNode) {
            imgNode.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'start', // Desplazamiento horizontal
            });
          }
        }
      }, [currentIndex]);

    const scrollToImage = (direction: SlideDirection) => { 
        if (direction === SlideDirection.Prev) {
            setcurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1
            })
        } else {
            const isLastSlide = currentIndex === images.length -1
            if(!isLastSlide) {
                setcurrentIndex(curr => curr + 1);
            }
        }
     }

    const goToSlider = (slideIndex: number) => { 
        setcurrentIndex(slideIndex);
     }

  return (
    <div className='main-container'>
        <div className='slider-container'>
            <div className='leftArrow' onClick={() => scrollToImage(SlideDirection.Prev)}>&#10092;</div>
            <div className='rightArrow' onClick={() => scrollToImage(SlideDirection.Next)}>&#10093;</div>
            <div className='container-images'>
                <ul ref={listRef} className="image-list">
                    {
                        images.map((item, itemIndex) => {
                            return <li key={itemIndex}>
                                <img className='flex' src={item} alt={`Image ${itemIndex + 1}`} width={1600} height={580}/>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className='dots-container'>
                {
                    images.map((_, idx) => (
                        <div key={idx} className={`dot-container-item ${idx === currentIndex ? "active" : ""}`} onClick={() => goToSlider(idx)}>
                            &#9865;
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}
