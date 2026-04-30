import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contacts from './sections/Contacts'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contacts/>
      <Footer/>
      
      

    </div>
  )
}

export default App