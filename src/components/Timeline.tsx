'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react'

interface TimelineEvent {
  id: string
  date: string
  title: string
  organization: string
  location: string
  type: 'work' | 'education' | 'achievement' | 'project'
  description: string
  impact: string
  details: string[]
  skills?: string[]
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'current-role',
    date: '2024 - Present',
    title: 'Senior Product Manager',
    organization: 'TechCorp',
    location: 'Amsterdam, Netherlands',
    type: 'work',
    description: 'Leading product strategy for enterprise SaaS platform serving 10,000+ users.',
    impact: 'This role transformed my understanding of product-market fit at scale. Working with enterprise customers taught me the importance of robust architecture and the complexity of B2B sales cycles.',
    details: [
      'Led cross-functional team of 12 engineers and designers',
      'Increased customer retention by 40% through improved onboarding',
      'Launched 3 major features that generated $2M+ ARR',
      'Established product analytics framework adopted company-wide'
    ],
    skills: ['Product Strategy', 'Team Leadership', 'Enterprise Sales', 'Analytics']
  },
  {
    id: 'msc-graduation',
    date: '2023',
    title: 'MSc Business Information Management',
    organization: 'Rotterdam School of Management',
    location: 'Rotterdam, Netherlands',
    type: 'education',
    description: 'Graduated Magna Cum Laude with focus on digital transformation and product management.',
    impact: 'This program bridged my technical background with business strategy. The combination of case studies and real-world projects gave me frameworks I use daily in product decisions.',
    details: [
      'Thesis on "AI-Driven Product Personalization" - Grade: 9.2/10',
      'Led consulting project for Fortune 500 company',
      'President of Technology Student Association',
      'Dean\'s List for academic excellence'
    ],
    skills: ['Strategic Thinking', 'Business Analysis', 'Leadership', 'Research']
  },
  {
    id: 'startup-experience',
    date: '2022 - 2023',
    title: 'Product Lead',
    organization: 'InnovateNL (Startup)',
    location: 'Utrecht, Netherlands',
    type: 'work',
    description: 'First product hire at early-stage fintech startup. Built product from 0 to 1000+ users.',
    impact: 'Working at a startup taught me the importance of speed and customer validation. Every feature decision had immediate consequences, which sharpened my judgment about what truly matters to users.',
    details: [
      'Designed and launched MVP in 3 months',
      'Conducted 100+ user interviews to validate product-market fit',
      'Grew user base from 0 to 1000+ in 6 months',
      'Established product development processes and metrics'
    ],
    skills: ['MVP Development', 'User Research', 'Growth Hacking', 'Agile Development']
  },
  {
    id: 'ai-competition',
    date: '2022',
    title: 'Winner - National AI Challenge',
    organization: 'Dutch AI Coalition',
    location: 'Amsterdam, Netherlands',
    type: 'achievement',
    description: 'Led team that won national competition for AI solution addressing climate change.',
    impact: 'This experience showed me the power of applying technology to meaningful problems. It also taught me how to present complex technical concepts to non-technical stakeholders.',
    details: [
      'Developed AI model for optimizing renewable energy distribution',
      'Presented to panel of industry leaders and government officials',
      'Solution adopted by 2 municipalities for pilot programs',
      'Featured in national technology magazine'
    ],
    skills: ['Machine Learning', 'Public Speaking', 'Climate Tech', 'Team Leadership']
  },
  {
    id: 'internship-big-tech',
    date: '2021',
    title: 'Product Management Intern',
    organization: 'GlobalTech Corp',
    location: 'London, UK',
    type: 'work',
    description: 'Summer internship in product team working on consumer mobile application used by 50M+ users.',
    impact: 'Working at scale taught me about the complexity of product decisions when millions of users are involved. Every small change requires careful consideration and robust testing.',
    details: [
      'Analyzed user behavior data to identify optimization opportunities',
      'Designed A/B tests that improved key metrics by 15%',
      'Collaborated with engineering teams across 3 time zones',
      'Presented findings to VP of Product'
    ],
    skills: ['Data Analysis', 'A/B Testing', 'Mobile Product', 'Cross-cultural Collaboration']
  },
  {
    id: 'bsc-graduation',
    date: '2020',
    title: 'BSc Computer Science',
    organization: 'Delft University of Technology',
    location: 'Delft, Netherlands',
    type: 'education',
    description: 'Graduated with honors, specialization in AI and Human-Computer Interaction.',
    impact: 'This foundation in computer science gives me credibility with engineering teams and helps me understand technical constraints when making product decisions.',
    details: [
      'Graduated Cum Laude (GPA: 8.5/10)',
      'Thesis on "Natural Language Interfaces for Complex Software"',
      'Teaching Assistant for "Introduction to Programming"',
      'Member of Student Technology Committee'
    ],
    skills: ['Programming', 'AI/ML', 'UX Design', 'Technical Communication']
  }
]

const getIcon = (type: string) => {
  switch (type) {
    case 'work': return <Briefcase className="w-5 h-5" />
    case 'education': return <GraduationCap className="w-5 h-5" />
    case 'achievement': return <Award className="w-5 h-5" />
    default: return <Calendar className="w-5 h-5" />
  }
}

const getIconColor = (type: string) => {
  switch (type) {
    case 'work': return 'bg-blue-500'
    case 'education': return 'bg-green-500'
    case 'achievement': return 'bg-orange-500'
    default: return 'bg-gray-500'
  }
}

const TimelineCard = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 to-transparent"></div>
      
      {/* Timeline dot */}
      <motion.div
        className={`absolute left-6 top-6 w-4 h-4 rounded-full ${getIconColor(event.type)} flex items-center justify-center text-white z-10`}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </motion.div>

      {/* Content card */}
      <motion.div
        className="ml-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getIconColor(event.type)}`}>
                  {getIcon(event.type)}
                  <span className="ml-1 capitalize">{event.type}</span>
                </span>
                <span className="text-sm font-medium text-gray-600">{event.date}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {event.title}
              </h3>
              
              <div className="flex items-center text-gray-600 mb-3">
                <span className="font-medium">{event.organization}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {event.location}
                </span>
              </div>
            </div>
            
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            {event.description}
          </p>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-gray-100"
            >
              <div className="p-6 space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Why This Mattered</h4>
                  <p className="text-gray-700 leading-relaxed italic">
                    {event.impact}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {event.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {event.skills && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.skills.map((skill) => (
                        <span key={skill} className="text-sm px-3 py-1 bg-orange-50 text-orange-700 rounded-md border border-orange-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '4rem' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mb-6 mx-auto"
          />
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Key moments that shaped my career and perspective. Click on any event to learn more about its impact.
          </p>
        </motion.div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <TimelineCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}