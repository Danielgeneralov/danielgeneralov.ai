import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: string
  content: string
}

const contentDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  // Check if we're running on the server side
  if (typeof window !== 'undefined') {
    return []
  }

  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const readingTimeResult = readingTime(content)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        tags: data.tags || [],
        readingTime: readingTimeResult.text,
        content,
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  // Check if we're running on the server side
  if (typeof window !== 'undefined') {
    return null
  }

  const fullPath = path.join(contentDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const readingTimeResult = readingTime(content)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    tags: data.tags || [],
    readingTime: readingTimeResult.text,
    content,
  }
} 