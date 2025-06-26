import { Metadata } from 'next'
import { Search } from 'lucide-react'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Research Blog',
  description: 'Latest insights and discoveries in AI, machine learning, and neural networks research.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Research Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diving deep into artificial intelligence, machine learning, and neural networks. 
            Exploring cutting-edge research, implementations, and theoretical foundations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {posts.length}
            </div>
            <div className="text-gray-600">Research Articles</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {new Set(posts.flatMap(post => post.tags)).size}
            </div>
            <div className="text-gray-600">Topics Covered</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {new Date().getFullYear() - 2023 + 1}
            </div>
            <div className="text-gray-600">Years Active</div>
          </div>
        </div>

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No posts yet
            </h3>
            <p className="text-gray-600">
              Stay tuned for upcoming research articles and insights.
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get notified when new research articles and insights are published. 
            Join the community of AI researchers and practitioners.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Subscribe to Updates
          </button>
        </div>
      </div>
    </div>
  )
} 