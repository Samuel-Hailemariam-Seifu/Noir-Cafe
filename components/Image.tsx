'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  hover?: boolean
  aspectRatio?: string
}

export default function RestaurantImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  hover = true,
  aspectRatio = 'aspect-[4/3]'
}: ImageProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl ${aspectRatio} ${className}`}
    >
      <motion.div
        animate={{ scale: hover && isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  )
}
