# AI Research Hub

A modern, SEO-optimized personal brand website for AI research, built with Next.js, TypeScript, and Tailwind CSS. This site showcases research, blog posts, projects, and provides a platform for establishing a professional presence in the AI/ML community.

## 🚀 Features

### Core Functionality
- **📝 MDX Blog System** - Write research articles with rich formatting, code syntax highlighting, and mathematical equations
- **📱 Responsive Design** - Mobile-first design that works perfectly on all devices
- **⚡ Performance Optimized** - Built with Next.js 14 App Router for optimal performance and SEO
- **🎨 Modern UI** - Clean, professional design with smooth animations and transitions

### Technical Features
- **🔍 SEO Optimized** - Dynamic sitemap, robots.txt, Open Graph tags, and structured data
- **📊 Analytics Ready** - Easy integration with Vercel Analytics or Google Analytics
- **🎯 TypeScript** - Fully typed for better development experience and fewer bugs
- **🎨 Tailwind CSS** - Utility-first styling with custom design system
- **📖 MDX Support** - Markdown with JSX components for rich content

### Content Management
- **📚 Blog Posts** - Write in MDX with frontmatter for metadata
- **🏷️ Tagging System** - Organize content with tags and categories
- **📖 Reading Time** - Automatic reading time calculation
- **🔗 Social Sharing** - Built-in sharing capabilities

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + @tailwindcss/typography |
| **Content** | MDX (Markdown + JSX) |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |
| **SEO** | Built-in Next.js SEO + Custom Meta Tags |
| **Deployment** | Vercel (recommended) |

## 📁 Project Structure

```
ai-research-site/
├── app/                          # Next.js App Router
│   ├── blog/                     # Blog pages
│   │   ├── [slug]/page.tsx      # Dynamic blog post pages
│   │   └── page.tsx             # Blog listing page
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── projects/page.tsx        # Projects showcase
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── sitemap.ts               # Dynamic sitemap
│   └── robots.ts                # Robots.txt
├── components/                   # Reusable components
│   ├── BlogCard.tsx             # Blog post preview cards
│   ├── Footer.tsx               # Site footer
│   ├── MDXComponents.tsx        # Custom MDX components
│   └── Navbar.tsx               # Navigation bar
├── content/                      # Blog content
│   └── blog/                    # MDX blog posts
│       ├── intro-to-neural-networks.mdx
│       └── attention-mechanisms-transformers.mdx
├── lib/                         # Utility functions
│   ├── mdx.ts                   # MDX processing utilities
│   └── utils.ts                 # General utilities
└── public/                      # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-research-site.git
cd ai-research-site
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## ✍️ Writing Blog Posts

### Create a New Post

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter with metadata:

```markdown
---
title: "Your Research Article Title"
description: "Brief description for SEO and previews"
date: "2024-01-15"
tags: ["AI", "Machine Learning", "Research"]
---

# Your Article Content

Write your research article using Markdown and JSX components...
```

### Supported Frontmatter Fields

- `title` - Article title
- `description` - Meta description for SEO
- `date` - Publication date (YYYY-MM-DD)
- `tags` - Array of tags for categorization

### MDX Features

- **Code syntax highlighting** - Automatic highlighting for multiple languages
- **Mathematical equations** - LaTeX support for complex formulas
- **Custom components** - React components within Markdown
- **Images** - Optimized Next.js Image component
- **Links** - Internal and external link handling

## 🎨 Customization

### Branding
- Update site name in `app/layout.tsx`
- Modify colors in `tailwind.config.ts`
- Replace logo/icon in navigation

### Content
- Customize hero section in `app/page.tsx`
- Update about page content in `app/about/page.tsx`
- Modify project showcase in `app/projects/page.tsx`

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom MDX component styling in `components/MDXComponents.tsx`

## 📈 SEO & Performance

### Built-in SEO Features
- **Dynamic sitemap** - Automatically includes all pages and blog posts
- **Robots.txt** - Proper search engine crawling instructions
- **Open Graph tags** - Rich social media previews
- **Twitter Cards** - Enhanced Twitter sharing
- **Structured data** - JSON-LD for better search understanding

### Performance Optimizations
- **Image optimization** - Next.js Image component with WebP support
- **Bundle optimization** - Tree shaking and code splitting
- **Font optimization** - Preloaded Google Fonts
- **Static generation** - Pre-built pages for better performance

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
```bash
npm i -g vercel
vercel
```

2. **Configure environment variables** (if needed)
3. **Deploy** - Automatic deployments on git push

### Other Platforms
- **Netlify** - Works with minor configuration
- **AWS Amplify** - Full-stack deployment option
- **Docker** - Containerized deployment

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Contact form
CONTACT_FORM_API=your_contact_api_endpoint
```

## 📊 Analytics Integration

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have questions or need help:

1. Check the [documentation](https://nextjs.org/docs)
2. Open an [issue](https://github.com/yourusername/ai-research-site/issues)
3. Contact via email: research@airesearchhub.com

---

**Built with ❤️ for the AI research community**
