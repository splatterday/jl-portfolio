'use client';

import { useState } from 'react';
import { Menu, X, GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-secondary/90 h-auto min-h-[18rem] px-6 py-8 flex flex-col gap-6 items-center justify-start">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4">
            <X className="w-6 h-6" />
            </button>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            <div className="flex justify-center gap-4 pt-4">
                <a href="https://github.com/splatterday" target="_blank" rel="noopener">
                <GithubIcon className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/johnny-lee-0a76819/" target="_blank" rel="noopener">
                <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="mailto:contactjohnlee@gmail.com">
                <Mail className="w-4 h-4" />
                </a>
            </div>
            </div>
        )}
        </div>
    );
}
