import React from 'react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function RotatingText({ items, interval=2200, className='' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval])

  const phrase = items[index]

  return (
    <div className={className} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {phrase}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
