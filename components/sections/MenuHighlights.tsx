'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import Button from '@/components/Button'
import { ArrowRight } from 'lucide-react'

const highlights = [
  {
    name: 'Truffle Risotto',
    description: 'Creamy arborio rice with black truffle and parmesan',
    price: '380 ETB',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80'
  },
  {
    name: 'Wagyu Steak',
    description: 'Premium grade wagyu with seasonal vegetables',
    price: '850 ETB',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80'
  },
  {
    name: 'Seafood Platter',
    description: 'Fresh catch of the day with house-made sauces',
    price: '620 ETB',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80'
  },
  {
    name: 'Chocolate Soufflé',
    description: 'Warm dark chocolate with vanilla ice cream',
    price: '180 ETB',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80'
  }
]

export default function MenuHighlights() {
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
            title="Signature Dishes"
            subtitle="Culinary excellence, one plate at a time"
            centered
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-end p-8"
                >
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-2">{item.name}</h3>
                    <p className="text-foreground-muted mb-4 text-sm leading-relaxed">{item.description}</p>
                    <div className="text-2xl font-serif text-accent font-semibold">{item.price}</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button href="/menu" variant="secondary" size="lg">
            View Full Menu
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
