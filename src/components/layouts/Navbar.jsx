import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              className="w-11 h-11 bg-gradient-to-br from-[#c4a77d] to-[#d4af37] rounded-full flex items-center justify-center shadow-lg shadow-[#c4a77d]/30"
              whileHover={{ rotate: 12, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-xl">🍽️</span>
            </motion.div>
            <span
              className={`text-2xl font-bold font-['Playfair_Display'] transition-colors duration-500 ${
                isScrolled ? 'text-[#1a1a2e]' : 'text-white'
              }`}
            >
              Delicious<span className="text-[#c4a77d]">Bites</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#c4a77d]'
                        : 'text-[#1a1a2e] hover:text-[#c4a77d]'
                      : isActive
                      ? 'text-[#d4af37]'
                      : 'text-white/90 hover:text-[#d4af37]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <motion.div
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/reservation"
                className="btn-primary text-sm uppercase tracking-wider"
              >
                Book a Table
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 9 : 0,
                }}
                className={`block h-0.5 w-full rounded-full transition-colors duration-300 ${
                  isScrolled ? 'bg-[#1a1a2e]' : 'bg-white'
                }`}
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  x: isMobileMenuOpen ? -20 : 0,
                }}
                className={`block h-0.5 w-full rounded-full transition-colors duration-300 ${
                  isScrolled ? 'bg-[#1a1a2e]' : 'bg-white'
                }`}
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -9 : 0,
                }}
                className={`block h-0.5 w-full rounded-full transition-colors duration-300 ${
                  isScrolled ? 'bg-[#1a1a2e]' : 'bg-white'
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden mt-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-2 border border-[#c4a77d]/10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block text-center py-3 text-sm font-semibold tracking-wider uppercase rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'text-[#c4a77d] bg-[#c4a77d]/10'
                            : 'text-[#1a1a2e] hover:text-[#c4a77d] hover:bg-[#c4a77d]/5'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  custom={navLinks.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="pt-2"
                >
                  <Link
                    to="/reservation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary block text-center text-sm uppercase tracking-wider"
                  >
                    Book a Table
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
