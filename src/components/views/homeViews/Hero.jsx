import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 3,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const floatingCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/95 via-[#1a1a2e]/85 to-[#1a1a2e]/75"></div>
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-[#c4a77d]/20 to-[#d4af37]/10 rounded-full blur-2xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-[#d4af37]/15 to-[#c4a77d]/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-20 h-20 bg-[#c4a77d]/10 rounded-full blur-xl"
        animate={{ 
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-5 py-2.5 bg-gradient-to-r from-[#c4a77d]/20 to-[#d4af37]/10 border border-[#c4a77d]/30 text-[#d4af37] text-sm font-semibold rounded-full mb-6 backdrop-blur-sm"
            >
              ✨ Welcome to Delicious Bites
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Playfair_Display'] text-white leading-[1.1] mb-6"
            >
              Experience the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4a77d] via-[#d4af37] to-[#c4a77d]">
                Art of Fine
              </span>{' '}
              Dining
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Indulge in a culinary journey where every dish tells a story. Fresh ingredients, 
              passionate chefs, and an unforgettable atmosphere await you.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button to="/menu" variant="gold" size="lg">
                Explore Our Menu
              </Button>
              <Button to="/reservation" variant="outline" size="lg">
                Book a Table
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10"
            >
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '50+', label: 'Master Chefs' },
                { value: '200+', label: 'Dishes Served' },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c4a77d] to-[#d4af37]">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <div className="hidden lg:block relative">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Main Image */}
              <motion.div 
                className="w-[420px] h-[520px] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10"
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
                  alt="Delicious Food"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 to-transparent"></div>
              </motion.div>
              
              {/* Floating Card 1 */}
              <motion.div 
                custom={0.8}
                variants={floatingCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute -bottom-6 -left-10 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-[#c4a77d]/10"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#c4a77d]/20 to-[#d4af37]/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a2e] text-lg">4.9 Rating</div>
                    <div className="text-sm text-gray-500">2000+ Reviews</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                custom={1}
                variants={floatingCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-[#c4a77d]/10"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#c4a77d]/20 to-[#d4af37]/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a2e] text-lg">Fresh Daily</div>
                    <div className="text-sm text-gray-500">Farm to Table</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative ring */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#c4a77d]/20 rounded-full"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#c4a77d]/10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-[#c4a77d]/50 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1.5 h-3 bg-gradient-to-b from-[#c4a77d] to-[#d4af37] rounded-full"
            animate={{ opacity: [1, 0.5, 1], scaleY: [1, 0.8, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
