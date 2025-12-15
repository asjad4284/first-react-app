import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RevealOnScroll from '../utils/RevealOnScroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Reservations', path: '/reservation' },
  ]

  const contactInfo = [
    { icon: '📍', text: '123 Gourmet Street, Food City, FC 12345' },
    { icon: '📞', text: '+1 (555) 123-4567' },
    { icon: '✉️', text: 'hello@deliciousbites.com' },
  ]

  const openingHours = [
    { day: 'Mon - Thu', time: '11:00 AM - 10:00 PM' },
    { day: 'Fri - Sat', time: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '12:00 PM - 9:00 PM' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
  ]

  return (
    <footer className="bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c4a77d]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <RevealOnScroll direction="up" delay={0}>
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c4a77d] to-[#d4af37] rounded-full flex items-center justify-center shadow-lg shadow-[#c4a77d]/20">
                  <span className="text-2xl">🍽️</span>
                </div>
                <span className="text-2xl font-bold font-['Playfair_Display']">
                  Delicious<span className="text-[#c4a77d]">Bites</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experience culinary excellence with every bite. Our passionate chefs craft memorable dishes using the finest ingredients, bringing joy to your table since 2010.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#c4a77d] hover:border-[#c4a77d] transition-all duration-300"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Quick Links */}
          <RevealOnScroll direction="up" delay={0.1}>
            <div>
              <h3 className="text-lg font-bold font-['Playfair_Display'] mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#c4a77d] to-[#d4af37]"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-[#c4a77d] transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Contact Info */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div>
              <h3 className="text-lg font-bold font-['Playfair_Display'] mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#c4a77d] to-[#d4af37]"></span>
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{info.icon}</span>
                    <span className="text-gray-400 text-sm">{info.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Opening Hours */}
          <RevealOnScroll direction="up" delay={0.3}>
            <div>
              <h3 className="text-lg font-bold font-['Playfair_Display'] mb-6 relative inline-block">
                Opening Hours
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#c4a77d] to-[#d4af37]"></span>
              </h3>
              <ul className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span className="text-gray-400">{schedule.day}</span>
                    <span className="text-[#d4af37] font-medium">{schedule.time}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/reservation"
                  className="mt-6 inline-block bg-gradient-to-r from-[#c4a77d] to-[#d4af37] text-[#1a1a2e] px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#c4a77d]/20 hover:shadow-xl hover:shadow-[#c4a77d]/30 transition-all duration-300"
                >
                  Reserve Now →
                </Link>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Delicious Bites. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#c4a77d] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#c4a77d] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-[#c4a77d] transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
