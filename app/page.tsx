import { Metadata } from "next"

import { Cover } from "@/components/Cover/Cover"
import { Transition } from "@/components/Transition/Transition"

export const metadata:Metadata = {
  title:'Portafolio JosueDev Next 13',
  description:'Portafolio Animate'
}

export default function Home() {
  return (
    <main className="bg-[#393A47] h-[100vh]">
        <Transition/>
        <Cover/>
    </main>
  )
}
