'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/Container'
import ReservationForm from '@/components/ReservationForm'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import { Sparkles, Phone, MessageCircle, Clock, CheckCircle2 } from 'lucide-react'

export default function Reservations() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="NOIR CAFÉ Reservations"
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
                Reservations
              </Badge>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
              Reserve Your
              <br />
              <span className="text-accent">Table</span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Book your table online or call us directly. We look forward to welcoming you.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container>
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-8">Make a Reservation</h2>
              <ReservationForm />
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Alternative Booking */}
            <Card className="p-8">
              <h3 className="text-xl font-serif font-bold mb-4">Prefer to Call?</h3>
              <p className="text-foreground-muted mb-6 text-sm leading-relaxed">
                Speak directly with our team to make your reservation or discuss special requests.
              </p>
              <div className="space-y-4">
                <Button href="tel:+251911234567" variant="primary" className="w-full justify-center">
                  <Phone className="w-5 h-5" />
                  Call Us
                </Button>
                <Button href="#" variant="secondary" className="w-full justify-center">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </div>
            </Card>

            {/* Hours */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-serif font-bold">Opening Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground-muted">Monday - Thursday</span>
                  <span className="text-foreground">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground-muted">Friday - Saturday</span>
                  <span className="text-foreground">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground-muted">Sunday</span>
                  <span className="text-foreground">12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </Card>

            {/* Info */}
            <Card className="p-8">
              <h3 className="text-xl font-serif font-bold mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm text-foreground-muted">
                {[
                  'Confirmation within 24 hours',
                  'Flexible cancellation policy',
                  'Special occasion arrangements',
                  'Dietary requirements accommodated'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
