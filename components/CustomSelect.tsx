'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface CustomSelectProps {
  id: string
  name: string
  value: string
  options: SelectOption[]
  placeholder?: string
  onChange: (name: string, value: string) => void
  className?: string
}

export default function CustomSelect({
  id,
  name,
  value,
  options,
  placeholder = 'Select an option',
  onChange,
  className = '',
}: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const selected = options.find(option => option.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (nextValue: string) => {
    onChange(name, nextValue)
    setOpen(false)
  }

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <button
        id={id}
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-left flex items-center justify-between"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selected ? 'text-foreground' : 'text-foreground-muted'}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          className="absolute z-50 mt-2 w-full rounded-xl border border-white/10 bg-background shadow-lg overflow-hidden"
          role="listbox"
          aria-labelledby={id}
        >
          {options.map(option => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full px-4 py-3 text-left transition-colors ${
                  option.value === value
                    ? 'bg-accent text-background'
                    : 'text-foreground hover:bg-accent hover:text-background'
                }`}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
