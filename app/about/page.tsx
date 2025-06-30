import { Metadata } from 'next'
import { Award, BookOpen, Brain, Code, Mail, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about our AI research background, expertise, and passion for advancing artificial intelligence.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            {/* Large Profile Image on the Left */}
            <div className="flex-shrink-0">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <img
                  src="/profile.png"
                  alt="Daniel Generalov"
                  className="w-full h-full object-cover rounded-full shadow-2xl ring-8 ring-white/50"
                />
              </div>
            </div>
            
            {/* Text Content on the Right */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About Daniel Generalov
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                AI Researcher and Developer dedicated to advancing the frontiers of artificial intelligence 
                through rigorous research, open science, and practical applications that benefit humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Mission</h2>
            <p className="text-gray-600 mb-6">
              I believe that artificial intelligence has the potential to solve some of humanity's 
              greatest challenges. My research focuses on developing robust, interpretable, and 
              ethical AI systems that can augment human intelligence and improve lives worldwide.
            </p>
            <p className="text-gray-600 mb-6">
              Through open research and collaboration, I aim to contribute to the scientific 
              understanding of intelligence, both artificial and biological, while ensuring that 
              the benefits of AI are distributed equitably across society.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Deep Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Neural network architectures, optimization, and novel training techniques
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-4">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Machine Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Statistical learning, reinforcement learning, and probabilistic models
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Natural Language
              </h3>
              <p className="text-gray-600 text-sm">
                Language models, understanding, generation, and multimodal AI
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Ethics
              </h3>
              <p className="text-gray-600 text-sm">
                Responsible AI development, fairness, and societal impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Research */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Research Highlights
          </h2>
          
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Neural Network Optimization Techniques
              </h3>
              <p className="text-gray-600 mb-3">
                Published research on novel optimization methods for deep neural networks, 
                focusing on convergence guarantees and computational efficiency.
              </p>
              <div className="flex items-center text-sm text-blue-600">
                <ExternalLink className="h-4 w-4 mr-1" />
                <span>View Publication</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Interpretable Machine Learning Models
              </h3>
              <p className="text-gray-600 mb-3">
                Research on developing machine learning models that provide clear explanations 
                for their decisions, enhancing trust and accountability.
              </p>
              <div className="flex items-center text-sm text-blue-600">
                <ExternalLink className="h-4 w-4 mr-1" />
                <span>View Publication</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ethical AI Framework Development
              </h3>
              <p className="text-gray-600 mb-3">
                Contributing to frameworks for ethical AI development, with focus on fairness, 
                transparency, and societal benefit assessment.
              </p>
              <div className="flex items-center text-sm text-blue-600">
                <ExternalLink className="h-4 w-4 mr-1" />
                <span>View Publication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-blue-200 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Collaborate
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Interested in collaboration, have questions about our research, or want to discuss AI?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
} 