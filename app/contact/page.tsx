import { Metadata } from 'next'
import { Mail, MessageSquare, Twitter, Github, Linkedin, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for collaboration, questions, or to discuss AI research opportunities.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interested in collaboration, have questions about our research, or want to discuss AI? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Email
              </h3>
              <p className="text-gray-600 mb-4">
                For research inquiries, collaboration proposals, or general questions.
              </p>
              <a
                href="mailto:research@airesearchhub.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                research@airesearchhub.com
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-6">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Social Media
              </h3>
              <p className="text-gray-600 mb-4">
                Follow our latest research updates and engage with the community.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com"
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Virtual Office Hours
              </h3>
              <p className="text-gray-600 mb-4">
                Schedule a virtual meeting to discuss research opportunities.
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send a Message
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a topic</option>
                <option value="collaboration">Research Collaboration</option>
                <option value="question">General Question</option>
                <option value="media">Media Inquiry</option>
                <option value="speaking">Speaking Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your inquiry..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Collaboration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We welcome collaborations with researchers, institutions, and organizations 
              who share our passion for advancing AI for the benefit of humanity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What We're Looking For
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Joint research projects</li>
                <li>• Academic partnerships</li>
                <li>• Industry collaboration</li>
                <li>• Open-source contributions</li>
                <li>• Speaking opportunities</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Response Times
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Research inquiries: 2-3 days</li>
                <li>• Collaboration proposals: 1 week</li>
                <li>• Media requests: 24-48 hours</li>
                <li>• General questions: 1-2 days</li>
                <li>• Technical support: Same day</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 