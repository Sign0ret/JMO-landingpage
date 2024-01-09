import Image from 'next/image'
import { Nav} from '@/components/component/nav'
import { Navbar } from '@/components/component/navbar'
import { Videoback } from '@/components/component/videoback'
export default function Home() {
  return (
    <main>
    <Navbar/>
    <Videoback/>
    </main>
  )
}
