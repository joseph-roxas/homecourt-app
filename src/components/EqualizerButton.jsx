import React from 'react'
import { motion } from 'framer-motion'

/**
 * Animated equalizer-style button (accessibility-friendly)
 * Props:
 * - onClick: () => void
 * - paused?: boolean  // optional: pause animation (e.g., when menu is open)
 */
export default function EqualizerButton({ onClick, paused = false }) {
  // You can change the number of bars here
  const bars = [0, 1, 2, 3, 4]

  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      className="relative inline-flex items-center justify-center
                 w-11 h-11 rounded-xl border border-black/10 bg-white/80
                 backdrop-blur hover:bg-white transition focus:outline-none
                 focus:ring-2 focus:ring-black/30"
    >
      <span className="sr-only">Open menu</span>

      <div className="flex items-end gap-[3px]">
        {bars.map((i) => (
          <motion.span
            key={i}
            className="w-[3px] bg-black/90 rounded-full"
            style={{ height: 14, transformOrigin: 'bottom' }}
            animate={
              paused
                ? { scaleY: 0.6 }
                : { scaleY: [0.4, 1, 0.5, 0.85, 0.6] }
            }
            transition={{
              duration: 1.2,
              repeat: paused ? 0 : Infinity,
              ease: 'easeInOut',
              delay: i * 0.12, // stagger for wave effect
            }}
          />
        ))}
      </div>
    </button>
  )
}
