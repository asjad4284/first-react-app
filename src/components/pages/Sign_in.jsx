import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui'
import { signUpWithEmail, signInWithEmail, signInWithGoogle, resetPassword } from '../../services/authService'
import { createUser } from '../../services/userService'
import Navbar from '../layouts/Navbar'

const SignInPage = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isLogin) {
        // Sign In
        const { user, error } = await signInWithEmail(formData.email, formData.password)
        if (error) {
          setError(error)
          setLoading(false)
          return
        }
        navigate('/')
      } else {
        // Sign Up
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match')
          setLoading(false)
          return
        }
        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters')
          setLoading(false)
          return
        }

        const { user, error } = await signUpWithEmail(formData.email, formData.password, formData.name)
        if (error) {
          setError(error)
          setLoading(false)
          return
        }

        // Store user data in Firestore (don't fail signup if this fails)
        try {
          await createUser(user.uid, {
            email: user.email,
            displayName: formData.name,
            provider: 'email',
          })
        } catch (firestoreError) {
          console.error('Firestore error (non-blocking):', firestoreError)
        }

        navigate('/')
      }
    } catch (err) {
      console.error('Auth error:', err)
      setError(err.message || 'An unexpected error occurred. Please try again.')
    }
    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    setError('')
    setLoading(true)

    try {
      const { user, error } = await signInWithGoogle()
      if (error) {
        setError(error)
        setLoading(false)
        return
      }

      // Store user data in Firestore (don't fail signin if this fails)
      try {
        await createUser(user.uid, {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          provider: 'google',
        })
      } catch (firestoreError) {
        console.error('Firestore error (non-blocking):', firestoreError)
      }

      navigate('/')
    } catch (err) {
      console.error('Google auth error:', err)
      setError(err.message || 'An unexpected error occurred. Please try again.')
    }
    setLoading(false)
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    if (!formData.email) {
      setError('Please enter your email address')
      return
    }

    setLoading(true)
    const { error, message } = await resetPassword(formData.email)
    
    if (error) {
      setError(error)
    } else {
      setSuccessMessage(message)
      setTimeout(() => {
        setShowForgotPassword(false)
        setSuccessMessage('')
      }, 3000)
    }
    setLoading(false)
  }

  return (
    <>
      <Navbar />
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
          
          {/* Forgot Password Modal */}
          {showForgotPassword ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Reset Password</h3>
              <p className="text-gray-500 text-sm mb-6">Enter your email address and we'll send you a link to reset your password.</p>
              
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}
              
              {successMessage && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-600 text-sm">
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleForgotPassword} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="you@example.com" />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </Button>
                <button type="button" onClick={() => { setShowForgotPassword(false); setError(''); }} className="w-full text-center text-[#c4a77d] hover:text-[#b8956a] font-medium text-sm">
                  Back to Sign In
                </button>
              </form>
            </motion.div>
          ) : (
            <>
              {/* Toggle */}
              <div className="flex bg-[#faf8f5] rounded-xl p-1 mb-8">
                {['Sign In', 'Register'].map((tab, i) => (
                  <motion.button key={tab} onClick={() => { setIsLogin(i === 0); setError(''); }} className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${(i === 0 ? isLogin : !isLogin) ? 'bg-gradient-to-r from-[#c4a77d] to-[#b8956a] text-white shadow-md' : 'text-gray-500 hover:text-[#1a1a2e]'}`} whileTap={{ scale: 0.98 }} disabled={loading}>
                    {tab}
                  </motion.button>
                ))}
              </div>

              {/* Error Message */}
              {error && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                    <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required={!isLogin} className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="John Doe" disabled={loading} />
                  </motion.div>
                )}
                <div>
                  <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="you@example.com" disabled={loading} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="••••••••" disabled={loading} />
                </div>
                {!isLogin && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required={!isLogin} className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-[#c4a77d]/20 focus:border-[#c4a77d] transition-all duration-300 outline-none" placeholder="••••••••" disabled={loading} />
                  </motion.div>
                )}
                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-[#e5e1db] text-[#c4a77d] focus:ring-[#c4a77d]/20" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <button type="button" onClick={() => { setShowForgotPassword(true); setError(''); }} className="text-[#c4a77d] hover:text-[#b8956a] font-medium">Forgot password?</button>
                  </div>
                )}
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {isLogin ? 'Signing In...' : 'Creating Account...'}
                    </span>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#e5e1db]"></div></div>
                <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-gray-400">or continue with</span></div>
              </div>

              {/* Google Sign In */}
              <motion.button 
                type="button" 
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#faf8f5] rounded-xl border border-[#e5e1db] hover:border-[#c4a77d] transition-all duration-300 text-sm font-medium text-[#1a1a2e] disabled:opacity-50 disabled:cursor-not-allowed" 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </motion.button>
            </>
          )}
        </motion.div>

        {/* Footer */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center text-gray-500 text-sm mt-6">
          By continuing, you agree to our <a href="#" className="text-[#c4a77d] hover:underline">Terms of Service</a> and <a href="#" className="text-[#c4a77d] hover:underline">Privacy Policy</a>
        </motion.p>
      </div>
    </motion.div>
    </>
  )
}

export default SignInPage
