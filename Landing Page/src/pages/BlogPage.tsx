import { useEffect } from 'react'
import { BLOG_POSTS } from '@/content/blog'
import { BlogCard } from '@/components/blog/BlogCard'

export function BlogPage() {
  useEffect(() => {
    document.title = 'Journal — Worldener'
  }, [])

  return (
    <div>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-main max-w-3xl text-center md:mx-auto">
          <p className="section-label mb-3">Journal</p>
          <h1 className="section-heading mb-4">
            Travel stories, ideas, and smarter ways to plan together
          </h1>
          <p className="text-sm leading-relaxed text-body md:text-base">
            Static blog content, clean routing, and a reading experience designed to feel
            editorial and easy to scan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
