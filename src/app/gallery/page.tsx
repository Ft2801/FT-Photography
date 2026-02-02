'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2600&auto=format&fit=crop'
]

export default function Gallery() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="pt-32 pb-16 px-4 md:px-8 container mx-auto">
                <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-16 text-center">Selected Works</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            className="aspect-[3/4] relative overflow-hidden bg-neutral-900 group"
                        >
                            <Image
                                src={src}
                                alt={`Portfolio Image ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={i < 4} // Load first 4 images immediately
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
