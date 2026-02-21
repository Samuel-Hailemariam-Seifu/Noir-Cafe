'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { Music, ChefHat, Coffee, Calendar } from 'lucide-react'

const specials = [
  {
    icon: Music,
    title: 'Live Jazz Night',
    description: 'Every Friday evening, enjoy live jazz performances while you dine.',
    date: 'Fridays, 7 PM',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80'
  },
  {
    icon: ChefHat,
    title: "Chef's Tasting Menu",
    description: 'A curated 7-course experience showcasing our finest dishes.',
    date: 'By reservation',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80'
  },
  {
    icon: Coffee,
    title: 'Weekend Brunch',
    description: 'Indulge in our special brunch menu every Saturday and Sunday.',
    date: 'Sat - Sun, 11 AM - 3 PM',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80'
  }
]

export default function Specials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            title="Specials & Events"
            subtitle="Join us for unique dining experiences"
            centered
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden p-0">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={special.image}
                    alt={special.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <special.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-xs text-accent uppercase tracking-wider">{special.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{special.title}</h3>
                  <p className="text-foreground-muted mb-6 leading-relaxed flex-1">{special.description}</p>

                  <Button href="/reservations" variant="ghost" className="w-full justify-center group">
                    Book Now
                    <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
