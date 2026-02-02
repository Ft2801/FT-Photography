'use client'

import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
                <div className="text-center space-y-12">
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight">Get in Touch</h1>

                    <div className="space-y-6">
                        <a href="mailto:fabiot2801@gmail.com" className="block text-2xl md:text-4xl text-neutral-400 hover:text-white transition-colors tracking-tight">
                            fabiot2801@gmail.com
                        </a>
                    </div>

                    <div className="pt-12 flex items-center justify-center gap-8">
                        <a href="https://www.linkedin.com/in/fabio-tempera-4a413b3a0/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://ft2801.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
                            Portfolio
                        </a>
                    </div>

                    <div className="pt-24 text-neutral-600 text-xs uppercase tracking-widest">
                        <p>Available Worldwide</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
