import { Link } from 'react-router-dom'
import type { BlogPost } from '@/content/blog'
import { formatDate } from '@/lib/utils'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-surface flex flex-col overflow-hidden transition-shadow hover:shadow-md">
      <Link to={`/blog/${post.slug}`}>
        <img
          src={post.coverImage}
          alt=""
          className="aspect-[16/10] w-full object-cover"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time className="mb-2 text-xs text-muted">{formatDate(post.publishedAt)}</time>
        <Link to={`/blog/${post.slug}`}>
          <h2
            className="mb-3 text-xl font-bold leading-snug text-heading hover:text-accent"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {post.title}
          </h2>
        </Link>
        <p className="mb-6 flex-1 text-sm leading-relaxed">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex w-fit rounded-full bg-dark px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Read More
        </Link>
      </div>
    </article>
  )
}
