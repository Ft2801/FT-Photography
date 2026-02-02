'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroSequence from '@/components/intro-sequence'
import Awards from '@/components/awards'
import Partners from '@/components/partners'
import Link from 'next/link'
import Image from 'next/image'
import { useIntro } from '@/components/intro-provider'

const servicesPreview = [
  { title: 'Commercial', desc: 'Brand storytelling' },
  { title: 'Editorial', desc: 'High fashion visuals' },
  { title: 'Events', desc: 'Cinematic coverage' }
]

const galleryPreview = [
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2600&auto=format&fit=crop',
]

export default function Home() {
  const { isIntroActive, completeIntro } = useIntro()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevent hydration mismatch

  return (
    <main className="min-h-screen relative bg-black text-white">
      <AnimatePresence mode="wait">
        {isIntroActive ? (
          <IntroSequence key="intro" onComplete={completeIntro} />
        ) : (
          <motion.div
            key="home-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} // Slight fade in for the wrapper
            className="w-full"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="w-full"
              style={{ transformOrigin: '50% 50vh' }}
            >
              {/* HERO SECTION */}
              <section className="h-[100vh] flex flex-col items-center justify-center text-center px-4 mb-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2600&auto=format&fit=crop"
                    alt="Photography Background"
                    fill
                    className="object-cover opacity-25"
                    priority
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="relative z-10"
                >
                  <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-6xl md:text-9xl font-light tracking-tighter mb-8"
                  >
                    Capture with style
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto"
                  >
                    Defining the future of visual storytelling through cinematic lens and motion.
                  </motion.p>
                </motion.div>
              </section>

              {/* AWARDS SECTION */}
              <Awards />

              {/* PARTNERS SECTION */}
              <Partners />

              {/* SERVICES PREVIEW */}
              <section className="container mx-auto px-4 md:px-8 mb-32">
                <div className="flex flex-col items-center mb-16 border-b border-neutral-900 pb-8 text-center">
                  <h2 className="text-4xl font-light tracking-tight mb-4">Services</h2>
                  <Link href="/services" scroll={false} className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">View All</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {servicesPreview.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="p-8 border border-neutral-900 hover:bg-neutral-900/40 transition-colors text-center"
                    >
                      <h3 className="text-2xl font-light mb-2">{s.title}</h3>
                      <p className="text-neutral-500 font-light">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* GALLERY PREVIEW */}
              <section className="container mx-auto px-4 md:px-8 mb-32">
                <div className="flex flex-col items-center mb-16 border-b border-neutral-900 pb-8 text-center">
                  <h2 className="text-4xl font-light tracking-tight mb-4">Gallery</h2>
                  <Link href="/gallery" scroll={false} className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">View Archive</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {galleryPreview.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="aspect-[4/3] relative overflow-hidden bg-neutral-900"
                    >
                      <Image
                        src={src}
                        alt="Gallery Preview"
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* HISTORY PREVIEW */}
              <section className="container mx-auto px-4 md:px-8 mb-16 text-center">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="max-w-4xl mx-auto space-y-8"
                >
                  <h2 className="text-4xl font-light tracking-tight">My Journey</h2>
                  <p className="text-xl text-neutral-400 font-light leading-relaxed">
                    From a small darkroom to a dedicated creative practice. I have spent the last few years perfecting the art of the moving image.
                  </p>
                  <div className="pt-4">
                    <Link href="/history" scroll={false} className="inline-block border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm">
                      Read Full Story
                    </Link>
                  </div>
                </motion.div>
              </section>

              {/* CONTACT PREVIEW */}
              <section className="bg-neutral-900/30 py-32 text-center">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="container mx-auto px-4"
                >
                  <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">Ready to create?</h2>
                  <Link href="/contact" scroll={false} className="inline-block bg-black text-white border border-white px-12 py-4 rounded-full hover:bg-neutral-900 hover:scale-105 transition-all uppercase tracking-widest font-medium">
                    Get in Touch
                  </Link>
                </motion.div>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
