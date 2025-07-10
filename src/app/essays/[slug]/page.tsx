'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

interface EssayData {
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  readTime: string
}

const essaysData: Record<string, EssayData> = {
  'technology-innovation': {
    title: 'The Future of Technology Innovation',
    date: 'July 10, 2024',
    category: 'Technology & Innovation',
    excerpt: 'Exploring the intersection of emerging technologies and human-centered design in shaping our digital future.',
    readTime: '5 min read',
    content: `# The Future of Technology Innovation

In an era where technological advancement occurs at an unprecedented pace, we find ourselves at a crossroads between boundless possibility and thoughtful implementation. The question isn't whether we can build something, but whether we should—and more importantly, how we can build it responsibly.

## The Human-Centered Approach

Technology innovation thrives when it serves human needs rather than existing for its own sake. The most successful products and platforms emerge from deep empathy for user problems, not from the allure of cutting-edge capabilities alone.

Consider the evolution of mobile interfaces. While we could pack endless features into every screen, the most elegant solutions embrace constraint. They prioritize clarity over complexity, understanding over information density.

## Building for Tomorrow

As we look ahead, three principles guide sustainable innovation:

### 1. Intentional Design
Every feature, every interaction, every data point collected should serve a clear purpose. Intentional design means saying no to good ideas in service of great ones.

### 2. Ethical Implementation
With great technological power comes the responsibility to consider long-term implications. How will this affect privacy? What about accessibility? How does it impact different communities?

### 3. Iterative Improvement
The best technologies evolve through continuous feedback loops with real users solving real problems. Launch early, learn fast, but never compromise on core principles.

## The Path Forward

Innovation isn't just about the next breakthrough—it's about thoughtfully applying existing technologies to create meaningful improvements in people's lives. Sometimes the most innovative solution is the simplest one.

The future belongs to those who can balance technical possibility with human necessity, creating tools that enhance rather than complicate our daily experiences.`
  },
  'leadership-strategy': {
    title: 'Leading Through Uncertainty',
    date: 'July 5, 2024',
    category: 'Leadership & Strategy',
    excerpt: 'How effective leaders navigate ambiguity while maintaining team confidence and organizational momentum.',
    readTime: '4 min read',
    content: `# Leading Through Uncertainty

Leadership in the modern era requires comfort with ambiguity. The leaders who thrive aren't those who have all the answers, but those who can navigate uncertainty while maintaining team confidence and organizational momentum.

## Embracing the Unknown

Uncertainty isn't a problem to be solved—it's a condition to be managed. The most effective leaders I've observed don't pretend to have perfect information. Instead, they create frameworks for decision-making that work even when the future is unclear.

This means:
- **Building flexible systems** that can adapt as new information emerges
- **Investing in people** who can think critically and act independently
- **Creating cultures** that reward thoughtful risk-taking over perfect execution

## The Strategy Paradox

Strategic planning in uncertain times requires a different approach. Traditional long-term planning assumes predictable futures. Modern strategy planning prepares for multiple possible futures.

### Scenario-Based Thinking

Rather than betting everything on one vision of the future, wise leaders develop strategies that work across multiple scenarios. What if the market shifts dramatically? What if our key assumption proves wrong? What if our biggest competitor makes an unexpected move?

### Rapid Experimentation

In uncertain environments, the fastest way to reduce uncertainty is through small, rapid experiments. Test assumptions quickly and cheaply. Learn what works, abandon what doesn't, and scale what shows promise.

## Building Resilient Teams

Teams that thrive under uncertainty share common characteristics:

1. **Psychological Safety**: People feel safe to express concerns, ask questions, and admit when they don't know something.

2. **Clear Principles**: While tactics may change, core principles remain constant, providing stability in turbulent times.

3. **Distributed Authority**: Decision-making power is pushed down to those closest to the information, enabling faster responses.

## The Leader's Role

In uncertain times, leaders serve as both compass and anchor. They provide direction when the path is unclear and stability when everything feels chaotic. This requires a delicate balance of confidence and humility—confident enough to make decisions with incomplete information, humble enough to change course when new information emerges.

The best leaders view uncertainty not as a threat to be eliminated, but as an opportunity to be seized by those prepared to act thoughtfully in ambiguous situations.`
  },
  'product-development': {
    title: 'The Art of Product Decisions',
    date: 'June 28, 2024',
    category: 'Product Development',
    excerpt: 'Making better product decisions by balancing user needs, business constraints, and technical possibilities.',
    readTime: '6 min read',
    content: `# The Art of Product Decisions

Product development is fundamentally about making decisions under constraints. Every feature request, every design choice, every technical implementation represents a decision that will impact users, the business, and the development team. The art lies in making these decisions well.

## The Decision Framework

Great product decisions emerge from the intersection of three critical factors:

### User Value
Does this solve a real problem for real people? The best product decisions start with deep user empathy. Not what users say they want, but what they actually need to accomplish their goals more effectively.

### Business Impact
How does this decision support sustainable business growth? This includes direct revenue impact, but also strategic positioning, competitive advantage, and resource allocation.

### Technical Feasibility
Can we build this well with our current capabilities and constraints? This isn't just about whether something is technically possible, but whether we can implement it in a way that's maintainable, scalable, and reliable.

## Beyond Feature Factories

The most common product mistake is treating development like a feature factory—constantly shipping new capabilities without considering their cumulative effect on the user experience or product complexity.

Instead, great products emerge from:

### Thoughtful Subtraction
Removing features often improves the product more than adding them. Every feature carries maintenance costs, increases cognitive load, and creates more potential failure points.

### Coherent Experience Design
Individual features should work together to create a unified experience. This requires saying no to features that don't fit the overall product vision, even if they might be valuable in isolation.

### User Journey Optimization
Focus on complete user journeys rather than individual touchpoints. How do users discover, learn, adopt, and get value from your product over time?

## The Iterative Advantage

Product development is not about getting everything right the first time. It's about learning faster than the competition through rapid iteration cycles.

This means:
- **Shipping early versions** to learn from real user behavior
- **Measuring what matters** rather than vanity metrics
- **Iterating based on evidence** rather than opinions or assumptions

## Balancing Perspectives

The best product decisions synthesize perspectives from across the organization:

- **Engineering** provides technical constraint and possibility awareness
- **Design** ensures user-centered thinking and experience coherence
- **Business** contributes strategic context and resource realities
- **Customer Support** offers direct user feedback and pain point insights

## Making Better Decisions

Product development is ultimately about placing informed bets on what will create value. The goal isn't to be right every time—it's to be right more often than not, and to learn quickly when you're wrong.

The most successful product teams develop strong instincts for these trade-offs through experience, but they never stop validating those instincts against real user behavior and business outcomes.`
  }
}

