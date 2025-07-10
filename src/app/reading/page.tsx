'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Book, ExternalLink, Star, Clock, ChevronDown, Calendar } from 'lucide-react'

interface ReadingItem {
  id: string
  title: string
  author: string
  type: 'book' | 'article' | 'paper'
  category: string
  status: 'reading' | 'completed' | 'recommended'
  rating?: number
  publishDate?: string
  readDate?: string
  description: string
  longDescription: string
  keyTakeaways: string[]
  impact: string
  link?: string
}

const readingItems: ReadingItem[] = [
  {
    id: 'good-strategy-bad-strategy',
    title: 'Good Strategy Bad Strategy',
    author: 'Richard Rumelt',
    type: 'book',
    category: 'Strategy',
    status: 'completed',
    rating: 5,
    readDate: 'March 2024',
    description: 'A masterclass in strategic thinking that distinguishes between good strategy and wishful thinking.',
    longDescription: 'Rumelt cuts through the fluff and provides a clear framework for what constitutes good strategy versus the "bad strategy" that pervades many organizations. He emphasizes that good strategy is about coherent action backed by argument, not just vision and goals. The book provides practical frameworks for diagnosing challenges, developing guiding policies, and coordinating actions that leverage your advantages.',
    keyTakeaways: [
      'Good strategy has kernel: diagnosis, guiding policy, and coherent action',
      'Bad strategy substitutes fluff, ambition, and wishful thinking for clear thinking',
      'Strategy is about choice - saying no to some things to focus resources',
      'Competitive advantage comes from leveraging unique strengths and circumstances'
    ],
    impact: 'Fundamentally changed how I approach strategic planning and evaluate business opportunities. Now always look for the "kernel" in any strategic discussion.',
    link: 'https://www.goodreads.com/book/show/11721966-good-strategy-bad-strategy'
  },
  {
    id: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    type: 'book',
    category: 'Psychology',
    status: 'completed',
    rating: 5,
    readDate: 'January 2024',
    description: 'Explores the two systems of thinking and their impact on decision-making and judgment.',
    longDescription: 'Kahneman introduces System 1 (fast, intuitive) and System 2 (slow, deliberate) thinking, revealing how cognitive biases affect our decisions. The book explores concepts like loss aversion, anchoring, and the availability heuristic. Essential reading for anyone involved in decision-making, product design, or understanding human behavior. Particularly relevant for product managers and leaders who need to understand how users and teams actually think and decide.',
    keyTakeaways: [
      'System 1 thinking is fast but prone to biases and errors',
      'System 2 thinking is slow but more rational and deliberate',
      'Loss aversion is stronger than the desire for equivalent gains',
      'We systematically overestimate our ability to predict outcomes'
    ],
    impact: 'Changed how I design user experiences and make product decisions. Now actively consider cognitive biases in product design and team processes.',
    link: 'https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow'
  },
  {
    id: 'jobs-to-be-done',
    title: 'Competing Against Luck',
    author: 'Clayton Christensen',
    type: 'book',
    category: 'Product',
    status: 'completed',
    rating: 4,
    readDate: 'February 2024',
    description: 'The theory of Jobs to Be Done and how to build products customers actually want.',
    longDescription: 'Christensen presents the Jobs to Be Done framework for understanding customer motivations. Instead of focusing on customer demographics or product features, the framework centers on the "job" customers hire products to do. The book provides practical methods for discovering these jobs and designing products that customers will actually adopt and love.',
    keyTakeaways: [
      'Customers "hire" products to do specific jobs in their lives',
      'Focus on the progress customers are trying to make, not demographics',
      'Understand the full context: functional, emotional, and social dimensions',
      'Competition comes from whatever customers use today to solve the problem'
    ],
    impact: 'Transformed how I approach user research and product development. Now start every project by understanding the job customers are trying to get done.',
    link: 'https://www.goodreads.com/book/show/28820024-competing-against-luck'
  },
  {
    id: 'stripe-payment-orchestration',
    title: 'The Future of Payment Orchestration',
    author: 'Stripe Engineering Team',
    type: 'article',
    category: 'Technology',
    status: 'completed',
    publishDate: 'December 2023',
    readDate: 'December 2023',
    description: 'Deep dive into how modern payment systems handle complexity at scale.',
    longDescription: 'An in-depth technical article exploring how payment orchestration platforms manage the complexity of global payment processing. Covers topics like routing optimization, fallback strategies, compliance across jurisdictions, and the technical architecture needed to process billions of transactions reliably.',
    keyTakeaways: [
      'Payment orchestration is about more than just processing transactions',
      'Intelligent routing can significantly improve conversion rates',
      'Compliance and localization requirements drive architectural decisions',
      'Observability is critical for debugging complex payment flows'
    ],
    impact: 'Influenced technical architecture decisions for payment systems in our SaaS platform.',
    link: 'https://stripe.com/blog/payment-orchestration'
  },
  {
    id: 'high-output-management',
    title: 'High Output Management',
    author: 'Andy Grove',
    type: 'book',
    category: 'Management',
    status: 'reading',
    description: 'Intel CEO\'s guide to management principles and building high-performing teams.',
    longDescription: 'Grove\'s classic on management principles, covering everything from one-on-ones to performance reviews to organizational design. Written by Intel\'s legendary CEO, the book focuses on practical management techniques for increasing team output and effectiveness. Particularly strong on operational discipline and measurement.',
    keyTakeaways: [
      'Management is about increasing the output of your team',
      'One-on-ones are the most important meetings for managers',
      'Performance reviews should focus on improvement, not just evaluation',
      'Organizational design should optimize for information flow'
    ],
    impact: 'Currently applying Grove\'s frameworks to improve team performance and communication.',
    link: 'https://www.goodreads.com/book/show/324750.High_Output_Management'
  },
  {
    id: 'shape-up',
    title: 'Shape Up',
    author: 'Ryan Singer (Basecamp)',
    type: 'book',
    category: 'Product',
    status: 'recommended',
    description: 'Basecamp\'s approach to product development that eliminates many common pitfalls.',
    longDescription: 'An alternative to agile/scrum that focuses on shaping work before building and giving teams uninterrupted time to execute. The book introduces concepts like "shaping" problems, betting on solutions, and circuit breakers to prevent projects from dragging on indefinitely.',
    keyTakeaways: [
      'Shape work at the right level of abstraction before starting',
      'Give teams 6-week cycles with built-in circuit breakers',
      'Cool-down periods between cycles allow for reflection and planning',
      'Small teams with strong ownership produce better results'
    ],
    impact: 'Planning to experiment with these concepts in our next product development cycle.',
    link: 'https://basecamp.com/shapeup'
  }
]

