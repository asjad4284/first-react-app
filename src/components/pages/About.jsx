import { motion } from 'framer-motion'
import { SectionTitle, Card } from '../ui'
import RevealOnScroll from '../utils/RevealOnScroll'

const AboutPage = () => {
  const team = [
    { name: 'Chef Antonio Rossi', role: 'Executive Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977', bio: '20+ years of culinary experience across Michelin-starred restaurants in Europe.' },
    { name: 'Maria Santos', role: 'Pastry Chef', image: 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=1887', bio: 'Award-winning pastry artist specializing in French and Italian desserts.' },
    { name: 'James Chen', role: 'Sous Chef', image: 'https://images.unsplash.com/photo-1583394293214-28ez9ce3483?q=80&w=1780', bio: 'Fusion cuisine expert bringing Asian influences to classic Western dishes.' },
    { name: 'Sophie Martin', role: 'Restaurant Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961', bio: 'Hospitality veteran ensuring every guest receives exceptional service.' },
  ]

  const milestones = [
    { year: '2010', title: 'Grand Opening', description: 'Delicious Bites opened its doors to the community.' },
    { year: '2013', title: 'First Award', description: 'Received "Best New Restaurant" from Food Critics Association.' },
    { year: '2016', title: 'Expansion', description: 'Expanded to include private dining and event spaces.' },
    { year: '2019', title: 'Sustainability Award', description: 'Recognized for farm-to-table practices.' },
    { year: '2022', title: 'Michelin Recognition', description: 'Earned Michelin Plate distinction for quality.' },
    { year: '2024', title: '500K Guests', description: 'Celebrated serving our 500,000th guest.' },
  ]

  const values = [
    { icon: '🌿', title: 'Farm Fresh', description: 'We partner with local farms to bring you the freshest seasonal ingredients.' },
    { icon: '♻️', title: 'Sustainability', description: 'Committed to eco-friendly practices and reducing our environmental footprint.' },
    { icon: '❤️', title: 'Passion', description: 'Every dish is crafted with love and dedication to culinary excellence.' },
    { icon: '🤝', title: 'Community', description: 'Supporting local suppliers and giving back to our community.' },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/90"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block px-5 py-2.5 bg-[#c4a77d]/20 border border-[#c4a77d]/30 text-[#d4af37] text-sm font-semibold rounded-full mb-4">
            ✨ Our Story
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-white mb-6">
            Where Passion Meets <span className="text-[#d4af37]">Flavor</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-gray-300">
            Since 2010, we've been crafting memorable dining experiences that bring people together through the art of exceptional cuisine.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <div>
                <SectionTitle subtitle="Our Beginning" title="A Dream Born in the Kitchen" align="left" className="mb-8" />
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Delicious Bites was founded by Chef Antonio Rossi with a simple vision: to create a place where food becomes an experience, where every meal tells a story, and where guests feel like family.</p>
                  <p>What started as a small neighborhood restaurant has grown into one of the city's most beloved culinary destinations. Our commitment to quality, innovation, and hospitality has remained unchanged since day one.</p>
                  <p>We believe that great food brings people together. That's why we source the finest ingredients, train our staff to the highest standards, and constantly evolve our menu to surprise and delight our guests.</p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070" alt="Chef cooking" className="rounded-2xl shadow-xl h-64 object-cover" whileHover={{ scale: 1.03 }} />
                  <motion.img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974" alt="Restaurant" className="rounded-2xl shadow-xl h-64 object-cover mt-8" whileHover={{ scale: 1.03 }} />
                </div>
                <motion.div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#c4a77d] to-[#d4af37] text-white p-6 rounded-2xl shadow-xl" whileHover={{ scale: 1.05 }}>
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </motion.div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="What We Stand For" title="Our Core Values" description="The principles that guide everything we do at Delicious Bites" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {values.map((value, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
                <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#e5e1db]/50">
                  <motion.div className="w-16 h-16 bg-gradient-to-br from-[#c4a77d]/20 to-[#d4af37]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4" whileHover={{ scale: 1.1, rotate: 5 }}>
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#1a1a2e] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c4a77d]/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle subtitle="Our Journey" title="Milestones" description="Key moments that shaped who we are today" light={true} />
          <div className="mt-14 relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#c4a77d] to-[#d4af37]/30"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <RevealOnScroll key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div className="inline-block bg-white rounded-2xl p-6 shadow-xl" whileHover={{ scale: 1.02 }}>
                        <span className="text-[#c4a77d] font-bold">{milestone.year}</span>
                        <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#1a1a2e] mt-1">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{milestone.description}</p>
                      </motion.div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-gradient-to-r from-[#c4a77d] to-[#d4af37] rounded-full z-10 ring-4 ring-[#c4a77d]/30"></div>
                    <div className="flex-1"></div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="The People Behind the Magic" title="Meet Our Team" description="Passionate professionals dedicated to creating unforgettable dining experiences" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {team.map((member, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
                <motion.div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e5e1db]/50" whileHover={{ y: -10 }}>
                  <div className="relative h-72 overflow-hidden">
                    <motion.img src={member.image} alt={member.name} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#1a1a2e]">{member.name}</h3>
                    <p className="text-[#c4a77d] font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default AboutPage
