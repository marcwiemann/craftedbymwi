import Link from 'next/link';
import { ArrowDownTrayIcon, ArrowRightIcon, BeakerIcon, CpuChipIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';

const techStack = [
  // Backend
  { name: 'C#', category: 'Backend' },
  { name: '.NET', category: 'Backend' },
  { name: 'ASP.NET Core', category: 'Backend' },
  { name: 'Entity Framework', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  // Frontend
  { name: 'Blazor', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Flutter', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  // Data & AI
  { name: 'Machine Learning', category: 'AI' },
  { name: 'NLP', category: 'AI' },
  { name: 'Local LLMs', category: 'AI' },
  { name: 'Function Calling', category: 'AI' },
  { name: 'Big Data', category: 'Data' },
  // Tools & DevOps
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
  { name: 'Azure', category: 'DevOps' },
  { name: 'REST APIs', category: 'DevOps' },
  // IoT & Automation
  { name: 'Raspberry Pi', category: 'IoT' },
  { name: 'Home Assistant', category: 'IoT' },
  { name: 'MQTT', category: 'IoT' },
];

const experiences = [
  {
    title: 'Master of Science - Big Data & Business Analytics',
    company: 'Hochschule / Uniklinik Düsseldorf',
    period: '2023 - 2025',
    description: 'Masterarbeit: "Utilizing Function Calling for Local Language Models in Rheumatology" - Kooperation mit Uniklinik Düsseldorf. Abschluss mit sehr gut.',
    icon: '🎓',
  },
  {
    title: 'Bachelor of Science - Fachinformatiker Anwendungsentwicklung',
    company: 'thyssenkrupp / Charité Berlin',
    period: '2019 - 2022',
    description: 'Duales Studium bei thyssenkrupp. Bachelorarbeit in Kooperation mit Charité Berlin im Bereich MedTech / Informatik.',
    icon: '🎓',
  },
  {
    title: 'Early Start',
    company: 'Self-Taught Developer',
    period: '2013 - 2019',
    description: 'Begann mit ca. 2013 zu programmieren. Frühe Projekte: Webdesign, WordPress, erste Freelance-Aufträge, App-Prototypen und Startup-Ideen.',
    icon: '💻',
  },
];

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-hover/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Hi, ich bin{' '}
                  <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                    Marc
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted font-medium">
                  Full-Stack Developer | AI & Neuroinformatics Enthusiast
                </p>
              </div>
              <p className="text-lg text-muted leading-relaxed max-w-xl">
                Spezialisiert auf <strong className="text-foreground">C#, .NET & Blazor</strong> mit Fokus auf <strong className="text-foreground">KI-Integration</strong>, <strong className="text-foreground">Function Calling</strong> und <strong className="text-foreground">Home Automation</strong>. 
                Leidenschaftlich an der Schnittstelle von Informatik, Neurowissenschaft und Machine Learning.
              </p>
              <div className="glass-strong rounded-xl p-4 border border-border inline-block">
                <p className="text-sm font-mono text-muted">
                  <span className="text-accent">$</span> lebensmotto: <span className="text-foreground font-semibold">"Build. Learn. Evolve."</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                >
                  Projekte ansehen
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-tertiary text-foreground font-medium rounded-xl transition-all duration-200 hover:scale-105 border border-border"
                >
                  Blog lesen
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-hover rounded-3xl blur-3xl opacity-20 animate-pulse" />
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border-4 border-border shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent-hover/20 flex items-center justify-center">
                    <span className="text-8xl font-bold text-accent/50">M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Tech Focus
            </h2>
            <p className="text-xl text-muted">
              Meine Schwerpunkte in Technologie und Innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI & ML */}
            <div className="glass-strong rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center mb-6">
                <BeakerIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                KI & Machine Learning
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Spezialisiert auf lokale LLMs, Function Calling und Tool-Integration. Masterarbeit zu "Function Calling in Local LLMs for Rheumatology".
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Local LLMs & NLP</li>
                <li>• Tool/Function Calling</li>
                <li>• ML in Healthcare</li>
                <li>• Big Data Analytics</li>
              </ul>
            </div>

            {/* Full-Stack Development */}
            <div className="glass-strong rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center mb-6">
                <CodeBracketSquareIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Full-Stack Development
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Über 10 Jahre Erfahrung in der Softwareentwicklung. Fokus auf C#, .NET, Blazor und moderne Web-Technologien.
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• C# & .NET / ASP.NET Core</li>
                <li>• Blazor, React, Flutter</li>
                <li>• REST APIs & Microservices</li>
                <li>• Entity Framework, SQL</li>
              </ul>
            </div>

            {/* IoT & Automation */}
            <div className="glass-strong rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center mb-6">
                <CpuChipIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                IoT & Home Automation
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Integration von KI-Agents in Smart-Home-Systeme. Entwicklung von Automatisierungslösungen mit Raspberry Pi und Home Assistant.
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Raspberry Pi & Mikrocontroller</li>
                <li>• Home Assistant Integration</li>
                <li>• AI-gesteuerte Automation</li>
                <li>• MQTT, Sensoren, IoT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Mein Werdegang
            </h2>
            <p className="text-xl text-muted">
              Von 2013 bis heute - eine Reise durch Tech & KI
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-muted font-mono mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-3">{exp.company}</p>
                    <p className="text-muted leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Tech Stack
            </h2>
            <p className="text-xl text-muted">
              Technologien, mit denen ich arbeite
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="glass-strong px-5 py-3 rounded-xl border border-border hover:border-accent hover:scale-105 transition-all duration-200"
              >
                <span className="text-sm font-medium text-foreground">
                  {tech.name}
                </span>
                <span className="text-xs text-muted ml-2">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 border border-border">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Interessiert an Zusammenarbeit oder Austausch?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Ob es um KI-Integration, Full-Stack-Projekte oder spannende Tech-Diskussionen geht – 
            ich bin immer offen für neue Ideen und Herausforderungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-tertiary text-foreground font-medium rounded-xl transition-all duration-200 hover:scale-105 border border-border"
            >
              Blog entdecken
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
