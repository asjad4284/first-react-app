import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { deleteAccount, logOut } from '../../services/authService'
import { deleteUserFromFirestore } from '../../services/userService'
import { Button } from '../ui'

const ProfilePage = () => {
  const { user, userData } = useAuth()
  const navigate = useNavigate()
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleDeleteAccount = async () => {
    setError('')
    setLoading(true)

    try {
      // Check if user signed in with email/password
      const isEmailUser = user?.providerData[0]?.providerId === 'password'
      
      if (isEmailUser && !password) {
        setError('Please enter your password to confirm account deletion')
        setLoading(false)
        return
      }

      // Delete user data from Firestore first
      await deleteUserFromFirestore(user.uid)

      // Delete the Firebase Auth account
      const { error } = await deleteAccount(isEmailUser ? password : null)
      
      if (error) {
        setError(error)
        setLoading(false)
        return
      }

      // Redirect to home page
      navigate('/')
    } catch (err) {
      setError('An error occurred while deleting your account. Please try again.')
    }
    setLoading(false)
  }

  const handleSignOut = async () => {
    await logOut()
    navigate('/')
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#faf8f5] py-20 px-4"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1a1a2e] mb-2">
            My Profile
          </h1>
          <p className="text-gray-500">Manage your account settings</p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#e5e1db]/50 mb-6"
        >
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-[#e5e1db]">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#c4a77d] to-[#b8956a] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </div>
            )}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-[#1a1a2e]">
                {user?.displayName || 'User'}
              </h2>
              <p className="text-gray-500">{user?.email}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-[#c4a77d]/10 text-[#c4a77d] text-xs font-semibold rounded-full uppercase">
                {userData?.provider || user?.providerData[0]?.providerId || 'Email'} Account
              </span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[#e5e1db]/50">
              <span className="text-gray-500">Display Name</span>
              <span className="font-medium text-[#1a1a2e]">{user?.displayName || 'Not set'}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#e5e1db]/50">
              <span className="text-gray-500">Email</span>
              <span className="font-medium text-[#1a1a2e]">{user?.email}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#e5e1db]/50">
              <span className="text-gray-500">Account Created</span>
              <span className="font-medium text-[#1a1a2e]">{formatDate(userData?.createdAt)}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-500">User ID</span>
              <span className="font-medium text-[#1a1a2e] text-sm">{user?.uid?.slice(0, 12)}...</span>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#e5e1db]/50"
        >
          <h3 className="text-lg font-bold text-[#1a1a2e] mb-6">Account Actions</h3>
          
          <div className="space-y-4">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-between px-4 py-4 rounded-xl border border-[#e5e1db] hover:border-[#c4a77d] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="font-medium text-[#1a1a2e]">Sign Out</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="w-full flex items-center justify-between px-4 py-4 rounded-xl border border-red-200 hover:border-red-400 hover:bg-red-50 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="font-medium text-red-600">Delete Account</span>
              </div>
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowDeleteModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Delete Account</h3>
                <p className="text-gray-500 text-sm">
                  This action cannot be undone. All your data will be permanently deleted.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}

              {user?.providerData[0]?.providerId === 'password' && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                    Enter your password to confirm
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#e5e1db] rounded-xl focus:ring-2 focus:ring-red-200 focus:border-red-400 transition-all duration-300 outline-none"
                    placeholder="••••••••"
                  />
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => { setShowDeleteModal(false); setError(''); setPassword(''); }}
                  className="flex-1 px-4 py-3 rounded-xl border border-[#e5e1db] text-[#1a1a2e] font-semibold hover:bg-[#faf8f5] transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  disabled={loading}
                  className="flex-1 px-4 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? 'Deleting...' : 'Delete Account'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default ProfilePage
