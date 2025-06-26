import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              AI Research Hub
            </h3>
            <p className="text-gray-600 max-w-md">
              Exploring the frontiers of artificial intelligence, neural networks, 
              and machine learning through research, experimentation, and open science.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Research Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} AI Research Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 