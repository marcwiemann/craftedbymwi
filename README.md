# CraftedByMWI - Portfolio & Blog

Ein modernes Portfolio und Blog im Apple-Design-Stil, gebaut mit Next.js 15, TypeScript und TailwindCSS.

## 🎨 Features

- **Apple-inspiriertes Design**: Minimalistisches UI mit Glassmorphism-Effekten, sanften Schatten und eleganter Typografie
- **Dark/Light Mode**: Nahtloser Wechsel zwischen hellen und dunklen Farbschemata
- **Responsive Design**: Optimiert für alle Bildschirmgrößen (Mobile, Tablet, Desktop)
- **Blog mit Markdown**: Vollständige Blogging-Funktionalität mit Syntax-Highlighting
- **Projekt-Showcase**: Interaktive Projekt-Cards mit Live-Demos und GitHub-Links
- **Kontaktformular**: Validiertes Kontaktformular mit React Hook Form und Zod
- **Performance**: Server Components, optimierte Bilder und schnelle Ladezeiten
- **SEO-optimiert**: Umfassende Metadaten und Open Graph Tags

## 🛠️ Tech Stack

### Core
- **Next.js 15** - React Framework mit App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS v4** - Utility-first CSS Framework
- **React 19** - UI Library

### Features & Tools
- **next-mdx-remote** - MDX Unterstützung für Blog-Posts
- **gray-matter** - YAML Frontmatter Parser
- **rehype-highlight** - Code Syntax-Highlighting
- **react-hook-form** - Formular-Management
- **zod** - Schema-Validierung
- **@heroicons/react** - Moderne Icon-Library
- **clsx & tailwind-merge** - Class-Name-Utilities

## 📁 Projekt-Struktur

```
craftedbymwi/
├── src/
│   ├── app/                    # Next.js App Router Pages
│   │   ├── layout.tsx          # Root Layout
│   │   ├── page.tsx            # Home Page
│   │   ├── blog/               # Blog Pages
│   │   │   ├── page.tsx        # Blog List
│   │   │   └── [slug]/         # Dynamic Blog Post
│   │   ├── projects/           # Projects Showcase
│   │   └── contact/            # Contact Form
│   ├── components/             # React Components
│   │   ├── Navigation.tsx      # Navigation Bar
│   │   ├── Footer.tsx          # Footer Component
│   │   ├── ThemeProvider.tsx   # Dark Mode Provider
│   │   └── MDXContent.tsx      # MDX Renderer
│   ├── lib/                    # Utility Functions
│   │   ├── utils.ts            # Helper Functions
│   │   └── blog.ts             # Blog Utilities
│   └── content/                # Content
│       └── blog/               # Markdown Blog Posts
├── public/                     # Static Assets
│   └── images/                 # Images
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18 oder höher
- npm, yarn, pnpm oder bun

### Installation

1. Repository klonen:
```bash
git clone https://github.com/yourusername/craftedbymwi.git
cd craftedbymwi
```

2. Dependencies installieren:
```bash
npm install
# oder
yarn install
# oder
pnpm install
```

3. Development Server starten:
```bash
npm run dev
# oder
yarn dev
# oder
pnpm dev
```

4. Öffne [http://localhost:3000](http://localhost:3000) im Browser

## 📝 Blog Posts erstellen

Blog Posts werden als Markdown-Dateien in `src/content/blog/` gespeichert.

### Format

Jeder Blog Post benötigt Frontmatter (YAML) am Anfang:

```markdown
---
title: "Dein Post-Titel"
description: "Eine kurze Beschreibung"
date: "2025-10-11"
author: "Marc Wiemann"
tags: ["Next.js", "React", "TypeScript"]
featured: true
---

# Dein Content hier

Schreibe deinen Blog-Inhalt mit Markdown...
```

### Neue Posts hinzufügen

1. Erstelle eine neue `.md` Datei in `src/content/blog/`
2. Füge das Frontmatter hinzu
3. Schreibe deinen Content
4. Der Post erscheint automatisch in der Blog-Liste

## 🎨 Anpassungen

### Farben ändern

Farben sind in `src/app/globals.css` definiert:

```css
:root {
  --accent: #0071e3;
  --accent-hover: #0077ed;
  /* ... mehr Farben */
}
```

### Deine Informationen

- **Home Page**: Bearbeite `src/app/page.tsx`
- **Footer**: Bearbeite `src/components/Footer.tsx`
- **Navigation**: Bearbeite `src/components/Navigation.tsx`
- **Metadata**: Bearbeite `src/app/layout.tsx`

### Projekte hinzufügen

Bearbeite das `projects` Array in `src/app/projects/page.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Dein Projekt',
    description: 'Beschreibung...',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/...',
    demo: 'https://demo.com',
    featured: true,
  },
  // ... mehr Projekte
];
```

## 🚢 Deployment

### Vercel (Empfohlen)

1. Push dein Repository zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Importiere dein Repository
4. Vercel konfiguriert alles automatisch
5. Deploy!

### Netlify

1. Build Command: `npm run build`
2. Publish Directory: `.next`
3. Environment Variables nach Bedarf setzen

### Andere Plattformen

Für andere Deployment-Optionen siehe die [Next.js Deployment Documentation](https://nextjs.org/docs/app/getting-started/deploying).

## 📦 Build für Production

```bash
npm run build
npm start
```

## 🧹 Linting & Formatting

```bash
# ESLint ausführen
npm run lint

# TypeScript Check
npx tsc --noEmit
```

## 📦 Scripts

- `npm run dev` - Development Server mit Turbopack
- `npm run build` - Production Build erstellen
- `npm start` - Production Server starten
- `npm run lint` - ESLint ausführen

## 🤝 Beitragen

Contributions sind willkommen! Bitte:

1. Forke das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert. Siehe `LICENSE` für Details.

## 👤 Autor

**Marc Wiemann**

- Website: [marcwiemann.de](https://marcwiemann.de)
- GitHub: [@marcwiemann](https://github.com/marcwiemann)
- LinkedIn: [Marc Wiemann](https://linkedin.com/in/marcwiemann)

## 🙏 Acknowledgments

- Design inspiriert von Apple's Design-System
- Icons von [Heroicons](https://heroicons.com/)
- Fonts von [Google Fonts](https://fonts.google.com/)

---

**Entwickelt mit ❤️ und Next.js**
