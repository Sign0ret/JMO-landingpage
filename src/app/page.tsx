import Image from 'next/image'
import { Navbar } from '@/components/component/navbar'
import { VideoBackground } from '@/components/component/videoback'
import { Present } from '@/components/component/present'
import './globals.css'
import { Typing } from '@/components/component/typing'

export default function Home() {
  return (
    <body className=''>
      <main>
        <header className=''>
          <Navbar/>
        </header>
        <section className=''>
          
          <VideoBackground videoSource="playita.mp4" />
          <Present/>
          <div className='h-screen bg-white'>
            <Typing/>
          </div>
          <VideoBackground videoSource="playa_edif.mp4" />
        </section>
       
        
        <footer>

        </footer>
      </main>
    </body>
  )
}
