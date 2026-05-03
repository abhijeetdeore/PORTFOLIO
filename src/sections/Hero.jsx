import React from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Canvas } from '@react-three/fiber'
import { Skull } from '../components/Skull'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { useFrame } from "@react-three/fiber";
import { easing } from 'maath'

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 });
    return (
        <section
            id="home"
            className="flex items-start justify-center
        md:items-start md:justify-start min-h-screen overflow-hidden
        c-space">
            <HeroText />
            <ParallaxBackground />
            <figure
                className='absolute inset-0'
                style={{ width: "100vw", height: "100vh" }}>
                <Canvas camera={{ position: [0, 0, 3] }}>
                    <Skull scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]} />
                </Canvas>
            </figure>

            
            <div className={[
    "absolute bottom-0 left-0",
    "w-full h-[220px] sm:h-[180px] md:h-[220px]",  
    "bg-gradient-to-b from-transparent to-[#030412]",
    "pointer-events-none z-10"
].join(" ")} />

        </section>
    );
};

export default Hero