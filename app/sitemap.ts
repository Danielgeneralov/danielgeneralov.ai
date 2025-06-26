import { getAllPosts } from '@/lib/mdx'

export default function sitemap() {
  const posts = getAllPosts()
  
  const blogUrls = posts.map((post) => ({
    url: `https://ai-research-hub.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const staticUrls = [
    {
      url: 'https://ai-research-hub.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://ai-research-hub.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: 'https://ai-research-hub.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://ai-research-hub.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://ai-research-hub.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  return [...staticUrls, ...blogUrls]
} 