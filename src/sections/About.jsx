import { i } from 'motion/react-client'
import React from 'react'
import Card from '../components/Card'
import { useRef } from 'react'
import { Globe } from '../components/Globe'
import Emailbutton from '@/components/Emailbutton'
import { Frame } from 'lucide-react'
import { Frameworks } from '@/components/Frameworks'



const About = () => {
    const grid2Container = useRef();
    return (
        <section id="about" className='c-space section-spacing '>
            <h2 className='text-heading'>About Me </h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 
md:auto-rows-[18rem] mt-12'>
                {/* grid 1 */}
                <div className='flex items-end grid-default-color grid-1'>
                    <img
                        src='assets/coding-pov.png'
                        className='absolute scale-[1.75] -right-[5rem] -top-[1rem]
                     md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'/>
                    <div className='z-10  '>
                        <p className='headtext font-bold'>Hello, I am Abhijeet Deore</p>
                        <p className='subtext'>I am a Front End Web Developer and a UI/UX Designer , i have been
                            working my skills to deliver smooth and responsive web applications.
                        </p>

                    </div>
                    <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/2 bg-gradient-to-t from-indigo'>
                    </div>
                </div>
                {/* grid 2 */}
                <div className='grid-default-color grid-2'>
                    <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-5xl text-gray-500'>
                            CODE IS ART
                        </p>
                        <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text='Web Development'
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "-30deg", top: "60%", right: "45%" }} text='React JS'
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text='Wireframing '
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "-45deg", top: "55%", right: "0%" }} text='design Principles '
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "20deg", top: "10%", left: "30%" }} text='UI/UX'
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "40deg", top: "50%", left: "38%" }} text='Tailwind'
                            containerRef={grid2Container} />
                    </div>
                </div>

                {/* grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            I'm based in India, and open to remote work worldwide
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%] ">
                        <Globe />
                    </figure>
                </div>
                {/* grid 4 */}
                <div className='grid-special-color grid-4'>
                    <div className='flex flex-col items-center justify-center gap-4 size-full'>
                        <p className='text-center headtext'>Want to start a project together ?</p>
                        <Emailbutton />
                    </div>
                </div>

                {/* grid 5 */}
                <div className='grid-default-color grid-5'>
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Tech Stack</p>
                        <p className='subtext'>I Specialize in a veriety of laugnauges , frameworks , and tools
                            that allow me to create stunning and efficient web applications. I am always eager to learn new technologies and stay updated with the latest trends in web development.
                        </p>
                    </div>
                    <div className='absolute inset-y-0 md:inset-y-9 w-full
                    h-full start-[50%] md:scale-125'>
                       <Frameworks/>
                    </div>
 </div>

            </div>

        </section>
    )
}

export default About