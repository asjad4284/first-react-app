import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle, Card, Button } from '../ui'
import RevealOnScroll from '../utils/RevealOnScroll'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: '📍', title: 'Visit Us', details: ['123 Gourmet Street', 'Food City, FC 12345', 'United States'] },
    { icon: '📞', title: 'Call Us', details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Sun: 10AM - 10PM'] },
    { icon: '✉️', title: 'Email Us', details: ['hello@deliciousbites.com', 'reservations@deliciousbites.com', 'careers@deliciousbites.com'] },
    { icon: '⏰', title: 'Opening Hours', details: ['Mon-Thu: 11AM - 10PM', 'Fri-Sat: 11AM - 11PM', 'Sunday: 12PM - 9PM'] },
  ]

  const faqItems = [
    { question: 'Do you accept walk-ins?', answer: 'Yes, we welcome walk-ins! However, we recommend making a reservation for dinner service, especially on weekends.' },
    { question: 'Is there parking available?', answer: 'We offer complimentary valet parking for dinner guests. Street parking and nearby public garages are also available.' },
    { question: 'Do you accommodate dietary restrictions?', answer: 'Absolutely! Our kitchen can accommodate vegetarian, vegan, gluten-free, and other dietary requirements.' },
    { question: 'Can I host a private event?', answer: 'Yes! We have a beautiful private dining room that can accommodate up to 40 guests.' },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/90"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block px-5 py-2.5 bg-[#c4a77d]/20 border border-[#c4a77d]/30 text-[#d4af37] text-sm font-semibold rounded-full mb-4">
            📞 Get in Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-white mb-4">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions, feedback, or to make a reservation.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-20">
            {contactInfo.map((info, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
                <motion.div 
                  className="bg-white rounded-2xl p-6 text-center shadow-xl border border-[#e5e1db]/50 h-full group cursor-pointer"
                  whileHover={{ y: -8, backgroundColor: '#c4a77d', borderColor: '#c4a77d' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div className="w-14 h-14 bg-[#c4a77d]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 transition-colors duration-300" whileHover={{ scale: 1.1 }}>
                    {info.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#1a1a2e] group-hover:text-white mb-3 transition-colors duration-300">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 group-hover:text-white/90 text-sm transition-colors duration-300">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <RevealOnScroll direction="left">
              <div>
                <SectionTitle subtitle="Send a Message" title="We'd Love to Hear From You" align="left" className="mb-8" />
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Your Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Subject *</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none">
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="catering">Catering Services</option>
                        <option value="events">Private Events</option>
                        <option value="careers">Careers</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Your Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">Send Message →</Button>
                </form>
              </div>
            </RevealOnScroll>

            {/* Map */}
            <RevealOnScroll direction="right">
              <div>
                <SectionTitle subtitle="Find Us" title="Our Location" align="left" className="mb-8" />
                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border border-[#e5e1db]/50">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1586000000000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Restaurant Location"></iframe>
                </div>
                <div className="mt-6 p-4 bg-[#faf8f5] rounded-xl border border-[#e5e1db]/50">
                  <p className="text-sm text-gray-600"><span className="font-semibold text-[#1a1a2e]">Directions:</span> Located in the heart of downtown, just 2 blocks from Central Station. Valet parking available.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="FAQ" title="Frequently Asked Questions" description="Find answers to common questions about our restaurant" />
          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
                <motion.div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e1db]/50" whileHover={{ scale: 1.01 }}>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 flex items-start gap-3">
                    <span className="text-[#c4a77d]">Q:</span>{item.question}
                  </h3>
                  <p className="text-gray-600 pl-7"><span className="text-[#c4a77d] font-semibold">A:</span> {item.answer}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ContactPage
