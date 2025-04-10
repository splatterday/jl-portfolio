import { ModeToggle } from "@/components/ModeToggle";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-background shadow z-50 border-b border-highlight">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex gap-4">
                <a href="#about" className="hover:underline">About</a>
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </div>
            <ModeToggle />
        </div>
        </nav>
    );
}