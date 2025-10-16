import Link from 'next/link';
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TailwindCSS', category: 'Styling' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Python', category: 'Language' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'Tools' },
];

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Company GmbH',
    period: '2022 - Present',
    description: 'Leading development of modern web applications using React, Next.js, and TypeScript.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects with focus on performance and UX.',
  },
  {
    title: 'Junior Developer',
    company: 'Startup Inc.',
    period: '2018 - 2020',
    description: 'Started career building responsive web applications and learning modern tech stacks.',
  },
];

export default function HomePage() {
  return (
    <div className="bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-hover/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Hi, ich bin{' '}
                  <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                    Marc Wiemann
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-text-secondary font-medium">
                  Full-Stack Developer & Designer
                </p>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                Ich entwickle moderne und benutzerfreundliche Web-Anwendungen mit
                Fokus auf Performance, Skalierbarkeit und exzellenter User Experience.
                Meine Leidenschaft ist es, komplexe Probleme in einfache, elegante
                Lösungen zu verwandeln.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                >
                  Projekte ansehen
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-tertiary text-foreground font-medium rounded-xl transition-all duration-200 hover:scale-105 border border-border"
                >
                  <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                  CV herunterladen
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-hover rounded-3xl blur-3xl opacity-20 animate-pulse" />
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border-4 border-border shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent-hover/20 flex items-center justify-center">
                    <span className="text-8xl font-bold text-accent/50">MW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
