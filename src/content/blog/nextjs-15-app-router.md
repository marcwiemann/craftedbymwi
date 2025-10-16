---
title: "Getting Started with Next.js 15 and App Router"
description: "Learn how to build modern web applications with Next.js 15, the App Router, and Server Components for optimal performance."
date: "2025-10-01"
author: "Marc Wiemann"
tags: ["Next.js", "React", "TypeScript", "Web Development"]
featured: true
---

# Getting Started with Next.js 15 and App Router

Next.js 15 bringt viele spannende Features und Verbesserungen. In diesem Artikel schauen wir uns an, wie man mit dem neuen App Router moderne Web-Anwendungen baut.

## Was ist neu in Next.js 15?

Next.js 15 ist die neueste Version des beliebten React-Frameworks und bringt zahlreiche Verbesserungen:

- **App Router**: Ein neues Routing-System basierend auf React Server Components
- **Turbopack**: Schnellerer Development-Server und Build-Prozess
- **Verbesserte Performance**: Optimierte Ladezeiten und besseres Caching
- **TypeScript Support**: Noch bessere TypeScript-Integration

## Der App Router

Der App Router ist ein grundlegend neues Konzept in Next.js. Hier sind die wichtigsten Unterschiede:

```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 15!</h1>
      <p>This is a Server Component by default.</p>
    </div>
  );
}
```

### Server Components vs. Client Components

Ein wichtiges Konzept sind Server Components:

- **Server Components** (Standard): Werden auf dem Server gerendert
- **Client Components**: Benötigen die `'use client'` Directive

```typescript
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## Routing und Navigation

Das Routing im App Router ist file-system basiert:

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/blog/[slug]/page.tsx` → `/blog/my-post`

### Layouts

Layouts ermöglichen es, UI zwischen mehreren Routen zu teilen:

```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>Navigation</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
```

## Best Practices

1. **Server Components bevorzugen**: Nutze Server Components wo möglich
2. **Data Fetching**: Nutze die neuen Fetch-APIs mit Caching
3. **Loading States**: Verwende `loading.tsx` für bessere UX
4. **Error Handling**: Nutze `error.tsx` für Error Boundaries

## Fazit

Next.js 15 ist ein großer Schritt nach vorne. Der App Router mag anfangs komplex erscheinen, aber die Vorteile in Performance und Developer Experience sind enorm.

Happy Coding! 🚀
