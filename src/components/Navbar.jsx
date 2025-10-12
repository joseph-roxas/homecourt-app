import React from 'react'
import EqualizerButton from './EqualizerButton.jsx'

export default function Navbar({ onMenu, isMenuOpen }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="font-display text-5xl tracking-wider leading-none">HOMECOURT</h1>
          <p className="font-roxasBldg tracking-[0.09em] text-xl -mt-1">
            At Roxas Building
          </p>
        </div>

        {/* Animated equalizer hamburger */}
        <EqualizerButton onClick={onMenu} paused={isMenuOpen} />
      </div>
    </header>
  )
}
