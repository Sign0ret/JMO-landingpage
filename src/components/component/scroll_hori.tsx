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
        <main className=''>
            <div className="sticky_parent">
                {images.map((img, imgIndex) => (
                <div key={imgIndex} className="sticky z-[-2]">
                    <div className="scroll_section">
                        <img className='hori-img' src={img} alt={`Image ${imgIndex + 1}`} />
                    </div>
                </div>
                ))}
            </div>
        </main>
    );
  };