'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import { Sparkles, Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventSize: '',
    eventDate: '',
    message: '',
    consent: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.consent) newErrors.consent = 'Please accept the terms'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    console.log('Form submitted:', formData)
  }

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold mb-4">Thank You!</h2>
            <p className="text-foreground-muted mb-8 leading-relaxed">
              We've received your inquiry and will get back to you within 24 hours.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="primary">
              Send Another Message
            </Button>
          </motion.div>
        </Container>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="NOIR CAFÉ Contact"
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
                Contact Us
              </Badge>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
              Get In
              <br />
              <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Have questions? Want to host a private event? We're here to help.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-8">
              <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-foreground-muted">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+251911234567" className="text-foreground-muted hover:text-accent transition-colors">
                      +251 911 234 567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@noircafe.com" className="text-foreground-muted hover:text-accent transition-colors">
                      hello@noircafe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <div className="text-foreground-muted space-y-1 text-sm">
                      <p>Mon - Thu: 11:00 AM - 10:00 PM</p>
                      <p>Fri - Sat: 11:00 AM - 11:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <div className="h-64 rounded-3xl relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="NOIR CAFÉ Location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-foreground font-medium">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Private Events Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Private Events Inquiry</h2>
              <p className="text-foreground-muted mb-8 text-sm leading-relaxed">
                Planning a special event? Let us create a memorable experience for you and your guests.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventSize" className="block text-sm font-medium mb-2">
                      Event Size
                    </label>
                    <select
                      id="eventSize"
                      name="eventSize"
                      value={formData.eventSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    >
                      <option value="">Select size</option>
                      <option value="10-20">10-20 guests</option>
                      <option value="20-30">20-30 guests</option>
                      <option value="30-50">30-50 guests</option>
                      <option value="50+">50+ guests</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your event
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    placeholder="Event type, special requirements, dietary needs, etc."
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-accent focus:ring-accent/20"
                    />
                    <span className="text-sm text-foreground-muted">
                      I agree to be contacted about my event inquiry. *
                    </span>
                  </label>
                  {errors.consent && <p className="mt-1 text-sm text-red-400">{errors.consent}</p>}
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center" size="lg">
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
