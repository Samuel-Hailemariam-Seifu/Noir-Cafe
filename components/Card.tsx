'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}
