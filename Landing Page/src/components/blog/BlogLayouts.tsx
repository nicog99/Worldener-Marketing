import { Link } from 'react-router-dom'
import type { BlogPost } from '@/content/blog'
import { formatDate } from '@/lib/utils'

export function EditorialLayout({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="mb-10">
        <img
          src={post.coverImage}
          alt=""
          className="mb-8 aspect-[21/9] w-full rounded-[var(--radius-card)] object-cover"
        />
        <time className="text-sm text-muted">{formatDate(post.publishedAt)}</time>
        <h1
          className="mt-2 text-3xl font-bold leading-tight text-heading md:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-muted">By {post.author}</p>
      </header>

      {post.pullQuote && (
        <blockquote
          className="mb-10 border-l-4 border-primary pl-6 text-lg italic leading-relaxed text-heading md:text-xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {post.pullQuote}
        </blockquote>
      )}

      <div className="prose-spacing mx-auto max-w-2xl space-y-6 text-base leading-relaxed">
        {post.body?.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export function FeatureLayout({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="mb-12 text-center">
        <time className="text-sm text-muted">{formatDate(post.publishedAt)}</time>
        <h1
          className="mx-auto mt-2 max-w-3xl text-3xl font-bold leading-tight text-heading md:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {post.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-body">
          {post.excerpt}
        </p>
        <p className="mt-3 text-sm text-muted">By {post.author}</p>
      </header>

      <img
        src={post.coverImage}
        alt=""
        className="mb-14 aspect-[21/9] w-full rounded-[var(--radius-card)] object-cover"
      />

      <div className="space-y-16">
        {post.sections?.map((section, index) => (
          <div
            key={section.title}
            className={`grid items-center gap-8 md:grid-cols-2 ${
              index % 2 === 1 ? 'md:[direction:rtl]' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'md:[direction:ltr]' : ''}>
              <span
                className="mb-2 inline-block text-sm font-bold text-accent"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2
                className="mb-4 text-2xl font-bold text-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {section.title}
              </h2>
              <p className="leading-relaxed">{section.content}</p>
            </div>
            {section.image && (
              <img
                src={section.image}
                alt=""
                className={`rounded-[var(--radius-card)] object-cover ${
                  index % 2 === 1 ? 'md:[direction:ltr]' : ''
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

export function BlogPostBackLink() {
  return (
    <Link
      to="/blog"
      className="mb-8 inline-flex text-sm font-medium text-accent hover:underline"
    >
      ← Back to Journal
    </Link>
  )
}
