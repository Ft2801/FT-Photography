'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useIntro } from '@/components/intro-provider'

const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/history', label: 'My Story' },
    { href: '/contact', label: 'Contact' }
]

export default function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { isIntroActive } = useIntro()

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, [])

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            animate={isIntroActive ? "hidden" : (hidden ? "hidden" : "visible")}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
        >
            {/* UI ELEMENTS */}
            <div className="flex items-center justify-between relative z-50 text-white mix-blend-difference w-full">
                <Link href="/" className="text-xl font-medium tracking-tight uppercase" onClick={() => setIsOpen(false)}>
                    FT Photography
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-widest hover:opacity-50 transition-opacity",
                                pathname === link.href ? "opacity-100" : "opacity-60"
                            )}
                            scroll={false}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* MOBILE BURGER */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-8 h-8 relative focus:outline-none z-50"
                    aria-label="Toggle Menu"
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-8 h-0.5 bg-current origin-center block"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-8 h-0.5 bg-current block"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-8 h-0.5 bg-current origin-center block"
                        />
                    </div>
                </button>
            </div >

            {/* MOBILE MENU OVERLAY - Portalled to ensure viewport centering */}
            {
                mounted && createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center" // z-40 to sit behind Header (z-50)
                            >
                                <nav className="flex flex-col gap-8 text-center">
                                    {links.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "text-4xl font-light uppercase tracking-widest text-white hover:text-neutral-500 transition-colors",
                                                    pathname === link.href ? "opacity-100" : "opacity-70"
                                                )}
                                                scroll={false}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )
            }
        </motion.header >
    )
}
