'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import Divider from '@/components/Divider'
import { CheckCircle2 } from 'lucide-react'

export default function Story() {
  return (
    <section className="py-24 md:py-32 bg-background-alt relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="NOIR CAFÉ Kitchen"
                fill
                className="object-cover"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              title="Our Story"
              subtitle="Where tradition meets innovation"
            />

            <div className="mt-8 space-y-6 text-foreground-muted leading-relaxed text-lg">
              <p>
                NOIR CAFÉ & KITCHEN was born from a passion for creating memorable dining experiences. 
                We blend traditional Ethiopian flavors with modern culinary techniques, crafting dishes 
                that honor our heritage while embracing innovation.
              </p>
              <p>
                Every ingredient is carefully sourced, every dish thoughtfully prepared. We believe 
                dining is an art form, and our kitchen is our canvas.
              </p>
            </div>

            <Divider className="my-8" />

            <div className="space-y-4">
              {[
                'Locally sourced ingredients',
                'Chef-curated seasonal menu',
                'Award-winning wine selection',
                'Intimate dining atmosphere'
              ].map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
