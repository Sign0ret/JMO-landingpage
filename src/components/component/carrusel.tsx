"use client";
import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import "./carrusel.css"

export default function Carrusel() {
    const images = [
        {
            original: "https://dr.savee-cdn.com/things/thumbnails/6/2/0eb5985f8267ceabe9a3db.webp",
            thumbnail: "https://dr.savee-cdn.com/things/thumbnails/6/2/0eb5985f8267ceabe9a3db.webp"
        },
        {
            original: "https://dr.savee-cdn.com/things/thumbnails/5/c/25464646d7ca1fd955e6ff.webp",
            thumbnail: "https://dr.savee-cdn.com/things/thumbnails/5/c/25464646d7ca1fd955e6ff.webp"
        },
        {
            original: "https://dr.savee-cdn.com/things/thumbnails/5/c/9411987c82ce7ab878bdd1.webp",
            thumbnail: "https://dr.savee-cdn.com/things/thumbnails/5/c/9411987c82ce7ab878bdd1.webp"
        },
        {
            original: "https://dr.savee-cdn.com/things/thumbnails/6/4/80c3c71b258af5203e9076.webp",
            thumbnail: "https://dr.savee-cdn.com/things/thumbnails/6/4/80c3c71b258af5203e9076.webp"
        },
        {
            original: "https://dr.savee-cdn.com/things/thumbnails/6/2/0a9d2cdbb3227de445fb0a.webp",
            thumbnail: "https://dr.savee-cdn.com/things/thumbnails/6/2/0a9d2cdbb3227de445fb0a.webp"
        },
        {
            original: "https://dr.savee-cdn.com/things/thumbnails/5/b/46852e3e82354d17300112.webp",
            thumbnail: "https://dr.savee-cdn.com/things/thumbnails/5/b/46852e3e82354d17300112.webp"
        },
        {
            original: "https://dr.savee-cdn.com/things/thumbnails/5/b/ec79adfff57a530b4de672.webp",
            thumbnail: "https://dr.savee-cdn.com/things/thumbnails/5/b/ec79adfff57a530b4de672.webp"
        },
    ];

  return (
    <div>
        <ImageGallery items={images}
        showPlayButton={false}
        showThumbnails={false}
        showBullets={true} 
        showNav={false}
        autoPlay={true}
        slideDuration={1000} />
    </div>
  )
}

/* '',
        '',
        '',
        '',
        'https://dr.savee-cdn.com/things/thumbnails/6/4/d5f9397b7cd43cd88fe8c8.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/4/80c3c71b258af5203e9076.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/0/501fb1b9ff4b021688613d.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/f/b5d2b6a3d756228e99da41.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/c/25464646d7ca1fd955e6ff.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/2/0a9d2cdbb3227de445fb0a.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/b/46852e3e82354d17300112.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/b/ec79adfff57a530b4de672.webp', */