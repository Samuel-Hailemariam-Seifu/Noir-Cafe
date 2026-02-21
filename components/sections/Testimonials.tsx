'use client'

import { motion } from 'framer-motion'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Food Critic',
    content: 'An exceptional dining experience. The fusion of traditional and modern flavors is masterfully executed.',
    rating: 5
  },
  {
    name: 'Michael T.',
    role: 'Regular Guest',
    content: 'NOIR has become our go-to spot for special occasions. The atmosphere and service are unmatched.',
    rating: 5
  },
  {
    name: 'Elena K.',
    role: 'Food Blogger',
    content: 'Every dish tells a story. The attention to detail and presentation is extraordinary.',
    rating: 5
  },
  {
    name: 'David R.',
    role: 'Chef',
    content: 'As a chef myself, I appreciate the craftsmanship. This is fine dining at its best.',
    rating: 5
  },
  {
    name: 'Amina H.',
    role: 'Local Resident',
    content: 'The best restaurant in Addis Ababa. The flavors are authentic yet innovative.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background-alt">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            title="What Our Guests Say"
            subtitle="Real experiences from real diners"
            centered
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <Quote className="w-12 h-12 text-accent/30 mb-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground-muted mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground-muted">{testimonial.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
