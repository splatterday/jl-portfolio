'use client'

import { motion } from 'framer-motion'

export function Hero() {
    return (
        <section className="min-h-screen snap-start flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
            <motion.div
            initial={{ scale: 0.8, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
            className="text-5xl"
            role="img"
            aria-label="Thumbs up"
            >
                👍
            </motion.div>

            <h1 className="mt-6 text-4xl font-serif tracking-tight text-foreground sm:text-5xl">
                {"Hi, I'm John."}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                {"I’m a Front-End Software Engineer focused on crafting fast, delightful, and accessible UIs."}
            </p>
        </div>
        </section>
    )
}
