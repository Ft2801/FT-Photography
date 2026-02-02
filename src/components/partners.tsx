'use client'

import React from 'react'
import { motion } from 'framer-motion'

const partners = [
    'VOGUE', 'ELLE', 'GQ', 'VANITY FAIR', 'HARPER\'S BAZAAR'
]

export default function Partners() {
    return (
        <section className="container mx-auto px-4 md:px-8 mb-32">
            <div className="flex flex-col items-center mb-16 border-b border-neutral-900 pb-8 text-center">
                <h2 className="text-4xl font-light tracking-tight mb-4">Partners</h2>
                <span className="text-xs uppercase tracking-widest text-neutral-500">Trusted By</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                {partners.map((partner, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-neutral-400 select-none cursor-default"
                    >
                        {partner}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
