import HomePage from '@/components/HomePage'
import { getAllPosts } from '@/lib/mdx'

export default function Page() {
  const posts = getAllPosts().slice(0, 3) // Get latest 3 posts

  return <HomePage posts={posts} />
} 