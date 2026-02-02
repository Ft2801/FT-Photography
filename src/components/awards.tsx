'use client'

import React from 'react'
import { motion } from 'framer-motion'

const awards = [
    { year: '2023', title: 'Best Cinematography', organization: 'Visual Arts Awards' },
    { year: '2022', title: 'Excellence in Motion', organization: 'Creative Lens' },
    { year: '2021', title: 'Top 10 Photographer', organization: 'Global Photo' },
]

export default function Awards() {
    return (
        <section className="container mx-auto px-4 md:px-8 mb-32">
            <div className="flex flex-col items-center mb-16 border-b border-neutral-900 pb-8 text-center">
                <h2 className="text-4xl font-light tracking-tight mb-4">Awards</h2>
                <span className="text-xs uppercase tracking-widest text-neutral-500">Recognition</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {awards.map((award, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="p-6 border border-neutral-900/50 hover:border-neutral-800 transition-colors"
                    >
                        <span className="text-xs font-light text-neutral-500 block mb-2">{award.year}</span>
                        <h3 className="text-xl font-light mb-1">{award.title}</h3>
                        <p className="text-sm text-neutral-600 font-light">{award.organization}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
