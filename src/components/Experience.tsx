'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import FadeInOnScroll from './FadeInScroll';
import { SkillsTable } from './SkillsTable';
import { ChevronRight } from 'lucide-react';

const experience = [
    {
        company: 'Enquizit (CDW)',
        role: 'Senior Front-End Engineer',
        duration: 'Feb 2023 – Oct 2024',
        details: [
            'Built features for the CDC’s National Electronic Disease Surveillance System (NEDSS), improving reporting and monitoring of infectious diseases.',
            'Integrated with REST APIs (Java Spring Boot) for real-time data reporting.',
            'Led accessibility initiatives using ARIA and WCAG standards to improve screen reader support.',
            'Partnered with UX to translate research insights into actionable dev tasks.',
            'Led a team of 2 engineers on a patient record filtering UI, reducing data retrieval time.',
            'Maintained 95% unit test coverage using Jest for robust features.',
        ],
        tech: ['React', 'TypeScript', 'Jest', 'SSR', 'WCAG Accessibility', 'UX Research'],
    },
    {
        company: 'BoldScience',
        role: 'Front-End Engineer',
        duration: 'Mar – Nov 2022',
        details: [
            'Led front-end work for an AdComms platform in a fast-paced agency environment.',
            'Built React components interfacing with a Node.js/Express backend via REST & GraphQL.',
            'Implemented user auth, record search/sort/update, and drag-and-drop file uploads using AWS S3 and Lambda.',
            'Delivered weekly stakeholder demos on one-week sprint cycles.',
        ],
        tech: ['React', 'Node.js', 'GraphQL', 'AWS S3', 'Lambda', 'Jest'],
    },
    {
        company: 'Overpass',
        role: 'Senior Front-End Developer',
        duration: 'Mar 2020 – Dec 2021',
        details: [
            'Relaunched internal design system with interactive component library.',
            'Created code-quality guidelines to unify standards across teams.',
            'Refactored application components for clarity and performance.',
            'Implemented Jest unit tests and Cypress E2E tests to ensure reliability.',
        ],
        tech: ['Aurelia/Angular', 'Jest', 'Cypress', 'Storybook', 'SCSS'],
    },
    {
        company: 'Hachette Book Group',
        role: 'Front-End Developer',
        duration: 'Oct 2018 – Oct 2019',
        details: [
            'Designed and launched WordPress-based author and imprint websites.',
            'Created internal marketing tools to streamline updates.',
            'Used PHP, HTML5, SCSS, and JavaScript to build responsive, branded experiences.',
        ],
        tech: ['WordPress', 'PHP', 'SCSS', 'JavaScript'],
    },
    {
        company: 'Penguin Random House',
        role: 'Ebook Production Manager',
        duration: 'Oct 2012 – Oct 2018',
        details: [
            'Produced licensed ebooks with Disney/Star Wars and Little Golden Books.',
            'Advanced adaptive design and foreign language support across formats.',
            'Worked on titles by Jhumpa Lahiri, Garth Risk Hallberg, and Lena Dunham.',
            'Developed high-res image strategy adopted company-wide.',
        ],
        tech: ['XML', 'Epub', 'Photoshop', 'InDesign'],
    },
]
  

export default function Experience() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const current = experience[selectedIndex]

    return (
        <section
            id="experience"
            className="min-h-screen flex items-center justify-center pt-18 px-2 sm:px-8 md:px-12 md:pt-18"
        >
            <FadeInOnScroll>
                <div className=" w-full md:max-w-[1000px] md:min-h-[50%] md:max-h-[60%] m-auto grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
                    <div className="md:hidden w-full overflow-x-auto">
                        <div className="flex gap-4 pb-2 border-b border-border mb-4 min-w-max">
                            {experience.map((item, index) => (
                                <button
                                key={item.company}
                                className={cn(
                                    'text-sm whitespace-nowrap font-mono text-muted-foreground px-2 py-1',
                                    index === selectedIndex && 'text-primary font-semibold underline'
                                )}
                                onClick={() => setSelectedIndex(index)}
                                >
                                {item.company}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:grid md:grid-cols-[200px_1fr] gap-8 items-start">
                        <div className="space-y-2 border-l border-border pl-4">
                            {experience.map((item, index) => (
                            <button
                                key={item.company}
                                className={cn(
                                'block cursor-pointer text-sm font-mono text-muted-foreground hover:text-foreground transition',
                                index === selectedIndex &&
                                    'text-primary font-semibold border-l-2 border-primary pl-2'
                                )}
                                onClick={() => setSelectedIndex(index)}
                            >
                                {item.company}
                            </button>
                            ))}
                        </div>
                    </div>
                    <div className="pl-4 md:pl-0 mx-auto max-w-prose space-y-4 h-full flex flex-col justify-start overflow-y-auto">
                        <AnimatePresence mode="wait">
                        <motion.div
                            key={current.company}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            <h3 className="text-lg font-bold text-foreground">
                            {current.role}{' '}
                            <span className="text-muted-foreground font-medium">
                                @ {current.company}
                            </span>
                            </h3>
                            <p className="text-xs font-mono text-muted-foreground">
                            {current.duration}
                            </p>

                            <ul className="list-none ml-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
                            {current.details.map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span
                                        className="text-muted-foreground mt-1"
                                        aria-hidden="true"
                                    >
                                        <ChevronRight className="w-3 h-3 mt-0.5 font-mono text-muted-foreground" aria-hidden="true" />
                                        </span>{point}</li>
                            ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-2">
                            {current.tech.map((t) => (
                                <span
                                key={t}
                                className="text-xs font-mono bg-muted px-2 py-1 rounded-md text-muted-foreground"
                                >
                                {t}
                                </span>
                            ))}
                            </div>
                        </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <SkillsTable />
            </FadeInOnScroll>
        </section>
    );
}
