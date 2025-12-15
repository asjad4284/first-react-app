import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionTitle, Card, Button } from '../ui'
import RevealOnScroll from '../utils/RevealOnScroll'

const ReservationPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', specialRequests: '' })
  const [step, setStep] = useState(1)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reservation submitted:', formData)
    setStep(3)
  }

  const availableTimes = ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM']
  const occasions = ['Birthday', 'Anniversary', 'Date Night', 'Business Dinner', 'Family Gathering', 'Special Celebration', 'Just Dining', 'Other']
  const features = [
    { icon: '🍷', title: 'Premium Wine Selection', desc: 'Curated wines from around the world' },
    { icon: '🎵', title: 'Live Music', desc: 'Enjoy live jazz on weekends' },
    { icon: '🌿', title: 'Garden Seating', desc: 'Beautiful outdoor terrace available' },
    { icon: '👨‍🍳', title: "Chef's Table", desc: 'Exclusive dining experience' },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070')` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/95 via-[#1a1a2e]/85 to-[#1a1a2e]/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block px-5 py-2.5 bg-[#c4a77d]/20 border border-[#c4a77d]/30 text-[#d4af37] text-sm font-semibold rounded-full mb-4">
            🗓️ Reserve Your Table
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-white mb-4">
            Book Your Experience
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-gray-300 max-w-2xl mx-auto">
            Secure your spot for an unforgettable dining experience at Delicious Bites
          </motion.p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${step >= s ? 'bg-gradient-to-r from-[#c4a77d] to-[#d4af37] text-white shadow-lg shadow-[#c4a77d]/30' : 'bg-white text-gray-400 border-2 border-[#e5e1db]'}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step > s ? '✓' : s}
                  </motion.div>
                  {s < 3 && <div className={`w-16 h-1 mx-2 rounded-full transition-all duration-300 ${step > s ? 'bg-gradient-to-r from-[#c4a77d] to-[#d4af37]' : 'bg-[#e5e1db]'}`}></div>}
                </div>
              ))}
            </div>
          </div>

          <motion.div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#e5e1db]/50" layout>
            <AnimatePresence mode="wait">
              {/* Step 1: Date & Time */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <SectionTitle subtitle="Step 1" title="Choose Date & Time" align="center" className="mb-8" />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Select Date *</label>
                      <input type="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Number of Guests *</label>
                      <select name="guests" value={formData.guests} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (<option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>))}
                        <option value="10+">Large Party (10+)</option>
                      </select>
                    </div>
                  </div>
                  {formData.date && (
                    <motion.div className="mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-4">Select Time *</label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                        {availableTimes.map((time) => (
                          <motion.button key={time} type="button" onClick={() => setFormData({ ...formData, time })}
                            className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${formData.time === time ? 'bg-gradient-to-r from-[#c4a77d] to-[#b8956a] text-white shadow-lg' : 'bg-[#faf8f5] text-[#1a1a2e] hover:bg-[#c4a77d]/10 border border-[#e5e1db]'}`}
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                          >{time}</motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  <div className="mt-8 flex justify-end">
                    <Button onClick={() => formData.date && formData.time && setStep(2)} variant="primary" size="lg" disabled={!formData.date || !formData.time}>Continue →</Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Personal Details */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <SectionTitle subtitle="Step 2" title="Your Details" align="center" className="mb-8" />
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Phone Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Occasion</label>
                        <select name="occasion" value={formData.occasion} onChange={handleChange} className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none">
                          <option value="">Select occasion (optional)</option>
                          {occasions.map((occ) => (<option key={occ} value={occ}>{occ}</option>))}
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Special Requests</label>
                      <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows="3" className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none resize-none" placeholder="Dietary restrictions, seating preferences..."></textarea>
                    </div>
                    {/* Summary */}
                    <div className="mt-8 p-6 bg-[#faf8f5] rounded-2xl border border-[#e5e1db]">
                      <h3 className="font-bold text-[#1a1a2e] mb-4">Reservation Summary</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><span className="text-gray-500">Date:</span><span className="ml-2 font-medium text-[#1a1a2e]">{formData.date && new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></div>
                        <div><span className="text-gray-500">Time:</span><span className="ml-2 font-medium text-[#1a1a2e]">{formData.time}</span></div>
                        <div><span className="text-gray-500">Guests:</span><span className="ml-2 font-medium text-[#1a1a2e]">{formData.guests}</span></div>
                      </div>
                    </div>
                    <div className="mt-8 flex justify-between">
                      <Button type="button" onClick={() => setStep(1)} variant="secondary" size="lg">← Back</Button>
                      <Button type="submit" variant="primary" size="lg">Confirm Reservation →</Button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <motion.div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg shadow-green-500/30" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}>
                    ✅
                  </motion.div>
                  <h2 className="text-3xl font-bold font-['Playfair_Display'] text-[#1a1a2e] mb-4">Reservation Confirmed!</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">Thank you, {formData.name}! Your table has been reserved. A confirmation email has been sent to {formData.email}.</p>
                  <div className="bg-[#faf8f5] rounded-2xl p-6 max-w-sm mx-auto mb-8 border border-[#e5e1db]">
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between"><span className="text-gray-500">Date:</span><span className="font-medium text-[#1a1a2e]">{new Date(formData.date).toLocaleDateString()}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Time:</span><span className="font-medium text-[#1a1a2e]">{formData.time}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Guests:</span><span className="font-medium text-[#1a1a2e]">{formData.guests}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Confirmation #:</span><span className="font-medium text-[#c4a77d]">DB-{Date.now().toString().slice(-6)}</span></div>
                    </div>
                  </div>
                  <Button to="/" variant="primary" size="lg">Back to Home</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Dining Experience" title="What Awaits You" description="Experience more than just a meal at Delicious Bites" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
                <motion.div className="bg-[#faf8f5] rounded-2xl p-6 text-center border border-[#e5e1db]/50" whileHover={{ y: -8, backgroundColor: '#fff' }}>
                  <motion.div className="w-16 h-16 bg-gradient-to-br from-[#c4a77d]/20 to-[#d4af37]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4" whileHover={{ scale: 1.1, rotate: 5 }}>
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#1a1a2e] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ReservationPage
