import Image from "next/image"
import FadeInOnScroll from "./FadeInScroll";

export function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-20 mx-auto min-h-screen snap-start"
        >
            <FadeInOnScroll>
                <div className="w-full max-w-sm mx-auto">
                <Image
                    src="/me.png"
                    alt="Portrait of John Lee in Studio Ghibli style"
                    width={400}
                    height={400}
                    className="rounded-xl object-cover aspect-square w-full max-w-sm mx-auto shadow-lg"
                />
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <article>
                    <h2
                        id="about-heading"
                        className="text-3xl font-bold tracking-tight text-foreground mb-4"
                    >
                        About Me
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:leading-none first-letter:pr-2 first-letter:text-primary">
                        Hi, I’m John — a Front-End Engineer with a focus on clean, scalable interfaces and accessible design systems. I split my time between NYC and Nashville, and I’m passionate about building fast, intuitive experiences that meet real-world needs.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        Most recently, I led development efforts for the CDC’s National Electronic Disease Surveillance System (NEDSS) at Enquizit. I architected reusable components in React, implemented robust testing strategies, and delivered production-ready features for a mission-critical public health platform.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        I care about the small details that make an app feel good to use — whether that’s optimizing performance, bridging design and engineering, or building accessible, WCAG-compliant experiences. When I'm not pushing pixels, I’m likely out running or digging for vintage gear.
                    </p>
                </article>
            </FadeInOnScroll>
        </section>
    );
}