'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, ChevronDown, ChevronUp } from 'lucide-react'

interface Project {
  id: string
  title: string
  category: string
  year: string
  status: string
  description: string
  longDescription: string
  technologies: string[]
  team: string
  impact: string[]
  links: {
    demo?: string
    github?: string
    case_study?: string
  }
}

const projects: Project[] = [
  {
    id: 'saas-platform',
    title: 'Enterprise SaaS Platform',
    category: 'Product Development',
    year: '2023-2024',
    status: 'Launched',
    description: 'A comprehensive SaaS platform serving 10,000+ users with advanced analytics and automation.',
    longDescription: 'Led the development of a comprehensive enterprise SaaS platform that transformed how mid-market companies handle customer data and analytics. The platform integrated multiple data sources, provided real-time insights, and automated complex workflows. Built with scalability in mind, supporting multi-tenancy and handling millions of data points daily. The project involved complex technical challenges including real-time data processing, advanced security implementations, and creating an intuitive user experience for non-technical users.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    team: '8 developers, 2 designers, 1 PM',
    impact: [
      'Achieved 40% increase in customer retention',
      'Reduced customer onboarding time from 2 weeks to 2 days',
      'Generated $2M+ ARR within first year',
      'Served 10,000+ active users across 200+ companies'
    ],
    links: {
      demo: 'https://demo.example.com',
      case_study: 'https://case-study.example.com'
    }
  },
  {
    id: 'ecommerce-system',
    title: 'Next-Gen E-commerce System',
    category: 'Full-Stack Development',
    year: '2022-2023',
    status: 'Scaled',
    description: 'High-performance e-commerce platform handling 100k+ daily transactions with AI-powered recommendations.',
    longDescription: 'Architected and built a modern e-commerce platform from the ground up, focusing on performance, scalability, and user experience. Implemented advanced features including AI-powered product recommendations, real-time inventory management, and seamless payment processing. The system was designed to handle high traffic volumes during peak shopping seasons while maintaining sub-second response times. Integrated with multiple third-party services for logistics, payments, and marketing automation.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Vercel', 'TensorFlow'],
    team: '6 developers, 1 designer, 1 ML engineer',
    impact: [
      'Processed 100k+ daily transactions at peak',
      'Achieved 99.9% uptime during Black Friday',
      'Increased conversion rate by 35% through AI recommendations',
      'Reduced page load times by 60%'
    ],
    links: {
      github: 'https://github.com/example',
      demo: 'https://ecommerce-demo.example.com'
    }
  },
  {
    id: 'ai-analytics',
    title: 'AI-Powered Analytics Dashboard',
    category: 'Data & AI',
    year: '2021-2022',
    status: 'Acquired',
    description: 'Machine learning platform that automated business intelligence for Fortune 500 companies.',
    longDescription: 'Developed an innovative AI-powered analytics platform that democratized data insights for non-technical business users. The system automatically detected patterns, anomalies, and trends in large datasets, presenting findings through natural language narratives and intuitive visualizations. Implemented advanced machine learning algorithms for predictive analytics and automated report generation. The platform could connect to virtually any data source and provide actionable insights within minutes of data ingestion.',
    technologies: ['Python', 'scikit-learn', 'D3.js', 'Flask', 'MongoDB', 'Apache Kafka'],
    team: '4 developers, 2 data scientists, 1 UX designer',
    impact: [
      'Reduced time-to-insight from weeks to minutes',
      'Served 50+ Fortune 500 companies',
      'Generated automated insights for 1M+ data points daily',
      'Platform acquired by major analytics company'
    ],
    links: {
      case_study: 'https://ai-analytics-case.example.com'
    }
  }
]

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

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
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                {project.category}
              </span>
              <span className="text-sm text-gray-500">{project.year}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                project.status === 'Launched' ? 'bg-green-100 text-green-800' :
                project.status === 'Scaled' ? 'bg-blue-100 text-blue-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
              {project.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
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
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
                <p className="text-gray-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-orange-500" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-sm px-3 py-1 bg-orange-50 text-orange-700 rounded-md border border-orange-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-500" />
                    Team
                  </h4>
                  <p className="text-gray-700">{project.team}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Impact</h4>
                <ul className="space-y-2">
                  {project.impact.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {(project.links.demo || project.links.github || project.links.case_study) && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                  {project.links.case_study && (
                    <a
                      href={project.links.case_study}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Case Study
                    </a>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
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
              Projects
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Building products that make a meaningful impact.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}