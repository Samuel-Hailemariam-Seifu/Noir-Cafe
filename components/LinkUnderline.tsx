'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface LinkUnderlineProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function LinkUnderline({ href, children, className = '' }: LinkUnderlineProps) {
  return (
    <Link href={href} className={`relative group ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-accent"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4 }}
      />
    </Link>
  )
}
