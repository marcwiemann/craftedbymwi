import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marc Wiemann - Full-Stack Developer & Designer",
  description: "Portfolio & Blog von Marc Wiemann. Full-Stack Developer spezialisiert auf moderne Web-Technologien, React, Next.js und TypeScript.",
  keywords: ["Marc Wiemann", "Full-Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Marc Wiemann" }],
  creator: "Marc Wiemann",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://marcwiemann.de",
    title: "Marc Wiemann - Full-Stack Developer & Designer",
    description: "Portfolio & Blog von Marc Wiemann",
    siteName: "Marc Wiemann Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Wiemann - Full-Stack Developer & Designer",
    description: "Portfolio & Blog von Marc Wiemann",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
