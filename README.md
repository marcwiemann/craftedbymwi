# CraftedByMWI - Portfolio & Blog# CraftedByMWI - Portfolio & Blog



Ein modernes Portfolio und Blog im Apple-Design-Stil, gebaut mit Next.js 15, TypeScript und TailwindCSS.Ein modernes Portfolio und Blog im Apple-Design-Stil, gebaut mit Next.js 15, TypeScript und TailwindCSS.



## 🎨 Features## 🎨 Features



- **Apple-inspiriertes Design**: Minimalistisches UI mit Glassmorphism-Effekten, sanften Schatten und eleganter Typografie- **Apple-inspiriertes Design**: Minimalistisches UI mit Glassmorphism-Effekten, sanften Schatten und eleganter Typografie

- **Dark/Light Mode**: Nahtloser Wechsel zwischen hellen und dunklen Farbschemata- **Dark/Light Mode**: Nahtloser Wechsel zwischen hellen und dunklen Farbschemata

- **Responsive Design**: Optimiert für alle Bildschirmgrößen (Mobile, Tablet, Desktop)- **Responsive Design**: Optimiert für alle Bildschirmgrößen (Mobile, Tablet, Desktop)

- **Blog mit Markdown**: Vollständige Blogging-Funktionalität mit Syntax-Highlighting- **Blog mit Markdown**: Vollständige Blogging-Funktionalität mit Syntax-Highlighting

- **Projekt-Showcase**: Interaktive Projekt-Cards mit Live-Demos und GitHub-Links- **Projekt-Showcase**: Interaktive Projekt-Cards mit Live-Demos und GitHub-Links

- **Kontaktformular**: Validiertes Kontaktformular mit React Hook Form und Zod- **Kontaktformular**: Validiertes Kontaktformular mit React Hook Form und Zod

- **Performance**: Server Components, optimierte Bilder und schnelle Ladezeiten- **Performance**: Server Components, optimierte Bilder und schnelle Ladezeiten

- **SEO-optimiert**: Umfassende Metadaten und Open Graph Tags- **SEO-optimiert**: Umfassende Metadaten und Open Graph Tags



## 🛠️ Tech Stack## 🛠️ Tech Stack



### Core### Core

- **Next.js 15** - React Framework mit App Router

- **TypeScript** - Type-safe JavaScript- **Next.js 15** - React Framework mit App Router

- **TailwindCSS v4** - Utility-first CSS Framework- **TypeScript** - Type-safe JavaScript

- **React 19** - UI Library- **TailwindCSS v4** - Utility-first CSS Framework

- **React 19** - UI Library

### Features & Tools

- **next-mdx-remote** - MDX Unterstützung für Blog-Posts### Features & Tools

- **gray-matter** - YAML Frontmatter Parser

- **rehype-highlight** - Code Syntax-Highlighting- **next-mdx-remote** - MDX Unterstützung für Blog-Posts

- **react-hook-form** - Formular-Management- **gray-matter** - YAML Frontmatter Parser

- **zod** - Schema-Validierung- **rehype-highlight** - Code Syntax-Highlighting

- **@heroicons/react** - Moderne Icon-Library- **react-hook-form** - Formular-Management

- **clsx & tailwind-merge** - Class-Name-Utilities- **zod** - Schema-Validierung

- **@heroicons/react** - Moderne Icon-Library

## 📁 Projekt-Struktur- **clsx & tailwind-merge** - Class-Name-Utilities



```## 📁 Projekt-Struktur

craftedbymwi/

├── src/```

│   ├── app/                    # Next.js App Router Pagescraftedbymwi/

│   │   ├── layout.tsx          # Root Layout├── src/

│   │   ├── page.tsx            # Home Page│   ├── app/                    # Next.js App Router Pages

│   │   ├── blog/               # Blog Pages│   │   ├── layout.tsx          # Root Layout

│   │   ├── projects/           # Projects Showcase│   │   ├── page.tsx            # Home Page

│   │   └── contact/            # Contact Form│   │   ├── blog/               # Blog Pages

│   ├── components/             # React Components│   │   │   ├── page.tsx        # Blog List

│   ├── lib/                    # Utility Functions│   │   │   └── [slug]/         # Dynamic Blog Post

│   └── content/                # Markdown Content│   │   ├── projects/           # Projects Showcase

├── public/                     # Static Assets│   │   └── contact/            # Contact Form

└── package.json│   ├── components/             # React Components

```│   │   ├── Navigation.tsx      # Navigation Bar

│   │   ├── Footer.tsx          # Footer Component

## 🚀 Getting Started│   │   ├── ThemeProvider.tsx   # Dark Mode Provider

│   │   └── MDXContent.tsx      # MDX Renderer

### Prerequisites│   ├── lib/                    # Utility Functions

- Node.js 18.18 oder höher│   │   ├── utils.ts            # Helper Functions

- npm, yarn, pnpm oder bun│   │   └── blog.ts             # Blog Utilities

│   └── content/                # Content

### Installation│       └── blog/               # Markdown Blog Posts

├── public/                     # Static Assets

```bash│   └── images/                 # Images

# Repository klonen└── package.json

git clone https://github.com/yourusername/craftedbymwi.git```

cd craftedbymwi

## 🚀 Getting Started

# Dependencies installieren

npm install### Prerequisites



# Development Server starten- Node.js 18.18 oder höher

