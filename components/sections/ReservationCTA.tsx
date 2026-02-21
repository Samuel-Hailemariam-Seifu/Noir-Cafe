'use client'

import { motion } from 'framer-motion'
import Container from '@/components/Container'
import ReservationForm from '@/components/ReservationForm'
import Button from '@/components/Button'
import { Phone } from 'lucide-react'

export default function ReservationCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Reserve Your
              <br />
              <span className="text-accent">Table</span>
            </h2>
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              Experience culinary excellence. Book your table today and join us for an unforgettable dining experience.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Button href="/reservations" variant="primary" size="lg">
                Reserve Online
              </Button>
              <Button href="tel:+251911234567" variant="secondary" size="lg">
                <Phone className="w-5 h-5" />
                Call to Reserve
              </Button>
            </div>
          </motion.div>

          {/* Right - Form Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <ReservationForm compact />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
