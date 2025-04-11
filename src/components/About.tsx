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
                <article>
                    <h2
                        id="about-heading"
                        className="text-3xl font-serif tracking-tight text-foreground mb-4"
                    >
                        About Me
                    </h2>
                    <p className="pb-3">
                        {"I’m a Front-End Engineer and UI Developer with a passion for crafting accessible, scalable, and performant interfaces. "}
                        {"I’ve led the build and maintenance of robust "}<strong>{"design systems"}</strong> {"that drive consistency and speed across engineering teams."}
                    </p>
                    <p className="pb-3">
                        {"With a background in "}<strong>{"UX research and developer advocacy"}</strong>{", I bridge the gap between design intent and implementation, ensuring products are intuitive and inclusive."}
                    </p>
                    <p>
                        {"Recently, I’ve been deepening my expertise in "}<strong>{"Next.js, server-side rendering"}</strong>{", and "}<strong>{"Tailwind CSS"}</strong>{" — tools that help scale complex, modern web apps."}
                    </p>
                </article>
            </FadeInOnScroll>
        </section>
    );
}