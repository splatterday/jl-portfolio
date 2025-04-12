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
                        {"I've worked as a Senior Front-End Software Engineer for over 5 years—React and TypeScript being my bread and butter. I've built and maintained design systems, advocated for WCAG accessibility across teams, and served as a developer liaison in UX research initiatives. Throughout, I’ve focused on shipping performant, scalable components and user-facing features using modern state management strategies."}
                    </p>
                    <p>
                        {"Before transitioning to startups, I spent several years in publishing and design. I got my start producing ebooks at Penguin Random House, then moved to Hachette Book Group as a Front-End Developer. There, I launched WordPress microsites for authors and imprints, and created custom widgets that empowered editors to tailor their pages without needing to write code."}
                    </p>
                    <p>
                        {"These days, I'm deepening my expertise in Next.js (with a focus on SSR), Tailwind CSS, and modern CI/CD workflows via GitHub Actions and Vercel. I bring with me years of aesthetic sensibility, a user-first mindset, and a desire to build tools that are both beautiful and accessible to all."}
                    </p>
                </article>
            </FadeInOnScroll>
        </section>
    );
}