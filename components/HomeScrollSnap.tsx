'use client'

import { useEffect } from 'react'

export default function HomeScrollSnap() {
  useEffect(() => {
    document.documentElement.classList.add('home-scroll-snap')

    return () => {
      document.documentElement.classList.remove('home-scroll-snap')
    }
  }, [])

  return null
}
