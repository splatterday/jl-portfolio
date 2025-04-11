import FadeInOnScroll from "./FadeInScroll";
import Link from 'next/link'
import { Button } from "./ui/button";
import { Footer } from "./Footer";

export function Contact() {
    return (
        <section id="contact" className="relative min-h-[100vh] flex items-center justify-center">
            <FadeInOnScroll>
                <div className="max-w-xl text-center">
                    <h2 className="font-normal font-serif text-4xl mb-3">{"What's next?"}</h2>
                    <h3 className="font-semibold text-xl mb-3">Get in touch!</h3>
                    <p className="mb-5">{"Reach out with any questions you may have--"}<br />{"I'm always looking for new opportunities."}<br />{"Let's make something great together!"}</p>
                    <Link href='mailto:contactjohnlee@gmail.com?subject=Hello!'>
                        <Button variant="outline" size="lg" className="text-md font-semibold">
                            Say hello!
                        </Button>
                    </Link>
                </div>
            <Footer />
            </FadeInOnScroll>
        </section>
    );
}