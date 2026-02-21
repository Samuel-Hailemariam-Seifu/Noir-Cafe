'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle2 } from 'lucide-react'
import Button from './Button'

interface ReservationFormProps {
  onSubmit?: (data: any) => void
  compact?: boolean
}

export default function ReservationForm({ onSubmit, compact = false }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    notes: '',
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
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
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
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-12"
      >
        <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-6" />
        <h3 className="text-2xl font-serif font-bold mb-4">Reservation Confirmed</h3>
        <p className="text-foreground-muted mb-6">
          We'll contact you shortly to confirm your reservation details.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary">
          Make Another Reservation
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${compact ? 'space-y-4' : ''}`}>
      <div className={compact ? 'grid grid-cols-2 gap-4' : 'space-y-6'}>
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
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            placeholder="+251 9XX XXX XXX"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
        </div>
      </div>

      <div className={compact ? 'grid grid-cols-2 gap-4' : 'grid grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
          />
          {errors.date && <p className="mt-1 text-sm text-red-400">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium mb-2">
            <Clock className="w-4 h-4 inline mr-1" />
            Time *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
          >
            <option value="">Select time</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:30">1:30 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="18:30">6:30 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
          {errors.time && <p className="mt-1 text-sm text-red-400">{errors.time}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium mb-2">
          <Users className="w-4 h-4 inline mr-1" />
          Number of Guests *
        </label>
        <select
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <option key={num} value={num.toString()}>
              {num} {num === 1 ? 'Guest' : 'Guests'}
            </option>
          ))}
        </select>
      </div>

      {!compact && (
        <>
          <div>
            <label htmlFor="occasion" className="block text-sm font-medium mb-2">
              Occasion (optional)
            </label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            >
              <option value="">None</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business Dinner</option>
              <option value="date">Date Night</option>
              <option value="celebration">Celebration</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium mb-2">
              Special Requests (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              placeholder="Dietary restrictions, seating preferences, etc."
            />
          </div>
        </>
      )}

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
            I agree to the terms and conditions and privacy policy. *
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-sm text-red-400">{errors.consent}</p>}
      </div>

      <Button type="submit" variant="primary" className="w-full justify-center" size={compact ? 'md' : 'lg'}>
        {compact ? 'Reserve' : 'Reserve a Table'}
      </Button>
    </form>
  )
}
