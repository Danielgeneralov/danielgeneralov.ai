'use client'

import Link from 'next/link'
import { ArrowRight, Brain, BookOpen, Code, Zap, Sparkles, Cpu, Network, Database, GraduationCap, Users, FileText, Calendar, Mail, MapPin, Award, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'
import { BlogPost } from '@/lib/mdx'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

interface HomePageProps {
  posts: BlogPost[]
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Personal Introduction */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
          >
            {/* Profile Image */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="relative">
                <img
                  src="/profile.png"
                  alt="Daniel Generalov"
                  className="w-80 h-80 lg:w-full lg:h-auto object-cover rounded-2xl shadow-lg mx-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-80 h-80 lg:w-full lg:h-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg mx-auto';
                    fallback.innerHTML = '<svg class="h-32 w-32 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>';
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Daniel Generalov
                </h1>
                <div className="space-y-2">
                  <p className="text-xl text-blue-600 font-medium">
                    AI Enthusiast & Lifelong Learner
                  </p>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Building cool AI stuff • Learning in public</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>
                  Hey there! I'm someone who's absolutely fascinated by <strong>artificial intelligence</strong> and 
                  all the incredible things it can do. What started as curiosity about how machines could "think" 
                  has turned into a deep dive into <strong>neural networks</strong>, <strong>transformers</strong>, 
                  and the magic behind modern AI systems.
                </p>
                <p>
                  I spend my time experimenting with different AI models, reading research papers (sometimes understanding them!), 
                  and building projects that help me understand how this technology really works. I'm particularly drawn to 
                  <strong>attention mechanisms</strong> and how we can make AI systems more efficient and interpretable.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Let's Chat
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  My Learning Journey
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What I'm Exploring
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These are the areas of AI that keep me up at night (in the best way possible). I'm constantly learning and experimenting with these topics.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Network,
                  title: "Neural Architecture Design",
                  description: "Fascinated by how different network structures affect performance. Currently diving deep into transformers and attention.",
                  projects: ["Building a mini-GPT from scratch", "Experimenting with efficient architectures"]
                },
                {
                  icon: Brain,
                  title: "How Attention Really Works",
                  description: "The attention mechanism blew my mind when I first understood it. Now I'm exploring all its variations and applications.",
                  projects: ["Visualizing attention patterns", "Multi-head attention experiments"]
                },
                {
                  icon: Cpu,
                  title: "Making AI More Accessible",
                  description: "Working on projects that help others understand AI concepts and build cool things without needing a PhD.",
                  projects: ["AI education tools", "Open-source implementations"]
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-700">Current projects:</p>
                    {item.projects.map((project, idx) => (
                      <p key={idx} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                        • {project}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Cool Things I've Built
                </h2>
                <p className="text-lg text-gray-600">
                  Projects and experiments that have taught me the most about AI
                </p>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                See all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-6">
              {[
                {
                  title: "Attention Visualizer: See How Transformers 'Think'",
                  tech: "Python, PyTorch, Streamlit",
                  status: "Live Demo",
                  description: "Built an interactive tool to visualize attention patterns in transformer models. It's amazing to see which words the model focuses on!",
                  links: ["Demo", "Code", "Blog Post"]
                },
                {
                  title: "Mini-GPT: Understanding Language Models from the Ground Up",
                  tech: "Python, PyTorch, Jupyter",
                  status: "Complete",
                  description: "Implemented a small GPT model from scratch to really understand how these things work. Learned so much about tokenization, embedding, and training.",
                  links: ["Code", "Tutorial"]
                },
                {
                  title: "AI Paper Summarizer: Making Research More Accessible",
                  tech: "Next.js, OpenAI API, TailwindCSS",
                  status: "In Progress",
                  description: "Working on a tool that takes dense AI research papers and creates digestible summaries. Because not everyone has time to read 30-page papers!",
                  links: ["Preview"]
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Live Demo' 
                        ? 'bg-green-100 text-green-800'
                        : project.status === 'Complete'
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2 text-sm">{project.tech}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Research Blog Posts */}
      {posts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Latest from My Learning Journey
                  </h2>
                  <p className="text-lg text-gray-600">
                    Thoughts, experiments, and "aha!" moments as I dive deeper into AI
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read all posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {posts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    variants={fadeInUp}
                    className="hover:transform hover:-translate-y-1 transition-transform"
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News & Updates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Recent Wins & Discoveries
              </h2>
              <p className="text-lg text-gray-600">
                Celebrating the small victories and breakthrough moments in my AI journey
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-6">
              {[
                {
                  date: "This Week",
                  type: "Breakthrough",
                  title: "Finally understood why attention mechanisms work so well (and built a demo to prove it!)",
                  icon: Award
                },
                {
                  date: "Last Month",
                  type: "Project",
                  title: "Completed my from-scratch GPT implementation - it can actually generate coherent text!",
                  icon: FileText
                },
                {
                  date: "Two Months Ago",
                  type: "Learning",
                  title: "Finished the CS231n Stanford course online. Neural networks finally clicked for me.",
                  icon: GraduationCap
                },
                {
                  date: "Three Months Ago",
                  type: "Community",
                  title: "Started sharing my learning journey online. The AI community is incredibly welcoming!",
                  icon: Users
                }
              ].map((news, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200"
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <news.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-medium text-blue-600">{news.date}</span>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                        {news.type}
                      </span>
                    </div>
                    <p className="text-gray-900">{news.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 