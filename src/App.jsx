import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/hero/hero'
import About from './assets/components/about/About'
import Contact from './assets/components/Contact/Contact'
import Footer from './assets/components/Footer/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
