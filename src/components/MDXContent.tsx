'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { cn } from '@/lib/utils';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'text-4xl font-bold text-foreground mb-6 mt-8 scroll-mt-20',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'text-3xl font-bold text-foreground mb-4 mt-8 scroll-mt-20',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'text-2xl font-bold text-foreground mb-3 mt-6 scroll-mt-20',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'text-xl font-bold text-foreground mb-3 mt-6 scroll-mt-20',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        'text-text-secondary leading-relaxed mb-6',
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        'list-disc list-inside mb-6 space-y-2 text-text-secondary',
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        'list-decimal list-inside mb-6 space-y-2 text-text-secondary',
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn('ml-4', className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        'border-l-4 border-accent pl-6 italic my-6 text-text-secondary',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className?.includes('language-');
    
    if (isInline) {
      return (
        <code
          className={cn(
            'px-1.5 py-0.5 bg-secondary border border-border rounded text-sm font-mono text-accent',
            className
          )}
          {...props}
        />
      );
    }
    
    return (
      <code
        className={cn(
          'block bg-secondary border border-border rounded-xl p-6 overflow-x-auto my-6 text-sm font-mono',
          className
        )}
        {...props}
      />
    );
  },
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'bg-secondary border border-border rounded-xl p-6 overflow-x-auto my-6',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        'text-accent hover:text-accent-hover underline underline-offset-4 transition-colors',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn('font-bold text-foreground', className)}
      {...props}
    />
  ),
  em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em
      className={cn('italic', className)}
      {...props}
    />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={cn('border-border my-8', className)}
      {...props}
    />
  ),
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
