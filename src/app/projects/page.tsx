import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'Function Calling for Local LLMs in Rheumatology',
    description: 'Masterarbeit (2025, Note: Sehr gut): Entwicklung eines Systems zur Integration von Tool-Calling in lokale LLMs für medizinische Datenanalyse. Kooperation mit Uniklinik Düsseldorf.',
    image: '/images/project-1.jpg',
    tags: ['Python', 'LLMs', 'NLP', 'Function Calling', 'Healthcare', 'Research'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI-gesteuerte Home Automation',
    description: 'Intelligentes Smart-Home-System mit lokalem LLM und Function Calling. Steuerung von Home Assistant über natürliche Sprache - vollständig lokal ohne Cloud.',
    image: '/images/project-2.jpg',
    tags: ['Python', 'Local LLM', 'Home Assistant', 'IoT', 'Raspberry Pi', 'MQTT'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'MedTech Anwendung (Bachelorarbeit)',
    description: 'Bachelorarbeit (2022) in Kooperation mit Charité Berlin: Entwicklung einer medizinischen Anwendung im Bereich Informatik und Healthcare.',
    image: '/images/project-3.jpg',
    tags: ['C#', '.NET', 'Healthcare', 'Research'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Blazor Enterprise Dashboard',
    description: 'Full-Stack Enterprise-Dashboard mit Blazor WebAssembly, ASP.NET Core Backend und Entity Framework. Clean Architecture mit CQRS Pattern.',
    image: '/images/project-4.jpg',
    tags: ['Blazor', 'C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Flutter Cross-Platform App',
    description: 'Mobile App mit Flutter für iOS und Android. REST API Integration, lokale Datenbank mit SQLite, und moderne UI/UX.',
    image: '/images/project-5.jpg',
    tags: ['Flutter', 'Dart', 'REST API', 'SQLite', 'Mobile'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Smart Home Sensoren & Automatisierung',
    description: 'Verschiedene IoT-Projekte mit Raspberry Pi, ESP32, und Sensoren. Automatisierungen mit Home Assistant, MQTT, und custom Microcontroller-Code.',
    image: '/images/project-6.jpg',
    tags: ['Raspberry Pi', 'ESP32', 'MQTT', 'Python', 'C++', 'IoT'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 7,
    title: 'REST API mit ASP.NET Core',
    description: 'Moderne REST API mit Clean Architecture, JWT Authentication, Swagger/OpenAPI, Entity Framework Core und PostgreSQL.',
    image: '/images/project-7.jpg',
    tags: ['ASP.NET Core', 'C#', 'PostgreSQL', 'JWT', 'Docker', 'REST'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 8,
    title: 'Data Analytics Pipeline',
    description: 'Big Data Processing Pipeline für Healthcare-Daten. ETL-Prozesse, Data Cleaning, und Predictive Analytics mit Python und Machine Learning.',
    image: '/images/project-8.jpg',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Big Data', 'ML', 'Analytics'],
    github: '#',
    demo: '#',
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
            Von KI-Forschung über Smart-Home-Automatisierung bis zu Enterprise-Anwendungen 
            mit C#/.NET - eine Auswahl meiner Arbeiten an der Schnittstelle von 
            Software Engineering, AI und IoT.
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
