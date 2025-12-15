import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import RevealOnScroll from '../../utils/RevealOnScroll'

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#c4a77d]/95 via-[#b8956a]/90 to-[#c4a77d]/95"></div>
        <div className="absolute inset-0 bg-[#1a1a2e]/20"></div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll direction="up">
          <motion.span 
            className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6 border border-white/30"
            whileHover={{ scale: 1.05 }}
          >
            🍽️ Reserve Your Experience
          </motion.span>
        </RevealOnScroll>
        
        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-white mb-6 leading-tight">
            Ready for an Unforgettable <br className="hidden sm:block" />Dining Experience?
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll direction="up" delay={0.2}>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your table today and let us take you on a culinary journey you'll never forget. 
            Special occasions deserve special moments.
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/reservation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a1a2e] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-400"
              >
                Book a Table Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#1a1a2e] transition-all duration-400"
              >
                Contact Us →
              </Link>
            </motion.div>
          </div>
        </RevealOnScroll>

        {/* Contact Info */}
        <RevealOnScroll direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-white/20">
            {[
              { icon: '📞', text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
              { icon: '✉️', text: 'hello@deliciousbites.com', href: 'mailto:hello@deliciousbites.com' },
              { icon: '📍', text: '123 Gourmet Street', href: '#' },
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.href} 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default CallToAction
