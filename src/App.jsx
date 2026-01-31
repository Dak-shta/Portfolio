import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/hero/hero'
import About from './assets/components/about/About'
import Contact from './assets/components/Contact/Contact'


function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
