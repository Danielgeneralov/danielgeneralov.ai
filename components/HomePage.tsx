'use client'

import Link from 'next/link'
import { ArrowRight, Brain, BookOpen, Code, Zap, Sparkles, Cpu, Network, Database } from 'lucide-react'
import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'
import { BlogPost } from '@/lib/mdx'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

interface HomePageProps {
  posts: BlogPost[]
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex justify-center items-center gap-8 mb-8">
              <motion.div 
                className="relative"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl scale-150" />
                <img
                  src="/profile.png"
                  alt="Daniel Generalov"
                  className="relative w-24 h-24 object-cover rounded-full ring-4 ring-white/20 shadow-2xl"
                  onError={(e) => {
                    // Fallback to Brain icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'relative w-24 h-24 bg-gradient-to-br from-blue-600/80 to-purple-600/80 rounded-full flex items-center justify-center ring-4 ring-white/20 shadow-2xl';
                    fallback.innerHTML = '<svg class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>';
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              </motion.div>
              <motion.div 
                className="relative"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl scale-150" />
                <Brain className="relative h-20 w-20 text-purple-400" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  AI Research
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Frontier
                </span>
              </h1>
              <div className="flex items-center justify-center space-x-2 text-blue-300">
                <Sparkles className="h-5 w-5" />
                <span className="text-lg font-medium">Where Innovation Meets Intelligence</span>
                <Sparkles className="h-5 w-5" />
              </div>
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Exploring the frontiers of artificial intelligence through cutting-edge research, 
              neural architecture innovation, and transformative machine learning applications.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/blog"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  Explore Research
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  View Projects
                  <Code className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Research Domains
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pushing the boundaries of artificial intelligence across multiple disciplines
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Network,
                title: "Neural Architecture",
                description: "Advanced neural network designs, attention mechanisms, and transformer innovations",
                gradient: "from-blue-500 to-purple-600",
                bgGradient: "from-blue-50 to-purple-50"
              },
              {
                icon: Cpu,
                title: "Machine Learning",
                description: "Cutting-edge algorithms, reinforcement learning, and statistical optimization",
                gradient: "from-purple-500 to-pink-600",
                bgGradient: "from-purple-50 to-pink-50"
              },
              {
                icon: Database,
                title: "AI Applications",
                description: "Real-world deployments, ethical frameworks, and scalable AI systems",
                gradient: "from-pink-500 to-red-600",
                bgGradient: "from-pink-50 to-red-50"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${item.bgGradient} border border-white shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center space-y-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} shadow-lg`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Posts Section */}
      {posts.length > 0 && (
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex items-center justify-between mb-16"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Latest Insights
                </h2>
                <p className="text-xl text-gray-600">
                  Recent breakthroughs and discoveries from the frontier
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="hidden sm:block">
                <Link
                  href="/blog"
                  className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  View all research
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mt-16 sm:hidden"
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                View all research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                <BookOpen className="h-20 w-20 text-blue-400 mx-auto mb-8" />
              </motion.div>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Join the Research
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Community
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with researchers, practitioners, and innovators shaping the future of artificial intelligence
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold text-lg rounded-2xl hover:from-gray-100 hover:to-white transition-all duration-300 shadow-xl"
                >
                  Get Connected
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 