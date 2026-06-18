import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPostBySlug } from '@/content/blog'
import {
  BlogPostBackLink,
  EditorialLayout,
  FeatureLayout,
} from '@/components/blog/BlogLayouts'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  useEffect(() => {
    document.title = post ? `${post.title} — Worldener` : 'Post not found — Worldener'
  }, [post])

  if (!post) {
    return (
      <div className="container-main py-24 text-center">
        <h1 className="section-heading mb-4">Post not found</h1>
        <Link to="/blog" className="text-accent hover:underline">
          Back to Journal
        </Link>
      </div>
    )
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container-main">
        <BlogPostBackLink />
        {post.layout === 'editorial' ? (
          <EditorialLayout post={post} />
        ) : (
          <FeatureLayout post={post} />
        )}
      </div>
    </div>
  )
}
