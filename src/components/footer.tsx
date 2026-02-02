'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useIntro } from '@/components/intro-provider'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const { isIntroActive } = useIntro()

    return (
        <motion.footer
            initial={{ opacity: 1 }}
            animate={{ opacity: isIntroActive ? 0 : 1 }}
            className="w-full border-t border-neutral-900 bg-black text-white py-12 md:py-16"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight uppercase">FT Photography</h2>
                        <p className="text-neutral-500 text-sm max-w-xs">
                            Defining the future of visual storytelling through cinematic lens and motion.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 md:gap-16">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-medium uppercase tracking-widest text-white/40">Navigation</h3>
                            <Link href="/services" className="text-neutral-400 hover:text-white transition-colors text-sm">Services</Link>
                            <Link href="/gallery" className="text-neutral-400 hover:text-white transition-colors text-sm">Gallery</Link>
                            <Link href="/history" className="text-neutral-400 hover:text-white transition-colors text-sm">History</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-medium uppercase tracking-widest text-white/40">Social</h3>
                            <a href="https://www.linkedin.com/in/fabio-tempera-4a413b3a0/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm">LinkedIn</a>
                            <a href="https://ft2801.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm">Portfolio</a>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 tracking-widest uppercase">
                    <p>&copy; {currentYear} Fabio Tempera</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
