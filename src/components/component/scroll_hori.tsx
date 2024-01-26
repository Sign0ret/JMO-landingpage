import React from 'react';


export const Scrolling_H = () => {
    
    let images = [
        'https://dr.savee-cdn.com/things/thumbnails/6/3/a9b0fad1fa7219d139232b.webp',
        'https://dr.savee-cdn.com/things/thumbnails/5/9/db7eef22bd325d6c9e0855.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/2/57fce66c9fe33e8efe6897.webp',
        'https://dr.savee-cdn.com/things/thumbnails/6/4/bf6ed47f1fba41dad27e1b.webp'
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
            <div className=' text-white left-[850px] text-3xl sm:text-5xl md:text-6xl lg:text-7xl pl-5 max-w-[500px] pt-72 lg:space-y-[530px] space-y-[750px]'>
                <div className=''>Esta casa es la de tus sueños ???
                <br />
                <a href="https://www.instagram.com/jorgeblasquezjjbg_/">
                <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Ir a ver</button> 
                </a>
                </div>
                <div className=''>O esta ?
                <br />
                <a href="https://www.instagram.com/jorgeblasquezjjbg_/">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Ir a ver</button>
                </a> 
                </div>
                <div className=''>O esta ???
                <br />
                <a href="https://www.instagram.com/jorgeblasquezjjbg_/">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Ir a ver</button>
                </a> 
                </div>
                <div className=''>O estaaaaa !!!!
                <br />
                <a href="https://www.instagram.com/jorgeblasquezjjbg_/">
                    <button className='py-2 px-6 rounded-full hover:bg-gray-600 duration-300'>Ir a ver</button>
                </a> 
                </div>
            </div>
        </main>
    );
  };