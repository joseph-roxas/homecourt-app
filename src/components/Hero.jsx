import React from 'react'
import RotatingText from './RotatingText.jsx'

const phrases = [
  "Table Tennis Court at Roxas Building",
  "From Rallies To Friendships",
  "Play. Learn. Compete.",
  "Open to All Levels",
  "From Beginners to Beast",
  "#RallyForVictory."
]

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[72vh] sm:h-[78vh] w-full">
        <img
          src="/hero.png"
          alt="Homecourt Table Tennis Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        
        {/* Positioning */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full mx-auto px-4 -mt-16 sm:-mt-16">
            {/* STATIC heading (no motion wrapper) */}
            <h2 className="font-brand text-3xl sm:text-3xl md:text-4xl tracking-wide text-white text-outline drop-shadow-glow">
              Welcome to Homecourt
            </h2>

            {/* Animated phrases ONLY */}
            <div className="h-12 sm:h-14 md:h-16 mt-1">
              <RotatingText
                items={phrases}
                interval={2600}
                className="relative inline-block w-[36ch] sm:w-[40ch] md:w-[44ch]
                           font-brand text-xl sm:text-3xl md:text-5xl leading-tight
                           text-white text-outline drop-shadow-glow will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
