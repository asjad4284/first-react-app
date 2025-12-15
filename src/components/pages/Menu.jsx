import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle, Card } from '../ui'
import RevealOnScroll from '../utils/RevealOnScroll'

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'soups', name: 'Soups', icon: '🍲' },
    { id: 'mains', name: 'Main Course', icon: '🍖' },
    { id: 'seafood', name: 'Seafood', icon: '🦐' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Beverages', icon: '🍹' },
  ]

  const menuItems = [
    // Appetizers
    { id: 1, name: 'Crispy Calamari', category: 'appetizers', price: 16, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2050', description: 'Lightly battered squid rings served with marinara sauce and lemon aioli', isVegetarian: false, isSpicy: false },
    { id: 2, name: 'Bruschetta Trio', category: 'appetizers', price: 14, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2071', description: 'Three varieties: tomato basil, mushroom truffle, and roasted pepper', isVegetarian: true, isSpicy: false },
    { id: 3, name: 'Shrimp Cocktail', category: 'appetizers', price: 18, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=2070', description: 'Chilled jumbo shrimp with house-made cocktail sauce', isVegetarian: false, isSpicy: false },
    // Soups
    { id: 4, name: 'French Onion Soup', category: 'soups', price: 12, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071', description: 'Caramelized onions in rich beef broth, topped with gruyère crouton', isVegetarian: false, isSpicy: false },
    { id: 5, name: 'Lobster Bisque', category: 'soups', price: 16, image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?q=80&w=2070', description: 'Creamy lobster soup with a touch of sherry and fresh herbs', isVegetarian: false, isSpicy: false },
    // Mains
    { id: 6, name: 'Filet Mignon', category: 'mains', price: 48, image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2069', description: '8oz center-cut beef tenderloin with red wine reduction', isVegetarian: false, isSpicy: false },
    { id: 7, name: 'Truffle Mushroom Risotto', category: 'mains', price: 28, image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070', description: 'Creamy arborio rice with wild mushrooms and black truffle oil', isVegetarian: true, isSpicy: false },
    { id: 8, name: 'Lamb Chops', category: 'mains', price: 42, image: 'https://images.unsplash.com/photo-1514516345957-556ca7c90a29?q=80&w=2070', description: 'Herb-crusted New Zealand lamb with mint chimichurri', isVegetarian: false, isSpicy: false },
    // Seafood
    { id: 9, name: 'Grilled Salmon', category: 'seafood', price: 34, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070', description: 'Atlantic salmon with lemon butter and seasonal vegetables', isVegetarian: false, isSpicy: false },
    { id: 10, name: 'Lobster Tail', category: 'seafood', price: 52, image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=2070', description: 'Butter-poached Maine lobster with drawn butter', isVegetarian: false, isSpicy: false },
    { id: 11, name: 'Seafood Paella', category: 'seafood', price: 38, image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070', description: 'Spanish saffron rice with shrimp, mussels, and calamari', isVegetarian: false, isSpicy: true },
    // Pasta
    { id: 12, name: 'Spaghetti Carbonara', category: 'pasta', price: 24, image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=2071', description: 'Classic Roman pasta with pancetta, egg, and pecorino cheese', isVegetarian: false, isSpicy: false },
    { id: 13, name: 'Lobster Linguine', category: 'pasta', price: 36, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070', description: 'Fresh linguine with lobster meat in a light cream sauce', isVegetarian: false, isSpicy: false },
    { id: 14, name: 'Penne Arrabbiata', category: 'pasta', price: 20, image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=2070', description: 'Penne in spicy tomato sauce with fresh basil', isVegetarian: true, isSpicy: true },
    // Desserts
    { id: 15, name: 'Chocolate Lava Cake', category: 'desserts', price: 12, image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070', description: 'Warm chocolate cake with molten center and vanilla ice cream', isVegetarian: true, isSpicy: false },
    { id: 16, name: 'Tiramisu', category: 'desserts', price: 11, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2069', description: 'Classic Italian dessert with espresso-soaked ladyfingers', isVegetarian: true, isSpicy: false },
    { id: 17, name: 'Crème Brûlée', category: 'desserts', price: 10, image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070', description: 'Vanilla custard with caramelized sugar crust', isVegetarian: true, isSpicy: false },
    // Drinks
    { id: 18, name: 'Signature Mojito', category: 'drinks', price: 12, image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1965', description: 'Fresh mint, lime, rum, and sparkling water', isVegetarian: true, isSpicy: false },
    { id: 19, name: 'Espresso Martini', category: 'drinks', price: 14, image: 'https://images.unsplash.com/photo-1545438102-799c3991ffef?q=80&w=2069', description: 'Vodka, espresso, and coffee liqueur', isVegetarian: true, isSpicy: false },
    { id: 20, name: 'Fresh Fruit Smoothie', category: 'drinks', price: 8, image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=2008', description: 'Blend of seasonal fruits with yogurt', isVegetarian: true, isSpicy: false },
  ]

  const filteredItems = activeCategory === 'all' ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/90"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2.5 bg-[#c4a77d]/20 border border-[#c4a77d]/30 text-[#d4af37] text-sm font-semibold rounded-full mb-4"
          >
            🍽️ Our Menu
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-white mb-4"
          >
            Culinary Delights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Explore our carefully curated menu featuring the finest ingredients and exceptional flavors
          </motion.p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 bg-[#faf8f5]/95 backdrop-blur-sm py-4 z-30 rounded-2xl">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#c4a77d] to-[#b8956a] text-white shadow-lg shadow-[#c4a77d]/30'
                    : 'bg-white text-[#1a1a2e] hover:bg-[#c4a77d]/10 shadow-md border border-[#e5e1db]'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" layout>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card padding="none" className="overflow-hidden group h-full">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                      <div className="absolute top-3 left-3 flex gap-2">
                        {item.isVegetarian && (
                          <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-bold rounded-full">🌱 Veg</span>
                        )}
                        {item.isSpicy && (
                          <span className="px-2.5 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">🌶️</span>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                        <span className="font-bold text-[#1a1a2e]">${item.price}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#1a1a2e] mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                      <motion.button 
                        className="w-full py-2.5 bg-[#1a1a2e] text-white rounded-xl font-semibold hover:bg-[#c4a77d] transition-colors duration-300 text-sm"
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

          {/* Note */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="mt-12 text-center p-6 bg-white rounded-2xl shadow-lg border border-[#e5e1db]/50">
              <p className="text-gray-600">
                <span className="font-semibold text-[#1a1a2e]">📝 Note:</span> Please inform our staff of any allergies or dietary restrictions. Menu items and prices are subject to change.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </motion.div>
  )
}

export default MenuPage
