import { Copyright } from "lucide-react";

export function Footer() {
    return (
        <div className="w-full pb-2 flex flex-col items-center">
            <p className="text-xs text-center text-gray-500"><Copyright className="inline w-3 h-3 ml-1 mr-1 text-accent transition-colors group-hover:text-foreground" />JL 2025<br />This app was built with NextJS 15.3, React v19, Typescript 5, Tailwind 4.1.3
            </p>
        </div>
    )
}