const ReadingCard = ({ item }: { item: ReadingItem }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reading': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'recommended': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book': return <Book className="w-4 h-4" />
      case 'article': return <ExternalLink className="w-4 h-4" />
      case 'paper': return <Book className="w-4 h-4" />
      default: return <Book className="w-4 h-4" />
    }
  }

  return (
    <motion.div
      layout
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        className="p-8 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-center space-x-3 flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                {getTypeIcon(item.type)}
                <span className="ml-1">{item.category}</span>
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                {item.status}
              </span>
              {item.rating && (
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < item.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600">by {item.author}</p>
            {(item.readDate || item.publishDate) && (
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {item.readDate ? `Read ${item.readDate}` : `Published ${item.publishDate}`}
              </div>
            )}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          {item.description}
        </p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 space-y-6 border-t border-gray-100">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="pt-6"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview</h4>
                <p className="text-gray-700 leading-relaxed">
                  {item.longDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Takeaways</h4>
                <ul className="space-y-2">
                  {item.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Personal Impact</h4>
                <p className="text-gray-700 leading-relaxed italic">
                  {item.impact}
                </p>
              </motion.div>

              {item.link && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {item.type === 'book' ? 'View on Goodreads' : 'Read Article'}
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Reading() {
  const [filter, setFilter] = useState<string>('all')

  const filteredItems = readingItems.filter(item => {
    if (filter === 'all') return true
    if (filter === 'current') return item.status === 'reading'
    if (filter === 'recommended') return item.status === 'recommended'
    if (filter === 'articles') return item.type === 'article'
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
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
              Reading List
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Books and articles that have shaped my thinking.
            </p>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {[
            { key: 'all', label: 'All' },
            { key: 'current', label: 'Currently Reading' },
            { key: 'recommended', label: 'Recommended' },
            { key: 'articles', label: 'Articles' }
          ].map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === filterOption.key
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/80 text-gray-700 hover:bg-orange-50'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </motion.div>

        {/* Reading Items */}
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
            >
              <ReadingCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}