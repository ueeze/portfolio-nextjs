'use client'
import { contactData } from '@/app/data'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import React from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const ContactList = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl px-4 py-12 space-y-4 flex flex-col items-center sm:items-start"
    >
      {contactData.map((item, index) => {
        const Icon = LucideIcons[item.icon]
        const isNonClickable = item.label === 'Phone' || item.label === 'Email'
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center space-x-4 p-3 sm:p-4 bg-white bg-opacity-10 rounded-lg w-full sm:w-3/4 mx-auto"
          >
            <div
              href={item.link}
              className="text-xl sm:text-2xl text-accent flex-shrink-0"
            >
              {Icon && <Icon />}
            </div>
            <div className="flex items-center w-full">
              <span className="font-bold text-base sm:text-lg text-white mr-4">
                {item.label}
              </span>
              {isNonClickable ? (
                <span className="text-sm sm:text-base text-white hover:underline cursor-pointer">
                  {item.value}
                </span>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:underline"
                >
                  {item.value}
                </a>
              )}
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default ContactList
