import { Metadata } from 'next'
import { ExternalLink, Github, Star, Code, Brain, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our AI research projects, implementations, and open-source contributions.',
}

const projects = [
  {
    title: 'Neural Architecture Search Framework',
    description: 'An automated framework for discovering optimal neural network architectures using evolutionary algorithms and reinforcement learning.',
    technologies: ['Python', 'PyTorch', 'CUDA', 'Ray'],
    status: 'Active',
    category: 'Deep Learning',
    icon: Brain,
    links: {
      github: 'https://github.com',
      demo: 'https://demo.com',
      paper: 'https://arxiv.org'
    }
  },
  {
    title: 'Interpretable ML Toolkit',
    description: 'A comprehensive toolkit for creating interpretable machine learning models with built-in explanation capabilities.',
    technologies: ['Python', 'scikit-learn', 'SHAP', 'LIME'],
    status: 'Released',
    category: 'Machine Learning',
    icon: Code,
    links: {
      github: 'https://github.com',
      docs: 'https://docs.com'
    }
  },
  {
    title: 'Federated Learning Platform',
    description: 'A decentralized platform for training machine learning models across distributed datasets while preserving privacy.',
    technologies: ['Python', 'TensorFlow', 'gRPC', 'Docker'],
    status: 'Beta',
    category: 'Distributed AI',
    icon: Zap,
    links: {
      github: 'https://github.com',
      paper: 'https://arxiv.org'
    }
  },
  {
    title: 'AI Ethics Auditing Tool',
    description: 'Automated tool for auditing AI models for bias, fairness, and ethical considerations across different demographic groups.',
    technologies: ['Python', 'Pandas', 'Fairlearn', 'Streamlit'],
    status: 'Active',
    category: 'AI Ethics',
    icon: Star,
    links: {
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our AI research projects, open-source contributions, and experimental implementations. 
              Each project represents our commitment to advancing the field through practical applications and theoretical insights.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-2">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        project.status === 'Active' ? 'bg-green-100 text-green-800' :
                        project.status === 'Released' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                      {project.links.paper && (
                        <a
                          href={project.links.paper}
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span className="text-sm">Paper</span>
                        </a>
                      )}
                      {project.links.docs && (
                        <a
                          href={project.links.docs}
                          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span className="text-sm">Docs</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Github className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Open Source Contributions
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We believe in open science and sharing knowledge. All our research projects are 
            open-source and available for the community to build upon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Repositories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1.2k</div>
              <div className="text-gray-600">Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Forks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for collaborators, contributors, and fellow researchers. 
            Let's build the future of AI together.
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