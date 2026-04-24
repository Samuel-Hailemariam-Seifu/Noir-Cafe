'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface GalleryTileProps {
  src: string
  alt: string
  caption?: string
  category?: string
  className?: string
}

export default function GalleryTile({ 
  src,
  alt,
  caption, 
  category, 
  className = '' 
}: GalleryTileProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-3xl aspect-[4/5] ${className}`}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </motion.div>
      
      {caption && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent flex items-end p-6"
        >
          <div>
            {category && (
              <span className="text-xs text-accent uppercase tracking-wider mb-2 block">
                {category}
              </span>
            )}
            <p className="text-foreground font-medium text-lg">{caption}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
