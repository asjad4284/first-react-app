import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { getAllItems, deleteItem } from '../../services/firestoreService'

const UserDashboard = () => {
  const { user, userData } = useAuth()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteLoading, setDeleteLoading] = useState(null)

  useEffect(() => {
    fetchUserItems()
  }, [user])

  const fetchUserItems = async () => {
    try {
      setLoading(true)
      // Fetch all items and filter by user
      const allItems = await getAllItems()
      // Filter to show only items created by this user
      const userItems = allItems.filter(item => item.createdBy === user?.uid)
      setItems(userItems)
    } catch (error) {
      console.error('Error fetching items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteItem = async (itemId) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return
    
    setDeleteLoading(itemId)
    try {
      await deleteItem(itemId)
      setItems(items.filter(item => item.id !== itemId))
    } catch (error) {
      console.error('Error deleting item:', error)
      alert('Failed to delete item')
    } finally {
      setDeleteLoading(null)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#c4a77d]"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#faf8f5] py-8 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1a1a2e]">
            My Dashboard
          </h1>
          <p className="text-gray-500 mt-2">Welcome back, {userData?.displayName || user?.displayName || user?.email}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full uppercase">
            {userData?.role || 'User'}
          </span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e1db]/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">My Items</p>
                <p className="text-3xl font-bold text-[#1a1a2e]">{items.length}</p>
              </div>
              <div className="w-12 h-12 bg-[#c4a77d]/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍽️</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e1db]/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Account Type</p>
                <p className="text-xl font-bold text-[#1a1a2e] capitalize">{userData?.provider || 'Email'}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e1db]/50 mb-8"
        >
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/create-item"
              className="flex items-center gap-4 p-4 bg-[#faf8f5] rounded-xl hover:bg-[#c4a77d]/10 transition-colors"
            >
              <span className="text-2xl">➕</span>
              <div>
                <p className="font-semibold text-[#1a1a2e]">Create New Item</p>
                <p className="text-sm text-gray-500">Add a menu item</p>
              </div>
            </Link>
            <Link
              to="/profile"
              className="flex items-center gap-4 p-4 bg-[#faf8f5] rounded-xl hover:bg-[#c4a77d]/10 transition-colors"
            >
              <span className="text-2xl">👤</span>
              <div>
                <p className="font-semibold text-[#1a1a2e]">My Profile</p>
                <p className="text-sm text-gray-500">View account settings</p>
              </div>
            </Link>
            <Link
              to="/items"
              className="flex items-center gap-4 p-4 bg-[#faf8f5] rounded-xl hover:bg-[#c4a77d]/10 transition-colors"
            >
              <span className="text-2xl">📋</span>
              <div>
                <p className="font-semibold text-[#1a1a2e]">Browse All Items</p>
                <p className="text-sm text-gray-500">View all menu items</p>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* My Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-[#e5e1db]/50 overflow-hidden"
        >
          <div className="p-6 border-b border-[#e5e1db]">
            <h2 className="text-xl font-bold text-[#1a1a2e]">My Items</h2>
            <p className="text-gray-500 text-sm">Items you have created</p>
          </div>

          {items.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#faf8f5]">
                  <tr>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Item</th>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Price</th>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t border-[#e5e1db]">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image || 'https://via.placeholder.com/50'}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-semibold text-[#1a1a2e]">{item.name}</p>
                            <p className="text-sm text-gray-500 truncate max-w-[200px]">{item.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#c4a77d] font-semibold">${item.price}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Link
                            to={`/item/${item.id}`}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                          >
                            View
                          </Link>
                          <Link
                            to={`/edit-item/${item.id}`}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            disabled={deleteLoading === item.id}
                            className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors disabled:opacity-50"
                          >
                            {deleteLoading === item.id ? '...' : 'Delete'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <span className="text-5xl mb-4 block">📝</span>
              <p className="text-gray-500 mb-4">You haven't created any items yet</p>
              <Link
                to="/create-item"
                className="inline-block px-6 py-2 bg-[#c4a77d] text-white rounded-xl font-semibold hover:bg-[#b8956a] transition-colors"
              >
                Create Your First Item
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default UserDashboard
