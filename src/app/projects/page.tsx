import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured online shop with payment integration, product management, and admin dashboard. Built with Next.js, TypeScript, and Stripe.',
    image: '/images/project-1.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with real-time data visualization and reporting features.',
    image: '/images/project-2.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management tool with team features, real-time updates, and project tracking.',
    image: '/images/project-3.jpg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with location-based forecasts, interactive maps, and detailed weather data.',
    image: '/images/project-4.jpg',
    tags: ['React', 'API Integration', 'Mapbox', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio CMS',
    description: 'Custom content management system for creative portfolios with drag-and-drop builder and templates.',
    image: '/images/project-5.jpg',
    tags: ['Next.js', 'Sanity.io', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking application with workout plans, progress tracking, and nutrition calculator.',
    image: '/images/project-6.jpg',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="bg-background min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Meine Projekte
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Eine Auswahl meiner neuesten Arbeiten und Side-Projects. Jedes Projekt
            zeigt meine Leidenschaft für sauberen Code, modernes Design und
            herausragende User Experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-strong rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-accent/20 to-accent-hover/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-hover/10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-6xl font-bold text-accent/30 relative z-10">
                    {project.id}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-muted text-sm rounded-lg border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-secondary hover:bg-accent hover:text-white text-foreground font-medium rounded-lg transition-all duration-200 border border-border group/link"
                    >
                      <CodeBracketIcon className="h-5 w-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-200 group/link"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Weitere Projekte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="glass-strong rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:scale-105 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent-hover/10 flex items-center justify-center">
                  <span className="text-5xl font-bold text-accent/20">
                    {project.id}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary text-muted text-xs rounded border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-secondary text-muted text-xs rounded border border-border">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-secondary hover:bg-tertiary text-foreground text-sm font-medium rounded-lg transition-all duration-200 border border-border"
                    >
                      <CodeBracketIcon className="h-4 w-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-all duration-200"
                    >
                      Demo
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center glass-strong rounded-2xl p-12 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interessiert an einer Zusammenarbeit?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Ich bin immer offen für neue Projekte und spannende Herausforderungen.
            Lass uns gemeinsam etwas Großartiges schaffen!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
}
