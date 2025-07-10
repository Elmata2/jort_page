'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

interface Essay {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  readTime: string
}

const essays: Essay[] = [
  {
    slug: 'technology-innovation',
    title: 'The Future of Technology Innovation',
    date: 'July 10, 2024',
    category: 'Technology & Innovation',
    excerpt: 'Exploring the intersection of emerging technologies and human-centered design in shaping our digital future.',
    readTime: '5 min read'
  },
  {
    slug: 'leadership-strategy',
    title: 'Leading Through Uncertainty',
    date: 'July 5, 2024',
    category: 'Leadership & Strategy',
    excerpt: 'How effective leaders navigate ambiguity while maintaining team confidence and organizational momentum.',
    readTime: '4 min read'
  },
  {
    slug: 'product-development',
    title: 'The Art of Product Decisions',
    date: 'June 28, 2024',
    category: 'Product Development',
    excerpt: 'Making better product decisions by balancing user needs, business constraints, and technical possibilities.',
    readTime: '6 min read'
  }
]

export default function Essays() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '4rem' }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mb-6"
            />
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
              Essays
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Thoughts on technology, leadership, and building great products.
            </p>
          </div>
        </motion.div>

        {/* Essays Grid */}
        <div className="space-y-8">
          {essays.map((essay, index) => (
            <motion.article
              key={essay.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group"
            >
              <Link href={`/essays/${essay.slug}`} className="block">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      {essay.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {essay.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {essay.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {essay.title}
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {essay.excerpt}
                  </p>
                  
                  <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                    Read more
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 italic">More essays coming soon...</p>
        </motion.div>
      </div>
    </div>
  )
}