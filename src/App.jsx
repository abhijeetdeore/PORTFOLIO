import { Suspense, lazy } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
const Contacts = lazy(() => import('./sections/Contacts'))
const Footer = lazy(() => import('./components/Footer'))

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App