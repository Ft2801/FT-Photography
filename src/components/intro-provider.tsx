'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface IntroContextType {
    isIntroActive: boolean
    completeIntro: () => void
}

const IntroContext = createContext<IntroContextType | undefined>(undefined)

export function IntroProvider({ children }: { children: React.ReactNode }) {
    const [isIntroActive, setIsIntroActive] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        // Check for class-based state first (SSR/FOUC hydration sync)
        if (typeof document !== 'undefined' && document.documentElement.classList.contains('intro-active')) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsIntroActive(true)
        }

        // Only run intro on home page if not seen before in this session
        else if (pathname === '/') {
            const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
            if (!hasSeenIntro) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setIsIntroActive(true)
                document.documentElement.classList.add('intro-active')
            }
        }
    }, [pathname])

    const completeIntro = () => {
        setIsIntroActive(false)
        sessionStorage.setItem('hasSeenIntro', 'true')
        document.documentElement.classList.remove('intro-active')
    }

    return (
        <IntroContext.Provider value={{ isIntroActive, completeIntro }}>
            {children}
        </IntroContext.Provider>
    )
}

export function useIntro() {
    const context = useContext(IntroContext)
    if (context === undefined) {
        throw new Error('useIntro must be used within an IntroProvider')
    }
    return context
}
