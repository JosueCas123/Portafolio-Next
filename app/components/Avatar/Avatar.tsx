"use client"
import { fadeIn } from '@/utils/motionTransition';
import {motion} from 'framer-motion';
import Image from 'next/image';

export const Avatar = () => {
  return (
    <motion.div variants={fadeIn('left', 0.5)} initial='hidden' animate='show' exit='hidden' className='bottom-0 right-0 md:inline-block md:absolute'>
        <Image src='/assets/avatar-1.png' width='400' height='400' alt='avatar' className='w-full h-full '/>
    </motion.div>
  )
}
