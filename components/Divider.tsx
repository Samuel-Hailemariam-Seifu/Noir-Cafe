interface DividerProps {
  className?: string
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div className={`h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent ${className}`} />
  )
}
