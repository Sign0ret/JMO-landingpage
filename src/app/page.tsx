import Image from 'next/image'
import { Navbar } from '@/components/component/navbar'
import { VideoBackground } from '@/components/component/videoback'
import { Present } from '@/components/component/present'
import './globals.css'
import { Typing } from '@/components/component/typing'
import { Scrolling_H } from '@/components/component/scroll_hori'
import { ComingSoon } from '@/components/component/coming_soon'
import { Footer } from '@/components/component/footer'
import { ScrollHeader } from '@/components/component/scroll_header'
import Contact from '@/components/component/contact'
import Contact_us from '@/components/component/contact_us'
import Handle_delete from '@/components/component/handle_delete'
import Carrusel from '@/components/component/carrusel'
import Carrusel_map from '@/components/component/carrusel_map'


export default function Home() {
  return (
    <body className='bg-myBlack'>
      <main>
        <header className=''>
          <Navbar/>
        </header>
        <section className=''>

          <VideoBackground videoSource="playita2.mp4" />
          <ComingSoon/>
          <div id='jmo_arqui' className='h-screen'>
            <Typing/>
          </div>
          <div id='nosotros'>
            <VideoBackground videoSource="playa_edif.mp4" />
          </div>
        </section>
        {/* <section>
          <div className=''>
            <ScrollHeader/>
          </div>
        </section> */}
        <section id='casas'>
          <Scrolling_H/>
        </section>
        <section className=''>
          <div className='h-screen bg-myBackground'>
            
            <Present estiloPersonalizado='text-myWhite w-full h-screen flex-col mt-8 text-center font-sans pt-10 justify-center'/>
            
          </div>
          <section id='contacto'>
          <Contact/>
          </section>
          <section>
            <Contact_us/>
          </section >
          {/* <section className='bg-white'>
            <Carrusel_map/>
          </section> */}
        </section>
        <footer>
          <Footer/>
        </footer>
      </main>
    </body>
  )
}
