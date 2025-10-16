'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  subject: z.string().min(5, 'Betreff muss mindestens 5 Zeichen lang sein'),
  message: z.string().min(20, 'Nachricht muss mindestens 20 Zeichen lang sein'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

const contactInfo = [
  {
    icon: <EnvelopeIcon className="h-6 w-6" />,
    title: 'Email',
    content: 'hello@marcwiemann.de',
    href: 'mailto:hello@marcwiemann.de',
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    title: 'Telefon',
    content: '+49 123 456 7890',
    href: 'tel:+491234567890',
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: 'Standort',
    content: 'Deutschland',
    href: null,
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form data:', data);
    setIsSuccess(true);
    reset();
    setIsSubmitting(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-background min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Kontakt
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Hast du Fragen, ein Projekt im Sinn oder möchtest einfach nur Hallo sagen?
            Ich freue mich auf deine Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="glass-strong rounded-2xl p-8 border border-border text-center group hover:border-accent transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-xl mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {info.title}
              </h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-text-secondary">{info.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-strong rounded-2xl p-8 sm:p-12 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Nachricht senden
            </h2>

            {isSuccess && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400">
                Vielen Dank für deine Nachricht! Ich werde mich so schnell wie möglich bei dir melden.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent text-foreground transition-colors"
                  placeholder="Dein Name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-Mail *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent text-foreground transition-colors"
                  placeholder="deine@email.de"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Betreff *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent text-foreground transition-colors"
                  placeholder="Worum geht es?"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nachricht *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent text-foreground transition-colors resize-none"
                  placeholder="Deine Nachricht..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 hover:scale-105"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </form>
          </div>

          {/* Social & Additional Info */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="glass-strong rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Folge mir
              </h2>
              <p className="text-text-secondary mb-6">
                Verbinde dich mit mir auf Social Media und bleib auf dem Laufenden
                über neue Projekte und Artikel.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-secondary hover:bg-accent hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-strong rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Verfügbarkeit
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-text-secondary">
                    Aktuell verfügbar für neue Projekte
                  </span>
                </div>
                <p className="text-text-secondary text-sm">
                  Ich antworte in der Regel innerhalb von 24 Stunden. Für dringende
                  Anfragen kannst du mich auch direkt per E-Mail oder Telefon erreichen.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="glass-strong rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Häufige Fragen
              </h2>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Wie lange dauert ein typisches Projekt?
                  </h3>
                  <p className="text-text-secondary">
                    Die Dauer variiert je nach Umfang, typischerweise zwischen 2-12 Wochen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Arbeitest du remote?
                  </h3>
                  <p className="text-text-secondary">
                    Ja, ich arbeite hauptsächlich remote, bin aber auch für persönliche
                    Meetings verfügbar.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Welche Technologien nutzt du?
                  </h3>
                  <p className="text-text-secondary">
                    Hauptsächlich React, Next.js, TypeScript, Node.js und moderne
                    Cloud-Technologien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
