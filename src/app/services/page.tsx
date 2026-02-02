'use client'

import { motion } from 'framer-motion'

const services = [
    {
        title: 'Commercial',
        description: 'High-impact visual storytelling for brands that dare to stand out. Product, campaign, and lifestyle photography.',
    },
    {
        title: 'Editorial',
        description: 'Cinematic portraiture and fashion editorials. heavily stylized lighting and composition.',
    },
    {
        title: 'Events',
        description: 'Documenting moments with a cinematic eye. Corporate events, galas, and music performances.',
    },
    {
        title: 'Sports',
        description: 'Capturing the intensity and split-second action of athletic performance.',
    },
    {
        title: 'Nature',
        description: 'Wildlife and environmental photography that brings the raw beauty of the natural world into focus.',
    },
    {
        title: 'Landscape',
        description: 'Fine art landscape photography capturing breathtaking vistas and environments.',
    }
]

export default function Services() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="pt-32 pb-16 px-4 md:px-8 container mx-auto">
                <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-16 text-center">Services</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            viewport={{ once: true }}
                            className="border border-neutral-900 p-8 hover:bg-neutral-900/50 transition-colors group cursor-default text-center"
                        >
                            <h2 className="text-2xl font-light mb-4 group-hover:text-white transition-colors">{service.title}</h2>
                            <p className="text-neutral-400 mb-8 font-light leading-relaxed">{service.description}</p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
