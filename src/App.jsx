import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import OfficialInfo from './components/OfficialInfo.jsx'
import Footer from './components/Footer.jsx'
import SlideOver from './components/SlideOver.jsx'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenu={() => setOpen(true)} />
      <main className="flex-1">
        <Hero />
        <OfficialInfo />
      </main>
      <Footer />
      <SlideOver open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
