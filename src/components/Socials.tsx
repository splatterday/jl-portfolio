import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export function Socials() {
  return (
    <div className="fixed items-center justify-center bottom-0 left-4 flex-col gap-4 z-40 hidden md:flex">
      <a
        href="https://github.com/splatterday"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        className="group"
      >
        <div className="w-6 h-6 rounded bg-[var(--primary)] flex items-center justify-center transition-colors group-hover:bg-[var(--highlight)]">
          <GithubIcon className="w-4 h-4 text-background transition-colors group-hover:text-foreground" />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/johnny-lee-0a76819/"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        className="group"
      >
        <div className="w-6 h-6 rounded bg-[var(--primary)] flex items-center justify-center transition-colors group-hover:bg-[var(--highlight)]">
          <LinkedinIcon className="w-4 h-4 text-background transition-colors group-hover:text-foreground" />
        </div>
      </a>

      <a
        href="mailto:contactjohnlee@gmail.com?subject=Hello!"
        target="_blank"
        rel="noopener"
        aria-label="Email"
        className="group"
      >
        <div className="w-6 h-6 rounded bg-[var(--primary)] flex items-center justify-center transition-colors group-hover:bg-[var(--highlight)]">
          <Mail className="w-4 h-4 text-background transition-colors group-hover:text-foreground" />
        </div>
      </a>
      <div className="bg-[var(--primary)] w-0.25 h-20" />
    </div>
  );
}
