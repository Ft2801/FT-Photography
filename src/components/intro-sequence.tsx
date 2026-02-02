'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroSequence({ onComplete }: { onComplete: () => void }) {
    const [step, setStep] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
        // Timeline sequence

        // Step 0: 0-1s Black (Automatic via initial state)
        const t1 = setTimeout(() => setStep(1), 1000) // Start Fade In

        // Step 1: 1-2s Fade In
        const t2 = setTimeout(() => setStep(2), 2000) // Start Fly Through

        // Step 2: 2-4s Fly Through (duration 2s)
        const completionTime = 4000
        const t3 = setTimeout(() => {
            onComplete()
        }, completionTime) // End of Intro

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
        }
    }, [onComplete])

    if (!mounted) return null



    return createPortal(
        <AnimatePresence>
            {step < 3 && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }} // Optional cleanup fade
                >
                    <motion.h1
                        className="text-4xl sm:text-6xl md:text-9xl font-light tracking-tighter text-white mix-blend-difference"
                        initial={{ opacity: 0, scale: 1, filter: 'blur(0px)', z: 0 }}
                        animate={
                            step === 1 ? { opacity: 1, scale: 1, filter: 'blur(0px)', z: 0 } :
                                step === 2 ? {
                                    opacity: [1, 0, 0], // Fades out in 1s (0.5 of 2s duration)
                                    scale: 100,  // Fly past camera significantly
                                    filter: ['blur(0px)', 'blur(5px)'], // Max blur 5px
                                    z: 5000, // Deep Z-travel
                                    x: -1000 // Shift left to avoid collision
                                } : {}
                        }
                        transition={
                            step === 1 ? { duration: 1, ease: 'easeInOut' } :
                                step === 2 ? {
                                    duration: 2,
                                    ease: [0.7, 0, 0.84, 0],
                                    times: [0, 0.5, 1] // Opacity targets 0 at 0.5 (1s into 2s duration)
                                } : {}
                        }
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        FT Photography
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}
