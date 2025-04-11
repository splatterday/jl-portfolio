'use client'

import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import { ModeToggle } from './ModeToggle'

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setHidden(false)
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

    return (
        <header
        className={cn(
            'fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-muted',
            hidden ? '-translate-y-full' : 'translate-y-0'
        )}
        >
        <div className="relative grid grid-cols-3 items-center w-full max-w-[1000px] md:mx-auto p-4">
            <div className="flex justify-start">
                <ModeToggle />
            </div>
            <div className="flex justify-center md:hidden">
                <span className="font-serif text-2xl">John Lee</span>
            </div>
            <nav className="hidden md:flex md:justify-end col-span-2">
                <DesktopNav />
            </nav>
            <div className="flex justify-end items-center align-center md:hidden">
            <MobileNav />
            </div>
        </div>
        </header>
    )
}
