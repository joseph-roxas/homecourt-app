import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react'

/**
 * Facilities section (carousel)
 * - Auto slides right→left
 * - Drag/swipe manually (mouse & touch)
 * - Pauses on hover/focus
 * - Keyboard arrows (left/right)
 */
export default function Facilities() {
  // 👉 Replace these with your actual image paths
  const IMAGES = useMemo(
    () => [
      { src: '/images/facilities/IMG_8136.jpeg', alt: 'Roxas Building' },
      { src: '/images/facilities/IMG_7510.jpeg', alt: 'Roxas Building' },
      { src: '/images/facilities/IMG_0140.jpeg', alt: '25 mm Table' },
      { src: '/images/facilities/IMG_0369.jpeg', alt: 'Players in Action' },
      { src: '/images/facilities/IMG_0145.jpeg', alt: 'Side view of tables' },
      { src: '/images/facilities/IMG_0210.jpeg', alt: 'Multiball Training Drills' },
      { src: '/images/facilities/IMG_0166.png', alt: 'Bright, Even Lighting at Night' },
      { src: '/images/facilities/IMG_9225.jpeg', alt: 'Evening Matches in Action' },
      { src: '/images/facilities/IMG_9228.jpeg', alt: 'Night Play Under Full Lights' },
      { src: '/images/facilities/IMG_0469.jpeg', alt: 'Player Lounge/Waiting Area' },
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef(null)
  const slideRef = useRef(null)
  const [slideWidth, setSlideWidth] = useState(0)

  // Measure slide width (100% of container)
  useEffect(() => {
    const measure = () => {
      if (slideRef.current) setSlideWidth(slideRef.current.getBoundingClientRect().width)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Animate to current index
  useEffect(() => {
    controls.start({ x: -index * slideWidth, transition: { duration: 0.6, ease: 'easeInOut' } })
  }, [index, slideWidth, controls])

  // Autoplay (pause on hover/focus or if window not visible)
  useEffect(() => {
    if (paused || slideWidth === 0) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, 3000)
    return () => clearInterval(id)
  }, [paused, slideWidth, IMAGES.length])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const next = () => setIndex((i) => (i + 1) % IMAGES.length)
  const prev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length)

  return (
    <section id="facilities" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="flex items-center gap-3 mb-4">
          <Images className="w-6 h-6" />
          <h3 className="text-3xl md:text-4xl tracking-wide font-brand">Our Facilities</h3>
        </div>
        {/* <p className="text-black/70 mb-6">
          A quick look at the actual court.
        </p> */}

        {/* Carousel */}
        <div
          className="relative select-none"
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Viewport */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            {/* Track */}
            <motion.div
              className="flex"
              animate={controls}
              drag="x"
              dragConstraints={{
                left: -((IMAGES.length - 1) * slideWidth),
                right: 0,
              }}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                const threshold = slideWidth * 0.15
                if (info.offset.x < -threshold) next()
                else if (info.offset.x > threshold) prev()
                else controls.start({ x: -index * slideWidth, transition: { duration: 0.25 } })
              }}
              style={{ touchAction: 'pan-y' }}
            >
              {IMAGES.map((img, i) => (
                <div
                  key={i}
                  ref={i === 0 ? slideRef : undefined}
                  className="min-w-full"
                  aria-hidden={index !== i}
                >
                  <div className="relative w-full 
                                  h-[clamp(320px,56vh,820px)]
                                  bg-black/5 flex items-center
                                  justify-center overflow-hidden
                                  rounded-none">
                    
                    
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="block w-full h-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    
                    {/* Optional caption */}
                    <div className="absolute bottom-2 left-2 bg-black/55 text-white text-sm px-2 py-1 rounded">
                      {img.alt}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-white/80 backdrop-blur border border-black/10 hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-white/80 backdrop-blur border border-black/10 hover:bg-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-black' : 'w-2.5 bg-black/30 hover:bg-black/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
