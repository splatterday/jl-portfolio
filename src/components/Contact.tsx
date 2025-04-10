import FadeInOnScroll from "./FadeInScroll";

export function Contact() {
    return (
        <section id="contact" className="min-h-screen snap-start flex items-center justify-center">
            <FadeInOnScroll>
                <div className="max-w-xl text-center">
                    <h2 className="text-3xl font-semibold mb-4">Contact</h2>
                    <p>Email me at yourname@example.com</p>
                </div>
            </FadeInOnScroll>
        </section>
    );
}