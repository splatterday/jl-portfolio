import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function HomePage() {
    return (
        <main className="overflow-y-scroll h-screen">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}