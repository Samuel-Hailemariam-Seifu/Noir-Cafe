'use client'

import { motion } from 'framer-motion'
import Container from '@/components/Container'
import { Star } from 'lucide-react'
import Divider from '@/components/Divider'

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground-muted">4.8 Rating</span>
          </div>

          <Divider className="w-px h-6" />

          <div className="text-foreground-muted">
            Featured in <span className="text-foreground font-medium">Ethiopian Times</span>
          </div>

          <Divider className="w-px h-6" />

          <div className="text-foreground-muted">
            <span className="text-foreground font-medium">500+</span> Reviews
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
