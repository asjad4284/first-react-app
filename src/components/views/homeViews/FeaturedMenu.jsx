import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle, Card } from '../../ui'
import RevealOnScroll from '../../utils/RevealOnScroll'

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
  ]

  const menuItems = [
    {
      id: 1,
      name: 'Truffle Mushroom Risotto',
      category: 'mains',
      price: 28,
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070',
      description: 'Creamy arborio rice with wild mushrooms and black truffle',
      rating: 4.9,
      isPopular: true,
    },
    {
      id: 2,
      name: 'Grilled Salmon Fillet',
      category: 'mains',
      price: 34,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070',
      description: 'Atlantic salmon with lemon butter and seasonal vegetables',
      rating: 4.8,
      isPopular: true,
    },
    {
      id: 3,
      name: 'Crispy Calamari',
      category: 'appetizers',
      price: 16,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2050',
      description: 'Lightly battered squid with marinara dipping sauce',
      rating: 4.7,
      isPopular: false,
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      category: 'desserts',
      price: 12,
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      rating: 4.9,
      isPopular: true,
    },
    {
      id: 5,
      name: 'Bruschetta Trio',
      category: 'appetizers',
      price: 14,
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2071',
      description: 'Three varieties of topped toasted ciabatta bread',
      rating: 4.6,
      isPopular: false,
    },
    {
      id: 6,
      name: 'Signature Mojito',
      category: 'drinks',
      price: 10,
      image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1965',
      description: 'Fresh mint, lime, rum, and sparkling water',
      rating: 4.8,
      isPopular: true,
    },
  ]

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-b from-[#faf8f5] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#c4a77d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Our Menu"
          title="Featured Delicacies"
          description="Discover our chef's selection of signature dishes, crafted with passion and the finest ingredients"
        />

        {/* Category Filter */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mt-12 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-400 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#c4a77d] to-[#b8956a] text-white shadow-lg shadow-[#c4a77d]/30'
                    : 'bg-white text-[#1a1a2e] hover:bg-[#c4a77d]/10 shadow-md border border-[#e5e1db]'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Menu Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Card padding="none" className="overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Popular Badge */}
                    {item.isPopular && (
                      <motion.span 
                        className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-[#d4af37] to-[#c4a77d] text-[#1a1a2e] text-xs font-bold rounded-full shadow-lg"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        🔥 Popular
                      </motion.span>
                    )}

                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="font-bold text-[#1a1a2e]">${item.price}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#1a1a2e]">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-[#d4af37]">⭐</span>
                        <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-5">{item.description}</p>
                    <motion.button 
                      className="w-full py-3 bg-[#1a1a2e] text-white rounded-xl font-semibold hover:bg-[#c4a77d] transition-colors duration-400"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Order
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu Button */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="text-center mt-14">
            <motion.a
              href="/menu"
              className="inline-flex items-center gap-3 text-[#c4a77d] font-semibold text-lg group"
              whileHover={{ x: 5 }}
            >
              <span>View Full Menu</span>
              <motion.span
                className="text-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default FeaturedMenu
