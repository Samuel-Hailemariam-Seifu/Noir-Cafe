interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl text-foreground-muted ${centered ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
