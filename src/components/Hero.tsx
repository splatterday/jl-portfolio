import { Sparkles } from "lucide-react"
import AnimatedFadeIn from "@/components/AnimatedFadeIn"

export function Hero() {
    return (
    <section className="py-24 text-center min-h-screen snap-start">
        <AnimatedFadeIn>
            <Sparkles className="mx-auto h-12 w-12 text-primary animate-pulse" />
        </AnimatedFadeIn>
        <AnimatedFadeIn>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {"Hi, I'm Johnny."}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                {"I’m a Senior Front-End Engineer focused on crafting fast, delightful, and accessible UIs."}
            </p>
        </AnimatedFadeIn>
    </section>
    )
}
