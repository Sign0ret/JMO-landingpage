import React from 'react';


export const Scrolling_H = () => {
    
    let images = [
        '/sillon.PNG',
        '/planta.PNG',
        '/alberca.PNG',
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
        <main >
            
            <div className="sticky_parent">
            {images.map((img, imgIndex) => (
                <div key={imgIndex} className="sticky grid grid-cols-2">
                <div className="scroll_section z-[-2] relative">
                    <img className='hori-img' src={img} alt={`Image ${imgIndex + 1}`} />
                    {/* <a href="/gallery_casas">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300 absolute top-1/2 transform -translate-y-1/2'>Palomares</button>
                    </a> */}
                </div>
                {/* <div className='lg:flex lg:items-center lg:justify-between lg:w-full'>
                    <div className='text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl pl-5 pt-10 lg:w-[50%]'>
                    <a href="/gallery_casas">
                        <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Casa</button>
                    </a>
                    </div>
                </div> */}
                </div>
            ))}
            </div>




            {/* <div className=' text-white left-[850px] text-3xl sm:text-5xl md:text-6xl lg:text-7xl pl-5 max-w-[500px] pt-72 lg:space-y-[530px] md:space-y-[460px] space-y-[750px]'>
                <div className='py-10'>
                <a href="/gallery_casas">
                <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Palomares</button> 
                </a>
                </div>
                <div className='py-10'>
                <a href="/gallery_casas">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Andares</button>
                </a> 
                </div>
                <div className='py-10'>
                <a href="/gallery_casas">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>los pinos</button>
                </a> 
                </div>
                <div className='py-10'>
                <a href="/gallery_casas">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Providencia</button>
                </a> 
                </div>
            </div> */}
        </main>
    );
  };