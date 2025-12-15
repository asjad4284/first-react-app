import { motion } from 'framer-motion'
import { SectionTitle } from '../../ui'
import RevealOnScroll from '../../utils/RevealOnScroll'

const AboutPreview = () => {
  const features = [
    {
      icon: '🥗',
      title: 'Fresh Ingredients',
      description: 'We source only the freshest, locally-grown ingredients for our dishes.',
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Our award-winning chefs bring years of culinary expertise to every plate.',
    },
    {
      icon: '🏆',
      title: 'Award Winning',
      description: 'Recognized with multiple culinary awards for excellence in dining.',
    },
    {
      icon: '💝',
      title: 'Made with Love',
      description: 'Every dish is crafted with passion and dedication to perfection.',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#faf8f5] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Section */}
          <RevealOnScroll direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div 
                    className="h-48 rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070"
                      alt="Chef preparing food"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="h-64 rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
                      alt="Fine dining"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div 
                    className="h-64 rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974"
                      alt="Restaurant interior"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="h-48 rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2080"
                      alt="Delicious food"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#c4a77d] to-[#d4af37] text-white px-8 py-5 rounded-2xl shadow-2xl shadow-[#c4a77d]/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm text-white/90">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>

          {/* Content Section */}
          <div>
            <RevealOnScroll direction="right">
              <SectionTitle
                subtitle="Our Story"
                title="A Legacy of Culinary Excellence"
                description="Since 2010, Delicious Bites has been serving unforgettable dining experiences. Our commitment to quality, innovation, and hospitality has made us a beloved destination for food enthusiasts."
                align="left"
                className="mb-10"
              />
            </RevealOnScroll>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
                  <motion.div
                    className="flex gap-4 p-5 rounded-xl bg-[#faf8f5] border border-[#e5e1db]/50 group cursor-pointer"
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: '#c4a77d15',
                      borderColor: '#c4a77d50'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-[#c4a77d]/20 to-[#d4af37]/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-[#1a1a2e] mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll direction="up" delay={0.4}>
              <motion.a
                href="/about"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-[#1a1a2e] text-white rounded-full font-semibold shadow-lg shadow-[#1a1a2e]/20 hover:bg-[#c4a77d] transition-colors duration-400"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Us
                <span>→</span>
              </motion.a>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
