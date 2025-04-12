'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Switch } from './ui/switch'

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])  

    if (!mounted) return null

    return (
        <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-muted-foreground" />
            <Switch
                checked={resolvedTheme === 'dark'}
                onCheckedChange={(checked: boolean) => setTheme(checked ? 'dark' : 'light')}
                aria-label="Toggle dark mode"
            />
            <Moon className="w-4 h-4 text-muted-foreground" />
        </div>
    )
}
