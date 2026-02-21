'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import { Clock, ArrowDown, UtensilsCrossed } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="NOIR CAFÉ Interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/85" />
        {/* Vignette */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(11, 11, 11, 0.7) 100%)'
          }}
        />
        {/* Accent gradient */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <Badge variant="accent" className="text-xs">
                <Clock className="w-3 h-3 inline mr-1.5" />
                Open Now
              </Badge>
              <span className="text-sm text-foreground-muted">Mon - Sun: 11 AM - 10 PM</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[0.95] text-balance">
              Modern dining.
              <br />
              <span className="text-accent">Timeless atmosphere.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-foreground-muted mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Experience culinary excellence in the heart of Addis Ababa. 
              Where tradition meets innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href="/reservations" variant="primary" size="lg">
                Reserve a Table
              </Button>
              <Button href="/menu" variant="secondary" size="lg">
                View Menu
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Floating Signature Dish Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y, opacity }}
            className="lg:justify-self-end"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-2xl max-w-sm"
            >
              <div className="mb-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80"
                    alt="Ethiopian Fusion Platter"
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <UtensilsCrossed className="w-4 h-4 text-accent" />
                  <span className="text-xs text-accent uppercase tracking-wider">Chef's Signature</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">Ethiopian Fusion Platter</h3>
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                  A modern interpretation of traditional flavors, featuring our house-made injera and seasonal selections.
                </p>
                <div className="text-2xl font-serif text-accent font-semibold">
                  450 ETB
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-foreground-muted"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
