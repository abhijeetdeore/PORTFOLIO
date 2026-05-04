import React from 'react'
import skyy from '../imgcomps/skyy.webp'
import boat from '../imgcomps/boat.webp'

const ParallaxBackground = () => {
  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-y-hidden'>
        <div
          className='absolute inset-0 w-full h-screen -z-50'
          style={{
            backgroundImage: `url(${skyy})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }} />
        <div 
          className='absolute inset-0 -z-40'
          style={{
            backgroundImage: `url(${boat})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}/>
      </div>
    </section>
  )
}

export default ParallaxBackground