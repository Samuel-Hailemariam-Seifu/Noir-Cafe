'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import MenuItemRow from '@/components/MenuItemRow'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import { Sparkles, ChefHat } from 'lucide-react'

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

const menuItems = {
  Starters: [
    { name: 'Bruschetta Trio', description: 'House-made bread with tomato, basil, and balsamic', price: '180 ETB', badges: ['V'], image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=600&q=80' },
    { name: 'Truffle Arancini', description: 'Crispy risotto balls with truffle aioli', price: '220 ETB', badges: ['V'], image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80' },
    { name: 'Seared Scallops', description: 'Pan-seared scallops with cauliflower purée', price: '350 ETB', badges: [], image: 'https://images.unsplash.com/photo-1615367423057-42e90b8b0daa?w=600&q=80' },
    { name: 'Beef Carpaccio', description: 'Thinly sliced beef with arugula and parmesan', price: '280 ETB', badges: [], image: 'https://images.unsplash.com/photo-1603048297172-c92544747367?w=600&q=80' }
  ],
  Mains: [
    { name: 'Wagyu Ribeye', description: 'Premium grade wagyu with roasted vegetables', price: '850 ETB', badges: [], image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80' },
    { name: 'Ethiopian Fusion Platter', description: 'Modern take on traditional flavors', price: '450 ETB', badges: ['GF'], image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80' },
    { name: 'Lobster Risotto', description: 'Creamy arborio rice with fresh lobster', price: '680 ETB', badges: [], image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80' },
    { name: 'Vegetarian Tasting Menu', description: 'Five-course plant-based experience', price: '420 ETB', badges: ['V', 'GF'], image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80' },
    { name: 'Lamb Shank', description: 'Slow-braised lamb with seasonal vegetables', price: '520 ETB', badges: [], image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&q=80' },
    { name: 'Salmon Teriyaki', description: 'Grilled salmon with teriyaki glaze', price: '480 ETB', badges: ['GF'], image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80' }
  ],
  Desserts: [
    { name: 'Chocolate Soufflé', description: 'Warm dark chocolate with vanilla ice cream', price: '180 ETB', badges: [], image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80' },
    { name: 'Tiramisu', description: 'Classic Italian dessert with coffee and mascarpone', price: '160 ETB', badges: [], image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80' },
    { name: 'Berry Panna Cotta', description: 'Creamy panna cotta with fresh berries', price: '150 ETB', badges: ['GF'], image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80' },
    { name: 'Cheesecake', description: 'New York style with berry compote', price: '170 ETB', badges: [], image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&q=80' }
  ],
  Drinks: [
    { name: 'Wine Selection', description: 'Curated wines from local and international vineyards', price: '200-800 ETB', badges: [], image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80' },
    { name: 'Craft Cocktails', description: 'Signature cocktails crafted by our mixologist', price: '180-250 ETB', badges: [], image: 'https://images.unsplash.com/photo-1551538827-9c0370b1ef8a?w=600&q=80' },
    { name: 'Ethiopian Coffee', description: 'Traditional coffee ceremony', price: '120 ETB', badges: ['V'], image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&q=80' },
    { name: 'Fresh Juices', description: 'Seasonal fresh fruit juices', price: '80 ETB', badges: ['V', 'GF'], image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80' }
  ]
}

const chefRecommendations = [
  { name: 'Wagyu Ribeye', description: 'Our signature dish, perfectly aged and cooked to perfection', price: '850 ETB', featured: true, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80' },
  { name: 'Ethiopian Fusion Platter', description: 'A celebration of local flavors with modern presentation', price: '450 ETB', featured: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80' }
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const displayItems = selectedCategory === 'All'
    ? Object.values(menuItems).flat()
    : menuItems[selectedCategory as keyof typeof menuItems] || []

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="NOIR CAFÉ Menu"
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
                Our Menu
              </Badge>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
              Culinary
              <br />
              <span className="text-accent">Excellence</span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Discover our carefully crafted menu, featuring the finest ingredients and innovative flavors.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container>
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-500 ${
                selectedCategory === category
                  ? 'bg-accent/20 border-accent text-accent'
                  : 'bg-white/5 border-white/10 text-foreground-muted hover:border-accent/30 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Chef's Recommendations */}
        {selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <ChefHat className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-serif font-bold">Chef's Recommendations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {chefRecommendations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden p-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-2">
                        <ChefHat className="w-4 h-4 text-accent" />
                        <span className="text-xs text-accent uppercase tracking-wider">Chef's Pick</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-2">{item.name}</h3>
                      <p className="text-foreground-muted mb-4 leading-relaxed">{item.description}</p>
                      <div className="text-2xl font-serif text-accent font-semibold">{item.price}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            {displayItems.map((item, index) => (
              <MenuItemRow
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                badges={item.badges}
              />
            ))}
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-foreground-muted mb-6">
            Ready to experience these flavors?
          </p>
          <Button href="/reservations" variant="primary" size="lg">
            Reserve a Table
          </Button>
        </motion.div>
      </Container>
    </div>
  )
}
