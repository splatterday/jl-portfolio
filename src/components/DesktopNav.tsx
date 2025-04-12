'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function DesktopNav() {
  return (
    <div className="flex items-center gap-6 text-sm font-mono">
      <a href="#about" className="hover:text-primary"><span className="text-accent">01.</span> About</a>
      <a href="#experience" className="hover:text-primary"><span className="text-accent">02.</span> Experience</a>
      <a href="#projects" className="hover:text-primary"><span className="text-accent">03.</span> Projects</a>
      <a href="#contact" className="hover:text-primary"><span className="text-accent">04.</span> Contact</a>
      <Link href="/jl_resume_2025.pdf" target="_blank" rel="noopener">
        <Button variant="outline" size="sm" className="ml-2 text-xs font-semibold">
          Resume
        </Button>
      </Link>
    </div>
  );
}
