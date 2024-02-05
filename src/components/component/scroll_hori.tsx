import React from 'react';


export const Scrolling_H = () => {
    
    let images = [
        'https://dr.savee-cdn.com/things/thumbnails/6/4/b014f6fb7f6446b7c6117d.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/9/c3c20bd4c7d721314c08ba.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/b/4785fead8c537b9900bbd3.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/4/5b3c073772c869b841fc11.webp',
    ]
    
    /* window.addEventListener('scroll', (e) => {
        for(let i = 0; i < images.length; i++){
            transform(images[i])
        }
    })

    function transform(section){
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.scroll_section')
        console.log(scrollSection)
    }
 */
    return (
        <main className='grid grid-cols-2'>
            
            <div className="sticky_parent">
            
                {images.map((img, imgIndex) => (
                <div key={imgIndex} className="sticky z-[-2]">
                    
                    <div className="scroll_section">
                        <img className='hori-img' src={img} alt={`Image ${imgIndex + 1}`} />
                        
                    </div>
                </div>
                ))}
            </div>
            <div className=' text-white left-[850px] text-3xl sm:text-5xl md:text-6xl lg:text-7xl pl-5 max-w-[500px] pt-72 lg:space-y-[530px] md:space-y-[460px] space-y-[750px]'>
                <div className=''>Esta es la casa de tus sueños ???
                <br />
                <a href="/gallery_casas">
                <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Ir a ver</button> 
                </a>
                </div>
                <div className=''>O esta ?
                <br />
                <a href="/gallery_casas">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Ir a ver</button>
                </a> 
                </div>
                <div className=''>O esta ???
                <br />
                <a href="/gallery_casas">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Ir a ver</button>
                </a> 
                </div>
                <div className=''>O estaaaaa !!!!
                <br />
                <a href="/gallery_casas">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Ir a ver</button>
                </a> 
                </div>
            </div>
        </main>
    );
  };