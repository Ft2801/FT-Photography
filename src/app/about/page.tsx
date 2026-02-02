'use client'

import { motion } from 'framer-motion'

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12"
                >
                    <h1 className="text-4xl md:text-6xl font-light tracking-tight">About FT Photography</h1>
                    <div className="space-y-8 text-lg text-neutral-400 font-light leading-relaxed">
                        <p>
                            FT Photography is a forward-thinking freelance photography practice exploring the boundaries between digital interfaces and cinematic experiences. I believe that a website should not just be viewed, but felt.
                        </p>
                        <p>
                            My work spans across photography, digital design, and motion graphics, always with a focus on movement, depth, and emotion.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-neutral-900">
                            <div>
                                <h3 className="text-white text-sm uppercase tracking-widest mb-4">Contact</h3>
                                <p>fabiot2801@gmail.com</p>
                            </div>
                            <div>
                                <h3 className="text-white text-sm uppercase tracking-widest mb-4">Social</h3>
                                <p>LinkedIn</p>
                                <p>Portfolio</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
