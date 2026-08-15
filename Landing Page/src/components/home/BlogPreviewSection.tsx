import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '@/content/blog'
import { formatDate } from '@/lib/utils'
import { ScrollReveal, StaggerItem, StaggerReveal } from '@/components/ui/ScrollReveal'

export function BlogPreviewSection() {
  const posts = BLOG_POSTS.slice(0, 4)

  return (
    <section id="blog-preview" className="bg-white py-20 md:py-28">
      <div className="container-main">
        <ScrollReveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-label mb-3">Journal</p>
            <h2 className="section-heading">Get inspired for your next adventure.</h2>
          </div>
          <Link
            to="/blog"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-heading transition-opacity hover:opacity-90"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Explore Blog
          </Link>
        </ScrollReveal>

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="card-surface flex h-full flex-col overflow-hidden">
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt=""
                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <time className="mb-2 text-xs text-muted">{formatDate(post.publishedAt)}</time>
                  <Link to={`/blog/${post.slug}`}>
                    <h3
                      className="text-base font-bold leading-snug text-heading hover:text-accent"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {post.title}
                    </h3>
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <div className="mt-8 text-right">
          <Link
            to="/blog"
            className="text-sm font-semibold text-accent hover:underline"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
