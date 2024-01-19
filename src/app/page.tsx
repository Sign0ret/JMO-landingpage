import Image from 'next/image'
import { Navbar } from '@/components/component/navbar'
import { VideoBackground } from '@/components/component/videoback'
import { Present } from '@/components/component/present'
import './globals.css'
import { Typing } from '@/components/component/typing'
import { Scrolling_H } from '@/components/component/scroll_hori'
import { ComingSoon } from '@/components/component/coming_soon'

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
          <div className='h-screen bg-white'>
            <Typing/>
            
          </div>
          <VideoBackground videoSource="playa_edif.mp4" />
        </section>
        <section>
          <Scrolling_H/>
        </section>
        <section className=''>
          <div className='h-screen bg-white'>
            
            <Present estiloPersonalizado='text-black w-full h-screen flex-col mt-8 text-center font-sans pt-52'/>
            
          </div>
          <section>
          
          </section>
        </section>
        <footer>

        </footer>
      </main>
    </body>
  )
}
