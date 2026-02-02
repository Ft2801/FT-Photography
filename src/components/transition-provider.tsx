'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useContext, useRef, useState } from 'react'

// Fix for frozen route during exit animation in Next.js App Router
// Enhanced to support "cinematic" feel
function FrozenRouter(props: { children: ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {})
    const [frozen] = useState(context)

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    )
}

export default function TransitionProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname()

    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)} // Reset scroll to top ensures origin-center works on viewport
        >
            <motion.div
                key={pathname}
                initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                exit={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
                transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                className="min-h-screen w-full relative bg-black"
                style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: '50% 50vh',
                    willChange: 'transform, opacity, filter' // Performance hint
                }} // Pivot around viewport center
            >
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    )
}
