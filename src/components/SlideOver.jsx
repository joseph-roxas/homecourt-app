import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

const communityMsg = `Hi! 👋

We’re building a Table Tennis Community in South Cebu 🏓 — based at Roxas Building in Lawaan 3, Talisay City.

Players from Minglanilla, Naga, and nearby areas are all welcome! Whether you’re a beginner, casual player, or a competitive enthusiast, this is your place to connect, learn, and enjoy the game together. Come rally with us!

`

export default function SlideOver({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 h-full w-[90%] sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
          >
            <div className="p-5 border-b flex items-center justify-between">
              <div>
                <div className="font-display text-4xl leading-none">HOMECOURT</div>
                <div className="font-roxasBldg text-sm tracking-[0.09em] uppercase">At Roxas Building</div>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-black/5" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto">
              <p className="whitespace-pre-line leading-relaxed">{communityMsg}</p>
              <a href="#official-info" onClick={onClose} className="inline-block mt-2 rounded-xl bg-black text-white px-4 py-2 text-sm">
                See Official Info
              </a>
            </div>
            <div className="mt-auto p-5 text-xs text-black/60">
              © 2025 Homecourt at Roxas Building
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
