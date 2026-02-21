'use client'

import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 font-medium rounded-full transition-all duration-500 relative overflow-hidden group'
  
  const variantStyles = {
    primary: 'bg-accent text-background hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20',
    secondary: 'border-2 border-accent/50 text-accent hover:border-accent hover:bg-accent/10',
    ghost: 'text-foreground hover:text-accent hover:bg-white/5'
  }
  
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5',
    lg: 'px-10 py-4.5 text-lg'
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative z-10 flex items-center gap-2"
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
        {buttonContent}
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      {buttonContent}
    </motion.button>
  )
}
