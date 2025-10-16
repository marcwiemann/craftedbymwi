import { notFound } from 'next/navigation';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/MDXContent';
import { ClockIcon, CalendarIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Marc Wiemann Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  });

  return (
    <div className="bg-background min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeftIcon className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zum Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog?tag=${tag.toLowerCase()}`}
                className="px-3 py-1 bg-secondary hover:bg-accent hover:text-white text-text-secondary text-sm rounded-lg border border-border transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-sm text-text-secondary pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <UserIcon className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="glass-strong rounded-2xl p-8 sm:p-12 border border-border mb-12">
          <MDXContent source={mdxSource} />
        </div>

        {/* Share & Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
          <div className="text-center sm:text-left">
            <p className="text-sm text-text-secondary mb-2">Artikel teilen</p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://marcwiemann.de/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-accent hover:text-white rounded-lg transition-all"
                aria-label="Auf Twitter teilen"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://marcwiemann.de/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-accent hover:text-white rounded-lg transition-all"
                aria-label="Auf LinkedIn teilen"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <Link
            href="/blog"
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-200"
          >
            Weitere Artikel
          </Link>
        </div>
      </article>
    </div>
  );
}
