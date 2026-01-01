import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import { logOut } from '../../services/authService'

const Navbar = () => {
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Items', path: '/items' },
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

  const handleSignOut = async () => {
    await logOut()
    setIsUserMenuOpen(false)
    navigate('/')
  }

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isUserMenuOpen])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf8f5]/98 shadow-[0_2px_15px_rgba(0,0,0,0.08)] py-3'
          : 'bg-[#faf8f5]/85 backdrop-blur-md py-5'
      }`}
      style={{ willChange: 'background-color, padding' }}
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
                isScrolled ? 'text-[#1a1a2e]' : 'text-[#1a1a2e]'
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
                    isActive
                      ? 'text-[#c4a77d]'
                      : 'text-[#1a1a2e] hover:text-[#c4a77d]'
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

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="relative user-menu-container">
                <motion.button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#faf8f5] border border-[#e5e1db] hover:border-[#c4a77d] transition-all duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c4a77d] to-[#b8956a] flex items-center justify-center text-white text-sm font-semibold">
                      {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                    </div>
                  )}
                  <svg className={`w-4 h-4 text-[#1a1a2e] transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#e5e1db] overflow-hidden z-50"
                    >
                      <div className="p-4 border-b border-[#e5e1db]">
                        <p className="font-semibold text-[#1a1a2e] truncate">{user?.displayName || 'User'}</p>
                        <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                      </div>
                      <div className="p-2">
                        <Link
                          to="/profile"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#1a1a2e] hover:bg-[#faf8f5] transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          My Profile
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                  to="/signin"
                  className="text-sm font-semibold text-[#1a1a2e] hover:text-[#c4a77d] transition-colors uppercase tracking-wider"
                >
                  Sign In
                </Link>
              </motion.div>
            )}
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
                className={`block h-0.5 w-full rounded-full transition-colors duration-300 bg-[#1a1a2e]`}
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  x: isMobileMenuOpen ? -20 : 0,
                }}
                className={`block h-0.5 w-full rounded-full transition-colors duration-300 bg-[#1a1a2e]`}
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -9 : 0,
                }}
                className={`block h-0.5 w-full rounded-full transition-colors duration-300 bg-[#1a1a2e]`}
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

                {/* Mobile Auth Section */}
                <motion.div
                  custom={navLinks.length + 1}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="pt-2 border-t border-[#e5e1db] mt-4"
                >
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 px-3 py-2">
                        {user?.photoURL ? (
                          <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c4a77d] to-[#b8956a] flex items-center justify-center text-white text-sm font-semibold">
                            {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[#1a1a2e] truncate">{user?.displayName || 'User'}</p>
                          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        </div>
                      </div>
                      <Link
                        to="/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-center py-3 text-sm font-semibold tracking-wider uppercase rounded-xl text-[#1a1a2e] hover:text-[#c4a77d] hover:bg-[#c4a77d]/5 transition-all duration-300"
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={() => { handleSignOut(); setIsMobileMenuOpen(false); }}
                        className="w-full py-3 text-sm font-semibold tracking-wider uppercase rounded-xl text-red-600 hover:bg-red-50 transition-all duration-300"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/signin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-center py-3 text-sm font-semibold tracking-wider uppercase rounded-xl text-[#c4a77d] hover:bg-[#c4a77d]/10 transition-all duration-300"
                    >
                      Sign In
                    </Link>
                  )}
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
