'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Mail, Phone, Download, Eye, ChevronDown, Linkedin, Github, Twitter, Code, BookOpen } from 'lucide-react'
import Timeline from '@/components/Timeline'

interface DropdownItem {
  label: string
  icon: React.ReactNode
  action: () => void
}

interface NavItemProps {
  label: string
  items: DropdownItem[]
}

const NavItem = ({ label, items }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        className="flex items-center justify-between w-full px-6 py-4 text-left text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {items.map((item, index) => (
                <motion.button
                  key={index}
                  className="flex items-center w-full px-4 py-3 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                  onClick={item.action}
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Home() {
  const essayItems: DropdownItem[] = [
    {
      label: 'All Essays',
      icon: <FileText className="w-4 h-4" />,
      action: () => window.location.href = '/essays'
    },
    {
      label: 'Technology & Innovation',
      icon: <FileText className="w-4 h-4" />,
      action: () => window.location.href = '/essays/technology-innovation'
    },
    {
      label: 'Leadership & Strategy',
      icon: <FileText className="w-4 h-4" />,
      action: () => window.location.href = '/essays/leadership-strategy'
    },
    {
      label: 'Product Development',
      icon: <FileText className="w-4 h-4" />,
      action: () => window.location.href = '/essays/product-development'
    }
  ]

  const resumeItems: DropdownItem[] = [
    {
      label: 'View Resume',
      icon: <Eye className="w-4 h-4" />,
      action: () => console.log('View resume')
    },
    {
      label: 'Download PDF',
      icon: <Download className="w-4 h-4" />,
      action: () => console.log('Download resume')
    }
  ]

  const projectItems: DropdownItem[] = [
    {
      label: 'All Projects',
      icon: <Code className="w-4 h-4" />,
      action: () => window.location.href = '/projects'
    },
    {
      label: 'SaaS Platform',
      icon: <Code className="w-4 h-4" />,
      action: () => window.location.href = '/projects/saas-platform'
    },
    {
      label: 'E-commerce System',
      icon: <Code className="w-4 h-4" />,
      action: () => window.location.href = '/projects/ecommerce-system'
    },
    {
      label: 'AI Analytics Tool',
      icon: <Code className="w-4 h-4" />,
      action: () => window.location.href = '/projects/ai-analytics'
    }
  ]

  const readingItems: DropdownItem[] = [
    {
      label: 'All Reading',
      icon: <BookOpen className="w-4 h-4" />,
      action: () => window.location.href = '/reading'
    },
    {
      label: 'Currently Reading',
      icon: <BookOpen className="w-4 h-4" />,
      action: () => window.location.href = '/reading#current'
    },
    {
      label: 'Recommended Books',
      icon: <BookOpen className="w-4 h-4" />,
      action: () => window.location.href = '/reading#recommended'
    },
    {
      label: 'Influential Articles',
      icon: <BookOpen className="w-4 h-4" />,
      action: () => window.location.href = '/reading#articles'
    }
  ]

  const contactItems: DropdownItem[] = [
    {
      label: 'Email',
      icon: <Mail className="w-4 h-4" />,
      action: () => window.open('mailto:jort@example.com')
    },
    {
      label: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      action: () => window.open('https://linkedin.com/in/jortwiebrens')
    },
    {
      label: 'GitHub',
      icon: <Github className="w-4 h-4" />,
      action: () => window.open('https://github.com/jortwiebrens')
    },
    {
      label: 'Twitter',
      icon: <Twitter className="w-4 h-4" />,
      action: () => window.open('https://twitter.com/jortwiebrens')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Section - Personal Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="relative">
                {/* Professional Headshot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl"
                >
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-white">J</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '4rem' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mb-6"
                />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4"
                >
                  Jort
                  <span className="block font-medium bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Wiebrens
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg sm:text-xl text-gray-600 font-light"
                >
                  Product Leader & Technology Strategist
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-6 text-gray-700 leading-relaxed"
              >
                <p className="text-base sm:text-lg">
                  I&apos;m passionate about building products that make a meaningful impact. With over a decade of experience 
                  in technology and product development, I focus on creating solutions that bridge the gap between 
                  complex technical challenges and human needs.
                </p>
                
                <p className="text-base sm:text-lg">
                  My approach combines strategic thinking with hands-on execution, drawing from experiences across 
                  startups and scale-ups. I believe in the power of thoughtful design, iterative development, and 
                  building teams that thrive on solving hard problems together.
                </p>
                
                <p className="text-base sm:text-lg">
                  When I&apos;m not working, you&apos;ll find me exploring new technologies, writing about innovation and 
                  leadership, or enjoying the outdoors. I&apos;m always interested in connecting with fellow builders 
                  and thinkers who are working on interesting challenges.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Navigation Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden max-w-sm w-full mx-auto lg:mx-0"
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.9)"
              }}
            >
              <div className="p-8">
                <div className="space-y-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <NavItem label="Essays" items={essayItems} />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="border-t border-gray-100"
                  >
                    <NavItem label="Projects" items={projectItems} />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="border-t border-gray-100"
                  >
                    <NavItem label="Reading" items={readingItems} />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="border-t border-gray-100"
                  >
                    <NavItem label="Resume" items={resumeItems} />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="border-t border-gray-100"
                  >
                    <NavItem label="Contact" items={contactItems} />
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <Timeline />
    </div>
  )
}