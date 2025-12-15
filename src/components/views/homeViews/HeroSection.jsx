import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../../ui'

const HeroSection = () => {
  const floatingImages = [
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981', alt: 'Pizza', position: 'top-20 left-10', size: 'w-32 h-32' },
    { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980', alt: 'Pancakes', position: 'top-32 right-16', size: 'w-28 h-28' },
    { src: 'https://images.unsplash.com/photo-1482049016gy7-7919f8fc1e6b?q=80&w=1910', alt: 'Food', position: 'bottom-32 left-20', size: 'w-24 h-24' },
    { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887', alt: 'Salad', position: 'bottom-20 right-24', size: 'w-36 h-36' },
  ]

  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '500K+', label: 'Happy Customers' },
    { value: '50+', label: 'Menu Items' },
    { value: '4.9', label: 'Rating' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-[#252540]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c4a77d]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a77d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Floating Food Images */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {floatingImages.map((img, index) => (
          <motion.div key={index} className={`absolute ${img.position} ${img.size} rounded-full overflow-hidden shadow-2xl border-4 border-white/10`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1, y: [0, -15, 0] }}
            transition={{ delay: 0.5 + index * 0.2, duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c4a77d]/20 border border-[#c4a77d]/30 text-[#d4af37] text-sm font-semibold rounded-full mb-6">
            <span className="animate-pulse">✨</span> Welcome to Delicious Bites
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] text-white leading-tight mb-6">
            Experience Culinary <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4a77d] to-[#d4af37]" initial={{ backgroundPosition: '0%' }} animate={{ backgroundPosition: '100%' }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}>Excellence</motion.span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl text-gray-300 mb-8 leading-relaxed">
            Indulge in a world of exquisite flavors, where every dish tells a story of passion, tradition, and culinary artistry. Your unforgettable dining journey begins here.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-12">
            <Button to="/reservation" variant="primary" size="lg">Book a Table</Button>
            <Button to="/menu" variant="outline" size="lg">Explore Menu</Button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {stats.map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#d4af37] font-['Playfair_Display']">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center text-white/50 cursor-pointer hover:text-white/80 transition-colors">
          <span className="text-xs mb-2">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
