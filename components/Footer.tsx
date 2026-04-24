'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import Divider from './Divider'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Navigation } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const showFooterMap = pathname !== '/contact'
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  return (
    <footer className="border-t border-white/10 bg-background-alt">
      <Container>
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">NOIR CAFÉ</h3>
            <p className="text-foreground-muted mb-4 text-sm leading-relaxed">
              Modern dining. Timeless atmosphere.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground-muted hover:text-accent transition-colors duration-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-muted hover:text-accent transition-colors duration-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-muted hover:text-accent transition-colors duration-500">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+251911234567" className="hover:text-accent transition-colors">
                  +251 911 234 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hello@noircafe.com" className="hover:text-accent transition-colors">
                  hello@noircafe.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/menu" className="text-foreground-muted hover:text-accent transition-colors duration-500">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-foreground-muted hover:text-accent transition-colors duration-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-foreground-muted hover:text-accent transition-colors duration-500">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground-muted hover:text-accent transition-colors duration-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground-muted">
          <p>© {new Date().getFullYear()} NOIR CAFÉ & KITCHEN. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors duration-500">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors duration-500">
              Terms of Service
            </Link>
          </div>
        </div>

        {showFooterMap && (
          <div className="pb-8">
            <div className="h-72 rounded-2xl relative overflow-hidden border border-white/10 bg-background">
              {isMapLoaded ? (
                <iframe
                  title="NOIR CAFE location map"
                  src="https://www.google.com/maps?q=Addis+Ababa,+Ethiopia&z=14&output=embed"
                  className="absolute inset-0 w-full h-full opacity-85"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80"
                    alt="Map preview of Addis Ababa"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-background/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsMapLoaded(true)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-background text-sm font-semibold hover:bg-accent-light transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Load Live Map
                    </button>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border border-accent/40 bg-background/85 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent mb-1">Find Us</p>
                    <p className="text-sm text-foreground font-medium">NOIR CAFÉ, Addis Ababa</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Addis+Ababa,+Ethiopia"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent text-background text-xs font-semibold hover:bg-accent-light transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </footer>
  )
}