npm run dev- npm, yarn, pnpm oder bun



# Öffne http://localhost:3000### Installation

```

1. Repository klonen:

## 📝 Blog Posts erstellen

```bash

Blog Posts werden als Markdown-Dateien in `src/content/blog/` gespeichert:git clone https://github.com/yourusername/craftedbymwi.git

cd craftedbymwi

```markdown```

---

title: "Dein Post-Titel"2. Dependencies installieren:

description: "Eine kurze Beschreibung"

date: "2025-10-11"```bash

author: "Marc Wiemann"npm install

tags: ["Next.js", "React", "TypeScript"]# oder

featured: trueyarn install

---# oder

pnpm install

# Dein Content hier```



Schreibe deinen Blog-Inhalt mit Markdown...3. Development Server starten:

```

```bash

### Neue Posts hinzufügennpm run dev

1. Erstelle eine neue `.md` Datei in `src/content/blog/`# oder

2. Füge das Frontmatter hinzuyarn dev

3. Schreibe deinen Content# oder

4. Der Post erscheint automatisch in der Blog-Listepnpm dev

```

## 🎨 Anpassungen

4. Öffne [http://localhost:3000](http://localhost:3000) im Browser

### Farben ändern

Farben sind in `src/app/globals.css` definiert:## 📝 Blog Posts erstellen



```cssBlog Posts werden als Markdown-Dateien in `src/content/blog/` gespeichert.

:root {

  --accent: #0071e3;### Format

  --accent-hover: #0077ed;

  /* ... mehr Farben */Jeder Blog Post benötigt Frontmatter (YAML) am Anfang:

}

``````markdown

---

### Deine Informationentitle: "Dein Post-Titel"

- **Home Page**: `src/app/page.tsx`description: "Eine kurze Beschreibung"

- **Footer**: `src/components/Footer.tsx`date: "2025-10-11"

- **Navigation**: `src/components/Navigation.tsx`author: "Marc Wiemann"

- **Metadata**: `src/app/layout.tsx`tags: ["Next.js", "React", "TypeScript"]

featured: true

### Projekte hinzufügen---

Bearbeite das `projects` Array in `src/app/projects/page.tsx`

# Dein Content hier

## 🚢 Deployment

Schreibe deinen Blog-Inhalt mit Markdown...

### Vercel (Empfohlen)```

1. Push dein Repository zu GitHub

2. Gehe zu [vercel.com](https://vercel.com)### Neue Posts hinzufügen

3. Importiere dein Repository

4. Vercel konfiguriert alles automatisch1. Erstelle eine neue `.md` Datei in `src/content/blog/`

5. Deploy!2. Füge das Frontmatter hinzu

3. Schreibe deinen Content

### Netlify4. Der Post erscheint automatisch in der Blog-Liste

- Build Command: `npm run build`

- Publish Directory: `.next`## 🎨 Anpassungen



### Build für Production### Farben ändern



```bashFarben sind in `src/app/globals.css` definiert:

npm run build

npm start```css

```:root {

  --accent: #0071e3;

## 🧹 Linting  --accent-hover: #0077ed;

  /* ... mehr Farben */

```bash}

# ESLint ausführen```

npm run lint

### Deine Informationen

# TypeScript Check

npx tsc --noEmit- **Home Page**: Bearbeite `src/app/page.tsx`

```- **Footer**: Bearbeite `src/components/Footer.tsx`

- **Navigation**: Bearbeite `src/components/Navigation.tsx`

## 📦 Scripts- **Metadata**: Bearbeite `src/app/layout.tsx`



- `npm run dev` - Development Server mit Turbopack### Projekte hinzufügen

- `npm run build` - Production Build erstellen

- `npm start` - Production Server startenBearbeite das `projects` Array in `src/app/projects/page.tsx`:

- `npm run lint` - ESLint ausführen

```typescript

## 🤝 Beitragenconst projects = [

  {

Contributions sind willkommen!    id: 1,

    title: 'Dein Projekt',

1. Forke das Repository    description: 'Beschreibung...',

2. Erstelle einen Feature Branch    tags: ['React', 'TypeScript'],

3. Committe deine Changes    github: 'https://github.com/...',

4. Push zum Branch    demo: 'https://demo.com',

5. Öffne einen Pull Request    featured: true,

  },

## 👤 Autor  // ... mehr Projekte

];

**Marc Wiemann**```

- Website: [marcwiemann.de](https://marcwiemann.de)

- GitHub: [@marcwiemann](https://github.com/marcwiemann)## 🚢 Deployment

- LinkedIn: [Marc Wiemann](https://linkedin.com/in/marcwiemann)

### Vercel (Empfohlen)

## 🙏 Acknowledgments

1. Push dein Repository zu GitHub

- Design inspiriert von Apple's Design-System2. Gehe zu [vercel.com](https://vercel.com)

- Icons von [Heroicons](https://heroicons.com/)3. Importiere dein Repository

- Fonts von [Google Fonts](https://fonts.google.com/)4. Vercel konfiguriert alles automatisch

5. Deploy!

## 📄 Lizenz

### Netlify

MIT License - Siehe LICENSE für Details

1. Build Command: `npm run build`

---2. Publish Directory: `.next`

3. Environment Variables nach Bedarf setzen

**Entwickelt mit ❤️ und Next.js**

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
