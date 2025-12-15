import { motion } from 'framer-motion'
import { SectionTitle, Card } from '../../ui'
import RevealOnScroll from '../../utils/RevealOnScroll'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Food Blogger',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887',
      rating: 5,
      text: "Absolutely phenomenal dining experience! The truffle risotto was out of this world. The ambiance, service, and food quality exceeded all my expectations. Can't wait to return!",
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Restaurant Critic',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887',
      rating: 5,
      text: 'A masterclass in culinary excellence. Every dish is a work of art, and the attention to detail is impeccable. Delicious Bites has earned its place among the finest restaurants.',
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Regular Customer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770',
      rating: 5,
      text: "My go-to restaurant for special occasions. The staff treats you like family, and the food consistently delivers. The chocolate lava cake is an absolute must-try!",
    },
  ]

  return (
    <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c4a77d]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px]"></div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white/50 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-60 h-60 border border-white/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Guests Say"
          description="Don't just take our word for it - hear from our valued guests about their dining experiences"
          light={true}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.id} direction="up" delay={index * 0.15}>
              <motion.div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white h-full"
                whileHover={{ 
                  y: -10, 
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  borderColor: 'rgba(196,167,125,0.3)'
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 text-7xl text-[#c4a77d]/20 font-serif leading-none">
                  "
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-[#d4af37] text-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10 text-[15px]">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                  <motion.div 
                    className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#c4a77d]/50"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-[#d4af37]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Trust Indicators */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="flex flex-wrap justify-center gap-12 mt-20 pt-12 border-t border-white/10">
            {[
              { value: '4.9', label: 'Average Rating' },
              { value: '2,500+', label: 'Happy Customers' },
              { value: '15+', label: 'Awards Won' },
              { value: '100%', label: 'Fresh Ingredients' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c4a77d] to-[#d4af37]">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Testimonials
