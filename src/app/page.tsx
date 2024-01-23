import Image from 'next/image'
import { Navbar } from '@/components/component/navbar'
import { VideoBackground } from '@/components/component/videoback'
import { Present } from '@/components/component/present'
import './globals.css'
import { Typing } from '@/components/component/typing'
import { Scrolling_H } from '@/components/component/scroll_hori'
import { ComingSoon } from '@/components/component/coming_soon'
import { Footer } from '@/components/component/footer'

export default function Home() {
  return (
    <body className=''>
      <main>
        <header className=''>
          <Navbar/>
        </header>
        <section className=''>

          <VideoBackground videoSource="edif_can.mp4" />
          <ComingSoon/>
          <div id='jmo_arqui' className='h-screen bg-white'>
            <Typing/>
            
          </div>
          <div id='nosotros'>
            <VideoBackground videoSource="playa_edif.mp4" />
          </div>
        </section>
        <section id='casas'>
          <Scrolling_H/>
        </section>
        <section className=''>
          <div id='contacto' className='h-screen bg-white'>
            
            <Present estiloPersonalizado='text-black w-full h-screen flex-col mt-8 text-center font-sans pt-10 justify-center'/>
            
          </div>
          <section>
          
          </section>
        </section>
        <footer id=''>
          <Footer/>
        </footer>
      </main>
    </body>
  )
}
