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
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <ModeToggle />
        <span className="font-serif text-2xl md:hidden">John Lee</span>
        <nav className="hidden md:flex">
          <DesktopNav />
        </nav>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
