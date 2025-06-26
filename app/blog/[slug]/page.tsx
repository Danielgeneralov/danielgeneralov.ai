import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { MDXComponents } from '@/components/MDXComponents'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['AI Research Hub'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: 'AI Research Hub',
    },
    datePublished: post.date,
    dateModified: post.date,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-6">
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {post.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={MDXComponents} />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 pt-8">
              <div className="flex justify-between items-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
                
                <div className="text-sm text-gray-500">
                  Last updated: {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  )
} 