'use client';

import { useState } from 'react';
import { Menu, X, GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-screen bg-primary/90 text-background shadow-md p-6 flex flex-col items-center gap-4 z-50">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <div className="flex justify-center gap-4 pt-4">
            <a href="https://github.com/yourhandle" target="_blank" rel="noopener">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener">
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