export default function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const [essay, setEssay] = useState<EssayData | null>(null)
  const [slug, setSlug] = useState<string>('')

  useEffect(() => {
    params.then(({ slug }) => {
      setSlug(slug)
      const essayData = essaysData[slug]
      if (essayData) {
        setEssay(essayData)
      }
    })
  }, [params])

  if (!essay) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Essay not found</h1>
          <Link href="/essays" className="text-orange-500 hover:text-orange-600">
            ← Back to Essays
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Content Container - 60% width centered (20% margins on each side) */}
      <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto" style={{ width: '60%', minWidth: '320px' }}>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              href="/essays"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Essays
            </Link>
            
            <div className="space-y-6">
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
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '4rem' }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
              />
              
              <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight">
                {essay.title}
              </h1>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {essay.excerpt}
              </p>
            </div>
          </motion.div>

          {/* Essay Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg prose-gray max-w-none"
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#374151'
            }}
          >
            <div 
              dangerouslySetInnerHTML={{ 
                __html: essay.content
                  .replace(/^# (.+)$/gm, '<h1 style="font-size: 2.5rem; font-weight: 300; color: #111827; margin: 2rem 0 1.5rem 0; line-height: 1.2;">$1</h1>')
                  .replace(/^## (.+)$/gm, '<h2 style="font-size: 2rem; font-weight: 400; color: #1f2937; margin: 2.5rem 0 1rem 0; line-height: 1.3;">$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3 style="font-size: 1.5rem; font-weight: 500; color: #374151; margin: 2rem 0 0.75rem 0; line-height: 1.4;">$1</h3>')
                  .replace(/^\*\* (.+) \*\*$/gm, '<p style="font-weight: 600; color: #1f2937; margin: 1.5rem 0;">$1</p>')
                  .replace(/\*\*([^*]+)\*\*/g, '<strong style="font-weight: 600; color: #1f2937;">$1</strong>')
                  .replace(/^- (.+)$/gm, '<li style="margin: 0.5rem 0; padding-left: 0.5rem;">$1</li>')
                  .replace(/^(\d+)\. (.+)$/gm, '<li style="margin: 0.5rem 0; padding-left: 0.5rem;">$2</li>')
                  .replace(/\n\n/g, '</p><p style="margin: 1.5rem 0; line-height: 1.8;">')
                  .replace(/^(?!<[h|li|p])(.+)$/gm, '<p style="margin: 1.5rem 0; line-height: 1.8;">$1</p>')
              }}
            />
          </motion.article>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <Link 
              href="/essays"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to all essays
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}