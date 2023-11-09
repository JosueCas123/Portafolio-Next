import { fadeIn } from '@/utils/motionTransition';
import {motion} from 'framer-motion';
import Image from 'next/image';

export const Introduction = () => {
  return (
    <div className="bg-[#131424]/60 w-full z-10">
    <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
        <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
            <motion.div className="hidden w-auto h-auto mx-auto md:block"
                variants={fadeIn('right', 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <div className='w-full relative'>

                    <div className='flex justify-center'>

                        <Image src="/assets/react.webp
                        " priority width="200" height="100" alt="Avatar"
                        className='animate-move-up-down w-40 h-50 lg:w-60 lg:h-70'
                        />
                    </div>
                    <div className='flex'>
                        
                        <Image src="/assets/html.webp
                        " priority width="200" height="100" alt="Avatar"
                        className='animate-move-up-down w-40 h-50 lg:w-60 lg:h-70'
                        />
                        <Image src="/assets/Js.webp
                        " priority width="200" height="100" alt="Avatar"
                        className='animate-move-up-down w-40 h-50 lg:w-60 lg:h-70'
                        />
                    </div>
                </div>
            
                </motion.div>

            <motion.div variants={fadeIn("left", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <h1 className="mb-5 text-4xl leading-tight md:mb-10 ">Si puedes imaginarlo,  <br />
                    <span className="text-secondary mr-6">puedes programarlo</span>
                <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://s3.us-east-1.amazonaws.com/contents.newzenler.com/417/users/417.5d297cf474775/l-snapshot-20180315205447266.png"
                    alt=""
                />
                </h1> 
                <p className="max-w-sm  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero dolor, aliquam eu interdum sed, dignissim placerat nulla.
                </p>

                <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                    <a href="/projects" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                        Ver proyectos
                    </a>
                    <a href="/contact" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                        Contacta conmigo
                    </a>
                </div>
            </motion.div>
        </div>
    </div>
</div>
  )
}
