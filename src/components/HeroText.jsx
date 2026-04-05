import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left
    rounded-3xl bg-clip-text'>
            {/* Desktop */}
            <div className='flex-col hidden md:flex c-space'>
                <motion.h1 className='text-4xl font-medium'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                >Hi i am Abhijeet

                </motion.h1>
                <div className='flex flex-col items-start'>
                    <motion.p className='text-5xl font-medium text-neutral-300'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}>A Front End <br></br>Web developer</motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}><FlipWords words={["Dynamic", "Modern", "Interactive"]} className="font-black text-white text-8xl"
                        />
                    </motion.div>
                    <motion.p className='text-4xl font-medium text-neutral-300'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 }}>
                        Web Applications
                    </motion.p>
                </div>

            </div>
            {/* Mobile */}
            <div className='flex flex-col md:hidden space-y-4'>
                <motion.p className='text-4xl font-medium'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}>Hi, I am Abhijeet</motion.p>
                <div>
                    <motion.p className='text-5xl font-black text-neutral-300'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}>A Front End Web Developer</motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}>
                        <FlipWords words={["Dynamic", "Modern", "Interactive"]}
                            className="font-bold text-white text-7xl" />
                    </motion.div>
                    <motion.p className='text-4xl font-black text-neutral-300'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 }}>Web Applications</motion.p>

                </div>

            </div>

        </div>
    )
}

export default HeroText