'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowUpRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { BlogPost } from '@/lib/mdx'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative h-full bg-white rounded-3xl border border-gray-200/50 overflow-hidden shadow-lg shadow-gray-500/5 hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-500"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="p-2 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ArrowUpRight className="h-4 w-4 text-gray-600" />
            </motion.div>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
            {post.description}
          </p>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.slice(0, 3).map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold rounded-full border border-blue-200/50"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  {tag}
                </motion.span>
              ))}
              {post.tags.length > 3 && (
                <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}
          
          {/* Read more button */}
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:underline"
            >
              Read Article
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.div>
            </Link>
            
            <div className="text-xs text-gray-400 font-medium">
              Research Paper
            </div>
          </motion.div>
        </div>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
      </motion.div>
    </motion.article>
  )
} 