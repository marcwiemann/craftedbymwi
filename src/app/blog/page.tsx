import Link from 'next/link';
import { getAllPosts, getAllTags } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { ClockIcon, TagIcon } from '@heroicons/react/24/outline';

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();
  const featuredPosts = posts.filter((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <div className="bg-background min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Gedanken, Tutorials und Einblicke über Web-Entwicklung, Design und
            moderne Technologien.
          </p>
        </div>

        {/* Tags */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <Link
            href="/blog"
            className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Alle
          </Link>
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag.toLowerCase()}`}
              className="px-4 py-2 bg-secondary hover:bg-tertiary text-foreground rounded-lg text-sm font-medium transition-colors border border-border"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Featured
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-strong rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300 group block"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                      Featured
                    </span>
                    <span className="text-sm text-subtle">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted mb-6 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{post.readingTime} min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TagIcon className="h-4 w-4" />
                      <span>{post.tags.slice(0, 2).join(', ')}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Alle Artikel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-strong rounded-xl p-6 border border-border hover:border-accent hover:scale-105 transition-all duration-300 group block"
              >
                <div className="text-sm text-subtle mb-3">
                  {formatDate(post.date)}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-muted text-xs rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-sm text-subtle">
                  <ClockIcon className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 glass-strong rounded-2xl p-12 border border-border text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Bleib auf dem Laufenden
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Erhalte die neuesten Artikel direkt in dein Postfach. Kein Spam,
            versprochen!
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="deine@email.de"
              className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent text-foreground"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-200"
            >
              Abonnieren
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
