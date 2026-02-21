'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import GalleryTile from '@/components/GalleryTile'
import Badge from '@/components/Badge'
import { Sparkles } from 'lucide-react'

const filters = ['All', 'Food', 'Space', 'Events']

const galleryItems = [
  { category: 'Food', caption: 'Signature Wagyu Ribeye', src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80' },
  { category: 'Food', caption: 'Ethiopian Fusion Platter', src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80' },
  { category: 'Space', caption: 'Main Dining Room', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80' },
  { category: 'Food', caption: 'Truffle Risotto', src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80' },
  { category: 'Events', caption: 'Live Jazz Night', src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80' },
  { category: 'Space', caption: 'Private Dining Area', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80' },
  { category: 'Food', caption: 'Chocolate Soufflé', src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80' },
  { category: 'Space', caption: 'Bar & Lounge', src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80' },
  { category: 'Events', caption: "Chef's Tasting Menu", src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
  { category: 'Food', caption: 'Seafood Platter', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80' },
  { category: 'Space', caption: 'Outdoor Terrace', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80' },
  { category: 'Food', caption: 'Artisan Desserts', src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80' }
]

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filteredItems = selectedFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter)

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="NOIR CAFÉ Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Badge variant="accent" className="text-xs">
                <Sparkles className="w-3 h-3 inline mr-1.5" />
                Gallery
              </Badge>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
              Our
              <br />
              <span className="text-accent">Atmosphere</span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Step inside NOIR CAFÉ and experience the ambiance that makes every meal memorable.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container>
        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-full border transition-all duration-500 ${
                selectedFilter === filter
                  ? 'bg-accent/20 border-accent text-accent'
                  : 'bg-white/5 border-white/10 text-foreground-muted hover:border-accent/30 hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="break-inside-avoid mb-6"
            >
              <GalleryTile
                src={item.src}
                alt={item.caption || item.category}
                caption={item.caption}
                category={item.category}
              />
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-foreground-muted">No items found in this category.</p>
          </motion.div>
        )}
      </Container>
    </div>
  )
}
