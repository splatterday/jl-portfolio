import FadeInOnScroll from "./FadeInScroll";

export function Projects() {
    return (
        <section id="projects" className="min-h-screen snap-start flex items-center justify-center">
          <FadeInOnScroll>
              <div className="max-w-xl text-center">
                  <h2 className="text-3xl font-semibold mb-4">Projects</h2>
                  <p>Coming soon...</p>
              </div>
            </FadeInOnScroll>
        </section>
    );
}