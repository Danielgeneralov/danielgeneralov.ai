'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Brain, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg scale-110 group-hover:bg-blue-500/30 transition-colors" />
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  AI Research
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1">
                  Frontier
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group',
                    pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  )}
                >
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute inset-0 bg-blue-50 border border-blue-200/50 rounded-xl"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gray-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Connect
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-xl hover:bg-gray-100"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
          >
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200',
                      pathname === item.href
                        ? 'text-blue-600 bg-blue-50 border border-blue-200/50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Connect
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 