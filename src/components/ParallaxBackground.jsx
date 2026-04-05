
import React from 'react'

const ParallaxBackground = () => {

  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-y-hidden'>
        {/* background sky */}
        <div
          className='absolute inset-0 w-full h-screen -z-50'
          style={{
            backgroundImage: "url(/src/imgcomps/skyy.png)",
            backgroundPosition: "borrom",
            backgroundSize: "cover",
          }} />
        {/* background Boat */}
        <div 
        className='absolute inset-0 -z-40'
        style={{
            backgroundImage: "url(/src/imgcomps/boat.png)",
            backgroundPosition: "borrom",
            backgroundSize: "cover",
            
          }}/>


      </div>
    </section>
  )
}

export default ParallaxBackground