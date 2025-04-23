import Image from "next/image"
import FadeInOnScroll from "./FadeInScroll";

export function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-20 mx-auto min-h-screen"
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
                <article className=" mx-auto max-w-prose space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <h2
                        id="about-heading"
                        className="text-3xl font-serif tracking-tight text-foreground mb-4"
                    >
                        About Me
                    </h2>
                    <p>
                        {"I'm a senior front-end engineer focused on building accessible, performant user interfaces with React, TypeScript, and Next.js. I specialize in creating scalable, component-driven design systems using Tailwind CSS, and deploying modern web apps via GitHub Actions and Vercel."}
                    </p>
                    <p>
                        {"Lately, I've been deepening my understanding of server-side rendering (SSR), state management strategies, and CI/CD workflows—building full feature pipelines from prototype to production."}
                    </p>
                    <p>
                        {"Over the last five years, I’ve worked on teams shipping real-world applications in public health and civic tech. I've served as a design system owner, a WCAG accessibility advocate, and a developer liaison in UX research initiatives. My focus has always been shipping user-facing features that balance technical elegance with human impact."}
                    </p>
                    <p>
                        {"Before entering the startup world, I worked in publishing and design—starting as an ebook producer at Penguin Random House, then launching WordPress microsites and custom editorial tools at Hachette Book Group."}
                    </p>
                </article>
            </FadeInOnScroll>
        </section>
    );
}