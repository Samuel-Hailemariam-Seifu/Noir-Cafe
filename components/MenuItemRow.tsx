import Badge from './Badge'

interface MenuItemRowProps {
  name: string
  description: string
  price: string
  badges?: string[]
  featured?: boolean
}

export default function MenuItemRow({ 
  name, 
  description, 
  price, 
  badges = [],
  featured = false 
}: MenuItemRowProps) {
  return (
    <div className={`py-6 border-b border-white/5 last:border-0 ${featured ? 'bg-white/5 rounded-2xl px-6 -mx-6' : ''}`}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold">{name}</h3>
            {badges.map((badge, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
          <p className="text-foreground-muted text-sm leading-relaxed">{description}</p>
        </div>
        <div className="text-xl font-serif text-accent font-semibold whitespace-nowrap">
          {price}
        </div>
      </div>
    </div>
  )
}
