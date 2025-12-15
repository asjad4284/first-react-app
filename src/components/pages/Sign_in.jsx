import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../ui'

const SignInPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(isLogin ? 'Login' : 'Register', formData)
    alert(isLogin ? 'Welcome back!' : 'Account created successfully!')
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="min-h-screen bg-[#faf8f5] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="text-3xl">🍽️</span>
            <span className="text-2xl font-bold font-['Playfair_Display'] text-[#1a1a2e]">Delicious<span className="text-[#c4a77d]">Bites</span></span>
          </Link>
          <p className="text-gray-500 mt-2 text-sm">Your culinary journey awaits</p>
        </motion.div>

        {/* Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 shadow-xl border border-[#e5e1db]/50">
          {/* Toggle */}
          <div className="flex bg-[#faf8f5] rounded-xl p-1 mb-8">
            {['Sign In', 'Register'].map((tab, i) => (
              <motion.button key={tab} onClick={() => setIsLogin(i === 0)} className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${(i === 0 ? isLogin : !isLogin) ? 'bg-gradient-to-r from-[#c4a77d] to-[#b8956a] text-white shadow-md' : 'text-gray-500 hover:text-[#1a1a2e]'}`} whileTap={{ scale: 0.98 }}>
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required={!isLogin} className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="John Doe" />
              </motion.div>
            )}
            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="••••••••" />
            </div>
            {!isLogin && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required={!isLogin} className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="••••••••" />
              </motion.div>
            )}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-[#e5e1db] text-[#c4a77d] focus:ring-[#c4a77d]/20" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-[#c4a77d] hover:text-[#b8956a] font-medium">Forgot password?</button>
              </div>
            )}
            <Button type="submit" variant="primary" size="lg" className="w-full">{isLogin ? 'Sign In' : 'Create Account'}</Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#e5e1db]"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-gray-400">or continue with</span></div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-3 gap-3">
            {[{ icon: '📱', name: 'Google' }, { icon: '🍎', name: 'Apple' }, { icon: '📘', name: 'Facebook' }].map((social) => (
              <motion.button key={social.name} type="button" className="flex items-center justify-center gap-2 py-3 px-4 bg-[#faf8f5] rounded-xl border border-[#e5e1db] hover:border-[#c4a77d] transition-all duration-300 text-sm font-medium text-[#1a1a2e]" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span>{social.icon}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center text-gray-500 text-sm mt-6">
          By continuing, you agree to our <a href="#" className="text-[#c4a77d] hover:underline">Terms of Service</a> and <a href="#" className="text-[#c4a77d] hover:underline">Privacy Policy</a>
        </motion.p>
      </div>
    </motion.div>
  )
}

export default SignInPage
